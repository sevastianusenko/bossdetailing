import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Work — Mobile Detailing Gallery",
  description:
    "Interior extraction, decontamination, machine correction and ceramic coating — what each stage actually changes, close enough to see.",
  alternates: { canonical: "/gallery" },
};

/*
  REPLACE BEFORE LAUNCH — these are licensed reference photographs, not
  Boss Auto Detailing's own jobs. The page says so in plain sight below the
  grid. Swap the files in /public/images for the client's own work and
  delete the disclosure line. See HANDOFF.md.
*/
const shots = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Dark paint holding a clean, undistorted reflection under ambient light",
    caption: "Gloss deep enough to read the light source in",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Vacuum nozzle drawing soil out of a car carpet",
    caption: "Into the carpet, not across the top of it",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Wheel and tire being scrubbed by hand with suds",
    caption: "Wheels and tires, cleaned by hand",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Steering wheel and switch gear being wiped down by hand",
    caption: "The surfaces you touch every day, done properly",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Water standing in tight beads on a glossy painted surface",
    caption: "Protected paint holding water in tight beads",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Leather seat cleaned and conditioned to a matte finish",
    caption: "Leather conditioned to matte, not dressed to shine",
  },
];

/** The wide pair that closes the page. Same provenance as the grid above. */
const closers = [
  {
    src: "/images/gallery-7.jpg",
    alt: "An SUV under a full covering of snow foam before the contact wash",
    caption: "Foam dwell, before anything touches the paint",
  },
  {
    src: "/images/gallery-8.jpg",
    alt: "Engine bay cleaned and conservatively dressed",
    caption: "Engine bay — clean, not freshly blasted",
  },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Work", url: "/gallery" },
        ])}
      />

      <PageHero
        mark="The work"
        title="Close enough to see what changed."
        lede="Detailing photographs badly from ten feet away. These are the details that decide whether a car reads as clean or as finished."
        image="/images/gallery-hero.jpg"
        imageAlt="A dark car under snow foam, panels covered in suds"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <BeforeAfter
              before="/images/correction-before.jpg"
              after="/images/correction-after.jpg"
              beforeAlt="Glossy dark paint overlaid with a dense web of fine circular scratches"
              afterAlt="The same frame with the marring removed, reflecting cleanly"
              beforeLabel="Marred"
              afterLabel="Corrected"
              note="Illustration — one photograph, shown with and without simulated clear-coat marring."
            />
          </div>
          <div className="lg:col-span-5">
            <p className="mark">Multi-stage correction</p>
            <h2 className="rank-section mt-5 text-bone">
              What marring actually does to a reflection.
            </h2>
            <p className="prose-body mt-6">
              This is one photograph with the damage drawn on, so you can see
              the mechanism rather than a lighting change: thousands of fine
              circular scratches scatter a single light source into a haze.
              Correction removes them by taking a few microns of clear coat
              down to their depth — nothing is added, nothing is filled.
            </p>
            <p className="mt-4 text-sm text-muted">
              An illustration, not a customer&rsquo;s car. Real before-and-after
              sets are added here as jobs are documented.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-16 md:py-24">
        <div className="wrap">
          <div className="grid grid-cols-2 gap-px bg-line md:grid-cols-3">
            {shots.map((s) => (
              <figure
                key={s.src}
                className="group relative m-0 aspect-[4/3] overflow-hidden bg-ink"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-10 text-xs leading-snug text-silver md:text-sm">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-px grid gap-px bg-line md:grid-cols-2">
            {closers.map((s) => (
              <figure
                key={s.src}
                className="group relative m-0 aspect-[16/10] overflow-hidden bg-ink"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-10 text-xs leading-snug text-silver md:text-sm">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 max-w-[70ch] text-sm text-muted">
            Reference photography. Boss Auto Detailing&rsquo;s own job
            documentation is being added as work is completed — ask on the
            phone if you want to see a specific service on a specific vehicle
            before booking.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want your car in here?"
        body="Send the vehicle and the city. We will tell you what it needs, what it will cost, and how long we will have it."
      />
    </>
  );
}
