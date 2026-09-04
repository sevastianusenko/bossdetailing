import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts, formatPostDate, readingMinutes } from "@/lib/posts";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Detailing Advice for Northwest Drivers",
  description:
    "Straight answers on paint correction, ceramic coating, interior extraction and Pacific Northwest car care, written for Vancouver WA and Portland OR.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Advice", url: "/blog" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Boss Auto Detailing advice",
          url: `${site.url}/blog`,
          publisher: { "@id": `${site.url}/#business` },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}`,
            datePublished: p.published,
          })),
        }}
      />

      <PageHero
        mark="Advice"
        title="What we would tell you on the phone."
        lede="Written for cars that live in this climate. No listicles, and where the honest answer is that detailing cannot fix something, that is what it says."
        image="/images/faq-hero.jpg"
        imageAlt="Detailer working a polisher across a panel in a workshop"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Lead article */}
      <section className="border-t border-line py-14 md:py-20">
        <div className="wrap">
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid gap-8 md:grid-cols-12 md:gap-12"
          >
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-2">
                <Image
                  src={lead.hero}
                  alt={lead.heroAlt}
                  fill
                  priority
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center md:col-span-5">
              <p className="mark">{lead.category}</p>
              <h2 className="rank-section mt-4 text-bone transition-colors group-hover:text-carmine-lt">
                {lead.title}
              </h2>
              <p className="prose-body mt-5">{lead.excerpt}</p>
              <p className="mt-5 text-xs text-muted">
                {formatPostDate(lead.published)} · {readingMinutes(lead)} min
                read
              </p>
              <span className="link-more mt-6 inline-flex">
                Read it
                <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* The rest */}
      <section className="border-t border-line bg-ink-2 py-14 md:py-20">
        <div className="wrap">
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col bg-ink-2 transition-colors hover:bg-ink-3"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                  <Image
                    src={p.hero}
                    alt={p.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="mark">{p.category}</p>
                  <h3 className="rank-sub mt-3 text-bone transition-colors group-hover:text-carmine-lt">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">
                    {p.excerpt}
                  </p>
                  <p className="mt-5 text-xs text-muted">
                    {formatPostDate(p.published)} · {readingMinutes(p)} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Rather just ask someone?"
        body="Call and describe the car. We will tell you what it needs, including when the answer is that it needs nothing yet."
      />
    </>
  );
}
