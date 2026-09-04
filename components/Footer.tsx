import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { Wordmark } from "./Wordmark";
import { PhoneGlyph } from "./Arrow";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="wrap py-16 pb-28 sm:pb-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Business record */}
          <div className="md:col-span-4">
            <Wordmark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-silver">
              Self-contained mobile detailing for both sides of the Columbia.
              We bring the shop to your driveway, your office lot or your yard.
            </p>

            <address className="mt-7 not-italic">
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-[-0.02em] text-bone transition-colors hover:text-carmine-lt"
              >
                <PhoneGlyph className="text-carmine-lt" />
                {site.phone.display}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-silver">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region}{" "}
                {site.address.postalCode}
              </p>
            </address>

            {site.hoursConfirmed ? (
              <dl className="mt-6 space-y-1 text-sm">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex gap-3">
                    <dt className="w-32 shrink-0 text-muted">{h.days}</dt>
                    <dd className="text-silver">
                      {h.open ? `${h.open} to ${h.close}` : "By appointment"}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-6 text-sm text-silver">
                By appointment, seven days a week. Early mornings and evenings
                are normal for us. Call and ask.
              </p>
            )}
          </div>

          {/* Services */}
          <nav aria-label="Services" className="md:col-span-3">
            <h2 className="mark mb-5">Services</h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-silver transition-colors hover:text-bone"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/packages"
                  className="text-sm text-silver transition-colors hover:text-bone"
                >
                  Packages &amp; pricing
                </Link>
              </li>
            </ul>
          </nav>

          {/* Areas */}
          <nav aria-label="Service areas" className="md:col-span-3">
            <h2 className="mark mb-5">Service area</h2>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="text-sm text-silver transition-colors hover:text-bone"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-1 text-xs leading-relaxed text-muted">
              {site.counties.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="md:col-span-2">
            <h2 className="mark mb-5">Company</h2>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/gallery", label: "Work" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-silver transition-colors hover:text-bone"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="rule-sweep my-12" />

        <div className="flex flex-col gap-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Mobile auto detailing in Vancouver, WA
            and Portland, OR.
          </p>
          <p>
            Site by{" "}
            <a
              href="https://seva-web-studio.com"
              className="text-silver transition-colors hover:text-bone"
              rel="dofollow"
            >
              Seva Web Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
