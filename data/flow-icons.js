// ── Flowchart stage icon library ────────────────────────────
// Static SVG glyphs used by the payload flowchart. Stages reference one of
// these by key (e.g. iconKey: 'drill'). This file is loaded by both the site
// (index.html) and the admin, and is NEVER rewritten by the admin — only the
// content in data/flowcharts.js is editable. Add new icons here if you want
// more options to appear in the admin icon dropdown.
window.FLOW_ICONS = {
  drill:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v12"/><path d="M9 5l3 1.4M9 8l3 1.4M9 11l3 1.4"/><path d="M9.6 14h4.8l-2.4 6z"/></svg>',
  pump:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5c3 4 4.8 6.4 4.8 8.9a4.8 4.8 0 0 1-9.6 0c0-2.5 1.8-4.9 4.8-8.9z"/><path d="M10.2 12.2a1.9 1.9 0 0 0 1.9 1.9"/></svg>',
  strip:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="19" rx="1.4"/><path d="M9 8.5h6M9 12h6M9 15.5h6"/></svg>',
  visspec:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="5.2" r="1.1" fill="currentColor" stroke="none"/><circle cx="18.8" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="18.8" r="1.1" fill="currentColor" stroke="none"/><circle cx="5.2" cy="12" r="1.1" fill="currentColor" stroke="none"/></svg>',
  electro:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2.5l-7.5 10H11l-1 9 7.5-10.5H12z"/></svg>',
  microscope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.3-4.3"/><path d="M11 8.5v5M8.5 11h5"/></svg>',
  sensor:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6"/><circle cx="12" cy="11" r="2"/><path d="M7.5 6.5a6 6 0 0 1 9 0"/><path d="M9.5 9a3 3 0 0 1 5 0"/></svg>',
  camera:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-2.5h5L16 7"/></svg>',
  flask:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v6L5.5 18a1.5 1.5 0 0 0 1.4 2h10.2a1.5 1.5 0 0 0 1.4-2L14 9V3"/><path d="M8 14h8"/></svg>',
  gear:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>'
};

// Friendly labels for the admin icon dropdown.
window.FLOW_ICON_LABELS = {
  drill:      'Drill / auger',
  pump:       'Pump / droplet',
  strip:      'Test strip',
  visspec:    'Spectrometer ring',
  electro:    'Electrochem / bolt',
  microscope: 'Microscope / lens',
  sensor:     'Sensor / probe',
  camera:     'Camera',
  flask:      'Flask / sample',
  gear:       'Gear / mechanism'
};
