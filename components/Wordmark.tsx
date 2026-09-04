import Image from "next/image";
import Link from "next/link";

/**
 * The lockup: the client's shield emblem as the mark, with a legible
 * typographic wordmark beside it. The emblem carries the business name
 * inside it, but at header scale that lettering is unreadable, so the
 * name is set again in type rather than relied on inside the artwork.
 */
export function Wordmark({
  className = "",
  size = "header",
}: {
  className?: string;
  /** "header" is the compact lockup; "footer" gives the emblem more room. */
  size?: "header" | "footer";
}) {
  const emblem = size === "footer" ? 68 : 46;

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Boss Auto Detailing, home"
    >
      <Image
        src="/brand/logo.png"
        alt=""
        aria-hidden="true"
        width={527}
        height={560}
        priority
        sizes="70px"
        className="w-auto shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        style={{ height: emblem }}
      />

      <span className="block leading-none">
        {/* One size at every placement. Only the emblem scales. */}
        <span
          className="block font-display text-[1.4rem] font-extrabold text-bone"
          style={{ fontStretch: "88%", letterSpacing: "-0.035em" }}
        >
          BOSS
        </span>
        <span className="mt-[3px] block font-display text-[0.6rem] font-semibold tracking-[0.235em] text-muted">
          AUTO&nbsp;DETAILING
        </span>
      </span>
    </Link>
  );
}
