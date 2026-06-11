window.FLOWCHARTS = {
  "urc2026": {
    "ctaTitle": "How the payload runs, end to end",
    "ctaSub": "Step through the sequence and see how each subsystem works.",
    "ctaButton": "Open payload flowchart &nbsp;&#8594;",
    "title": "URC 2026 Payload",
    "subtitle": "Click any stage, or use the ← → keys, to step through how each subsystem works.",
    "stages": [
      {
        "iconKey": "drill",
        "title": "Drilling + Caching",
        "short": "Dual-auger regolith extraction below 10&nbsp;cm",
        "detail": "\n          <p>Two augers drill at <strong>two separate sites</strong>. Running both gives us added redundancy, and because the sites are separate there is no cross-contamination between the two samples.</p>\n          <ul>\n            <li>While drilling, the <strong>cache lids stay closed</strong> so loose regolith just slides off the top</li>\n            <li>A <strong>Hall-effect sensor</strong> signals when the auger reaches <strong>10&nbsp;cm depth</strong></li>\n            <li>At that point the <strong>cache lids open</strong> and clean regolith is collected from the target depth</li>\n          </ul>",
        "media": [
          {
            "type": "embed",
            "src": "https://youtu.be/ORvh338rJ5Y"
          },
          {
            "type": "image",
            "src": "images/urc2026/_DSC0233.JPG"
          },
          {
            "type": "image",
            "src": "images/urc2026/097A9952.JPG"
          }
        ]
      },
      {
        "iconKey": "pump",
        "title": "Pumping Samples",
        "short": "Buffer mixing and peristaltic transfer into the rover",
        "detail": "\n          <p>A <strong>PBS buffer solution</strong> is mixed with the regolith in the caches, turning it into a liquid the instruments can read and suspending any soluble biosignatures.</p>\n          <ul>\n            <li>The sample is first pumped from the <strong>caches into the litmus box</strong>, where you can visually confirm it has arrived</li>\n            <li>The litmus box is held at <strong>60&nbsp;&deg;C</strong> by <strong>ceramic heating cartridges</strong> and a temperature sensor, warming the sample to get stronger, more reliable reactions</li>\n            <li>From the litmus box it is then pumped on to the <strong>inner ring, outer ring and electrochemical cell</strong> — the downstream instruments shown in this flowchart</li>\n            <li>All transfers use <strong>DC peristaltic pumps</strong> with <strong>calibrated pump timings</strong>, so only the tubing ever touches the sample and there is no carry-over between runs</li>\n          </ul>",
        "media": [
          {
            "type": "image",
            "src": "images/urc2026/Screenshot 2026-06-10 141429.png"
          },
          {
            "type": "embed",
            "src": "https://youtu.be/YIA6rfll20A"
          },
          {
            "type": "embed",
            "src": "https://youtu.be/qK0v9211XPI"
          }
        ]
      },
      {
        "iconKey": "strip",
        "title": "Litmus Strip Dipper",
        "short": "Multi-parameter chemistry readings",
        "detail": "\n          <p>The litmus box adds another set of data points on the sample's chemistry using <strong>multi-parameter test strips</strong>.</p>\n          <ul>\n            <li>A motorised <strong>dipper</strong> lowers a fresh strip into the sample fluid for a fixed dwell, then raises it in front of a camera</li>\n            <li>Colour change is read against a reference to quantify <strong>calcium, hardness, ammonia, nitrite, nitrate and pH</strong></li>\n            <li>Run in <strong>triplicate</strong> for consistency, these readings add to the overall chemical picture of the site alongside the biosignature assays</li>\n          </ul>",
        "media": [
          {
            "type": "image",
            "src": "images/urc2026/Screenshot 2026-06-10 141038.png"
          },
          {
            "type": "embed",
            "src": "https://youtu.be/7qo-M434__0"
          }
        ]
      },
      {
        "iconKey": "visspec",
        "title": "Visible Spectrometer",
        "short": "Dual-ring, 39-cuvette biosignature assay",
        "detail": "\n          <p>This is the heart of the life-detection setup — a <strong>dual-ring visible spectrometer</strong> we designed and built ourselves. It holds <strong>39 cuvettes</strong> across two rotating rings; one ring alone couldn't fit them all in the rover's tight envelope, so we added a second.</p>\n          <p>We test for four different biosignatures, and for each chemical we run it in <strong>triplicate</strong> with its own <strong>positive and negative blanks</strong> — that way we always know what a real result should look like against a known control.</p>\n          <ul>\n            <li><strong>Molisch's</strong> &rarr; carbohydrates</li>\n            <li><strong>NADH / NADPH fluorescence</strong> &rarr; metabolic activity</li>\n            <li><strong>Nile Red</strong> &rarr; lipids</li>\n            <li><strong>Ninhydrin</strong> &rarr; amino acids</li>\n          </ul>\n          <p>Each ring also keeps <strong>one empty cuvette slot</strong>, lined up with the spectrometer so it can see straight through and read the ring behind it. The rings rotate each cuvette into the optical path, where its absorbance or fluorescence is measured against the blanks.</p>",
        "media": [
          {
            "type": "image",
            "src": "images/urc2026/Screenshot 2026-06-10 141028.png"
          },
          {
            "type": "embed",
            "src": "https://youtu.be/4ri-Ujh_lcU"
          },
          {
            "type": "image",
            "src": "images/urc2026/Screenshot From 2026-05-29 08-54-16.png"
          },
          {
            "type": "image",
            "src": "images/urc2026/Screenshot From 2026-05-29 08-54-20.png"
          },
          {
            "type": "image",
            "src": "images/urc2026/Screenshot From 2026-05-29 08-54-26.png"
          },
          {
            "type": "image",
            "src": "images/urc2026/Screenshot From 2026-05-29 08-54-23.png"
          }
        ]
      },
      {
        "iconKey": "electro",
        "title": "Electrochemical Cell",
        "short": "Redox activity as an independent life signal",
        "detail": "\n          <p>The final stage looks for the chemical signature of an active system: a custom <strong>electrochemical cell</strong>.</p>\n          <ul>\n            <li>Electrodes measure <strong>redox activity</strong> in the sample fluid — electron transfer is a hallmark of metabolism</li>\n            <li>Run alongside the spectrometer, it adds an <strong>independent line of evidence</strong> for life detection</li>\n            <li>With the NIR probe and microscope, it rounds out a multi-instrument verdict rather than trusting any single test</li>\n          </ul>",
        "media": [
          {
            "type": "image",
            "src": "images/urc2026/tap_water_4.png"
          },
          {
            "type": "embed",
            "src": "https://youtu.be/Fn_L8i-zCLM"
          }
        ]
      }
    ]
  }
};
