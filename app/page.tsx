import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { homePillars } from "@/lib/services";
import { areas } from "@/lib/areas";
import { packages, sizeTiers, formatUsd } from "@/lib/packages";
import { processSteps } from "@/lib/process";
import { faqs } from "@/lib/faq";
import { Arrow, PhoneGlyph } from "@/components/Arrow";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FaqList } from "@/components/FaqList";
import { RequestForm } from "@/components/RequestForm";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const heroFacts = [
  { k: "Own water & power", v: "Nothing plugs into your house" },
  { k: "Two states", v: "Clark, Multnomah, Washington, Clackamas" },
  { k: "Shop-grade", v: "Correction and coating, done on site" },
];

const galleryShots = [
  { src: "/images/gallery-1.jpg", alt: "Detailer reaching into a cabin to wipe down the interior" },
  { src: "/images/gallery-2.jpg", alt: "Vacuum nozzle drawing soil out of a car carpet" },
  { src: "/images/gallery-3.jpg", alt: "Wheel and tire being scrubbed by hand with suds" },
  { src: "/images/gallery-4.jpg", alt: "Steering wheel and switch gear being wiped down by hand" },
  { src: "/images/gallery-5.jpg", alt: "Water standing in tight beads on a glossy panel" },
  { src: "/images/gallery-6.jpg", alt: "Light leather seat and console cleaned to a matte finish" },
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
            We arrive fully self-contained, carrying our own water, power,
            extraction and polishing gear, and do shop-grade work at your home,
            your office lot or your yard. Both sides of the Columbia.
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

      {/* ── What arrives ─────────────────────────────────────────────── */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mark">What actually shows up</p>
            <h2 className="rank-section mt-5 text-bone">
              A bay on wheels, not a bucket in a trunk.
            </h2>
            <p className="prose-body mt-6">
              &ldquo;Mobile&rdquo; covers two completely different businesses.
              One is a person with a pressure washer who needs your spigot and
              your outlet. The other is a self-contained rig carrying its own
              filtered water, its own power, hot-water extraction, controlled
              lighting and a full polishing setup.
            </p>
            <p className="prose-body mt-4">
              We are the second one. Paint correction and ceramic coating
              normally mean leaving your car at a shop for three days. Here it
              happens in your own garage while you carry on with your week.
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
              {[
                {
                  t: "Filtered water on board",
                  d: "Tank, pump and filtration travel with us, so panels dry without mineral spotting even where the tap water is hard.",
                },
                {
                  t: "Independent power",
                  d: "Extraction, steam, lighting and polishers all run off our own supply. No cords through your window.",
                },
                {
                  t: "Controlled inspection light",
                  d: "Defects that hide under daylight show under raking light. You cannot correct what you cannot see.",
                },
                {
                  t: "We work where you are",
                  d: "Driveway, office lot, apartment garage, commercial yard. If there is room to open the doors, we can work.",
                },
              ].map((item) => (
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
                      Read the process
                      <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Proof: correction ────────────────────────────────────────── */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <BeforeAfter
              before="/images/correction-before.jpg"
              after="/images/correction-after.jpg"
              beforeAlt="Glossy dark paint overlaid with a dense web of fine circular scratches"
              afterAlt="The same frame with the marring removed, reflecting cleanly"
              beforeLabel="Marred"
              afterLabel="Corrected"
              note="Illustration. One photograph, shown with and without simulated clear-coat marring."
            />
          </div>

          <div className="lg:col-span-5">
            <p className="mark">Paint correction</p>
            <h2 className="rank-section mt-5 text-bone">
              That haze is not the color. It is damage.
            </h2>
            <p className="prose-body mt-6">
              The reason a black car rarely looks black is a web of fine
              circular scratches in the clear coat, put there by washing rather
              than by the road. Under a single light source they scatter the
              reflection and turn depth into gray.
            </p>
            <p className="prose-body mt-4">
              Correction removes them from the clear coat rather than filling
              them with something that washes out in six weeks. We measure
              paint thickness first, agree a test spot with you, and tell you
              honestly what will not come out.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/services/paint-correction" className="btn">
                Paint correction
                <Arrow />
              </Link>
              <Link
                href="/services/paint-correction#anatomy"
                className="link-more"
              >
                What two days look like
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────────────── */}
      <section
        id="packages"
        className="border-t border-line bg-ink-2 py-20 md:py-28"
      >
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="mark">Packages</p>
            <h2 className="rank-section mt-5 text-bone">
              Three levels. Priced by what the car actually needs.
            </h2>
            <p className="prose-body mt-6">
              Starting prices are for a coupe or sedan in reasonable condition.
              Size and condition move the number, so every job gets a real
              quote before we start. No surprises at handover.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-line lg:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.slug}
                className={`flex flex-col p-8 md:p-10 ${
                  p.featured ? "bg-chalk text-ink" : "bg-ink-2"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className={`font-display text-2xl font-bold ${
                      p.featured ? "text-ink" : "text-bone"
                    }`}
                    style={{ fontStretch: "94%", letterSpacing: "-0.03em" }}
                  >
                    {p.name}
                  </h3>
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
                    p.featured
                      ? "border-ink/15 text-ink/75"
                      : "border-line text-silver"
                  }`}
                >
                  {p.summary}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.includes.slice(0, 6).map((inc) => (
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

                <Link
                  href="/packages"
                  className={`btn mt-8 ${p.featured ? "" : "btn-ghost"}`}
                >
                  Full breakdown
                  <Arrow />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
            {sizeTiers.map((t) => (
              <div key={t.label} className="bg-ink-2 p-6">
                <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  {t.surcharge === 0
                    ? "Base rate"
                    : `+ ${formatUsd(t.surcharge)}`}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-bone">
                  {t.label}
                </p>
                <p className="mt-1 text-sm text-silver">{t.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="border-t border-line py-20 md:py-28">
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
            Reference photography. Boss Auto Detailing&rsquo;s own job
            documentation is being added as work is completed.
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
              Tell us the car and where it sleeps.
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
