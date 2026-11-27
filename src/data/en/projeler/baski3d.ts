import type { ProjeCeviri } from "../../ceviri";

export const EN_BASKI3D: Record<string, ProjeCeviri> = {
  "ilk-baski": {
    adimlar: [
      [
        "Assemble and check",
        "Assemble the printer following its instructions. Press the X and Y belts with your finger: they should be taut and twang lightly like a guitar string. Check the frame screws and bed wheels; there should be no play when you move the bed by hand.",
        "The belts are taut, the bed has no play when shaken by hand and all screws are tight.",
      ],
      [
        "Load the filament",
        "Heat the nozzle to 200–210 °C for PLA. Cut the filament end at 45° with side cutters; a crushed end won't feed into the extruder. Press the extruder lever and push the filament until a thin, even strand flows from the nozzle.",
        "A continuous, even strand of filament flows from the nozzle.",
      ],
      [
        "Clean the bed",
        "With the bed cold, put isopropyl alcohol on a microfiber cloth and wipe the bed. After this, don't touch the bed with your fingers; finger oil spoils first layer adhesion.",
        "The bed is spotless with no fingerprints.",
      ],
      [
        "Level",
        "Heat the bed to 60 °C; metal expands when hot, so level while hot. On a manual bed, move the nozzle to each of the four corners in turn, put A4 paper underneath and adjust the bed screws until the paper slides with slight friction; repeat 2 rounds. On a printer with auto leveling, run auto leveling from the menu, then fine-tune the Z offset with the paper test.",
        "The paper slides with the same slight friction at all four corners and the center.",
      ],
      [
        "Slice",
        "Install a free slicer (Cura, PrusaSlicer, OrcaSlicer) and select your printer's preset profile. Download a '20 mm calibration cube' model and slice it at 0.2 mm layers, 15% infill with PLA settings. Transfer the file to the printer by card or USB.",
        "The slicer shows the estimated print time and the G-code file is on the printer.",
      ],
      [
        "Watch the first layer",
        "Start the print and stay with it until the first layer finishes. The lines should be slightly squished and touching each other. If there are gaps between lines the nozzle is too high; if transparent and wavy, too low. If the printer allows, adjust the Z offset in small steps during the print.",
        "The first layer is even, smooth and stuck to the bed everywhere.",
      ],
      [
        "Finish and measure",
        "When the print finishes, wait for the bed to cool; PLA releases by itself as it cools. Remove the cube by pushing the spatula away from yourself. Measure the X, Y and Z edges with calipers.",
        "All three measurements are 19.9–20.1 mm; the corners are sharp and the layers even.",
      ],
    ],
    ipuclari: [
      "If the first layer won't stick, check the bed temperature (60 °C for PLA) and the leveling.",
      "If there are gaps between first layer lines the nozzle is too high; if transparent and wavy, it's too low.",
    ],
    guvenlik: [
      "The nozzle is over 200 °C; don't touch it while it runs.",
      "Don't run the printer unattended for long, and keep it away from flammable materials.",
      "Use it in a ventilated room.",
    ],
    ad: "Bed Leveling and Your First Print",
    ozet: "Setting up a new FDM printer and printing a 20 mm calibration cube.",
    sikHatalar: [
      "The first layer doesn't stick to the bed: the bed is dirty or the nozzle is high. Wipe with alcohol and re-level.",
      "The first layer is transparent and wavy: the nozzle is too close to the bed. Raise the Z offset a little.",
      "The print lifted at the corners partway (warping): the bed is cold or there's a draft. Keep the bed at 60 °C and print away from drafts.",
      "The measurements differ from 20 mm: the belts are loose or the steps setting is off. Tighten the belts first, then measure again.",
    ],
  },
  "telefon-standi": {
    adimlar: [
      [
        "Find a model",
        "Search 'phone stand' on Printables or Thingiverse. Look at the comments and print photos; compare your phone's thickness with its case to the size in the description. Check the license allows personal use and download the STL file.",
        "The slot of the model you chose is wider than your phone with its case, and the license is suitable.",
      ],
      [
        "Place it in the slicer",
        "Open the STL in the slicer. Rotate the model so its largest flat face sits on the bed; most stands print without supports and come out stronger when laid on their side. Make sure the layers in the area that carries the phone's weight run parallel to the load.",
        "The model sits on the bed by its wide face; the preview shows no large areas hanging in the air.",
      ],
      [
        "Slice",
        "Use 0.2 mm layers, 15–20% infill and 3 walls. If the preview shows no supports are needed, turn supports off. For PLA, nozzle 200–210 °C, bed 60 °C.",
        "The slicer shows the time and supports are only where truly needed.",
      ],
      [
        "Print and watch the first layer",
        "Start the print and stay with it until the first layer finishes. If the first layer is good, wait for the print to finish; check in now and then and don't leave the printer unattended for long.",
        "The first layer is stuck to the bed everywhere and nothing lifts during printing.",
      ],
      [
        "Remove",
        "Wait for the bed to cool to room temperature; PLA parts usually release by themselves. If needed, push the spatula away from yourself to remove it without scratching the bed.",
        "The part came off without damaging the bed surface.",
      ],
      [
        "Finish and try it",
        "Remove burrs on the edges with 220 grit sandpaper; if you used supports, snap them off with pliers and sand the marks. Stick four felt feet underneath. Put the phone in and check it balances in portrait and landscape.",
        "The stand doesn't slide on the desk, the phone doesn't tip over in either orientation and the charging cable fits.",
      ],
    ],
    ipuclari: ["PLA parts usually release by themselves when the bed cools; forcing them can damage the bed surface."],
    guvenlik: [
      "Always push the spatula away from yourself.",
      "The nozzle and bed are very hot; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Printing a Phone Stand",
    ozet: "Downloading a ready-made model and printing it with the right settings.",
    sikHatalar: [
      "The phone doesn't fit in the slot: the case thickness wasn't accounted for. Scale the model up 3–5% in the slicer or choose another model.",
      "The stand broke: the layers were printed perpendicular to the load. Print the model on its side and increase the wall count.",
      "The part is stuck to the bed: it was forced before the bed cooled. Wait for it to cool completely.",
      "Lots of support marks underneath: the model was placed in the wrong orientation. Put the wide face on the bed.",
    ],
  },
  "tinkercad-kutu": {
    adimlar: [
      ["Measure", "Measure the item that will go in the box with calipers; add 2 mm clearance on every side."],
      [
        "Outer box",
        "In Tinkercad, add a box and enter its dimensions; add a 'hole' box inside leaving 2 mm walls and group them to hollow it out.",
      ],
      [
        "Lid",
        "Make a 2 mm thick plate at the outer dimensions; add a lip underneath 0.3 mm smaller than the inner dimensions.",
      ],
      ["Export", "Export the box and lid as separate STL files."],
      ["Print and test", "First print a small corner piece to test the tolerance, then print the whole thing."],
    ],
    ipuclari: ["A 0.2–0.3 mm tolerance fits well on most printers for push-fit parts; increase it if tight."],
    guvenlik: [
      "Don't put your hand into the printer's moving parts while printing.",
      "The nozzle and bed are very hot; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Designing a Custom-Sized Box with Lid",
    ozet: "A storage box sized to your needs with a well-fitting lid, using free Tinkercad.",
  },
  "kalibrasyon-kupu": {
    adimlar: [
      ["Download", "Download a 20 mm XYZ calibration cube from Printables or Thingiverse."],
      ["Print", "Print it with default settings."],
      ["Measure", "Measure the X, Y and Z edges with calipers."],
      [
        "Correct",
        "If the deviation is more than 0.3 mm, adjust steps/mm (e-steps) or the extrusion multiplier per the manufacturer's guide.",
      ],
    ],
    ipuclari: ["If only one axis is off, check the belt tension."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Calibration Cube and Dimension Check",
    ozet: "Checking your printer's dimensional accuracy with a 20 mm test cube.",
  },
  "tabla-seviyeleme": {
    adimlar: [
      ["Heat", "Heat the bed and nozzle to printing temperature; metal expands, so a cold adjustment won't hold."],
      ["Home", "Home the printer and disable the motors."],
      [
        "Corners",
        "Move the nozzle to each corner and turn the bed screw until the paper slides through with slight friction.",
      ],
      ["Test", "Do a single-layer test print; the lines should be slightly squished and touching."],
    ],
    ipuclari: ["Go round the corners twice; adjusting one affects the others."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
      "While the nozzle is hot, keep the fingers holding the paper away from the tip.",
    ],
    ad: "Bed Leveling (Paper Method)",
    ozet: "Adjusting the bed relative to the nozzle so the first layer sticks evenly.",
  },
  "kablo-klipsi": {
    adimlar: [
      ["Measure", "Measure the desk thickness."],
      ["Model", "In Tinkercad, draw a U piece 0.5 mm narrower than the desk thickness with cable slots on top."],
      ["Print", "Print at 20% infill with 3 walls."],
      ["Fit", "Slide the clip onto the desk and seat the cables in the slots."],
    ],
    ipuclari: ["PETG breaks less in parts that need to flex."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Desk Edge Cable Clip",
    ozet: "A clip that slides onto the desk edge and holds cables.",
  },
  "duvar-anahtar-askisi": {
    adimlar: [
      [
        "Model",
        "Design a house silhouette with 4 hooks underneath and two screw holes (or download a ready-made model).",
      ],
      ["Orient", "Print it flat so the hooks run parallel to the layers, not across them."],
      ["Print", "Print at 30% infill."],
      ["Hang", "Mount it on the wall with wall plugs and screws."],
    ],
    ipuclari: ["The hook's layer direction determines its strength; the load mustn't pull the layer lines apart."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
      "Stay clear of electrical and water lines when drilling the wall.",
      "Wear safety goggles and a dust mask while drilling.",
    ],
    ad: "Wall Key Holder",
    ozet: "A house-shaped wall key holder with hooks.",
  },
  "kendi-sulayan-saksi": {
    adimlar: [
      ["Download", "Download a ready-made self-watering planter model."],
      ["Watertight", "Use 4 walls and 100% top-bottom layers for the reservoir."],
      ["Print", "Print the two parts separately."],
      ["Wick", "Thread the wick through the hole in the inner pot so it touches the water in the reservoir."],
    ],
    ipuclari: ["PETG is more resistant to water and UV than PLA."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Self-Watering Planter",
    ozet: "A two-part planter that wicks water from its bottom reservoir.",
  },
  "filament-kurutma": {
    adimlar: [
      ["Symptoms", "If printing crackles, bubbles and strings excessively, the filament is damp."],
      ["Dry", "Dry PLA at 45 °C and PETG at 65 °C for 4–6 hours."],
      ["Store", "Store in an airtight box with silica gel."],
      ["Monitor", "Keep the humidity in the box below 20%."],
    ],
    ipuclari: [
      "Drying in a home oven isn't recommended: if the thermostat isn't precise, PLA can soften and stick to the spool.",
    ],
    guvenlik: ["Place the dryer away from flammable items."],
    ad: "Drying Damp Filament",
    ozet: "Drying and storing damp filament that crackles and strings.",
  },
  "dis-macunu-sikacagi": {
    adimlar: [
      ["Download", "Download a ready-made model or draw a 2 mm wide slot in a 6 cm × 2 cm block."],
      ["Print", "Print with the slot standing vertical on the bed."],
      ["Clean", "Cut away fine strings in the slot."],
      ["Use", "Thread the end of the tube into the slot and slide it up."],
    ],
    ipuclari: ["Designing the slot 0.2 mm wider lets the tube slide easily."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Toothpaste Squeezer",
    ozet: "A slotted squeezer that lets you use the tube to the very end.",
  },
  "kurabiye-kalibi-3d": {
    adimlar: [
      ["Shape", "Draw your shape as an SVG or upload it to a cookie cutter generator site."],
      ["Model", "Create it with a 1.2 mm wall and a 0.4 mm cutting edge."],
      ["Print", "Print with the cutting edge facing up."],
      ["Use", "Cover the dough with plastic wrap and press the cutter through the wrap."],
    ],
    ipuclari: ["The plastic wrap both reduces food contact and stops the dough sticking."],
    guvenlik: [
      "Bacteria can collect in 3D print layer lines; use the cutter for brief cutting, not prolonged contact, and don't put it in the dishwasher.",
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Custom Cookie Cutter",
    ozet: "A cookie cutter from a shape you drew yourself.",
  },
  "cekmece-bolme": {
    adimlar: [
      ["Measure", "Measure the inside of the drawer."],
      ["Plan", "Work out how many modules fit on the 42 mm grid system."],
      ["Print", "Print a baseplate and the bins you need."],
      ["Place", "Seat the bins on the base and rearrange as needed."],
    ],
    ipuclari: ["Gridfinity is an open-source system; thousands of ready-made modules exist."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Drawer Organizer Bins",
    ozet: "Modular bins that lock together to fit your drawer (Gridfinity).",
  },
  "renkli-anahtarlik-3d": {
    adimlar: [
      ["Model", "In Tinkercad, make a 3 mm base with a name raised 1.5 mm on top."],
      ["Pause", "In the slicer, add a 'filament change' (M600) or pause at the layer where the lettering begins."],
      ["Change", "When the printer stops, remove the filament, load the new color and purge until the color is clean."],
      ["Resume", "Resume the print."],
    ],
    ipuclari: ["If your printer doesn't support M600, use the 'pause' command."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Two-Color Name Keychain",
    ozet: "A two-color print made by changing filament at a specific layer.",
  },
  "vidali-kapakli-kutu": {
    adimlar: [
      ["Model", "Start with the Fusion 360 'Thread' tool or a ready-made threaded box model."],
      ["Tolerance", "Leave 0.3–0.4 mm clearance between the threads."],
      ["Print", "Print the body and lid at 0.16 mm layers."],
      ["Test", "If tight, lightly sand the lid threads."],
    ],
    ipuclari: ["A finer layer height makes smoother threads."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Small Box with Screw Lid",
    ozet: "A round storage box with a threaded lid.",
  },
  "tpu-telefon-kilifi": {
    adimlar: [
      ["Model", "Download a case model for your phone."],
      ["Speed", "Lower the print speed to 20–25 mm/s and reduce or disable retraction."],
      ["Print", "Print the case with the screen side facing up."],
      ["Test", "Put the phone in and check the button openings."],
    ],
    ipuclari: ["Direct-drive printers print TPU much more easily."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Flexible TPU Phone Case",
    ozet: "Printing a case for your phone model with flexible filament.",
  },
  "nozul-degisimi": {
    adimlar: [
      ["Heat", "Heat the nozzle to 230 °C and remove the filament."],
      ["Hold", "Hold the heater block with pliers so the wires don't break."],
      ["Remove", "Unscrew the nozzle while hot, fit the new one by hand and tighten a quarter turn while hot."],
      ["Test", "Load filament and do an extrusion test."],
    ],
    ipuclari: ["Never remove the nozzle cold; the heat break can snap or it can leak."],
    guvenlik: [
      "The heater block and nozzle are very hot; use heat-resistant gloves.",
      "Follow your printer's manual for this procedure.",
    ],
    ad: "Changing a Nozzle and Clearing a Clog",
    ozet: "Safely replacing a clogged nozzle with a hot swap.",
  },
  "litofan-lamba": {
    adimlar: [
      ["Convert", "Upload your photo to a free lithophane generator and get an STL."],
      ["Settings", "Set infill to 100% and layer height to 0.12 mm."],
      ["Print", "Print the panel standing upright."],
      ["Light", "Put an LED behind it."],
    ],
    ipuclari: ["High-contrast, close-up portraits give the best results."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
      "Don't use an incandescent bulb that gets hot; use only LEDs.",
    ],
    ad: "Photo Lithophane Lamp",
    ozet: "A thin panel lamp that reveals a photo when lit from behind.",
  },
  "eklemli-ejderha": {
    adimlar: [
      ["Download", "Download a 'print-in-place' articulated dragon model."],
      ["First layer", "Level the bed carefully; joints must not fuse together on the first layer."],
      ["Print", "Print without supports."],
      ["Free it", "When printing finishes, gently bend the joints to free them."],
    ],
    ipuclari: ["Elephant's foot (first layer squish) locks the joints; reduce the first layer width."],
    guvenlik: [
      "Don't give toys with small parts to children under 3.",
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Articulated Flexi Dragon (Print-in-Place)",
    ozet: "A jointed toy printed in one piece without supports.",
  },
  "kulaklik-askisi": {
    adimlar: [
      ["Model", "Download a hanger with a hook and mounting plate."],
      ["Orient", "Print the hook on its side so the layer lines carry the load."],
      ["Print", "Print at 40% infill with 4 walls."],
      ["Mount", "Screw it under the desk."],
    ],
    ipuclari: ["Wall count adds more strength than infill."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
    ],
    ad: "Under-Desk Headphone Hanger",
    ozet: "A headphone hook screwed or stuck under the desk.",
  },
  "baski-hata-cozumu": {
    adimlar: [
      ["Stringing", "Lower the temperature by 5 °C and test increasing retraction distance by 0.5 mm."],
      ["Warping", "Clean the bed with alcohol, add a brim and stop drafts in the room."],
      ["Layer shift", "Check belt tension and pulley screws, and lower the speed."],
      ["Under-extrusion", "Dry the filament and check for a nozzle clog."],
    ],
    ipuclari: ["Change one setting at a time; you'll see what works."],
    guvenlik: [
      "The nozzle exceeds 200 °C and the bed 60 °C; don't touch them while printing and don't leave the printer running unattended for long.",
      "The room should be ventilated during printing; filaments like ABS/ASA give off noticeable fumes.",
      "Alcohol and solvents ignite easily; use them away from flames in a ventilated area.",
    ],
    ad: "3D Printing Troubleshooting Guide",
    ozet: "Fixes for stringing, warping and layer shifting.",
  },
};
