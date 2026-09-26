import type { Metadata } from "next";
import Link from "next/link";
import { vehicleClasses, bundleSavings, formatUsd } from "@/lib/packages";
import { promo, promoEndsLabel, promoIsLive } from "@/lib/promo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pricing for Mobile Car Detailing in Vancouver WA & Portland OR",
  description:
    "Real prices for interior and exterior car detailing by vehicle size, plus furniture and upholstery cleaning quoted by piece. No tiers to decode.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/packages" },
        ])}
      />

      <PageHero
        mark="Pricing"
        title="Priced by vehicle. No tiers to decode."
        lede="Interior and exterior are priced separately by vehicle size, with a flat discount when you book both on the same visit. These are our real prices."
        image="/images/packages-hero.jpg"
        imageAlt="Microfiber towel drawn across a dark, polished panel"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/*
        The offer also lives outside the dialog. A promotion a visitor can
        only find by not dismissing a popup is a promotion half the audience
        never sees.
      */}
      {promoIsLive() && (
        <section className="border-b border-line bg-carmine/12">
          <div className="wrap flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mark">{promo.eyebrow}</p>
              <p className="mt-2 font-display text-xl font-bold tracking-[-0.02em] text-bone">
                {promo.headline}
              </p>
            </div>
            <p className="max-w-[46ch] text-sm leading-relaxed text-silver">
              Two vehicles at the same address on one visit. The discount
              applies to the lower-priced of the two, and the offer ends{" "}
              {promoEndsLabel()}.
            </p>
          </div>
        </section>
      )}

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap">
          <div className="grid gap-px bg-line lg:grid-cols-3">
            {vehicleClasses.map((vc) => (
              <div key={vc.slug} className="bg-ink p-8 md:p-10">
                <h2
                  className="font-display text-2xl font-bold text-bone"
                  style={{ fontStretch: "94%", letterSpacing: "-0.03em" }}
                >
                  {vc.label}
                </h2>
                <p className="mt-2 text-sm text-muted">{vc.examples}</p>

                <dl className="mt-8">
                  <div className="spec">
                    <dt>Interior</dt>
                    <dd>{formatUsd(vc.interior)}</dd>
                  </div>
                  <div className="spec">
                    <dt>Exterior</dt>
                    <dd>{formatUsd(vc.exterior)}</dd>
                  </div>
                  <div className="spec">
                    <dt>Both together</dt>
                    <dd className="font-semibold text-carmine-lt">
                      {formatUsd(vc.bundleTotal)}{" "}
                      <span className="font-normal text-muted">
                        (save {formatUsd(bundleSavings(vc))})
                      </span>
                    </dd>
                  </div>
                </dl>

                <Link href="/contact" className="btn btn-ghost mt-8">
                  Get a quote
                  <Arrow />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-line p-7">
            <h3 className="rank-sub text-bone">What is included</h3>
            <p className="prose-body mt-4">
              Interior means a full vacuum, hot-water extraction on carpets
              and cloth seating, and stain and odor treatment. Exterior means
              a hand wash, wheel and wheel well cleaning, and a spray sealant
              finish. See the{" "}
              <Link href="/services/interior-detailing" className="link-inline">
                interior
              </Link>{" "}
              and{" "}
              <Link href="/services/exterior-detailing" className="link-inline">
                exterior
              </Link>{" "}
              service pages for the full breakdown.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="mark">Furniture &amp; upholstery</p>
            <h2 className="rank-section mt-5 text-bone">
              Priced by piece, not by a flat rate.
            </h2>
            <p className="prose-body mt-6">
              A loveseat and a ten-foot sectional are not the same job, and
              neither are fabric and leather. We quote furniture and
              upholstery cleaning after seeing photos of the piece, indoors or
              out.
            </p>
            <Link
              href="/services/furniture-upholstery-cleaning"
              className="link-more mt-6 inline-flex"
            >
              Furniture &amp; upholstery cleaning
              <Arrow />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6 bg-chalk p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
              <div>
                <span className="bg-carmine px-2 py-1 font-display text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-bone">
                  Do this first
                </span>
                <h3
                  className="mt-4 font-display text-2xl font-bold text-ink"
                  style={{ fontStretch: "94%", letterSpacing: "-0.03em" }}
                >
                  Send photos and a detailed message.
                </h3>
                <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-ink/75">
                  Condition changes the price more than size does. Heavy pet
                  hair, a spill that has soaked in, or a stain that has been
                  there for months all add real time. A couple of photos and a
                  few sentences up front means the number we give you is the
                  number you pay.
                </p>
              </div>
              <Link href="/contact" className="btn shrink-0">
                Send photos &amp; get a quote
                <Arrow />
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted">
              Car prices on this page are real, published rates, not a
              starting estimate. Call{" "}
              <a href={site.phone.href} className="link-inline">
                {site.phone.display}
              </a>{" "}
              if you would rather talk it through.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure what you need?"
        body="Describe the vehicle or the furniture and what is bothering you about it. We will tell you honestly what it needs."
      />
    </>
  );
}
