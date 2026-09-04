import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Arrow, PhoneGlyph } from "@/components/Arrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-[var(--header-h)]">
      <div className="wrap py-20">
        <p className="mark">404</p>
        <h1 className="rank-hero mt-5 max-w-[16ch] text-bone">
          That page has been polished away.
        </h1>
        <p className="lede mt-6">
          The link is broken or the page has moved. Everything we do is one of
          the services below — or just call and tell us what you need.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={site.phone.href} className="btn">
            <PhoneGlyph />
            {site.phone.display}
          </a>
          <Link href="/" className="btn btn-ghost">
            Back to the front
            <Arrow />
          </Link>
        </div>

        <ul className="mt-14 flex flex-wrap gap-px bg-line">
          {services.map((s) => (
            <li key={s.slug} className="flex-1 bg-ink">
              <Link
                href={`/services/${s.slug}`}
                className="block whitespace-nowrap px-5 py-4 text-center font-display text-sm font-semibold text-silver transition-colors hover:bg-ink-2 hover:text-bone"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
