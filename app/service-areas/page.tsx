import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mobile Detailing Service Area Across WA & OR",
  description:
    "Boss Auto Detailing covers Vancouver, Camas and Ridgefield in Washington, and Portland, Lake Oswego, West Linn and Happy Valley in Oregon. We come to you.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Area", url: "/service-areas" },
        ])}
      />

      <PageHero
        mark="Service area"
        title="We cross the bridge most days."
        lede="Clark County is home. Multnomah, Washington and Clackamas are the rest of the week. Every city below gets the same setup: we bring the equipment, you provide a water spigot and an outlet."
        image="/images/area.jpg"
        imageAlt="A steel bridge spanning the river between the two cities we work in"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap">
        <div className="grid gap-px bg-line md:grid-cols-2">
          {(["WA", "OR"] as const).map((state) => (
            <div key={state} className="bg-ink p-8 md:p-10">
              <p className="mark">
                {state === "WA" ? "Washington" : "Oregon"}
              </p>
              <ul className="mt-6">
                {areas
                  .filter((a) => a.state === state)
                  .map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/service-areas/${a.slug}`}
                        className="group block border-b border-line-soft py-6"
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <h2 className="rank-list text-bone transition-colors group-hover:text-carmine-lt">
                            {a.city}
                          </h2>
                          <span className="shrink-0 text-xs text-muted">
                            {a.county}
                          </span>
                        </div>
                        <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-silver">
                          {a.notes.find((n) => n.label === "Common work")
                            ?.value ?? a.lede}
                        </p>
                        <span className="link-more mt-4 inline-flex">
                          {a.city} detailing
                          <Arrow />
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        </div>

        <div className="wrap mt-12">
          <p className="prose-body">
            Just outside the ring? Call{" "}
            <a href={site.phone.href} className="link-inline">
              {site.phone.display}
            </a>{" "}
            and ask. It is often still workable, especially if your address
            has an outdoor spigot and a power outlet we can use. Counties
            covered: {site.counties.join(", ")}.
          </p>
        </div>
      </section>

      <CtaBand
        title="Not sure if we reach you?"
        body="Send your city and the vehicle. If we cannot get to you, we will say so straight away rather than leave you waiting."
      />
    </>
  );
}
