import Link from "next/link";
import { site } from "@/lib/site";
import { Arrow, PhoneGlyph } from "./Arrow";

export function CtaBand({
  title = "Tell us the car and where it sleeps.",
  body = "Send the vehicle, the city and the space it will be parked in, and we will come back with a scope, a price and a realistic window.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line bg-ink-2 py-16 md:py-20">
      <div className="wrap flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="rank-section text-bone">{title}</h2>
          <p className="prose-body mt-5">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={site.phone.href} className="btn">
            <PhoneGlyph />
            {site.phone.display}
          </a>
          <Link href="/contact" className="btn btn-ghost">
            Request a quote
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
