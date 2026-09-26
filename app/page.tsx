import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { homePillars } from "@/lib/services";
import { areas } from "@/lib/areas";
import { vehicleClasses, bundleSavings, formatUsd } from "@/lib/packages";
import { processSteps } from "@/lib/process";
import { faqs } from "@/lib/faq";
import { Arrow, PhoneGlyph } from "@/components/Arrow";
import { FaqList } from "@/components/FaqList";
import { RequestForm } from "@/components/RequestForm";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const heroFacts = [
  { k: "You provide water & power", v: "An outdoor spigot and a nearby outlet" },
  { k: "Two states", v: "Clark, Multnomah, Washington, Clackamas" },
  { k: "Send photos first", v: "Faster, more accurate quotes" },
];

const galleryShots = [
  { src: "/images/gallery-1.jpg", alt: "Full-size SUV finished and rinsed on a customer driveway" },
  { src: "/images/gallery-2.jpg", alt: "Snow foam being rinsed from the flank of a full-size SUV" },
  { src: "/images/gallery-3.jpg", alt: "Cleaned dashboard, vents and passenger seat of a Ford Explorer" },
  { src: "/images/gallery-4.jpg", alt: "Cleaned steering wheel and instrument cluster of a Ford Explorer" },
  { src: "/images/gallery-5.jpg", alt: "Water standing in tight beads on a glossy panel" },
  { src: "/images/gallery-6.jpg", alt: "Light leather seat and console cleaned to a matte finish" },
];

