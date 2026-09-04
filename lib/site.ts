/**
 * Single source of truth for the business record (NAP), navigation and the
 * handful of strings that must never drift between pages, schema and footer.
 */

export const site = {
  name: "Boss Auto Detailing",
  legalName: "Boss Auto Detailing LLC",
  tagline: "Mobile auto detailing in Vancouver, WA and Portland, OR",
  url: "https://autodetailingwa.com",
  domain: "autodetailingwa.com",

  phone: {
    display: "(509) 224-8299",
    e164: "+15092248299",
    href: "tel:+15092248299",
  },

  email: "hello@autodetailingwa.com",

  address: {
    street: "2909 NE 57th Ave",
    locality: "Vancouver",
    region: "WA",
    postalCode: "98661",
    country: "US",
    /** Approximate coordinates for the NE 57th Ave base, used in schema. */
    lat: 45.6413,
    lng: -122.6003,
  },

  /**
   * Set to true only once the client confirms real hours. While false the
   * site says "by appointment" everywhere and emits NO openingHours into
   * LocalBusiness schema. An invented schedule in structured data is worse
   * than none at all.
   */
  hoursConfirmed: false,

  /** PLACEHOLDER. Industry-typical hours, unused until hoursConfirmed. */
  hours: [
    { days: "Monday to Friday", open: "08:00", close: "18:00" },
    { days: "Saturday", open: "09:00", close: "16:00" },
    { days: "Sunday", open: "", close: "" },
  ],

  counties: [
    "Clark County, WA",
    "Multnomah County, OR",
    "Washington County, OR",
    "Clackamas County, OR",
  ],
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Work", href: "/gallery" },
  { label: "Advice", href: "/blog" },
  { label: "Service Area", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Formats a schema.org openingHours specification from `site.hours`. */
export function openingHoursSpecification() {
  const map: Record<string, string[]> = {
    "Monday to Friday": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    Saturday: ["Saturday"],
    Sunday: ["Sunday"],
  };

  if (!site.hoursConfirmed) return [];

  return site.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: map[h.days] ?? [],
      opens: h.open,
      closes: h.close,
    }));
}
