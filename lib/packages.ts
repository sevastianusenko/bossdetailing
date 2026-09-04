/**
 * ─────────────────────────────────────────────────────────────────────────
 *  PLACEHOLDER PRICING. MUST BE CONFIRMED BY THE CLIENT BEFORE LAUNCH.
 *  Reduced 10 percent on 2026-09-03 at the client''s request. Size
 *  surcharges were left unchanged.
 *
 *  The client has not supplied a price list. Every dollar figure below is a
 *  market-rate estimate for mobile detailing in the Vancouver WA / Portland
 *  OR metro, chosen so the page structure and layout are correct. They are
 *  NOT quotes from Boss Auto Detailing.
 *
 *  All numbers live in this one file. Replace `fromPrice` and
 *  `sizeSurcharge` here and the whole site updates. See HANDOFF.md.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const PRICING_IS_PLACEHOLDER = true;

export type Pkg = {
  slug: string;
  name: string;
  /** One line on who this is for. */
  positioning: string;
  fromPrice: number;
  duration: string;
  /** Marked as the most-booked tier. */
  featured?: boolean;
  summary: string;
  includes: string[];
  /** Explicitly not in this tier, so a buyer can self-qualify upward. */
  excludes?: string[];
};

export const packages: Pkg[] = [
  {
    slug: "maintenance",
    name: "Maintenance",
    positioning: "For a car that is already in good shape and you intend to keep that way.",
    fromPrice: 169,
    duration: "2-3 hours",
    summary:
      "The recurring visit. Safe hand wash, wheels done properly, interior reset, booked on an interval so the car never gets far enough gone to need rescuing.",
    includes: [
      "Foam pre-soak and two-bucket contact wash",
      "Wheel faces, barrels and tires by hand",
      "Wheel wells flushed and dressed",
      "Exterior glass and hand-applied sealant",
      "Full interior vacuum including seat rails and seams",
      "Hard surfaces wiped, vents and console detailed",
      "Interior glass, streak-free",
      "Door and trunk jambs",
    ],
    excludes: [
      "Carpet and upholstery extraction",
      "Paint decontamination or polishing",
    ],
  },
  {
    slug: "signature",
    name: "Signature Detail",
    positioning: "The full reset, inside and out. Our most-booked service.",
    fromPrice: 349,
    duration: "5-8 hours",
    featured: true,
    summary:
      "Everything in Maintenance, plus the two stages that actually change how a car looks and smells: hot-water extraction inside, and full chemical and clay decontamination outside.",
    includes: [
      "Everything in the Maintenance package",
      "Hot-water extraction of carpets and cloth seating",
      "Steam cleaning of hard trim, console and jambs",
      "Leather clean and condition, matte finish",
      "Odor source identification and extraction",
      "Chemical iron and fallout decontamination",
      "Clay treatment on bonded contaminants",
      "Trim restoration on faded exterior plastics",
      "Durable paint sealant, hand applied",
    ],
    excludes: ["Machine polishing or defect removal", "Ceramic coating"],
  },
  {
    slug: "correction-coating",
    name: "Correction & Coating",
    positioning: "For dark paint, resale value, or a car you plan to keep.",
    fromPrice: 1159,
    duration: "2-4 days",
    summary:
      "Machine correction to remove swirls and wash marring from the clear coat, then a ceramic coating over the corrected finish so the result is locked in rather than washed away.",
    includes: [
      "Everything in the Signature Detail",
      "Paint thickness readings recorded before work begins",
      "Inspection under raking light, defect map by panel",
      "Test spot approved with you before the full car is started",
      "Machine cut and refinement, panel by panel",
      "Oil-stripping wipe-down before protection",
      "Hand-leveled ceramic coating under controlled light",
      "Written aftercare and a maintenance schedule",
      "Follow-up inspection after the first month",
    ],
    excludes: ["Body shop work: deep scratches through the clear coat, dents, repaints"],
  },
];

export type SizeTier = {
  label: string;
  examples: string;
  /** Added to every `fromPrice` above. */
  surcharge: number;
};

export const sizeTiers: SizeTier[] = [
  {
    label: "Coupe & Sedan",
    examples: "Civic, Camry, 3 Series, Model 3",
    surcharge: 0,
  },
  {
    label: "Crossover & Mid SUV",
    examples: "RAV4, CX-5, Outback, Model Y",
    surcharge: 60,
  },
  {
    label: "Full-size SUV, Truck & 3-Row",
    examples: "F-150, Tahoe, Pilot, Sienna, Sprinter",
    surcharge: 120,
  },
];

export const formatUsd = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
