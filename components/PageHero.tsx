import Image from "next/image";
import Link from "next/link";

/**
 * Shared interior-page opening. Same grammar as the home hero — full-bleed
 * photograph, mark, hero-rank headline — at a shorter height, so a visitor
 * arriving from search lands somewhere recognisably the same site.
 */
export function PageHero({
  mark,
  title,
  lede,
  image,
  imageAlt,
  crumbs,
  children,
}: {
  mark: string;
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
  crumbs?: { label: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[62svh] flex-col justify-end overflow-hidden pt-[var(--header-h)]">
      <div className="sweep grain absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/62 to-ink/28" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/10 to-transparent" />
      </div>

      <div className="wrap pb-14 pt-24">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-silver"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
              <li aria-current="page" className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span className="text-silver">{title.replace(/\.$/, "")}</span>
              </li>
            </ol>
          </nav>
        )}

        <p className="mark">{mark}</p>
        <h1 className="rank-hero mt-5 max-w-[19ch] text-bone">{title}</h1>
        {lede && <p className="lede mt-6">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
