import type { ProjeCeviri } from "../../ceviri";

export const EN_ELEKTRONIK: Record<string, ProjeCeviri> = {
  "trafik-lambasi": {
    adimlar: [
      [
        "Install the Arduino IDE and test the board",
        "Download and install the Arduino IDE from arduino.cc. Connect the Arduino via USB. From the Tools menu select Board: Arduino Uno and the correct Port. Upload File → Examples → Basics → Blink; the small LED on the board should blink. This way, if something goes wrong you'll know whether it's the board or the circuit.",
        "Blink uploaded and the 'L' LED on the board blinks once a second.",
      ],
      [
        "Get to know the breadboard and unplug USB",
        "Unplug the USB cable while building the circuit. On a breadboard the long rows along the edges (+ and −) are connected end to end; the 5-hole vertical columns in the middle are connected within themselves, and the center groove separates the two halves.",
        "USB is unplugged; you know which holes are connected.",
      ],
      [
        "Place the LEDs",
        "Insert three LEDs in the middle of the breadboard, one empty column apart: red, yellow, green. Each LED's long leg (+, anode) goes in one column and the short leg (−, cathode) in the next. Keep the short legs on the same side.",
        "All three LEDs have their short legs on the same side and each leg is in its own column.",
      ],
      [
        "Connect resistors and wires",
        "From each LED's long-leg column, run a 220 Ω resistor and plug its other end into an empty column. Run jumper wires from these columns to the Arduino: red → pin 8, yellow → pin 9, green → pin 10.",
        "Each LED has a resistor in front of it; wires go to pins 8, 9 and 10.",
      ],
      [
        "Connect the GND rail",
        "Connect each LED's short-leg column to the breadboard's − row with a short wire. Run a wire from the − row to the Arduino's GND pin. Trace the wires by eye once more.",
        "All three short legs connect to the − row and the − row goes to Arduino GND.",
      ],
      [
        "Upload the code",
        "Plug in USB. Paste the code from the Code tab into the IDE, check it with ✓ (Verify), then press → (Upload). When 'Done uploading' appears at the bottom, the LEDs start lighting in turn.",
        "Red 4 s, yellow 1 s, green 4 s, yellow 1 s light in order and the loop repeats.",
      ],
      [
        "Improve it",
        "Change the millisecond values in the code to adjust the timing and upload again. For a pedestrian crossing, connect a button between pin 2 and GND, add pinMode(2, INPUT_PULLUP) in setup and extend the red phase in loop when digitalRead(2) is LOW.",
        "After uploading, your change shows up in the LED timing.",
      ],
    ],
    ipuclari: ["If an LED doesn't light, it's in backwards; flip it."],
    guvenlik: [
      "Never connect an LED without a resistor; the LED and pin will be damaged.",
      "Unplug the USB cable while building the circuit.",
    ],
    ad: "Arduino Traffic Light",
    ozet: "Getting started with Arduino: a traffic light with 3 LEDs.",
    sikHatalar: [
      "One LED doesn't light: the LED is reversed. Pull it out and flip it; the long leg must go to the resistor.",
      "No LEDs light: GND isn't connected or wires aren't in the same column. Check the − row to Arduino GND connection.",
      "Upload error (port not found): Tools → Port isn't selected or the cable is charge-only. Select the port and use a data cable.",
      "LED is very dim: the resistor value is too high. Use 220 Ω (red-red-brown bands).",
    ],
  },
  "nem-sensoru": {
    adimlar: [
      ["Connect the sensor", "Sensor VCC → 5V, GND → GND, AOUT → A0."],
      ["Connect the alerts", "Buzzer (+) → pin 8, LED (through a resistor) → pin 13."],
      [
        "Calibrate",
        "Upload the code and open the Serial Monitor. Note the values with the sensor in air and in wet soil.",
      ],
      ["Set the threshold", "Set KURU_ESIK halfway between the two readings and upload again."],
      ["Install", "Push the sensor into the soil up to its line; don't get the electronics wet."],
    ],
    ipuclari: [
      "Capacitive sensors don't corrode; cheap resistive sensors rot within a few weeks.",
      "On a capacitive sensor, a higher value means drier soil.",
    ],
    guvenlik: ["Keep the sensor's upper electronics away from water."],
    ad: "Plant Soil Moisture Alarm",
    ozet: "A watering reminder that lights an LED and beeps when the soil dries out.",
  },
  "akvaryum-termometre": {
    adimlar: [
      ["Install libraries", "Arduino IDE → Library Manager: OneWire, DallasTemperature, LiquidCrystal I2C."],
      [
        "Connect the sensor",
        "Red → 5V, Black → GND, Yellow (data) → pin 2. Fit a 4.7 kΩ resistor between data and 5V.",
      ],
      ["Connect the LCD", "LCD I2C: VCC → 5V, GND → GND, SDA → A4, SCL → A5 (Uno)."],
      [
        "Upload the code",
        "If nothing appears on the screen, try LCD address 0x3F and turn the contrast screw on the I2C module.",
      ],
      [
        "Install",
        "Dip only the probe tip into the water; keep the Arduino and display away from the aquarium in a dry place.",
      ],
    ],
    ipuclari: ["The ideal range for tropical fish is usually 24–28 °C."],
    guvenlik: [
      "Keep the Arduino and wires away from water; only the waterproof probe goes in.",
      "Use only a low-voltage 5 V USB adapter.",
    ],
    ad: "Aquarium Digital Thermometer",
    ozet: "An aquarium temperature display with a waterproof sensor and LCD.",
  },
  "park-sensoru": {
    adimlar: [
      [
        "Place the sensor",
        "Unplug USB. Insert the HC-SR04 into the breadboard with its four legs in separate columns and its 'eyes' facing out. Note the names printed above the legs: VCC, Trig, Echo, GND.",
        "The sensor is seated firmly and each of the four legs is in its own column.",
      ],
      [
        "Connect the sensor",
        "Connect with jumper wires: VCC → 5V, GND → GND, Trig → pin 9, Echo → pin 10. Don't mix up VCC and GND; a reversed sensor heats up and can be damaged.",
        "All four wires are on the correct pins; VCC goes to 5V and GND to GND.",
      ],
      [
        "Connect the buzzer",
        "Connect the passive buzzer's + marked (usually longer) leg to pin 8 and the other to GND. A passive buzzer is needed because the code makes different tones with tone(); an active buzzer only beeps one tone.",
        "The buzzer's + leg is on pin 8, the other on GND.",
      ],
      [
        "Upload the code",
        "Plug in USB. Paste the code from the Code tab into the IDE, select the board and port from Tools, and press Upload. Wait for 'Done uploading'.",
        "Upload completed without errors; with nothing in front of the sensor, the buzzer is silent.",
      ],
      [
        "Test",
        "Slowly bring your hand or a book toward the sensor from 1 m away. Below 1 m the beeping should start and speed up as you get closer. Soft surfaces like fabric absorb sound; test with a hard surface.",
        "Beeping starts at 1 m and becomes almost continuous at 10 cm.",
      ],
      [
        "Box it and install",
        "Put the circuit in a small box and cut two holes for the sensor's eyes. Mount it on the garage wall at the height of the car's bumper with a clear view in front. Power it from a 5 V USB adapter instead of a computer.",
        "The sensor's eyes are exposed, cables aren't strained and it runs on the adapter.",
      ],
    ],
    ipuclari: ["The sensor measures from 2 cm to 4 m; soft surfaces (fabric) absorb sound."],
    guvenlik: ["This is a hobby project; don't use it in place of vehicle safety equipment."],
    ad: "Ultrasonic Parking Sensor",
    ozet: "A distance alarm with beeps that speed up as an obstacle gets closer.",
    sikHatalar: [
      "No beeping at all: Echo and Trig are swapped. It should be Trig → 9, Echo → 10.",
      "It beeps constantly and randomly: there's an obstacle in front or a loose wire. Clear the area and check the wires.",
      "The buzzer plays a single tone that doesn't change: an active buzzer was used. Use a passive buzzer.",
      "It doesn't measure far distances: the target is soft or angled. Use a hard surface square to the sensor.",
    ],
  },
  "led-yanip-sonme": {
    adimlar: [
      [
        "Arduino IDE",
        "Install the Arduino IDE on your computer, connect the board via USB and select the board and port from the Tools menu.",
      ],
      ["Circuit", "Connect the LED's long leg (+) to pin 9 through a resistor and the short leg to GND."],
      ["Upload", "Paste the code and press the Upload button."],
      ["Modify", "Change the delay values to adjust the speed."],
    ],
    ipuclari: ["A reversed LED won't light but won't be damaged; flip it and try again."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "First Circuit: Blinking LED",
    ozet: "Uploading your first program to an Arduino and blinking an LED.",
  },
  "butonlu-led": {
    adimlar: [
      ["Button", "Connect one side of the button to pin 2 and the other to GND (the internal pull-up will be used)."],
      ["LED", "Connect the LED to pin 9 through a resistor."],
      ["Upload", "Upload the code."],
      ["Try it", "Each press turns the LED on or off."],
    ],
    ipuclari: ["The short delay in the code prevents button 'bounce'."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "Toggle an LED with a Button",
    ozet: "A button circuit that toggles the LED with each press.",
  },
  "pot-led-parlaklik": {
    adimlar: [
      ["Pot", "Connect the pot's outer legs to 5V and GND and its middle leg to A0."],
      ["LED", "Connect the LED to PWM pin 9 through a resistor."],
      ["Upload", "Upload the code."],
      ["Watch", "Open the Serial Monitor to see the value being read."],
    ],
    ipuclari: ["analogRead works from 0–1023 and analogWrite from 0–255; map() converts between them."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "LED Brightness with a Potentiometer",
    ozet: "Adjusting LED brightness with PWM using a rotary potentiometer.",
  },
  "ldr-gece-lambasi": {
    adimlar: [
      [
        "Voltage divider",
        "Connect one end of the LDR to 5V and the other to A0; also connect A0 to GND through 10 kΩ.",
      ],
      ["LEDs", "Connect the LEDs to pin 9."],
      ["Threshold", "Read the light and dark values in the Serial Monitor and set ESIK between them."],
      ["Enclose", "Place the circuit in a jar or box."],
    ],
    ipuclari: ["Position the LDR so it can't see the LED's light, otherwise the lamp will flicker on and off."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "Light-Sensing Night Light",
    ozet: "An LED that turns on by itself when it gets dark.",
  },
  "servo-kontrol": {
    adimlar: [
      ["Servo", "Connect the brown wire to GND, red to 5V and orange to pin 9."],
      ["Pot", "Connect the pot's middle leg to A0 and its outer legs to 5V and GND."],
      ["Upload", "Upload the code."],
      ["Try it", "Turn the pot to rotate the servo between 0–180°."],
    ],
    ipuclari: ["Use a separate 5 V supply for large servos; connect the grounds together."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
      "Unplug the USB cable before changing connections; a short circuit can damage the board.",
    ],
    ad: "Servo Motor with a Potentiometer",
    ozet: "A servo that turns to match the angle as you turn the pot.",
  },
  "rgb-led-renk": {
    adimlar: [
      ["Connect", "Connect the longest leg to GND and the other three legs to pins 9, 10 and 11 through resistors."],
      ["Upload", "Upload the code."],
      ["Color", "Watch the smooth fades between red, green and blue."],
      ["Diffuser", "Cover the LED with a ping-pong ball or frosted paper."],
    ],
    ipuclari: ["If you're using a common-anode LED, connect the long leg to 5V and subtract the values from 255."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "RGB LED Color Fade",
    ozet: "Smooth color fades with a common-cathode RGB LED.",
  },
  "buzzer-melodi": {
    adimlar: [
      ["Buzzer", "Connect the buzzer's + to pin 8 and − to GND."],
      ["Button", "Connect the button between pin 2 and GND."],
      ["Upload", "Upload the code; pressing the button plays the melody."],
      ["Compose", "Change the NOTALAR array to write your own melody."],
    ],
    ipuclari: ["An active buzzer makes a single tone; a melody needs a passive buzzer."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "Playing a Melody with a Buzzer",
    ozet: "A simple music box that plays a sequence of notes on a passive buzzer.",
  },
  "reaksiyon-oyunu": {
    adimlar: [
      ["Connect", "Connect the LED to pin 9 and the button between pin 2 and GND."],
      ["Upload", "Upload the code and open the Serial Monitor at 9600 baud."],
      ["Play", "The LED lights at a random moment; press the button as fast as you can."],
      ["Cheat check", "If you press before the LED lights, you get a 'pressed too early' warning."],
    ],
    ipuclari: ["Average human reaction time is around 200–300 ms."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "Reaction Time Game",
    ozet: "A game that measures in milliseconds how fast you press the button when the LED lights.",
  },
  "hareket-alarmi": {
    adimlar: [
      ["PIR", "Connect VCC to 5V, GND to GND and OUT to pin 2."],
      ["Alert", "Connect the buzzer to pin 8 and the LED to pin 9."],
      ["Warm-up", "Wait 30–60 seconds for the sensor to learn the room."],
      ["Adjust", "Set sensitivity and duration with the screws on the sensor."],
    ],
    ipuclari: [
      "PIR sensors can falsely trigger through windows and from heat sources; choose the position accordingly.",
    ],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "PIR Motion Alarm",
    ozet: "An alarm that beeps and lights an LED when someone enters the room.",
  },
  "lcd-sicaklik": {
    adimlar: [
      ["Library", "Install the 'DHT sensor library' and 'LiquidCrystal I2C' libraries from the Arduino IDE."],
      ["LCD", "Connect the I2C module's SDA to A4, SCL to A5, and VCC and GND."],
      ["Sensor", "Connect the DHT11's DATA pin to pin 2."],
      ["Address", "If no text appears, change the 0x27 address in the code to 0x3F and turn the contrast screw."],
    ],
    ipuclari: ["Read the DHT11 once every 2 seconds; reading more often gives bad values."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "LCD Temperature and Humidity Display",
    ozet: "Showing DHT11 sensor readings on a 16×2 LCD.",
  },
  "su-seviye-alarmi": {
    adimlar: [
      ["Sensor", "Connect the sensor's + to pin 7 (powered only while measuring), − to GND and S to A0."],
      ["Buzzer", "Connect the buzzer to pin 8."],
      ["Threshold", "Read the dry and wet values in the Serial Monitor and set ESIK."],
      ["Install", "Place the sensor near the floor and the circuit high up in a dry place."],
    ],
    ipuclari: ["Powering the sensor only when measuring slows down corrosion."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
      "If there's water near electrical sockets, switch off the breaker first; deal with the water, not the circuit.",
    ],
    ad: "Water Leak Alarm",
    ozet: "An alarm that sounds when it detects water under a washing machine or sink.",
  },
  "akilli-saksi-pompa": {
    adimlar: [
      ["Sensor", "Connect the moisture sensor to A0 and push it into the soil."],
      ["Pump", "Connect the pump to 5V through a relay/MOSFET module; connect the module's control pin to pin 7."],
      ["Calibrate", "Read the dry and wet soil values and set the KURU threshold."],
      ["Test", "Confirm that the pump runs briefly (2 s) and then waits."],
    ],
    ipuclari: ["Capacitive sensors don't corrode; cheap resistive sensors fail within a few weeks."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
      "Put the electronics beside the water reservoir, not above it, where water can't splash.",
    ],
    ad: "Automatic Plant Watering",
    ozet: "A system that waters by itself with a mini pump when the soil dries out.",
  },
  "elektronik-zar": {
    adimlar: [
      ["LEDs", "Connect 6 LEDs with resistors to pins 3–8."],
      ["Button", "Connect the button between pin 2 and GND."],
      ["Upload", "Upload the code."],
      ["Roll", "When you press the button the LEDs spin briefly, then show the result."],
    ],
    ipuclari: ["Reading an unconnected analog pin for randomSeed gives a different result on every power-up."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "Electronic Dice",
    ozet: "Dice that shows a random number from 1–6 with LEDs at the press of a button.",
  },
  "sicaklik-fan": {
    adimlar: [
      ["Sensor", "Connect the TMP36's left leg to 5V, middle leg to A0 and right leg to GND."],
      ["Fan", "Drive the fan through a MOSFET module; connect the module's signal pin to pin 3."],
      ["Diode", "Connect a diode in reverse across the fan terminals; it absorbs the motor's back voltage."],
      ["Adjust", "Change the BASLA and TAM temperatures in the code to suit you."],
    ],
    ipuclari: ["Never connect a fan directly to an Arduino pin; a pin supplies at most 20 mA."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
      "Unplug the USB cable before changing connections; a short circuit can damage the board.",
      "Keep your fingers out of the fan blades.",
    ],
    ad: "Temperature-Controlled Fan",
    ozet: "Controlling a 5 V fan that speeds up as the room warms.",
  },
  "kapi-alarmi": {
    adimlar: [
      ["Sensor", "Connect the reed switch terminals to pin 2 and GND."],
      ["Buzzer", "Connect the buzzer to pin 8."],
      ["Mount", "Stick the sensor on the frame and the magnet on the door, facing each other less than 1 cm apart."],
      ["Test", "The buzzer sounds when the door opens."],
    ],
    ipuclari: ["If the magnet stays more than 1–2 cm from the sensor, it will always read as open."],
    guvenlik: [
      "Power the circuit only from USB or a battery (5–9 V); never build anything connected to mains (220 V) voltage.",
    ],
    ad: "Magnetic Door / Cabinet Alarm",
    ozet: "An alarm with a reed (magnetic) switch that alerts when the door opens.",
  },
  "lehim-baslangic": {
    adimlar: [
      ["Preparation", "Set the iron to 330–350 °C and keep the tip tinned and clean."],
      [
        "Place",
        "Starting with the lowest parts (resistors), insert parts into the board and bend their legs slightly to hold them.",
      ],
      [
        "Solder",
        "Heat the pad and leg together with the iron for 2 seconds, touch the solder to the joint; pull away when a shiny cone forms.",
      ],
      ["Trim", "Cut the excess legs with cutters."],
      ["Check", "Check polarity (LED, electrolytic capacitor, IC) and insert the battery."],
    ],
    ipuclari: ["A good joint is shiny and volcano-shaped; if it sits like a ball, the pad wasn't hot enough."],
    guvenlik: [
      "The iron tip is 350 °C; leave it on its stand, ventilate so you don't breathe solder fumes and wash your hands afterward.",
      "Point parts away from your eyes when trimming legs; wear goggles.",
    ],
    ad: "First Soldering: LED Kit Assembly",
    ozet: "Building a blinking LED kit by soldering onto a circuit board.",
  },
};
