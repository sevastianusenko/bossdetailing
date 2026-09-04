import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  posts,
  postBySlug,
  formatPostDate,
  readingMinutes,
  relatedPosts,
} from "@/lib/posts";
import { serviceBySlug } from "@/lib/services";
import { areaBySlug } from "@/lib/areas";
import { site } from "@/lib/site";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { Arrow, PhoneGlyph } from "@/components/Arrow";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle ?? post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle ?? post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.published,
      images: [{ url: post.hero }],
    },
  };
}

/** Renders **bold** spans without pulling in a markdown dependency. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
      )}
    </>
  );
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const related = relatedPosts(post);
  const services = (post.services ?? [])
    .map(serviceBySlug)
    .filter((s) => s !== undefined);
  const areas = (post.areas ?? [])
    .map(areaBySlug)
    .filter((a) => a !== undefined);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Advice", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: `${site.url}${post.hero}`,
          datePublished: post.published,
          dateModified: post.published,
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          author: { "@type": "Organization", name: site.legalName },
          publisher: { "@id": `${site.url}/#business` },
        }}
      />
      {post.faq && post.faq.length > 0 && <JsonLd data={faqSchema(post.faq)} />}

      {/* ── Opening ─────────────────────────────────────────────────── */}
      <article>
        <header className="border-b border-line pt-[calc(var(--header-h)+3rem)]">
          <div className="wrap-tight pb-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                <li className="flex items-center gap-2">
                  <Link href="/" className="transition-colors hover:text-silver">
                    Home
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-silver"
                  >
                    Advice
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
                <li aria-current="page" className="text-silver">
                  {post.category}
                </li>
              </ol>
            </nav>

            <h1 className="rank-hero max-w-[20ch] text-bone">{post.title}</h1>

            <p className="lede mt-6">{post.excerpt}</p>

            <p className="mt-8 text-xs text-muted">
              {formatPostDate(post.published)} · {readingMinutes(post)} min read
              · {post.category}
            </p>
          </div>

          <div className="sweep relative aspect-[16/9] w-full overflow-hidden bg-ink-2 md:aspect-[21/9]">
            <Image
              src={post.hero}
              alt={post.heroAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </header>

        {/* ── Body ──────────────────────────────────────────────────── */}
        <div className="wrap-tight py-14 md:py-20">
          {post.sections.map((section) => (
            <section key={section.h} className="mb-12 last:mb-0">
              <h2 className="rank-section text-bone">{section.h}</h2>

              <div className="mt-6 space-y-4">
                {section.p.map((para, i) => (
                  <p key={i} className="prose-body">
                    <Rich text={para} />
                  </p>
                ))}
              </div>

              {section.list && (
                <ul className="mt-6 border-t border-line">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 border-b border-line py-3.5 text-silver"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-3 block h-px w-3 shrink-0 bg-carmine-lt"
                      />
                      <span>
                        <Rich text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.note && (
                <p className="mt-6 border-t border-carmine pt-5 text-bone">
                  <Rich text={section.note} />
                </p>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* ── Questions ─────────────────────────────────────────────────── */}
      {post.faq && post.faq.length > 0 && (
        <section className="border-t border-line py-14 md:py-20">
          <div className="wrap-tight">
            <p className="mark">Questions</p>
            <h2 className="rank-section mt-5 mb-8 text-bone">
              While we are on the subject.
            </h2>
            <FaqList items={post.faq} />
          </div>
        </section>
      )}

      {/* ── Where this leads ──────────────────────────────────────────── */}
      {(services.length > 0 || areas.length > 0) && (
        <section className="border-t border-line bg-ink-2 py-14 md:py-20">
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="mark">If you want this done</p>
              <h2 className="rank-section mt-5 text-bone">
                We do this at your address.
              </h2>
              <a
                href={site.phone.href}
                className="mt-7 inline-flex items-center gap-3 font-display text-2xl font-bold tracking-[-0.03em] text-bone transition-colors hover:text-carmine-lt"
              >
                <PhoneGlyph className="text-carmine-lt" />
                {site.phone.display}
              </a>
            </div>

            <div className="lg:col-span-8">
              {services.length > 0 && (
                <div className="grid gap-px bg-line sm:grid-cols-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group bg-ink-2 p-6 transition-colors hover:bg-ink-3"
                    >
                      <p className="mark">{s.mark}</p>
                      <h3 className="rank-sub mt-2 text-bone transition-colors group-hover:text-carmine-lt">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-silver">
                        {s.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {areas.length > 0 && (
                <ul className="mt-8 flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/service-areas/${a.slug}`}
                        className="inline-block border border-line px-3 py-2 text-xs text-silver transition-colors hover:border-muted hover:text-bone"
                      >
                        {a.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Read next ─────────────────────────────────────────────────── */}
      <section className="border-t border-line py-14 md:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="rank-section max-w-[16ch] text-bone">Read next</h2>
            <Link href="/blog" className="link-more">
              All advice
              <Arrow />
            </Link>
          </div>

          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-ink p-7 transition-colors hover:bg-ink-2"
              >
                <p className="mark">{p.category}</p>
                <h3 className="rank-sub mt-3 text-bone transition-colors group-hover:text-carmine-lt">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
