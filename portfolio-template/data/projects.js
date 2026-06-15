// ── Your projects ───────────────────────────────────────────
// Each object is one project. Edit through admin.html, or by hand here.
// Fields:
//   id        unique slug used in the URL (#project/<id>) and image folder name
//   category  'engineering' (default) or 'arts'  → groups them on the Projects page
//   featured  true to show in the home "Featured projects" grid (first 6)
//   hidden    true to hide a project from all listings (still reachable by direct link)
//   inProgress true to show an "In Progress" badge
//   year, eyebrow, title, summary   text shown on the card / detail header
//   tags      array of short strings shown as pills
//   stats     up to 4 { v: "value", l: "label" } boxes on the detail page
//   thumb     card / hero image, e.g. "images/<id>/photo.jpg" (leave "" for text-only)
//   media     gallery items: { type:'image', src:'images/<id>/x.jpg' }
//                          or { type:'embed', src:'https://youtu.be/VIDEO_ID' }
//                          or { type:'section-heading', label:'…' }
//             images can take span: 2 or span: 'full' to size them in the grid
//   body      full HTML write-up (use <p> <h5> <ul> <li> <strong>)
window.PROJECTS = [
  {
    id: "example-project",
    featured: true,
    year: "2025",
    eyebrow: "2025 · Example",
    title: "Example Project",
    summary: "A one or two sentence summary that appears on the project card.",
    tags: ["Tag one", "Tag two", "Tag three"],
    stats: [
      { v: "100%", l: "A headline number" },
      { v: "#1", l: "Another stat" }
    ],
    thumb: "images/example-project/placeholder.svg",
    media: [
      { type: "image", src: "images/example-project/placeholder.svg" }
    ],
    body: `
      <p>This is the full write-up for the project, shown on its detail page. You can use basic HTML here.</p>
      <h5>A section heading</h5>
      <ul>
        <li>A bullet point describing what you did</li>
        <li>Another point worth mentioning</li>
      </ul>
    `
  },
  {
    id: "example-arts",
    category: "arts",
    featured: false,
    year: "2024",
    eyebrow: "2024 · Making",
    title: "Example Arts Project",
    summary: "Projects with category 'arts' appear under the 'Arts + Making' heading on the Projects page.",
    tags: ["Woodwork", "Design"],
    stats: [],
    thumb: "",
    media: [],
    body: "<p>Another example. Leave the thumbnail empty and the card shows just the text.</p>"
  }
];
