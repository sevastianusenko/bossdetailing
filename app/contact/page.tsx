import type { Metadata } from "next";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { PageHero } from "@/components/PageHero";
import { RequestForm } from "@/components/RequestForm";
import { PhoneGlyph } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us to Book Mobile Detailing in Vancouver WA & Portland OR",
  description:
    "Call (509) 224-8299 or send a request. Tell us the vehicle, the city and where it will be parked, and we come back with a scope, a price and a window.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <PageHero
        mark="Contact"
        title="Tell us the car and where it sleeps."
        lede="The two things that decide a quote are the vehicle and the space it will be parked in. Give us both and the number we come back with will be the number you pay."
        image="/images/contact-hero.jpg"
        imageAlt="Full-size SUV parked in front of a home garage"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section
        id="request"
        className="scroll-mt-24 border-t border-line py-16 md:py-24"
      >
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-3 font-display text-4xl font-bold tracking-[-0.035em] text-bone transition-colors hover:text-carmine-lt"
              style={{ fontStretch: "94%" }}
            >
              <PhoneGlyph className="text-carmine-lt" />
              {site.phone.display}
            </a>
            <p className="prose-body mt-5">
              Calling is faster than the form, particularly if you are trying
              to work out whether a job is possible at your address at all.
            </p>

            <dl className="mt-10">
              <div className="spec">
                <dt>Base</dt>
                <dd>
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.region}{" "}
                  {site.address.postalCode}
                </dd>
              </div>
              <div className="spec">
                <dt>Hours</dt>
                <dd>
                  {site.hoursConfirmed ? (
                    site.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}:{" "}
                        {h.open ? `${h.open} to ${h.close}` : "By appointment"}
                      </span>
                    ))
                  ) : (
                    <>
                      By appointment, seven days a week. Early mornings,
                      evenings and weekends are all workable. Call and ask.
                    </>
                  )}
                </dd>
              </div>
              <div className="spec">
                <dt>Counties</dt>
                <dd>{site.counties.join(" · ")}</dd>
              </div>
              <div className="spec">
                <dt>Cities</dt>
                <dd>{areas.map((a) => a.label).join(" · ")}</dd>
              </div>
            </dl>

            <p className="mt-8 text-sm text-muted">
              We are a mobile service. The address above is our base rather
              than a shop you can drop a vehicle at, so all work happens at
              your location.
            </p>
          </div>

          <div className="lg:col-span-7">
            <RequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
