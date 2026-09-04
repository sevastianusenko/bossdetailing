"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Wordmark } from "./Wordmark";
import { PhoneGlyph } from "./Arrow";

export function Header() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const pathname = usePathname();

  // Navigating closes the panel. Adjusted during render rather than in an
  // effect, so the closed panel is never painted open for a frame first.
  const [panelPath, setPanelPath] = useState(pathname);
  if (pathname !== panelPath) {
    setPanelPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        lifted || open
          ? "border-b border-line bg-ink/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="wrap flex h-full items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`font-display text-[0.78rem] font-semibold uppercase tracking-[0.13em] transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-bone"
                  : "text-silver hover:text-bone"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 font-display text-[0.84rem] font-bold tracking-[0.04em] text-bone transition-colors hover:text-carmine-lt md:inline-flex"
          >
            <PhoneGlyph className="text-carmine-lt" />
            {site.phone.display}
          </a>

          <Link href="/contact" className="btn hidden !min-h-[2.9rem] sm:inline-flex">
            Get a quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 block h-[2px] w-full bg-bone transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-[2px] w-full bg-bone transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-full bg-bone transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-line bg-ink lg:hidden"
        style={{ top: "var(--header-h)" }}
      >
        <nav aria-label="Main, mobile" className="wrap py-4">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline justify-between border-b border-line-soft py-4"
            >
              <span
                className="font-display text-2xl font-bold text-bone"
                style={{ fontStretch: "94%", letterSpacing: "-0.025em" }}
              >
                {item.label}
              </span>
              <span className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}

          <div className="mt-7 grid gap-3 pb-10">
            <a href={site.phone.href} className="btn">
              <PhoneGlyph />
              Call {site.phone.display}
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Request a quote
            </Link>
            <p className="pt-2 text-sm text-muted">
              Mobile service across Clark, Multnomah, Washington and Clackamas
              counties.
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
