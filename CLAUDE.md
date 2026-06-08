# Luke Tan — Engineering Portfolio
## Claude Code Handoff

This is the source of truth for building and editing Luke's engineering portfolio website.

---

## Project overview

A single-page application (SPA) with JS-based routing. No framework, no build step — plain HTML/CSS/JS deployable directly to GitHub Pages or Netlify by dragging the `dist/` folder.

**Pages:** Home · Projects · Project detail (dynamic) · About

**Design language:** Clean minimal, white/light, confident typography. No gradients, no drop shadows. Generous whitespace. Mobile-responsive.

---

## File structure

```
luke-portfolio/
├── CLAUDE.md          ← you are here
├── index.html         ← single entry point, all JS routing lives here
├── style.css          ← all styles
├── data/
│   └── projects.js    ← EDIT THIS to add/update projects (exported as window.PROJECTS)
├── assets/
│   └── cv.pdf         ← drop resume PDF here
└── images/            ← project images go here, referenced from projects.js
    └── placeholder.txt
```

---

## How to add or edit a project

**All project content lives in `data/projects.js`.** Each project is an object in the `window.PROJECTS` array. Edit this file only — no touching the HTML or routing logic.

### Project object schema

```js
{
  id: 'unique-kebab-id',          // used in URL hash e.g. #project/sabertooth
  eyebrow: '2025 · Nova Rover',   // small label above title on detail page
  title: 'Full Project Title',
  tags: ['Tag 1', 'Tag 2'],       // shown as pills on card and detail page
  featured: true,                 // true = appears in featured grid on home page
  year: '2025',                   // shown on project card
  summary: 'One or two sentence description for the project card.',
  stats: [
    { v: '88/100', l: 'Science task score' },  // up to 4 stat boxes on detail page
  ],
  body: `
    <p>Full HTML description goes here. Use <p>, <ul>, <li>, <h5> tags.</p>
    <h5>Section heading</h5>
    <ul>
      <li>Bullet point</li>
    </ul>
  `,
  image: 'images/sabertooth.jpg', // optional — shown as hero image on detail page
  videoUrl: 'https://youtube.com/...' // optional — shown as embedded video on detail page
}
```

### Featured projects

Set `featured: true` on any project to show it in the 2×2 featured grid on the home page. **Only the first 4 featured projects will show.** Order in the array controls order on the page.

---

## Current projects (as of June 2026)

| id | Title | Featured | Year |
|----|-------|----------|------|
| `urc2026` | URC 2026 Science Payload | ✅ | 2026 |
| `arch2026` | ARCh 2026 Science Payload | ✅ | 2026 |
| `sabertooth` | Nova Rover — Sabertooth | ✅ | 2025 |
| `sweeper` | Nova Rover — Sweeper | | 2025 |
| `gimbal` | Nova Rover — Gimbal Cam | | 2025 |
| `prosthetic` | Prosthetic Dog Leg | | 2024 |
| `warman` | Warman Competition Robot | | 2024 |
| `motorbike` | Self-Balancing Motorbike | ✅ | 2022 |
| `bridge` | 3D Printed Bridge | | 2023 |
| `ewb` | EWB Specimen Tank | | 2023 |
| `fabrication` | Fabrication Projects | | 2019–2025 |
| `older` | Early RC Projects | | 2017–2020 |

---

## Skills section (home page)

Edit the `SKILLS` array in `index.html` (clearly marked with a comment). Each skill:

```js
{ label: 'Embedded systems', pct: 90 }
```

`pct` is 0–100, controls the bar width.

---

## About page

Edit the About page content directly in `index.html` in the `<!-- ABOUT CONTENT -->` section. It's plain HTML — just update the paragraphs and education/experience items.

---

## Navigation

Routing is hash-based:
- `#home` → home page
- `#projects` → all projects grid
- `#project/sabertooth` → detail page for project with id `sabertooth`
- `#about` → about page

To link to a specific project from anywhere: `href="#project/urc2026"`

---

## Adding images

1. Drop image files into `images/`
2. Reference them in `projects.js` as `image: 'images/filename.jpg'`
3. They'll appear as a hero image at the top of the project detail page

Recommended: 1200×800px or wider, JPEG at 80% quality.

---

## Adding videos

Set `videoUrl` in the project object to a YouTube or Vimeo embed URL:

```js
videoUrl: 'https://www.youtube.com/embed/VIDEO_ID'
```

It renders as a responsive iframe on the detail page.

---

## Deployment

### GitHub Pages (free)
1. Push the folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch / root
3. Site live at `https://yourusername.github.io/repo-name`

### Netlify (free, easier)
1. Drag the folder into netlify.com/drop
2. Done — get a live URL instantly
3. For a custom domain, connect in Netlify settings

---

## CV / Resume

Drop your PDF at `assets/cv.pdf`. The download button on the About page already points there. If you want a different filename, update the `href` in the `<!-- RESUME BUTTON -->` comment in `index.html`.

---

## Common tasks for Claude Code

> Tell Claude Code:

- **"Add a new project"** → give it the project details, it edits `data/projects.js`
- **"Update the about page"** → describe changes, it edits the about section in `index.html`
- **"Make X project featured"** → it sets `featured: true` in `projects.js`
- **"Change the colour accent"** → it edits `--accent` in `style.css`
- **"Add an image to the sabertooth project"** → drop image in `images/`, tell Claude the filename
- **"Deploy to GitHub Pages"** → Claude Code can run the git commands for you
