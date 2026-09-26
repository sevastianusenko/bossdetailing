import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Work: Mobile Detailing Gallery",
  description:
    "Interior extraction, hand washing and furniture cleaning. What each stage actually changes, close enough to see.",
  alternates: { canonical: "/gallery" },
};

/*
  Frames 1 to 4 are Boss Auto Detailing's own job photography. The rest are
  licensed reference frames and the page says so below the grid. Replace
  them as more of the client's work is documented, then delete the
  disclosure. See HANDOFF.md and public/images/CREDITS.txt.
*/
const shots = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Full-size SUV finished and rinsed on a customer driveway",
    caption: "Our work: a full-size SUV, finished on the driveway",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Snow foam being rinsed from the flank of a full-size SUV",
    caption: "Our work: the foam coming off, mid-wash",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Cleaned dashboard, vents and passenger seat of a Ford Explorer",
    caption: "Our work: dash, vents and seat after an interior detail",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Cleaned steering wheel and instrument cluster of a Ford Explorer",
    caption: "Our work: the surfaces you touch every day",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Water standing in tight beads on a glossy painted surface",
    caption: "A sealed finish holding water in tight beads",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Light leather seat and console cleaned to a matte finish",
    caption: "Leather cleaned and conditioned, left matte",
  },
];

/** The wide pair that closes the page. Same provenance as the grid above. */
const closers = [
  {
    src: "/images/furniture-cleaning.jpg",
    alt: "Upholstered sofa cushion being cleaned with a fabric extraction tool",
    caption: "Furniture and upholstery cleaning, indoors and out",
  },
  {
    src: "/images/gallery-8.jpg",
    alt: "Engine bay cleaned and conservatively dressed",
    caption: "A full exterior detail, done properly",
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
        lede="Detailing photographs badly from ten feet away. These are the details that decide whether a car or a room reads as clean or as finished."
        image="/images/gallery-hero.jpg"
        imageAlt="A dark car under snow foam, panels covered in suds"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="border-t border-line py-16 md:py-24">
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
            The first four frames are our own jobs. The rest are reference
            photography while we build the library, and we would rather label
            that than let you assume. Ask on the phone if you want to see a
            specific service on a specific vehicle before booking.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want your car or your furniture in here?"
        body="Send photos and the address. We will tell you what it needs, what it will cost, and how long we will have it."
      />
    </>
  );
}
