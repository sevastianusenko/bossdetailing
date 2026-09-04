import type { Metadata } from "next";
import Link from "next/link";
import { packages, sizeTiers, formatUsd } from "@/lib/packages";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Packages & Pricing for Mobile Detailing in Vancouver WA & Portland OR",
  description:
    "Three levels of mobile detailing: Maintenance, Signature Detail, and Correction & Coating. Starting prices, what is included, and what moves the number.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" },
        ])}
      />

      <PageHero
        mark="Packages"
        title="What it costs, and what moves the number."
        lede="Three levels, each a superset of the one before it. Starting prices are for a coupe or sedan in reasonable condition. Size and condition are the two things that change them."
        image="/images/packages-hero.jpg"
        imageAlt="Microfiber towel drawn across a dark, polished panel"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap">
        <div className="grid gap-px bg-line lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.slug}
              className={`flex flex-col p-8 md:p-10 ${
                p.featured ? "bg-chalk text-ink" : "bg-ink"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2
                  className={`font-display text-2xl font-bold ${
                    p.featured ? "text-ink" : "text-bone"
                  }`}
                  style={{ fontStretch: "94%", letterSpacing: "-0.03em" }}
                >
                  {p.name}
                </h2>
                {p.featured && (
                  <span className="bg-carmine px-2 py-1 font-display text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-bone">
                    Most booked
                  </span>
                )}
              </div>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  p.featured ? "text-ink/70" : "text-silver"
                }`}
              >
                {p.positioning}
              </p>

              <p className="mt-7 flex items-baseline gap-2">
                <span
                  className={`font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
                    p.featured ? "text-ink/55" : "text-muted"
                  }`}
                >
                  From
                </span>
                <span
                  className={`font-display text-5xl font-bold ${
                    p.featured ? "text-ink" : "text-bone"
                  }`}
                  style={{ fontStretch: "92%", letterSpacing: "-0.04em" }}
                >
                  {formatUsd(p.fromPrice)}
                </span>
              </p>
              <p
                className={`mt-1.5 text-sm ${
                  p.featured ? "text-ink/60" : "text-muted"
                }`}
              >
                {p.duration} · coupe &amp; sedan
              </p>

              <p
                className={`mt-6 border-t pt-6 text-sm leading-relaxed ${
                  p.featured ? "border-ink/15 text-ink/75" : "border-line text-silver"
                }`}
              >
                {p.summary}
              </p>

              <h3
                className={`mt-8 font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
                  p.featured ? "text-ink/55" : "text-muted"
                }`}
              >
                Included
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {p.includes.map((inc) => (
                  <li
                    key={inc}
                    className={`flex gap-3 text-sm leading-relaxed ${
                      p.featured ? "text-ink/80" : "text-silver"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-2 block h-px w-3 shrink-0 ${
                        p.featured ? "bg-carmine" : "bg-carmine-lt"
                      }`}
                    />
                    {inc}
                  </li>
                ))}
              </ul>

              {p.excludes && (
                <>
                  <h3
                    className={`mt-8 font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
                      p.featured ? "text-ink/55" : "text-muted"
                    }`}
                  >
                    Not in this tier
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {p.excludes.map((ex) => (
                      <li
                        key={ex}
                        className={`text-sm leading-relaxed ${
                          p.featured ? "text-ink/55" : "text-muted"
                        }`}
                      >
                        {ex}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link
                href="/contact"
                className={`btn mt-8 ${p.featured ? "" : "btn-ghost"}`}
              >
                Get a quote
                <Arrow />
              </Link>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="mark">Vehicle size</p>
            <h2 className="rank-section mt-5 text-bone">
              A three-row is not a sedan with extra seats.
            </h2>
            <p className="prose-body mt-6">
              A larger vehicle is more panels to decontaminate, more carpet to
              extract and more glass to finish. We price by size rather than
              quoting a car rate and adding the difference at handover.
            </p>
          </div>

          <div className="lg:col-span-8">
            <dl>
              {sizeTiers.map((t) => (
                <div
                  key={t.label}
                  className="grid gap-2 border-t border-line py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <dt className="sm:col-span-5">
                    <span className="rank-sub block text-bone">{t.label}</span>
                    <span className="mt-1 block text-sm text-muted">
                      {t.examples}
                    </span>
                  </dt>
                  <dd className="font-display text-2xl font-bold text-carmine-lt sm:col-span-3 sm:text-right">
                    {t.surcharge === 0
                      ? "Base rate"
                      : `+ ${formatUsd(t.surcharge)}`}
                  </dd>
                  <dd className="text-sm text-silver sm:col-span-4">
                    Applied on top of every package starting price.
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border border-line p-7">
              <h3 className="rank-sub text-bone">
                Condition is the other half
              </h3>
              <p className="prose-body mt-4">
                Heavy pet hair, a spill that has soaked into the underlay,
                years of unprotected paint in a shaded street. All of it adds
                labor, and we would rather tell you before we start than
                explain it afterwards. Send photos with your request if you are
                unsure. It makes the quote far more accurate.
              </p>
              <p className="mt-5 text-sm text-muted">
                Every price on this page is a starting point, not a final
                quote. You get the real number before any work begins. Call{" "}
                <a href={site.phone.href} className="link-inline">
                  {site.phone.display}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which level you need?"
        body="Describe the car and what is bothering you about it. If a cheaper package will get you the result you want, that is the one we will quote."
      />
    </>
  );
}
