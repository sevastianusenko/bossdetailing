/**
 * ─────────────────────────────────────────────────────────────────────────
 *  REAL PRICES. Supplied by the client on 2026-09-25, replacing the earlier
 *  market-rate placeholders. These are quotes from Boss Auto Detailing.
 *
 *  The structure is a flat rate per vehicle class for interior and exterior,
 *  with a bundle price when both are booked on the same visit (a flat $30
 *  saving in every class, since the two-birds saving is one setup instead
 *  of two rather than a percentage). All numbers live in this one file.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const PRICING_IS_PLACEHOLDER = false;

export type VehicleClass = {
  slug: string;
  label: string;
  examples: string;
  interior: number;
  exterior: number;
  /** Interior + exterior, booked together on the same visit. */
  bundleTotal: number;
};

export const vehicleClasses: VehicleClass[] = [
  {
    slug: "sedan-wagon",
    label: "Sedan & Wagon",
    examples: "Civic, Camry, Impreza, Outback wagon",
    interior: 150,
    exterior: 100,
    bundleTotal: 220,
  },
  {
    slug: "suv-crossover",
    label: "SUV & Crossover",
    examples: "RAV4, CX-5, Explorer, Model Y",
    interior: 250,
    exterior: 100,
    bundleTotal: 320,
  },
  {
    slug: "minivan-van-pickup",
    label: "Minivan, Van & Pickup",
    examples: "Sienna, Sprinter, F-150, Silverado",
    interior: 300,
    exterior: 150,
    bundleTotal: 420,
  },
];

export const vehicleClassBySlug = (slug: string) =>
  vehicleClasses.find((v) => v.slug === slug);

/** The flat saving for booking interior and exterior on the same visit. */
export const bundleSavings = (vc: VehicleClass) =>
  vc.interior + vc.exterior - vc.bundleTotal;

export const formatUsd = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
