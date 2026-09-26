/**
 * The order of operations. The numbering carries information here, because
 * each stage depends on the one before it, so it is shown rather than used
 * as decoration.
 */
export const processSteps: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Send photos and a detailed message",
    body: "Tell us the vehicle or furniture, its condition, and where it will be, plus a few photos if you can. The more we see up front, the more accurate the quote and the fewer surprises on the day.",
  },
  {
    n: "02",
    title: "You get a scope and a real price",
    body: "We come back with what the job actually needs, what it will cost, and how long it will take. If a smaller service gets you what you want, we say so.",
  },
  {
    n: "03",
    title: "Confirm water and power",
    body: "We need access to an outdoor water spigot and a standard electrical outlet at the address. We confirm that with you before booking, not on arrival, so nobody wastes a trip.",
  },
  {
    n: "04",
    title: "We arrive and set up",
    body: "Vacuums, extraction equipment, brushes and products come off the vehicle. Setup takes a few minutes and leaves your driveway usable around us.",
  },
  {
    n: "05",
    title: "The work you booked",
    body: "Interior extraction, exterior wash, or furniture cleaning, done properly rather than quickly. We treat stains and odors at the source instead of masking them.",
  },
  {
    n: "06",
    title: "Walkaround, then handover",
    body: "We go over the work with you before we leave: what came out, what did not, and why. Straight answers, no upsell for its own sake.",
  },
];
