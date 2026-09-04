import { openingHoursSpecification, site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Values are authored in this repo, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const BUSINESS_ID = `${site.url}/#business`;

/** The canonical LocalBusiness node. Emitted once, in the root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone.e164,
    image: `${site.url}/images/hero.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.city,
      address: {
        "@type": "PostalAddress",
        addressLocality: a.city,
        addressRegion: a.state,
        addressCountry: "US",
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile detailing services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.url}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaNames?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.url}`,
    serviceType: opts.name,
    provider: { "@id": BUSINESS_ID },
    areaServed: (opts.areaNames ?? areas.map((a) => a.city)).map((name) => ({
      "@type": "City",
      name,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
