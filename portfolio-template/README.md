# Portfolio Template

A lightweight personal portfolio website. No framework, no build step, no
server. It is plain HTML, CSS and JavaScript, so you can open it locally and
deploy it by dragging a folder onto a static host.

It comes with:

- A single-page site with Home, Projects, a per-project detail page, a CV page, and About.
- An optional **interactive flowchart** feature for walking through a process step by step.
- A built-in **admin panel** (`admin.html`) that lets you edit all your content and images in the browser and save it straight back to these files, no code required.

---

## Quick start

1. **Open `index.html`** in your browser to see the site. It works straight away with placeholder content.
2. **Make it yours.** Either:
   - Open **`admin.html`** in Chrome or Edge, choose this folder, and edit everything visually (recommended), or
   - Edit the files in `data/` and `index.html` by hand (see below).
3. **Deploy** when you are happy (see *Deploying*).

---

## Folder structure

```
portfolio-template/
├── index.html          The whole website (layout + all the page logic)
├── admin.html          The in-browser editor / CMS
├── style.css           All styling
├── data/
│   ├── projects.js      Your projects            (window.PROJECTS)
│   ├── site.js          Profile photo, hero image, gallery order (window.SITE)
│   ├── resume.js        Your CV content          (window.RESUME)
│   ├── flowcharts.js    Optional flowchart content (window.FLOWCHARTS)
│   └── flow-icons.js    Icon library for flowcharts (do not need to edit)
├── images/
│   ├── <project-id>/    One folder per project, named after its id
│   ├── profile/         Your profile / CV photos
│   ├── hero/            Optional home hero background images
│   └── about/           Optional extra photos for the About page
└── assets/
    └── cv.pdf           (Optional) a PDF of your CV for the download button
```

---

## Editing with the admin panel (easiest)

`admin.html` uses the browser's File System Access API to read and write the
files in this folder. It works in **Chrome and Edge** (not Firefox/Safari).

1. Open `admin.html`.
2. Click **Choose folder** and select this `portfolio-template` folder. Grant read & write permission.
3. Use the sidebar to edit:
   - **Cover Page** – which projects are featured, and the home hero background.
   - **Resume / CV** – everything on the CV page.
   - **Profile Photo** – your photo for the site and CV.
   - **Payload Flowchart** – the optional step-by-step flowchart (rename this in the code if you like).
   - **Image Gallery** – pick and drag-order the images shown first on the home page.
   - **Projects** (list) – add, edit, reorder, and delete projects, set thumbnails, and build each project's gallery.
4. Click **Save**. Your changes are written back into the `data/` files.

To add images: drop image files into the matching folder under `images/`
(e.g. `images/my-project/`), then click **↻ Refresh** in the admin and they
appear ready to use.

---

## Editing by hand

Everything is in the `data/` files and is heavily commented.

- **Projects** → `data/projects.js`. Copy an existing object in the
  `window.PROJECTS` array and change the fields. The `id` must be unique and is
  used both in the URL and as the image folder name (`images/<id>/`).
- **CV** → `data/resume.js`.
- **Skills, the home tagline, the About text, and the experience timeline** →
  these live directly in `index.html` (look for the `SKILLS`, `ABOUT`, and the
  "About content" section near the top of the page and the bottom script).
- **Site photo / hero image / gallery order** → `data/site.js`.

---

## The interactive flowchart (optional)

Any project can have a flowchart button on its detail page that opens a
full-screen, step-by-step walkthrough. To enable it, add an entry in
`data/flowcharts.js` keyed by that project's `id` (there is a commented
example in the file), or build it visually in the admin under
**Payload Flowchart**. Stage icons are chosen from the set in
`data/flow-icons.js`.

If you do not use it, leave `window.FLOWCHARTS = {};` and no button appears.

---

## Deploying

This is a static site, so any static host works.

- **Netlify** – drag this folder onto [netlify.com/drop](https://app.netlify.com/drop) for an instant URL.
- **GitHub Pages** – push the folder to a repo, then Settings → Pages → deploy from the branch root.
- **Any web host** – upload the folder.

Note: the **admin panel only works locally** (it needs file write access on
your machine). Edit and save locally, then deploy the updated files.

---

## Good to know

- **Cache versions:** script/style tags use `?v=1`. If you edit a file and a
  deployed change does not show, bump that number (e.g. `?v=2`) to bust the cache.
- **Videos:** any YouTube link works in a project gallery (watch, youtu.be,
  shorts, or embed URLs) — it is turned into a player automatically.
- **Hiding a project:** set `hidden: true` on it to keep it off all listings
  while still keeping the data.
- **Recommended image size:** roughly 1200×800 or larger, JPEG at ~80% quality.
