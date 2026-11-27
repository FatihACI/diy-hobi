import type { ProjeCeviri } from "../../ceviri";

export const EN_RC: Record<string, ProjeCeviri> = {
  "bluetooth-araba": {
    adimlar: [
      [
        "Build the chassis",
        "Screw the motors to the chassis and check the motor wires are soldered (if not, an adult should solder them). Press the wheels onto the motor shafts and screw the caster wheel to the front/rear.",
        "The wheels turn by hand without rubbing; the chassis rests on all points on a flat floor.",
      ],
      [
        "Mount the boards",
        "Fix the Arduino and L298N to the chassis with standoffs or double-sided tape. Place the battery holder so the weight is centered. The undersides of the boards must not touch the metal chassis.",
        "The boards don't wobble and no solder joint underneath touches metal.",
      ],
      [
        "Connect the motors to the driver",
        "Connect the left motor to the L298N OUT1–OUT2 screw terminals and the right motor to OUT3–OUT4. Don't remove the jumpers on ENA and ENB; the motors run at full speed.",
        "The screw terminals are tight; wires don't come out when pulled.",
      ],
      [
        "Connect the control pins",
        "L298N IN1→Arduino 5, IN2→6, IN3→9, IN4→10. Do this with no battery connected; count all connections once more.",
        "All four wires are on the correct pins (same as the code: 5, 6, 9, 10).",
      ],
      [
        "Connect the Bluetooth module",
        "HC-05: VCC→5V, GND→GND, TXD→Arduino pin 2. Go from Arduino pin 3 through a 1 kΩ resistor to HC-05 RXD; put a 2 kΩ resistor between RXD and GND. This voltage divider protects the module's 3.3 V input.",
        "The resistors are in the right place: 1 kΩ on the pin 3 side, 2 kΩ between RXD and GND.",
      ],
      [
        "Connect the power",
        "Connect the battery holder's + wire to the L298N's 12V input and the – wire to its GND. Also connect the L298N's GND to the Arduino GND (a common ground is essential). Power the Arduino from the L298N's 5V output → Arduino 5V pin (the 5V jumper on the L298N must be fitted). Battery voltage must be at least 7 V: use 6×AA (9 V) or 2×18650 (7.4 V).",
        "With the battery in, the power lights on both the L298N and Arduino come on.",
      ],
      [
        "Upload the code",
        "Switch off the battery, connect the Arduino to the computer via USB and upload the code from the Code tab in the Arduino IDE with the 'Arduino Uno' board selected. Since the Bluetooth module uses pins 2–3, you don't need to remove it during upload.",
        "The IDE says 'Done uploading'.",
      ],
      [
        "Pair the phone and test",
        "Put the car on a box with its wheels in the air and switch on the battery. Find HC-05 in your phone's Bluetooth settings, PIN 1234 (or 0000). Connect with a 'Bluetooth RC Controller' app and try forward, back, right, left and stop.",
        "The HC-05 light changes from fast blinking to a slow double blink (connected); the wheels respond correctly to the buttons.",
      ],
      [
        "Fix directions and put it down",
        "If a wheel turns backward on forward, swap that motor's two wires at its OUT terminal. If right and left are reversed, swap the two motors' wires. Then put the car down on a flat floor.",
        "The car drives straight forward on forward and stops on stop.",
      ],
    ],
    ipuclari: [
      "If the car goes backward, swap that motor's two wires.",
      "Apps usually send the letters F/B/L/R/S; the code is written for these.",
    ],
    guvenlik: [
      "Don't insert batteries backward; a short circuit causes heating.",
      "If soldering, ventilate and use a soldering stand.",
      "If using 18650 lithium cells, use protected cells and a proper charger; never use a crushed or swollen battery.",
    ],
    ad: "Phone-Controlled Arduino Car",
    ozet: "A two-motor car driven from your phone with a Bluetooth module.",
    sikHatalar: [
      "Motors are very weak or the Arduino keeps restarting: battery voltage is low. 4×AA isn't enough; use 6×AA or 2×18650.",
      "The phone connects but the car doesn't respond: no common GND or TX/RX reversed. HC-05 TXD must go to pin 2.",
      "One wheel turns backward: swap the motor wires at that OUT terminal.",
      "HC-05 doesn't appear in the list: if the module's light doesn't come on at all, check the VCC/GND connection.",
    ],
  },
  "depron-planor": {
    adimlar: [
      [
        "Draw the parts",
        "Draw on the Depron with a ruler: wing 60×10 cm, horizontal tail 20×6 cm, vertical tail 8×7 cm (a trapezoid with one slanted edge). You can round the wing tips.",
        "Dimensions are correct and corners are square.",
      ],
      [
        "Cut (adult)",
        "Put a cutting mat underneath, press a metal ruler on the line and draw the utility knife in 2–3 light passes; pressing hard in one go tears the foam. Snap off the blade tip when it dulls.",
        "Edges are straight, not torn.",
      ],
      [
        "Shape the airfoil",
        "Round the wing's leading edge with sandpaper and thin the trailing edge from below to a point (the wing section should look like a teardrop). The top surface can be slightly curved and the bottom flat.",
        "From the side the leading edge is round and the trailing edge thin.",
      ],
      [
        "Add dihedral",
        "Cut the wing exactly in the middle from the top surface to ¾ depth (the bottom surface stays as a hinge). Raise each tip 4–5 cm, apply glue to the cut and support the tips on books until dry.",
        "From the front the wing is a shallow 'V' and both tips are at the same height.",
      ],
      [
        "Attach to the fuselage",
        "Glue the wing about 1/3 of the way back from the front of the rod, the horizontal tail at the rear end, and the vertical tail exactly centered on top of the horizontal tail. The tails must be parallel to the wing and vertical.",
        "From behind the wing and horizontal tail are parallel and the vertical tail is perfectly upright.",
      ],
      [
        "Set the center of gravity",
        "Mark the point 30% back from the front of the wing on both sides (3 cm from the leading edge on a 10 cm wing). Hold the plane at these points on your fingertips; add modeling clay to the nose until the nose points slightly down.",
        "It balances on your fingers or the nose dips very slightly.",
      ],
      [
        "Glide test",
        "On a windless day over grass, hold the plane at eye level with the nose slightly down and push it forward smoothly and level, as if walking (don't throw). Watch the flight.",
        "The plane glides 5–10 m in a straight line, descending slowly.",
      ],
      [
        "Trim",
        "If the nose dives, remove some weight. If it climbs and drops (porpoises), add weight or bend the trailing edge of the horizontal tail down slightly. If it always turns to one side, bend the trailing edge of the vertical tail slightly the opposite way.",
        "It glides straight and long three launches in a row.",
      ],
    ],
    ipuclari: [
      "A windless late afternoon is the best time for testing.",
      "Bending the tail's trailing edge slightly up corrects a nose-dive.",
    ],
    guvenlik: [
      "Don't launch toward people, animals or vehicles.",
      "An adult should do the cutting.",
      "Wash your hands after handling lead weights; keep lead away from small children and never put it in your mouth.",
    ],
    ad: "Hand-Launched Depron Glider",
    ozet: "An unpowered glider from light foam sheet that glides a long way.",
    sikHatalar: [
      "It dives nose-first immediately: the nose is too heavy. Reduce the weight.",
      "It climbs, stalls and falls: the tail is heavy. Add weight to the nose.",
      "It always turns the same way: the wings aren't symmetrical or the vertical tail is crooked. Check from front and back and correct.",
      "It flips when thrown hard: a glider isn't thrown, it's pushed gently.",
    ],
  },
  "mini-drone": {
    adimlar: [
      [
        "Fit the motors",
        "Screw the motors to the frame; watch the rotation directions (diagonal motors spin the same way).",
      ],
      [
        "Mount the board",
        "Seat the flight controller in the center of the frame on its rubber dampers, with the arrow pointing forward.",
      ],
      [
        "Solder the motor wires",
        "Shorten the motor wires and solder them to the pads on the board; joints should be shiny and clean.",
      ],
      [
        "Configure the software",
        "Connect the board to the computer and set motor directions and receiver binding in Betaflight Configurator.",
      ],
      ["Fit the propellers", "Fit the propellers LAST; check their direction matches the motor rotation."],
      ["First flight", "Try it in a large, empty room on low throttle in 'angle' (self-leveling) mode."],
    ],
    ipuclari: [
      "Don't fit the propellers during testing and setup; bench accidents happen most often at this stage.",
      "A few hours of practice in a simulator helps a lot on the first flight.",
    ],
    guvenlik: [
      "Never charge LiPo batteries unattended; use a fireproof charging bag and never use a swollen battery.",
      "Always remove the propellers when configuring.",
      "If flying outdoors, check local drone rules; never fly over people.",
      "The soldering iron tip is over 300 °C; leave it on its stand when not in use. Don't breathe solder fumes, ventilate the area and wash your hands after working.",
    ],
    ad: "Building a Mini FPV Drone (Tiny Whoop)",
    ozet: "Assembling a small ducted drone that can fly indoors, part by part.",
  },
  "rc-tekne": {
    adimlar: [
      ["Hull", "Cut the foam into a 40 cm boat shape and hollow out the inside for equipment."],
      ["Waterproofing", "Coat the outside with thin fiberglass cloth and epoxy so the foam doesn't soak up water."],
      [
        "Shaft and motor",
        "Install the shaft tube angled out of the stern, seal it with epoxy and connect it to the motor.",
      ],
      ["Rudder", "Connect the rudder blade to the servo with a pushrod."],
      ["Electronics", "Place the ESC, receiver and battery in a lidded compartment high enough to stay dry."],
      ["Trial", "First do a leak test in a basin, then try it in calm, shallow water."],
    ],
    ipuclari: ["Filling the shaft tube with waterproof grease prevents leaks."],
    guvenlik: [
      "Don't use it where there are swimmers, birds or boats.",
      "If the battery gets wet, remove it immediately and don't use it; a wet LiPo is dangerous.",
      "If the boat drifts out, don't go into the water after it.",
      "Charge LiPo batteries with a balance charger, in a fireproof charging bag, and never unattended. Don't use a swollen or damaged battery.",
      "Don't touch resin and hardener with bare hands; use nitrile gloves. Repeated contact can cause a permanent allergy.",
      "Work with resin in a ventilated area; don't sleep or eat near curing resin.",
      "With the battery connected the propeller can spin at any moment; remove the battery first when adjusting or servicing and keep your hands away from the propeller.",
    ],
    ad: "Foam-Hull RC Boat",
    ozet: "A remote-controlled boat from XPS foam with a brushed motor and rudder.",
  },
  "rc-araba-ayar": {
    adimlar: [
      ["Remove the shocks", "Take the shocks off the car, open the bottom cap and drain the old oil."],
      [
        "New oil",
        "Push the piston all the way down, fill with oil, move the piston slowly to release air bubbles and close.",
      ],
      ["Tire check", "Clean tire beads that have come off the rim with alcohol and glue them with thin CA."],
      ["Ride height", "Use the spring collars on the shocks to set the height equally on both sides."],
      [
        "Toe",
        "Adjust the steering links so the front wheels point slightly inward (1–2°); it improves straight-line tracking.",
      ],
    ],
    ipuclari: ["Thick oil gives slow damping and thin oil fast damping; choose for the track surface."],
    guvenlik: [
      "CA glue bonds skin in seconds; wear gloves and goggles.",
      "Alcohol and solvents ignite easily; use them away from flames in a ventilated area.",
    ],
    ad: "RC Car Suspension and Tire Maintenance",
    ozet: "Refilling shock oil, gluing tires and tuning the setup.",
  },
  "lipo-sarj": {
    adimlar: [
      [
        "Choose a spot",
        "Prepare a corner with a ceramic/metal surface away from flammable items; install a smoke detector nearby.",
      ],
      [
        "Check the battery",
        "If it's swollen, crushed or punctured, don't charge it. Measure the cell voltages with a checker.",
      ],
      ["Correct settings", "On the charger choose LiPo mode, the cell count and 1C current (e.g. 1.0 A for 1000 mAh)."],
      ["Balance charge", "Connect the battery by both the main and balance leads and charge it inside the bag."],
      ["Storage", "If you won't use it for a few days, store it at ~3.8 V per cell with the charger's 'storage' mode."],
    ],
    ipuclari: ["Don't charge a hot battery right after flying; let it cool to room temperature."],
    guvenlik: [
      "NEVER charge a LiPo battery unattended.",
      "Don't use a swollen, damaged or hot battery; leave it outdoors in a fireproof container and take it to a battery collection point. Don't use the salt water method; it isn't reliable.",
      "If a battery catches fire, don't try to put it out with water; move away, try to smother it with sand and call emergency services (112) if needed.",
      "Don't charge above 4.2 V per cell or discharge below 3.0 V.",
    ],
    ad: "Safe LiPo Charging and Storage",
    ozet: "A safe charging station and storage routine for RC and drone batteries.",
  },
  "motorlu-depron": {
    adimlar: [
      ["Print the plans", "Choose a free 'flat foamie trainer' plan and print it at full size."],
      ["Cut and assemble", "Cut the wing, fuselage and tails; embed a carbon spar in the wing."],
      ["Control surfaces", "Hinge the ailerons, elevator and rudder and connect them to the servos."],
      ["Motor", "Fix the motor to the nose with its mount and connect the ESC and receiver."],
      [
        "Center of gravity",
        "Hold it with your fingers at the point shown on the plan and balance it by moving the battery.",
      ],
      [
        "Controls",
        "Check on the transmitter that all surfaces move the right way; do the first flight with an experienced pilot.",
      ],
    ],
    ipuclari: ["Learning to fly in a simulator first greatly reduces the chance of crashing your first plane."],
    guvenlik: [
      "Don't stand in front of or beside the propeller while the motor runs; keep your hands away from the propeller with the battery connected.",
      "Make adjustments with the propeller removed.",
      "Fly only in open areas without people and in line with local model aircraft rules.",
      "Charge LiPo batteries with a balance charger, in a fireproof charging bag, and never unattended. Don't use a swollen or damaged battery.",
      "In Turkey, UAVs (including model aircraft) with a maximum takeoff weight of 500 g or more cannot be flown without registering in the SHGM UAV Registration System; check with SHGM whether the area is open to flight before flying. Elsewhere, check your national aviation authority's rules.",
    ],
    ad: "Powered Depron RC Plane",
    ozet: "A slow brushless-powered trainer plane from flat foam sheet.",
  },
  "drone-simulator": {
    adimlar: [
      ["Connect", "Connect the transmitter to the computer via USB and choose 'Joystick (HID)' mode."],
      ["Calibrate", "Calibrate in the simulator by moving the sticks to their end points."],
      ["Angle mode", "In the first lessons learn to hover in 'angle' (auto-leveling) mode."],
      ["Goals", "Practice tasks like flying squares, figure eights and low passes in order."],
      ["Acro mode", "Once comfortable, switch to 'acro' mode."],
    ],
    ipuclari: ["Regular 15–20 minute daily practice is more effective than one long weekly session."],
    guvenlik: ["Take breaks during long screen sessions."],
    ad: "Learning to Fly a Drone in a Simulator",
    ozet: "Connecting your real transmitter to a computer and practicing with no risk of crashing.",
  },
  "fpv-gozluk": {
    adimlar: [
      ["Fit the antenna", "Never power the transmitter WITHOUT AN ANTENNA; fit the antenna first."],
      ["Choose a channel", "Choose a band and channel on the VTX (e.g. Raceband R1)."],
      ["Set the power", "Set the transmitter power to the legal limit (25 mW in many countries)."],
      ["Match the goggles", "Select the same band/channel on the goggles or use auto scan."],
      ["Test", "Check the image at different distances; if there's static, check the antennas."],
    ],
    ipuclari: ["Using the same antenna polarization on the transmitter and goggles improves image quality."],
    guvenlik: [
      "Check your country's frequency and transmitter power rules; have a spotter during FPV flights.",
      "A transmitter powered without an antenna can be damaged.",
    ],
    ad: "FPV Camera and Goggle Channel Setup",
    ozet: "Matching the transmitter, antenna and goggle channel in an analog FPV system.",
  },
  "pervane-dengeleme": {
    adimlar: [
      ["Mount", "Put the propeller on the balancer's shaft."],
      ["Find the heavy blade", "Leave the propeller horizontal; the blade that drops is heavy."],
      [
        "Lighten or add weight",
        "Lightly sand the flat face of the heavy blade's tip or stick thin tape on the light blade.",
      ],
      ["Repeat", "Repeat until the propeller stays put in any position."],
    ],
    ipuclari: ["Also check hub balance: hold the propeller vertical and do the same test."],
    guvenlik: ["Don't balance a cracked or nicked propeller; replace it with a new one."],
    ad: "Propeller Balancing",
    ozet: "Balancing a propeller with a magnetic balancer to reduce vibration.",
  },
  "paletli-robot": {
    adimlar: [
      ["Build the chassis", "Fit the motors, wheels and tracks in the kit's order; adjust the track tension."],
      ["Electronics", "Make the connections as in the 'Phone-Controlled Arduino Car' project (L298N + HC-05)."],
      ["Code", "The same Bluetooth code works on the tracked robot; turns happen on the spot."],
      ["Camera", "Screw the mount to the top plate and use an old phone on a video call as the camera."],
    ],
    ipuclari: ["Tracks grip carpet and grass better than wheels but draw more current; keep battery capacity high."],
    guvenlik: [
      "The motor driver can get hot; don't touch its heat sink.",
      "Charge LiPo batteries with a balance charger, in a fireproof charging bag, and never unattended. Don't use a swollen or damaged battery.",
    ],
    ad: "Tracked Explorer Robot",
    ozet: "A tracked chassis with phone control and a camera mount on top.",
  },
  "cizgi-izleyen": {
    adimlar: [
      [
        "Fit the sensors",
        "Place two sensors at the front of the chassis, 5–10 mm above the floor, with a gap between them the width of the tape.",
      ],
      ["Connect", "Left sensor OUT → pin 2, right sensor OUT → pin 3. Motors via the L298N on pins 5, 6, 9, 10."],
      [
        "Adjust the sensor",
        "Turn the potentiometer on the module so its LED lights differently on the white floor and on the black tape.",
      ],
      ["Track", "Make a closed track with black tape on a light floor."],
      [
        "Upload and test",
        "If the robot leaves the line, invert the sensor logic (change the SIYAH value in the code).",
      ],
    ],
    ipuclari: ["If it struggles on sharp curves, lower the motor speed (apply PWM to the ENA/ENB pins)."],
    guvenlik: ["Don't insert batteries backward; remove the battery holder while building the circuit."],
    ad: "Line-Following Robot",
    ozet: "A robot that follows black tape on the floor with two infrared sensors.",
  },
  "engel-robot": {
    adimlar: [
      ["Chassis", "Build the robot chassis and fix the sensor facing straight ahead."],
      ["Sensor", "HC-SR04: VCC→5V, GND→GND, Trig→pin 12, Echo→pin 11."],
      ["Motors", "L298N IN1–IN4 → pins 5, 6, 9, 10; battery → L298N 12V input, grounds shared."],
      ["Upload the code", "When the robot sees an obstacle closer than 20 cm it backs up and turns."],
      ["Adjust", "Change the distance threshold and turn time to suit your room."],
    ],
    ipuclari: ["Mounting the sensor on a servo to look left and right gives smarter direction choices."],
    guvenlik: ["Keep the robot away from stair edges; the ultrasonic sensor can't see a drop."],
    ad: "Obstacle-Avoiding Robot",
    ozet: "A robot that sees obstacles ahead with an ultrasonic sensor and changes direction.",
  },
  "balon-hovercraft": {
    adimlar: [
      ["Glue the cap", "Glue the cap over the hole in the middle of the CD so no air leaks."],
      ["Inflate the balloon", "With the cap closed, blow up the balloon and stretch its neck over the cap."],
      ["Release", "Put the CD on a flat table and open the cap; as air escapes under the CD, friction drops."],
      ["Try it", "Give it a gentle push and watch it glide for a long time."],
    ],
    ipuclari: ["Works best on a smooth surface (glass table)."],
    guvenlik: ["Children under 8 should inflate balloons under supervision.", "An adult should use the hot glue."],
    ad: "Mini Hovercraft with a CD and Balloon",
    ozet: "A simple hovercraft that glides across a table on an air cushion.",
  },
  "su-roketi": {
    adimlar: [
      [
        "Body",
        "Turn the bottle upside down; the neck stays at the bottom. Make a nose cone on top from the top part of a second bottle.",
      ],
      ["Fins", "Glue 3–4 fins evenly spaced around the bottom."],
      [
        "Balance",
        "Put modeling clay inside the nose cone to move the center of gravity forward; it will fly straight.",
      ],
      ["Fill", "Fill the bottle 1/3 with water and attach it to the launcher."],
      ["Launch", "After everyone has moved at least 10 m away, pressurize with the pump and trigger."],
    ],
    ipuclari: ["The best height usually comes with 1/3 water; try different ratios and measure."],
    guvenlik: [
      "Use only soda bottles and never exceed 4 bar (60 psi); the bottle can burst.",
      "Don't lean over the rocket while it's pressurized and keep everyone out of its path.",
      "Launch in an open, wide area away from trees, buildings and power lines.",
      "Don't reuse a bottle that is scratched, dented or has been left in the sun.",
    ],
    ad: "PET Bottle Water Rocket",
    ozet: "A rocket that climbs tens of meters on compressed air and water.",
  },
  "nrf-kumanda": {
    adimlar: [
      ["Library", "Install the 'RF24' library (TMRh20) in the Arduino IDE."],
      [
        "nRF24 wiring",
        "On both sides: VCC→3.3V (NOT 5V), GND→GND, CE→7, CSN→8, SCK→13, MOSI→11, MISO→12. Fit a 10 µF capacitor across VCC-GND.",
      ],
      ["Transmitter", "Joystick X→A0, Y→A1. Leave the VERICI line at the top of the code enabled and upload."],
      ["Receiver", "Servos on pins 3 and 5. Delete the 'define VERICI' line and upload to the second Arduino."],
      ["Test", "When you move the joystick, the servos should follow."],
    ],
    ipuclari: ["If the link drops, it's usually insufficient power; the capacitor and short wires fix it."],
    guvenlik: ["An nRF24 module is damaged if powered with 5V; always use 3.3V."],
    ad: "Wireless Remote with Two Arduinos",
    ozet: "Wireless control from a joystick to a servo with nRF24L01 modules.",
  },
  "rc-yelkenli": {
    adimlar: [
      [
        "Hull and keel",
        "Make the hull and fit a deep keel underneath with a lead weight at its tip; this is what keeps the boat upright.",
      ],
      ["Waterproofing", "Coat the hull with epoxy or waterproof paint."],
      ["Mast and sail", "Fix the mast to the deck and attach the sail to the mast and boom."],
      ["Servos", "Connect the sail servo to the boom with line and the rudder servo to the rudder."],
      ["Trial", "Try it in a light breeze close to shore."],
    ],
    ipuclari: ["Balancing keel weight and mast height stops the boat capsizing; do a heel test in a basin first."],
    guvenlik: [
      "Keep the electronics in a lidded compartment that stays dry.",
      "If the boat drifts out, don't go into the water after it.",
      "Don't touch resin and hardener with bare hands; use nitrile gloves. Repeated contact can cause a permanent allergy.",
      "Work with resin in a ventilated area; don't sleep or eat near curing resin.",
      "Wash your hands after handling lead weights; keep lead away from small children and never put it in your mouth.",
      "Seal the lead in the keel with paint or a coating; wash your hands after touching lead.",
    ],
    ad: "Mini RC Sailboat",
    ozet: "A 50 cm sailboat driven by the wind with a sail servo and rudder.",
  },
  "rc-led-far": {
    adimlar: [
      ["Drill the holes", "Drill 5 mm holes in the body at the headlight and brake light positions."],
      ["LED + resistor", "Solder a 150 Ω resistor to the long leg of each LED."],
      ["Wire in parallel", "Wire all LED branches in parallel: resistor ends to the + wire, short legs to the – wire."],
      ["Insulate", "Cover all solder joints with heat-shrink tubing."],
      [
        "Connect",
        "Use the + (red) and – (black/brown) leads of a servo extension and plug it into a free receiver channel.",
      ],
    ],
    ipuclari: ["The lights stay on whenever the receiver is on; they also make the car easy to find in the dark."],
    guvenlik: ["The soldering iron tip is very hot; keep it on its stand and solder in a ventilated area."],
    ad: "LED Headlights and Brake Lights for an RC Car",
    ozet: "Front headlights and rear brake LEDs powered from a free receiver channel.",
  },
  "rc-rampa": {
    adimlar: [
      ["Ramp surface", "Cut the plywood to 60×40 cm and chamfer the front edge thin."],
      ["Leg", "Cut a two-step support leg from the batten; cut notches for different heights."],
      ["Hinge", "Attach the leg under the ramp with a hinge."],
      ["Surface", "Stick non-slip tape on top of the ramp."],
    ],
    ipuclari: ["Start with a low angle; increase it once you see how the car lands."],
    guvenlik: [
      "Don't jump toward people or animals; the landing area must be clear.",
      "Wear safety goggles when cutting, drilling and grinding; secure the workpiece with a vise or clamp, not your hand.",
    ],
    ad: "RC Car Jump Ramp",
    ozet: "A folding plywood jump ramp with adjustable angle.",
  },
  "servo-test": {
    adimlar: [
      ["Potentiometer", "Connect its ends to 5V and GND and its middle leg to A0."],
      ["Button", "Connect the button between pin 2 and GND (the internal pull-up is used)."],
      [
        "Servo",
        "Signal → pin 9. Power small servos from the Arduino 5V and large ones from an external 5V; grounds shared.",
      ],
      ["Code", "The potentiometer turns the servo; while the button is held the servo goes to exact center (90°)."],
    ],
    ipuclari: [
      "Centering new servos before installing them in the plane and fitting the horn there makes setup much easier.",
    ],
    guvenlik: ["Don't power large servos from the Arduino's 5V output; the board can be damaged."],
    ad: "Potentiometer Servo Tester",
    ozet: "A device for testing servos without a transmitter and finding their center point.",
  },
};
