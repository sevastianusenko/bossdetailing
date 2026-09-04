"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { promo, promoEndsLabel, promoIsLive } from "@/lib/promo";
import { site } from "@/lib/site";
import { Arrow, PhoneGlyph } from "./Arrow";

const STORAGE_KEY = `promo-dismissed:${promo.id}`;

/** Scroll depth, as a fraction of the first viewport, before we interrupt. */
const SCROLL_TRIGGER = 0.6;
/** Fallback for a visitor who reads without scrolling. */
const DWELL_MS = 20_000;

/**
 * The September offer.
 *
 * Deliberately not an on-load interstitial: it waits until the visitor has
 * either scrolled past the first viewport or stayed twenty seconds, which
 * keeps it clear of Google's intrusive-interstitial treatment and out of the
 * way of anyone who is still deciding whether to read at all. It never
 * appears on the contact page, where the visitor is already converting, and
 * a dismissal is remembered per offer id.
 */
export function PromoDialog() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<Element | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Private mode or blocked storage. The dialog simply returns next visit.
    }
    const opener = openerRef.current;
    if (opener instanceof HTMLElement) opener.focus();
  }, []);

  // Arm the triggers.
  useEffect(() => {
    if (!promoIsLive()) return;
    if (pathname === "/contact") return;

    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    let done = false;
    const fire = () => {
      if (done) return;
      done = true;
      openerRef.current = document.activeElement;
      setOpen(true);
      cleanup();
    };

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * SCROLL_TRIGGER) fire();
    };

    const timer = window.setTimeout(fire, DWELL_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, [pathname]);

  // Modal behaviour: lock the page, trap Tab, close on Escape.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close the September offer"
        onClick={close}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/80 backdrop-blur-sm"
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        aria-describedby="promo-body"
        className="relative w-full max-w-xl border-t border-line bg-ink-2 p-7 sm:border md:p-9"
        style={{ paddingBottom: "max(1.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-start justify-between gap-6">
          <p className="mark">{promo.eyebrow}</p>
          <button
            type="button"
            onClick={close}
            className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center text-muted transition-colors hover:text-bone"
          >
            <span className="sr-only">Close</span>
            <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M1 1l14 14M15 1L1 15"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>

        <h2 id="promo-title" className="rank-section mt-4 text-bone">
          {promo.headline}
        </h2>

        <p id="promo-body" className="prose-body mt-5">
          {promo.body}
        </p>

        <ul className="mt-6 space-y-2">
          {promo.terms.map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-silver">
              <span
                aria-hidden="true"
                className="mt-2 block h-px w-3 shrink-0 bg-carmine-lt"
              />
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            onClick={close}
            className="btn whitespace-nowrap"
            data-autofocus
          >
            Book both cars
            <Arrow />
          </Link>
          <a href={site.phone.href} className="btn btn-ghost whitespace-nowrap">
            <PhoneGlyph />
            {site.phone.display}
          </a>
        </div>

        <p className="mt-5 text-xs text-muted">
          Offer ends {promoEndsLabel()}.
        </p>
      </div>
    </div>
  );
}
