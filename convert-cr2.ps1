# convert-cr2.ps1 - extracts embedded JPEG preview from CR2 raw files
# No extra software needed. Run from Portfolio folder.

$imageDir = "C:\Users\61408\Desktop\Portfolio\images"
$cr2Files = Get-ChildItem -Path $imageDir -Recurse -Include "*.CR2","*.cr2"

if ($cr2Files.Count -eq 0) {
    Write-Host "No CR2 files found." -ForegroundColor Yellow
    exit
}

Write-Host "Found $($cr2Files.Count) CR2 files. Extracting embedded JPEGs..." -ForegroundColor Cyan

$ok = 0
$fail = 0

foreach ($f in $cr2Files) {
    $jpgPath = [IO.Path]::ChangeExtension($f.FullName, ".jpg")

    if (Test-Path $jpgPath) {
        Write-Host "  SKIP: $($f.Name) (jpg already exists)" -ForegroundColor Gray
        continue
    }

    try {
        $bytes = [IO.File]::ReadAllBytes($f.FullName)

        # Find the largest JPEG embedded in the CR2 (SOI = FF D8, EOI = FF D9)
        $bestStart = -1
        $bestLen   = 0

        for ($i = 0; $i -lt $bytes.Length - 3; $i++) {
            if ($bytes[$i] -eq 0xFF -and $bytes[$i+1] -eq 0xD8 -and $bytes[$i+2] -eq 0xFF) {
                for ($j = $i + 4; $j -lt $bytes.Length - 1; $j++) {
                    if ($bytes[$j] -eq 0xFF -and $bytes[$j+1] -eq 0xD9) {
                        $len = $j + 2 - $i
                        if ($len -gt $bestLen) {
                            $bestLen   = $len
                            $bestStart = $i
                        }
                        break
                    }
                }
            }
        }

        if ($bestStart -eq -1) {
            Write-Host "  FAIL: $($f.Name) - no JPEG found inside" -ForegroundColor Red
            $fail++
            continue
        }

        $jpegBytes = $bytes[$bestStart..($bestStart + $bestLen - 1)]
        [IO.File]::WriteAllBytes($jpgPath, $jpegBytes)
        Write-Host "  OK: $($f.Name) -> $([IO.Path]::GetFileName($jpgPath))" -ForegroundColor Green
        $ok++

    } catch {
        Write-Host "  FAIL: $($f.Name) - $($_.Exception.Message)" -ForegroundColor Red
        $fail++
    }
}

Write-Host ""
Write-Host "Done: $ok converted, $fail failed." -ForegroundColor Cyan
