import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mobile Detailing Services in Vancouver WA & Portland OR",
  description:
    "Interior detailing, exterior hand washing, furniture and upholstery cleaning, and fleet service, all performed at your address.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />

      <PageHero
        mark="Services"
        title="Four kinds of work, at your address."
        lede="Interior, exterior, furniture and fleet. Each one is priced plainly, and each one is quoted before we start. Send photos with your request for the most accurate number."
        image="/images/services-hero.jpg"
        imageAlt="Hand rinsing foam off a dark sedan in a residential driveway"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <div className="space-y-px bg-line">
        {services.map((s, i) => (
          <article key={s.slug} className="rise bg-ink">
            <div className="wrap grid gap-8 py-14 md:grid-cols-12 md:gap-12 md:py-20">
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block aspect-[4/3] w-full overflow-hidden bg-ink-2"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </Link>
              </div>

              <div className="md:col-span-7">
                <p className="mark">{s.mark}</p>
                <h2 className="rank-section mt-4 text-bone">
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-carmine-lt"
                  >
                    {s.name}
                  </Link>
                </h2>
                <p className="prose-body mt-5">{s.lede}</p>

                <dl className="mt-8">
                  {s.specs.slice(0, 3).map((sp) => (
                    <div key={sp.label} className="spec">
                      <dt>{sp.label}</dt>
                      <dd>{sp.value}</dd>
                    </div>
                  ))}
                </dl>

                <Link href={`/services/${s.slug}`} className="link-more mt-8 inline-flex">
                  {s.name}
                  <Arrow />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
