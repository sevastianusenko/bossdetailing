import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/lib/services";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { RequestForm } from "@/components/RequestForm";
import { Arrow, PhoneGlyph } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.meta,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.meta,
      url: `/services/${service.slug}`,
      images: [{ url: service.image }],
    },
  };
}

/** Renders **bold** spans in the body copy without pulling in a markdown lib. */
function Paragraph({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <p className="prose-body">
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
      )}
    </p>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.meta,
          url: `/services/${service.slug}`,
        })}
      />

      <PageHero
        mark={service.mark}
        title={service.name}
        lede={service.lede}
        image={service.image}
        imageAlt={service.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
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
            {service.body.map((p, i) => (
              <Paragraph key={i} text={p} />
            ))}
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-line bg-ink-2 p-7 md:p-8">
              <h2 className="mark">At a glance</h2>
              <dl className="mt-5">
                {service.specs.map((sp) => (
                  <div key={sp.label} className="spec">
                    <dt>{sp.label}</dt>
                    <dd>{sp.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="mark">What is included</p>
            <h2 className="rank-section mt-5 text-bone">
              Every stage, spelled out.
            </h2>
            <p className="prose-body mt-6">
              If something on this list does not apply to your vehicle we take
              it off the quote rather than charge for it.
            </p>
          </div>

          <ul className="lg:col-span-8">
            {service.includes.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-5 border-t border-line py-4"
              >
                <span className="font-display text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-bone">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local reach: every service page carries the geography */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="wrap">
          <p className="mark">Where we do this</p>
          <h2 className="rank-section mt-5 max-w-[22ch] text-bone">
            {service.name} at your address, both sides of the river.
          </h2>
          <ul className="mt-10 flex flex-wrap gap-px bg-line">
            {areas.map((a) => (
              <li key={a.slug} className="flex-1 bg-ink">
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="block whitespace-nowrap px-5 py-4 text-center font-display text-sm font-semibold tracking-[0.02em] text-silver transition-colors hover:bg-ink-3 hover:text-bone"
                >
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="request"
        className="scroll-mt-24 border-t border-line bg-ink-2 py-16 md:py-24"
      >
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mark">Book it</p>
            <h2 className="rank-section mt-5 text-bone">
              Get a quote for {service.name.toLowerCase()}.
            </h2>
            <p className="prose-body mt-6">
              Send a few photos, the city, and whether the address has water
              and power access. We come back with a scope, a price and a
              window, usually the same working day.
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
            <RequestForm defaultService={service.name} />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <div className="wrap">
          <p className="mark">Also worth knowing about</p>
          <div className="mt-8 grid gap-px bg-line md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group bg-ink p-7 transition-colors hover:bg-ink-2"
              >
                <h3 className="rank-sub text-bone transition-colors group-hover:text-carmine-lt">
                  {o.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {o.summary}
                </p>
                <span className="link-more mt-5 inline-flex">
                  Read more
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
