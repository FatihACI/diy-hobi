import type { ProjeCeviri } from "../../ceviri";

export const EN_BISIKLET: Record<string, ProjeCeviri> = {
  "ic-lastik": {
    adimlar: [
      [
        "Remove the wheel",
        "If removing the rear wheel, first shift to the smallest rear cog. Turn the bike upside down or hang it on a stand. With V-brakes, unhook the cable from the brake; with disc brakes, do nothing. Open the quick release or loosen the nuts with a wrench and remove the wheel; on the rear, lift the chain off the cog by hand.",
        "The wheel is off the bike and the chain and brake cable aren't damaged.",
      ],
      [
        "Remove the tire",
        "Take off the valve cap and let all the air out (on a Presta valve, loosen the small nut at the tip and press). Push the tire into the center of the rim all the way round. Opposite the valve, insert a lever between tire and rim, lift the tire over the rim and hook the lever on a spoke. Repeat with a second lever 10 cm away, then slide the lever along the rim. Pull out the tube, taking the valve out last.",
        "One side of the tire is outside the rim and the tube is fully out.",
      ],
      [
        "Find the hole",
        "Inflate the tube slightly. Listen for hissing with your ear close; if you can't find it, dip it section by section in a container of water; where bubbles come out is the hole. Mark the hole with a pen. Lay the tube next to the rim lined up by the valve hole; check the point on the tire that matches the hole.",
        "The hole is marked and its matching spot on the tire is known.",
      ],
      [
        "Check the tire",
        "Slowly run a folded cloth around the inside of the tire; the cloth catches on glass or wire and your finger won't get cut. Push out whatever is stuck in it with pliers from the outside. Also check the rim tape covers all the spoke holes.",
        "Nothing is left stuck in the tire and the rim tape is in place.",
      ],
      [
        "Patch",
        "Roughen the area around the hole, slightly larger than the patch, with sandpaper. Apply a thin layer of glue and wait until it loses its shine and looks matte (3–5 min). Remove the patch's backing foil, place it and press firmly from the center outward for 1 minute.",
        "The patch edges don't lift; when the tube is slightly inflated and dipped in water, no bubbles come out.",
      ],
      [
        "Fit the tube",
        "Inflate the tube just enough to take a round shape. Put the valve through the rim hole first, then tuck the tube inside the tire. Push the tire onto the rim by hand starting opposite the valve, doing the valve area last. Don't use levers; you can pinch the tube between rim and lever and puncture it again.",
        "The tire is on the rim all the way round; pushing the sides, no pinched tube shows underneath and the valve stands straight.",
      ],
      [
        "Inflate, fit the wheel and test the brakes",
        "Inflate to the pressure printed on the tire sidewall; don't exceed the maximum. Fit the wheel and close the quick release or tighten the nuts. Reattach the brake cable. Spin the wheel to check for wobble and rubbing, then before riding squeeze both brakes and push the bike to test them.",
        "The pressure is correct, the wheel spins true and both brakes stop the bike fully.",
      ],
    ],
    ipuclari: [
      "Try not to use levers when fitting the tire; they can pinch the tube and puncture it again.",
      "The correct pressure is printed on the tire sidewall (bar or PSI).",
    ],
    guvenlik: [
      "Don't exceed the maximum pressure printed on the tire sidewall.",
      "Always check the brakes work after refitting the wheel.",
    ],
    ad: "Repairing and Replacing a Flat Inner Tube",
    ozet: "Removing the tire, finding the hole, patching or fitting a new tube.",
    sikHatalar: [
      "The new tube went flat straight away: the object stuck in the tire wasn't removed. Run a cloth around the inside of the tire.",
      "It punctured again while fitting: the lever pinched the tube. Fit the last section by hand.",
      "The patch didn't hold: the patch was pressed on before the glue dried. Wait until it looks matte.",
      "The brake doesn't work: the V-brake cable wasn't reattached. Always test the brakes before riding.",
    ],
  },
  "zincir-bakim": {
    adimlar: [
      [
        "Measure wear",
        "Put the chain checker on the chain. If the checker drops in fully, the chain has stretched: replace at 0.5% on 11–12 speed systems and at 0.75% on 10 speed and below. A stretched chain wears the cogs too; replacing the chain in time saves the cogs.",
        "The checker doesn't drop in at the limit; if it does, you've decided to replace the chain.",
      ],
      [
        "Prepare",
        "Lay newspaper or cardboard under the bike. If you have disc brakes, wrap the rotors in a clean cloth or plastic; cleaner and lube ruin the rotors. Shift the rear to a middle cog.",
        "The floor is protected and the brake rotors are wrapped.",
      ],
      [
        "Clean",
        "Spray degreaser on the chain while pedaling backward. Scrub between the links and the side plates with a brush. Brush the dirt off the rear cogs and front chainrings too.",
        "No black clumps of dirt remain between the links.",
      ],
      [
        "Rinse and dry",
        "Rinse the chain with a little water; don't use a pressure washer, water gets into the bearings. Wipe the chain by gripping it in a dry cloth while pedaling, then let it dry for 15 minutes. Lube won't stick to a wet chain.",
        "The cloth stays clean when wiping and the chain feels dry.",
      ],
      [
        "Lubricate",
        "While pedaling backward, drip one drop of lube on each roller on the lower run of the chain. Stop after one full revolution. Pedal a few turns and shift gears a few times; the lube works in.",
        "Each link got one drop of lube and the chain runs quietly.",
      ],
      [
        "Wipe off the excess and test",
        "Wait 5–10 minutes, then wipe the outside of the chain firmly with a dry cloth; lube should stay inside, as on the outside it collects dust. Remove the covers from the rotors and check no lube got on them. Test the gears and brakes on a short ride.",
        "The outside of the chain isn't oily but it runs quietly; gears shift and brakes hold firmly.",
      ],
    ],
    ipuclari: ["Use dry lube in dry weather and wet lube in rainy weather."],
    guvenlik: ["Make sure lube doesn't get on the rims or brake rotors; it reduces braking power."],
    ad: "Cleaning and Lubricating the Chain",
    ozet: "Chain care for quiet, long-lasting shifting.",
    sikHatalar: [
      "The chain turned black within days: the excess lube wasn't wiped off. Always wipe the outside after lubing.",
      "The brake squeals and doesn't hold: lube got on the rotor. Clean the rotor with alcohol; if the pads absorbed oil, replace them.",
      "The chain is still noisy: lube was only sprayed on the outer plates. Drip it on the rollers.",
      "The lube didn't stick at all: the chain was lubed while wet. Wait until it's completely dry.",
    ],
  },
  "fren-ayari": {
    adimlar: [
      ["Check wear", "If the grooves on the pad have disappeared, replace it."],
      [
        "Remove the old one",
        "Squeeze the brake arms to unhook the cable noodle, loosen the pad nut with an Allen key and remove the pad.",
      ],
      [
        "Fit the new one",
        "Position the new pad at a height where it sits fully on the rim braking surface and doesn't touch the tire.",
      ],
      [
        "Set the angle",
        "Leave a 1 mm gap at the rear of the pad while the front touches the rim (toe-in); it prevents squealing.",
      ],
      ["Cable tension", "Turn the cable adjuster so the pads sit 1–2 mm from the rim."],
      [
        "Test",
        "Squeeze the brake lever; the brake should grip fully before the lever touches the handlebar. Test at low speed first.",
      ],
    ],
    ipuclari: ["Cleaning the rim surface with alcohol noticeably increases braking power."],
    guvenlik: [
      "After adjusting the brakes, test in an empty, safe area before riding in traffic.",
      "If you're unsure, have a bike shop check it; brakes are a vital part.",
      "Alcohol and solvents ignite easily; use them away from flames in a ventilated area.",
    ],
    ad: "Replacing and Adjusting V-Brake Pads",
    ozet: "Renewing worn pads and setting the brake at the right angle.",
  },
  "surus-oncesi-kontrol": {
    adimlar: [
      ["Air", "Check tire pressure against the value on the sidewall."],
      [
        "Brakes",
        "Squeeze the brakes and push the bike; it shouldn't roll, and the levers shouldn't touch the handlebar.",
      ],
      ["Chain", "Check the chain is clean, lubed and not rusty."],
      ["Fastenings", "Check the quick releases are closed and the handlebar is secure."],
    ],
    ipuclari: ["Lift the bike 10 cm and drop it; if anything rattles, check the fastenings."],
    guvenlik: [
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "2-Minute Pre-Ride Check",
    ozet: "The Air-Brakes-Chain (ABC) checklist.",
  },
  "lastik-basinci": {
    adimlar: [
      ["Limits", "Read the min-max pressure values on the tire sidewall."],
      [
        "Starting point",
        "On a city tire start in the middle of the range; give the rear a little more than the front.",
      ],
      ["Presta", "On a Presta valve, loosen the top nut and press briefly, then attach the pump."],
      ["Fine-tune", "Adjust in 0.2 bar steps according to how it rides."],
    ],
    ipuclari: ["Tires can lose 0.5–1 bar a week; check regularly."],
    guvenlik: ["Don't exceed the maximum pressure on the tire; it can burst."],
    ad: "Correct Tire Pressure",
    ozet: "Setting pressure for your weight, tire width and surface.",
  },
  "vites-ayari": {
    adimlar: [
      ["Limits", "Check the H and L screws so the chain doesn't fall off at the smallest and largest cogs."],
      ["Cable", "Check cable tension while in the smallest cog."],
      [
        "Fine-tune",
        "If it won't shift up a gear, turn the barrel adjuster a quarter turn counterclockwise; if it shifts down slowly, turn it the other way.",
      ],
      ["Test", "Try every gear one by one while pedaling."],
    ],
    ipuclari: ["The barrel adjuster is the most common adjustment; the limit screws are rarely touched."],
    guvenlik: [
      "Keep your fingers away from the chain and cogs while pedaling.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Rear Derailleur Adjustment",
    ozet: "Fixing skipping or slow shifts with the adjustment screws.",
  },
  "zincir-asinma-degisim": {
    adimlar: [
      ["Measure", "Fit the wear checker; replace at 0.5% (11 speed and up) or 0.75%."],
      ["Count", "Shorten the new chain to the same number of links as the old one."],
      ["Fit", "Route the chain through the derailleur along the correct path."],
      ["Join", "Fit the quick link and press on the pedal to seat it."],
    ],
    ipuclari: [
      "A chain replaced in time protects the cogs too; leave it too late and the cassette has to be replaced as well.",
    ],
    guvenlik: [
      "Keep the chain breaker straight; pushing the pin crooked weakens the chain.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Measuring Chain Wear and Replacing the Chain",
    ozet: "Measuring a stretched chain and replacing it with a chain breaker.",
  },
  "disk-balata": {
    adimlar: [
      ["Check", "If the pad thickness is below 1 mm, replace them."],
      ["Remove", "Remove the wheel, pull the retaining pin and take out the pads."],
      ["Push back the pistons", "Push the pistons back straight with a plastic lever."],
      ["Fit", "Fit the new pads with the spring, refit the pin and put the wheel back."],
      ["Bed in", "Bed in the pads with 20–30 controlled stops from medium speed."],
    ],
    ipuclari: ["Don't touch the pads and rotor with oily hands; braking power drops."],
    guvenlik: [
      "No oil or chain spray must get on the rotor and pads; if it does, clean with alcohol and replace the pads.",
      "The rotor is very hot right after riding; don't touch it.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
      "Alcohol and solvents ignite easily; use them away from flames in a ventilated area.",
    ],
    ad: "Replacing Disc Brake Pads",
    ozet: "Replacing worn disc brake pads with new ones.",
  },
  "hidrolik-fren-hava": {
    adimlar: [
      ["Check the fluid", "Check whether the brake uses mineral oil or DOT; never mix them."],
      ["Prepare", "Remove the pads, fit the bleed block and bring the lever level."],
      ["Push", "Push fluid up from the bottom with a syringe, carrying air bubbles into the cup at the top."],
      ["Close", "When no bubbles remain, close the screws and clean up."],
      ["Test", "The lever should be firm and consistent; if not, repeat the process."],
    ],
    ipuclari: ["If it's your first time, follow the manufacturer's video guide step by step."],
    guvenlik: [
      "DOT fluid damages paint and irritates skin; wear gloves and goggles.",
      "If you're unsure, have a bike shop do it; brakes are a vital system.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Bleeding Hydraulic Brakes",
    ozet: "Removing air bubbles from a spongy hydraulic brake.",
  },
  "sele-yukseklik": {
    adimlar: [
      ["Measure", "With your heel on the pedal at the bottom of the stroke, your leg should be straight."],
      ["Adjust", "Loosen the seatpost clamp and set the height."],
      ["Minimum mark", "Make sure the 'min insert' mark on the seatpost isn't showing."],
      ["Tighten", "Tighten the clamp to the specified torque and mark the height with tape."],
    ],
    ipuclari: [
      "When riding normally, with the ball of your foot on the pedal at the bottom, your knee stays slightly bent.",
    ],
    guvenlik: [
      "Don't raise the seatpost above the minimum insert mark; it can break.",
      "Don't exceed the manufacturer's torque on carbon parts; use a torque wrench if possible.",
    ],
    ad: "Saddle Height and Position",
    ozet: "Finding the right saddle height to prevent knee pain.",
  },
  "gidon-bandi": {
    adimlar: [
      ["Remove", "Remove the old tape and plugs and clean off sticky residue."],
      ["Start", "Start at the bar end and wrap from inside to outside, overlapping by half the tape width."],
      ["Lever", "Wrap around the brake lever body in a figure eight."],
      ["Finish", "Cut the tape at an angle at the top, secure with finishing tape and fit the plugs."],
    ],
    ipuclari: ["If the wrap direction matches the way your hands pull, the tape won't loosen."],
    guvenlik: [
      "Never leave the bar ends without plugs; an open tube causes injury in a crash.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Wrapping Road Bike Bar Tape",
    ozet: "Replacing worn handlebar tape with new tape.",
  },
  "jant-ayari": {
    adimlar: [
      ["Mark", "Attach a cable tie to the frame to find where the rim wobbles."],
      [
        "Adjust",
        "If the rim pulls to the right at that point, tighten the left spoke a quarter turn and loosen the right one a quarter turn.",
      ],
      ["Repeat", "Continue in small steps until the wobble is under 1 mm."],
      ["Check", "Compare spoke tension by squeezing; no spoke should be very loose."],
    ],
    ipuclari: ["Don't adjust more than a quarter turn; the rim will pull the other way."],
    guvenlik: [
      "If the rim is broken or many spokes are loose, take it to a shop.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Truing a Wheel",
    ozet: "Straightening a wobbly rim with a spoke wrench.",
  },
  "pedal-degisimi": {
    adimlar: [
      ["Learn the direction", "The right pedal has a normal thread; the left pedal has a reverse thread."],
      ["Remove", "Both pedals loosen by turning toward the back of the bike."],
      ["Grease", "Grease the threads of the new pedals."],
      ["Fit", "Watching the L and R marks, tighten by turning toward the front of the bike."],
    ],
    ipuclari: ["Working with the chain on the big chainring keeps your hand off the teeth if the wrench slips."],
    guvenlik: [
      "Forcing the wrong pedal damages the crank threads.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Changing Pedals (Watch the Reverse Thread)",
    ozet: "Removing and fitting pedals in the correct direction.",
  },
  "fren-kablosu-degisimi": {
    adimlar: [
      ["Remove", "Loosen the cable fixing bolt on the brake and pull the old cable out of the lever."],
      ["Housing", "Cut the housing to the same length as the old one and square off the ends."],
      ["Fit", "Thread the new cable through the lever and run it to the brake."],
      ["Tension", "Press the brake shoes against the rim to tension the cable, tighten the bolt and fit an end cap."],
    ],
    ipuclari: ["Cut the housing with a cable cutter; pliers crush the inside of the housing."],
    guvenlik: [
      "Make sure the brake shoes sit on the rim, not the tire.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Replacing a Brake Cable (V-Brake)",
    ozet: "Replacing a rusty or broken brake cable.",
  },
  "tubeless-donusum": {
    adimlar: [
      ["Compatibility", "Confirm the rim and tire are 'tubeless ready'."],
      ["Tape", "Clean the rim and apply the tape taut and bubble-free."],
      ["Tire", "Fit the valve, mount one side of the tire on the rim and add the sealant."],
      ["Seat", "Seat the tire in the rim bead with a fast blast of air until it pops into place."],
      ["Spread", "Spin the wheel to spread the sealant and check the pressure the next day."],
    ],
    ipuclari: ["Refresh the sealant every 3–6 months; it dries out."],
    guvenlik: [
      "Don't try to seat the tire by exceeding its maximum pressure.",
      "If sealant gets in your eyes, rinse with plenty of water.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Tubeless Conversion",
    ozet: "Switching to a tubeless system with compatible rims and tires.",
  },
  "kaset-temizligi": {
    adimlar: [
      ["Remove", "Remove the rear wheel."],
      ["Apply", "Spray degreaser on the cassette and leave for 5 min."],
      ["Scrub", "Brush between the teeth and clean the derailleur pulleys with a cloth."],
      ["Rinse and dry", "Rinse with a little water, dry and lube the chain."],
    ],
    ipuclari: ["A clean drivetrain noticeably improves shifting."],
    guvenlik: [
      "Don't get degreaser on the rotor and brake pads.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Cleaning the Cassette and Derailleur",
    ozet: "Cleaning a drivetrain clogged with oil and mud.",
  },
  "bisiklet-isik-montaji": {
    adimlar: [
      ["Front", "Mount the front light on the handlebar angled slightly down so it doesn't dazzle oncoming traffic."],
      ["Rear", "Mount the rear light on the seatpost at a height visible from behind."],
      ["Reflectors", "Check the wheel and pedal reflectors."],
      ["Mode", "Use flashing mode by day and steady mode at night."],
    ],
    ipuclari: ["A reflective vest or tape greatly increases visibility."],
    guvenlik: ["Don't ride at night without lights; check the lights' charge before every ride."],
    ad: "Mounting Front and Rear Lights and Reflectors",
    ozet: "Positioning lights and reflectors correctly for night riding.",
  },
  "bisiklet-yikama": {
    adimlar: [
      ["Pre-rinse", "Soften the mud with low-pressure water or a sponge."],
      ["Wash", "Wash from top to bottom with a soapy sponge."],
      ["Rinse", "Rinse at low pressure."],
      ["Dry and lube", "Dry with a cloth and lube the chain."],
    ],
    ipuclari: ["Test the brakes a few times after washing; wet brakes are weak at first."],
    guvenlik: ["Don't aim a pressure washer at the bearings and hubs; it strips out the grease."],
    ad: "Washing a Bike",
    ozet: "Cleaning the bike without getting water into the bearings.",
  },
  "kis-depolama": {
    adimlar: [
      ["Clean", "Clean and dry the bike."],
      ["Lubricate", "Lube the chain and moving parts."],
      ["Tires", "Inflate the tires to normal pressure or store the bike hanging."],
      ["Store", "Store in a dry, damp-free place under a cover; remove battery-powered lights."],
    ],
    ipuclari: ["Store an e-bike battery at 50–70% charge at room temperature."],
    guvenlik: ["Don't let an e-bike battery freeze and never charge it unattended."],
    ad: "Winter Storage and Care",
    ozet: "Preparing a bike that won't be used for a long time.",
  },
  "dis-lastik-degisimi": {
    adimlar: [
      ["Size", "Read the size on the side of the old tire (e.g. 700×32c or 29×2.2)."],
      ["Remove", "Let the air out and remove the tire from the rim with levers."],
      ["Direction", "Fit the new tire following the rotation arrow on its side."],
      ["Fit", "Slightly inflate the tube, put it in, and push the tire onto the rim by hand."],
      ["Inflate", "Inflate, checking the line on the sidewall looks even all the way round the rim."],
    ],
    ipuclari: ["Slightly inflating the tube prevents lever pinches."],
    guvenlik: [
      "Don't use a metal screwdriver; it punctures the tube.",
      "Don't ride without checking the brakes and wheel fastenings after the job; do the first test ride in a traffic-free area.",
    ],
    ad: "Replacing a Tire",
    ozet: "Replacing a worn or split tire.",
  },
};