const whatWeNeed = [
  {
    t: "You provide the hookup",
    d: "An outdoor water spigot and a nearby electrical outlet. Most houses and businesses already have both, right where you would park.",
  },
  {
    t: "We bring the equipment",
    d: "Commercial vacuums, a hot-water extractor, brushes, buckets and professional products for cars and furniture alike.",
  },
  {
    t: "Photos speed up the quote",
    d: "A couple of photos and a detailed message about the condition means an accurate price before we ever arrive.",
  },
  {
    t: "We work where you are",
    d: "Driveway, office lot or commercial yard, as long as there is a spigot and an outlet somewhere on the property.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.slice(0, 6))} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden pt-[var(--header-h)]">
        <div className="sweep grain absolute inset-0 -z-10">
          <Image
            src="/images/hero.jpg"
            alt="Detailer pressure-washing an SUV on a residential driveway"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/78 via-ink/10 to-transparent" />
        </div>

        <div className="wrap pb-10 pt-24 md:pb-14">
          <p className="mark">
            Mobile detailing · Vancouver, WA &amp; Portland, OR
          </p>

          <h1 className="rank-hero mt-5 max-w-[17ch] text-bone">
            The detail shop that parks in your driveway.
          </h1>

          <p className="lede mt-6">
            We bring vacuums, extraction equipment and professional products
            for cars and furniture alike, and do the work at your home, your
            office lot or your yard. All we ask is access to an outdoor water
            spigot and a power outlet. Both sides of the Columbia.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={site.phone.href} className="btn">
              <PhoneGlyph />
              {site.phone.display}
            </a>
            <Link href="#request" className="btn btn-ghost">
              Request a quote
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="border-t border-line bg-ink/85 backdrop-blur-sm">
          <dl className="wrap grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {heroFacts.map((f, i) => (
              <div
                key={f.k}
                className={`py-4 sm:py-5 ${i === 0 ? "sm:pr-6" : i === heroFacts.length - 1 ? "sm:pl-6" : "sm:px-6"}`}
              >
                <dt className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-carmine-lt">
                  {f.k}
                </dt>
                <dd className="mt-1.5 text-sm text-silver">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── What we need / what we bring ─────────────────────────────── */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mark">What actually shows up</p>
            <h2 className="rank-section mt-5 text-bone">
              A bay on wheels, not a bucket in a trunk.
            </h2>
            <p className="prose-body mt-6">
              &ldquo;Mobile&rdquo; can mean a guy with a bucket and a garden
              hose, or it can mean real equipment: commercial vacuums, a
              hot-water extractor, and products that actually lift a stain
              instead of smearing it around.
            </p>
            <p className="prose-body mt-4">
              We are the second one. What we ask in return is simple: an
              outdoor water spigot and a power outlet at the address. That is
              the whole setup, and it is what keeps our prices lower than a
              rig that hauls its own water tank and generator to every job.
            </p>
            <Link href="/about" className="link-more mt-8 inline-flex">
              How we work
              <Arrow />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="sweep relative aspect-[4/3] w-full overflow-hidden bg-ink-2">
              <Image
                src="/images/rig.jpg"
                alt="Detailing products and equipment laid out beside the vehicle"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>

            <dl className="mt-8 grid gap-x-10 sm:grid-cols-2">
              {whatWeNeed.map((item) => (
                <div key={item.t} className="border-t border-line py-5">
                  <dt className="rank-sub text-bone">{item.t}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-silver">
                    {item.d}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Four pillars ─────────────────────────────────────────────── */}
      <section className="border-t border-line bg-ink-2 py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mark">Services</p>
              <h2 className="rank-section mt-5 max-w-[18ch] text-bone">
                Four kinds of work. One standard.
              </h2>
            </div>
            <Link href="/services" className="link-more">
              All services
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="mt-14 space-y-px bg-line">
          {homePillars.map((s, i) => (
            <article key={s.slug} className="rise bg-ink-2">
              <Link
                href={`/services/${s.slug}`}
                className="group block py-8 transition-colors duration-300 hover:bg-ink-3"
              >
                <div className="wrap grid items-center gap-6 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4 lg:col-span-3">
                    <div className="relative aspect-[5/4] w-full overflow-hidden bg-ink">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-8 lg:col-span-9">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mark">{s.mark}</span>
                    </div>
                    <h3 className="rank-list mt-3 text-bone">
                      {s.name}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-silver">{s.summary}</p>
                    <span className="link-more mt-5 inline-flex">
                      Read the details
                      <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section
        id="packages"
        className="border-t border-line py-20 md:py-28"
      >
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="mark">Pricing</p>
            <h2 className="rank-section mt-5 text-bone">
              Priced by vehicle. No tiers to decode.
            </h2>
            <p className="prose-body mt-6">
              Interior and exterior are priced separately, with a flat
              discount when you book both on the same visit. These are our
              real prices, not a starting point that grows once we arrive.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-line lg:grid-cols-3">
            {vehicleClasses.map((vc) => (
              <div key={vc.slug} className="bg-ink-2 p-8 md:p-10">
                <h3
                  className="font-display text-2xl font-bold text-bone"
                  style={{ fontStretch: "94%", letterSpacing: "-0.03em" }}
                >
                  {vc.label}
                </h3>
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
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 bg-chalk p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
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
                Condition changes the job more than size does. A couple of
                photos and a few sentences about pet hair, stains, or how long
                it has been since the last clean means the number we give you
                is the number you pay.
              </p>
            </div>
            <Link href="/contact" className="btn shrink-0">
              Send photos &amp; get a quote
              <Arrow />
            </Link>
          </div>

          <p className="mt-8 max-w-[70ch] text-sm text-muted">
            Furniture and upholstery cleaning is priced by piece and
            condition, not by vehicle class. See{" "}
            <Link
              href="/services/furniture-upholstery-cleaning"
              className="link-inline"
            >
              furniture &amp; upholstery cleaning
            </Link>{" "}
            or call for a quote.
          </p>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-ink-2 py-20 md:py-28">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="mark">How a booking runs</p>
            <h2 className="rank-section mt-5 text-bone">
              Six stages, in this order, every time.
            </h2>
          </div>

          <ol className="mt-14">
            {processSteps.map((step) => (
              <li
                key={step.n}
                className="rise grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-10"
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

      {/* ── Service area ─────────────────────────────────────────────── */}
      <section className="relative isolate border-t border-line py-20 md:py-28">
        <div className="absolute inset-0 -z-10 opacity-[0.12]">
          <Image
            src="/images/area.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        </div>

        <div className="wrap">
          <div className="max-w-2xl">
            <p className="mark">Service area</p>
            <h2 className="rank-section mt-5 text-bone">
              One number, both sides of the Columbia.
            </h2>
            <p className="prose-body mt-6">
              We cross the bridge most days. Clark County is home; Multnomah,
              Washington and Clackamas are the rest of the week. If you are
              just outside the ring, call and ask. It is often still workable,
              particularly for the bigger jobs.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {(["WA", "OR"] as const).map((state) => (
              <div key={state} className="bg-ink p-8 md:p-10">
                <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  {state === "WA" ? "Washington" : "Oregon"}
                </p>
                <ul className="mt-5 space-y-px">
                  {areas
                    .filter((a) => a.state === state)
                    .map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/service-areas/${a.slug}`}
                          className="group flex items-baseline justify-between gap-4 border-b border-line-soft py-3.5"
                        >
                          <span className="rank-list text-bone transition-colors group-hover:text-carmine-lt">
                            {a.city}
                          </span>
                          <span className="text-xs text-muted">{a.county}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <Link href="/service-areas" className="link-more mt-10 inline-flex">
            Everywhere we cover
            <Arrow />
          </Link>
        </div>
      </section>

      {/* ── Gallery strip ────────────────────────────────────────────── */}
      <section className="border-t border-line bg-ink-2 py-20 md:py-28">
        <div className="wrap flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mark">The work</p>
            <h2 className="rank-section mt-5 max-w-[20ch] text-bone">
              Close enough to see what the difference actually is.
            </h2>
          </div>
          <Link href="/gallery" className="link-more">
            Full gallery
            <Arrow />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-3">
          {galleryShots.map((g) => (
            <div
              key={g.src}
              className="relative aspect-[4/3] overflow-hidden bg-ink"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="wrap mt-6">
          <p className="max-w-[70ch] text-sm text-muted">
            The first four frames are our own jobs. The rest are reference
            photography while we build the library.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="mark">Questions</p>
            <h2 className="rank-section mt-5 text-bone">
              The things people ask before they book.
            </h2>
            <Link href="/faq" className="link-more mt-8 inline-flex">
              All questions
              <Arrow />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* ── Request ──────────────────────────────────────────────────── */}
      <section
        id="request"
        className="scroll-mt-24 border-t border-line bg-ink-2 py-20 md:py-28"
      >
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mark">Book it</p>
            <h2 className="rank-section mt-5 text-bone">
              Tell us the vehicle and send a few photos.
            </h2>
            <p className="prose-body mt-6">
              The more you tell us up front, the more accurate the quote and
              the fewer surprises on the day. If you would rather just talk it
              through, the phone is always faster.
            </p>

            <a
              href={site.phone.href}
              className="mt-8 inline-flex items-center gap-3 font-display text-3xl font-bold tracking-[-0.03em] text-bone transition-colors hover:text-carmine-lt"
            >
              <PhoneGlyph className="text-carmine-lt" />
              {site.phone.display}
            </a>

            <dl className="mt-10">
              <div className="spec">
                <dt>Base</dt>
                <dd>
                  {site.address.street}, {site.address.locality},{" "}
                  {site.address.region} {site.address.postalCode}
                </dd>
              </div>
              <div className="spec">
                <dt>Hours</dt>
                <dd>
                  {site.hoursConfirmed
                    ? site.hours
                        .filter((h) => h.open)
                        .map((h) => `${h.days} ${h.open}-${h.close}`)
                        .join(" · ")
                    : "By appointment, seven days a week"}
                </dd>
              </div>
              <div className="spec">
                <dt>Coverage</dt>
                <dd>{site.counties.join(" · ")}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <RequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
