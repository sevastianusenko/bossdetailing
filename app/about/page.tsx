import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { processSteps } from "@/lib/process";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Boss Auto Detailing in Vancouver, WA",
  description:
    "How our mobile detailing and furniture cleaning operation actually works, what we ask from you, and why the process runs in the order it does.",
  alternates: { canonical: "/about" },
};

const refusals = [
  {
    t: "We do not use a drive-through brush or a dirty mitt",
    d: "Most of the fine scratching in clear coat is put there by washing. A foam dwell, grit guards and fresh media per panel section exist for one reason: to avoid adding damage while removing dirt.",
  },
  {
    t: "We do not quote a price without knowing the condition",
    d: "Heavy pet hair, a set-in spill or a car that has not been cleaned in a year all add real time. A firm price with no questions asked is a guess, and we would rather ask for photos than guess.",
  },
  {
    t: "We do not book a job without confirming water and power",
    d: "We need an outdoor spigot and an electrical outlet at the address. We check that with you before the appointment, not after we arrive and cannot set up.",
  },
  {
    t: "We do not mask an odor we have not found",
    d: "Fragrance buys you about a week. We look for the source, whether that is a spill under a seat, a wet cabin filter or moisture in the underlay, extract it, and tell you plainly when something is beyond what detailing can fix.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <PageHero
        mark="About"
        title="A real process, taken to the car."
        lede="Boss Auto Detailing is a mobile operation based on NE 57th Avenue in Vancouver, Washington, working both sides of the Columbia. Everything below is how the work is actually done."
        image="/images/about-hero.jpg"
        imageAlt="Machine polishing a car door during a professional detail"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mark">The premise</p>
            <h2 className="rank-section mt-5 text-bone">
              The bay is the constraint. So we removed it.
            </h2>
            <div className="mt-6 space-y-4">
              <p className="prose-body">
                Traditional detailing is limited by a building. You drive to
                it, you leave the car, you arrange another way home, and you
                come back when someone calls. For anything that takes more
                than an hour, that is a real disruption to your week.
              </p>
              <p className="prose-body">
                We do not carry a water tank or a generator. What we carry is
                the equipment that actually does the work: commercial
                vacuums, a hot-water extractor, brushes and professional
                products, for cars and furniture alike. In exchange we ask
                for two things most homes and businesses already have: an
                outdoor water spigot and an electrical outlet.
              </p>
              <p className="prose-body">
                What that buys you is ordinary and valuable: the work happens
                where the vehicle or the furniture already is, while you get
                on with your day.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sweep relative aspect-[3/4] w-full overflow-hidden bg-ink-2">
              <Image
                src="/images/about-side.jpg"
                alt="An electric polisher resting on the floor beside the vehicle it is working on"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-16 md:py-24">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="mark">Standards</p>
            <h2 className="rank-section mt-5 text-bone">
              Four things we will not do.
            </h2>
            <p className="prose-body mt-6">
              A standard is most legible in what it rules out. These are the
              shortcuts that make a job look fine on the day and cause a
              problem afterward.
            </p>
          </div>

          <div className="mt-12 grid gap-x-12 md:grid-cols-2">
            {refusals.map((r) => (
              <div key={r.t} className="border-t border-line py-7">
                <h3 className="rank-sub text-bone">{r.t}</h3>
                <p className="mt-3 text-silver">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="mark">Order of operations</p>
            <h2 className="rank-section mt-5 text-bone">
              Every stage depends on the one before it.
            </h2>
          </div>

          <ol className="mt-12">
            {processSteps.map((step) => (
              <li
                key={step.n}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-10"
              >
                <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-carmine-lt md:col-span-1">
                  {step.n}
                </span>
                <h3 className="rank-sub text-bone md:col-span-4">
                  {step.title}
                </h3>
                <p className="text-silver md:col-span-7">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <p className="mark">The business</p>
            <dl className="mt-6">
              <div className="spec">
                <dt>Legal name</dt>
                <dd>{site.legalName}</dd>
              </div>
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
                <dt>Phone</dt>
                <dd>
                  <a href={site.phone.href} className="link-inline">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div className="spec">
                <dt>Counties</dt>
                <dd>{site.counties.join(" · ")}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-end">
            <p className="prose-body">
              If you want to know whether your address has what we need,
              whether that is a condo without an outdoor tap or an office lot
              with a supervisor to clear, the fastest answer is a phone call.
            </p>
            <Link href="/contact" className="btn mt-7 self-start">
              Get in touch
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
