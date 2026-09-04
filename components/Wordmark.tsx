import Link from "next/link";

/**
 * The wordmark. Stacked lockup: heavy compressed "BOSS" with the discipline
 * line beneath it, separated by the carmine rule that also marks section
 * heads elsewhere on the site.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Boss Auto Detailing, home"
    >
      <span
        aria-hidden="true"
        className="block w-[3px] self-stretch bg-carmine transition-colors duration-300 group-hover:bg-carmine-lt"
      />
      <span className="block leading-none">
        <span
          className="block font-display text-[1.4rem] font-extrabold text-bone"
          style={{ fontStretch: "88%", letterSpacing: "-0.035em" }}
        >
          BOSS
        </span>
        <span
          className="mt-[3px] block font-display text-[0.6rem] font-semibold tracking-[0.235em] text-muted"
        >
          AUTO&nbsp;DETAILING
        </span>
      </span>
    </Link>
  );
}
