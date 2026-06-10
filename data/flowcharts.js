window.FLOWCHARTS = {
  "urc2026": {
    "ctaTitle": "How the payload runs, end to end",
    "ctaSub": "Five stages take a sample from 10&nbsp;cm underground to a life-detection verdict. Step through the sequence and see how each subsystem works.",
    "ctaButton": "Open payload flowchart &nbsp;&#8594;",
    "title": "URC 2026 Payload — Sample-to-Verdict Sequence",
    "subtitle": "Click any stage, or use the ← → keys, to step through how each subsystem works.",
    "stages": [
      {
        "iconKey": "drill",
        "title": "Drilling + Caching",
        "short": "Dual-auger regolith extraction below 10&nbsp;cm",
        "detail": "\n          <p>The sequence starts underground. A <strong>dual-auger regolith extraction system</strong> drills past 10&nbsp;cm — the depth where biosignatures are shielded from surface UV and radiation.</p>\n          <ul>\n            <li>Each auger targets an <strong>independent site</strong> so the two samples can't cross-contaminate</li>\n            <li>Sheaths keep the borehole from collapsing as the auger withdraws, carrying material up cleanly</li>\n            <li>Regolith is funnelled down a chute into a sealed <strong>cache</strong>, upgraded from the 2025 Sabertooth design for larger, cleaner samples</li>\n          </ul>\n          <p>Judges called the resulting samples &ldquo;some of the most impressive they had seen.&rdquo;</p>",
        "media": [
          {
            "type": "embed",
            "src": "https://www.youtube.com/embed/aVBOUxibsMM"
          },
          {
            "type": "image",
            "src": "images/urc2026/_DSC0233.JPG"
          }
        ]
      },
      {
        "iconKey": "pump",
        "title": "Pumping Samples",
        "short": "Buffer mixing and peristaltic transfer into the rover",
        "detail": "\n          <p>The cached regolith is turned into a liquid the instruments can read.</p>\n          <ul>\n            <li><strong>Buffer fluid</strong> is metered into the cache and mixed with the regolith to suspend any soluble biosignatures</li>\n            <li><strong>Peristaltic pumps</strong> draw the slurry up into the rover's fluidic system — only the tubing touches the sample, so there is <strong>no carry-over</strong> between runs</li>\n            <li>The fluid is then routed in turn to each analysis instrument downstream</li>\n          </ul>",
        "media": []
      },
      {
        "iconKey": "strip",
        "title": "Litmus Strip Dipper",
        "short": "Multi-parameter habitability screen",
        "detail": "\n          <p>The first read is a fast habitability screen using <strong>multi-parameter test strips</strong>.</p>\n          <ul>\n            <li>A motorised <strong>dipper</strong> lowers a fresh strip into the sample fluid for a fixed dwell, then raises it in front of a camera</li>\n            <li>Colour change is read against a reference to quantify <strong>calcium, hardness, ammonia, nitrite, nitrate and pH</strong></li>\n            <li>This builds the habitability picture — whether the site chemistry <em>could</em> support life — before the slower biosignature assays run</li>\n          </ul>",
        "media": []
      },
      {
        "iconKey": "visspec",
        "title": "Visible Spectrometer",
        "short": "Dual-ring, 35-cuvette biosignature assay",
        "detail": "\n          <p>The core life-detection instrument is a custom <strong>dual-ring visible spectrometer</strong>.</p>\n          <ul>\n            <li><strong>35 cuvettes across two rotating rings</strong> — a single ring couldn't fit the cuvette count in the rover's envelope, so a second ring was added</li>\n            <li>Four reagents are run <strong>in triplicate</strong> for statistical confidence:</li>\n            <li><strong>Molisch's</strong> &rarr; carbohydrates</li>\n            <li><strong>NADH / NADPH fluorescence</strong> &rarr; metabolic activity</li>\n            <li><strong>Nile Red</strong> &rarr; lipids</li>\n            <li><strong>Ninhydrin</strong> &rarr; amino acids</li>\n            <li>Each cuvette rotates into the optical path where absorbance/fluorescence is measured against controls</li>\n          </ul>",
        "media": []
      },
      {
        "iconKey": "electro",
        "title": "Electrochemical Cell",
        "short": "Redox activity as an independent life signal",
        "detail": "\n          <p>The final stage looks for the chemical signature of an active system: a custom <strong>electrochemical cell</strong>.</p>\n          <ul>\n            <li>Electrodes measure <strong>redox activity</strong> in the sample fluid — electron transfer is a hallmark of metabolism</li>\n            <li>Run alongside the spectrometer, it adds an <strong>independent line of evidence</strong> for life detection</li>\n            <li>With the NIR probe and microscope, it rounds out a multi-instrument verdict rather than trusting any single test</li>\n          </ul>",
        "media": []
      }
    ]
  }
};
