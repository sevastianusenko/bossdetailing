"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { PhoneGlyph } from "./Arrow";

/**
 * Phone-only action bar. Appears once the visitor has committed to reading
 * (past the first viewport) and hides again over the page's own contact
 * form, where it would only cover the fields it is trying to promote.
 */
export function StickyCall() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const form = document.getElementById("request");

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      let overForm = false;
      if (form) {
        const r = form.getBoundingClientRect();
        overForm = r.top < window.innerHeight && r.bottom > 0;
      }
      setShown(pastHero && !overForm);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:hidden ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={site.phone.href}
          tabIndex={shown ? undefined : -1}
          aria-hidden={!shown}
          className="flex min-h-[3.5rem] items-center justify-center gap-2 font-display text-[0.84rem] font-bold uppercase tracking-[0.11em] text-bone"
        >
          <PhoneGlyph className="text-carmine-lt" />
          Call now
        </a>
        <Link
          href="/contact"
          tabIndex={shown ? undefined : -1}
          aria-hidden={!shown}
          className="flex min-h-[3.5rem] items-center justify-center bg-carmine font-display text-[0.84rem] font-bold uppercase tracking-[0.11em] text-bone"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
