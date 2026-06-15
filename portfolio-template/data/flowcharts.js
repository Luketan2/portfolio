// ── Interactive flowchart content (optional feature) ────────
// A project gets an "Open flowchart" button on its detail page when an entry
// keyed by that project's id exists here. Edit through admin.html → "Payload
// Flowchart", or by hand. The available iconKey values live in data/flow-icons.js.
//
// Example — uncomment and key it to a real project id to enable:
//
// window.FLOWCHARTS = {
//   "example-project": {
//     ctaTitle: "How it works, end to end",
//     ctaSub: "Step through each stage of the process.",
//     ctaButton: "Open flowchart &nbsp;&#8594;",
//     title: "Example Process",
//     subtitle: "Click any stage, or use the ← → keys, to step through.",
//     stages: [
//       {
//         iconKey: "gear",
//         title: "Stage one",
//         short: "A short subtitle for the stage",
//         detail: "<p>What happens in this stage.</p><ul><li>A detail</li></ul>",
//         media: [
//           { type: "image", src: "images/example-project/placeholder.svg" }
//         ]
//       }
//     ]
//   }
// };
window.FLOWCHARTS = {};
