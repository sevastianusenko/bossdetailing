import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, areaBySlug } from "@/lib/areas";
import { services } from "@/lib/services";
import { vehicleClasses, formatUsd } from "@/lib/packages";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { RequestForm } from "@/components/RequestForm";
import { Arrow, PhoneGlyph } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

const areaImage = (slug: string) =>
  slug === "vancouver-wa"
    ? "/images/area-vancouver.jpg"
    : slug === "portland-or"
      ? "/images/area-portland.jpg"
      : "/images/area-suburb.jpg";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areaBySlug(slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.meta,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: {
      title: area.title,
      description: area.meta,
      url: `/service-areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areaBySlug(slug);
  if (!area) notFound();

  const nearby = areas.filter((a) => a.slug !== area.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Area", url: "/service-areas" },
          { name: area.label, url: `/service-areas/${area.slug}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: `Mobile auto detailing in ${area.label}`,
          description: area.meta,
          url: `/service-areas/${area.slug}`,
          areaNames: [area.city],
        })}
      />

      <PageHero
        mark={`${area.county} · ${area.state}`}
        title={`Mobile detailing in ${area.city}.`}
        lede={area.lede}
        image={areaImage(area.slug)}
        imageAlt={`Residential street in ${area.label}`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Area", href: "/service-areas" },
        ]}
      >
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
      </PageHero>

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:col-span-7">
            {area.body.map((p, i) => (
              <p key={i} className="prose-body">
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-line bg-ink-2 p-7 md:p-8">
              <h2 className="mark">Working in {area.city}</h2>
              <dl className="mt-5">
                {area.notes.map((n) => (
                  <div key={n.label} className="spec">
                    <dt>{n.label}</dt>
                    <dd>{n.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 border border-line bg-ink-2 p-7 md:p-8">
              <h2 className="mark">Neighborhoods we cover</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {area.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="border border-line px-3 py-1.5 text-xs text-silver"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-16 md:py-24">
        <div className="wrap">
          <p className="mark">Services in {area.city}</p>
          <h2 className="rank-section mt-5 max-w-[20ch] text-bone">
            The full list travels with the rig.
          </h2>

          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-ink-2 p-7 transition-colors hover:bg-ink-3"
              >
                <p className="mark">{s.mark}</p>
                <h3 className="rank-sub mt-3 text-bone transition-colors group-hover:text-carmine-lt">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {s.summary}
                </p>
                <span className="link-more mt-5 inline-flex">
                  Details
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
            {vehicleClasses.map((vc) => (
              <div key={vc.slug} className="bg-ink-2 p-6">
                <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  {vc.label}
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-bone">
                  {formatUsd(vc.bundleTotal)}
                </p>
                <p className="mt-1 text-sm text-silver">
                  Interior &amp; exterior together
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Real prices, by vehicle size.{" "}
            <Link href="/packages" className="link-inline">
              See the full breakdown
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        id="request"
        className="scroll-mt-24 border-t border-line py-16 md:py-24"
      >
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mark">Book it</p>
            <h2 className="rank-section mt-5 text-bone">
              Get a quote in {area.city}.
            </h2>
            <p className="prose-body mt-6">
              Tell us the vehicle and where it will be parked. Most requests
              get a reply the same working day.
            </p>
            <a
              href={site.phone.href}
              className="mt-8 inline-flex items-center gap-3 font-display text-3xl font-bold tracking-[-0.03em] text-bone transition-colors hover:text-carmine-lt"
            >
              <PhoneGlyph className="text-carmine-lt" />
              {site.phone.display}
            </a>
          </div>
          <div className="lg:col-span-7">
            <RequestForm />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-14">
        <div className="wrap">
          <p className="mark">Nearby</p>
          <ul className="mt-6 flex flex-wrap gap-px bg-line">
            {nearby.map((a) => (
              <li key={a.slug} className="flex-1 bg-ink">
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="block whitespace-nowrap px-5 py-4 text-center font-display text-sm font-semibold text-silver transition-colors hover:bg-ink-2 hover:text-bone"
                >
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
