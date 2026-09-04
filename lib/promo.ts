/**
 * ─────────────────────────────────────────────────────────────────────────
 *  RUNNING OFFER. The terms below were written to be sensible, not quoted
 *  by the client. Confirm them before this goes live, especially what
 *  "second vehicle" means in practice. See HANDOFF.md.
 *
 *  To end the promotion early, set `active: false`. It also stops on its
 *  own after `endsOn`, so nobody has to remember to take it down.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const promo = {
  active: true,

  /** Inclusive. After this date nothing renders, anywhere. */
  endsOn: "2026-09-30",

  /** Bumping this re-shows the dialog to people who dismissed the last one. */
  id: "sept-2026-second-vehicle",

  eyebrow: "September offer",
  headline: "30% off the second vehicle",
  body: "Booking two cars at the same address on the same visit takes us one setup instead of two. We pass that back: the second vehicle comes in at 30 percent off.",

  /** Shown in small print. Every line here is a commercial claim. */
  terms: [
    "Both vehicles detailed in the same visit, at the same address",
    "The discount applies to the lower-priced of the two",
    "Any package, any vehicle size",
    "Cannot be combined with other offers",
    "Booked by September 30, 2026",
  ],
} as const;

/** True while the offer is switched on and today is on or before `endsOn`. */
export function promoIsLive(now: Date = new Date()): boolean {
  if (!promo.active) return false;

  // Compare calendar dates, so the offer survives its final day in every
  // timezone rather than expiring early for anyone west of the server.
  const [y, m, d] = promo.endsOn.split("-").map(Number);
  const end = new Date(y, m - 1, d, 23, 59, 59, 999);
  return now.getTime() <= end.getTime();
}

/** "September 30, 2026" for display. */
export function promoEndsLabel(): string {
  const [y, m, d] = promo.endsOn.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
