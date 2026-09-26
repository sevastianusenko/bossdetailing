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
  This page mixes Boss Auto Detailing's own job photography with licensed
  reference frames. Every section below says in its own caption which is
  which. Replace reference frames as more real jobs are documented, then
  simplify the disclosures. See HANDOFF.md and public/images/CREDITS.txt.
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
    alt: "Wood trim and leather dashboard of a Mercedes S-Class after detailing",
    caption: "Our work: wood trim and leather, detailed properly",
  },
];

/** The wide pair that closes the first grid. Same provenance as the shots above. */
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

/** One real job, shown as a wide before/after pair plus a row of detail shots. */
type Job = {
  mark: string;
  title: string;
  body: string;
  wide: { src: string; alt: string; caption: string }[];
  details: { src: string; alt: string; caption: string }[];
};

const jobs: Job[] = [
  {
    mark: "Job 2, real work",
    title: "A 2003 Mercedes S-Class, foam to finished.",
    body: "A full interior detail plus an exterior wash, on the same visit. Two different parking spots because the car went back on the road in between, same car both times.",
    wide: [
      {
        src: "/images/job2-foam.jpg",
        alt: "A Mercedes S-Class covered in foam during a mobile wash",
        caption: "Before: foamed and ready to rinse",
      },
      {
        src: "/images/job2-clean.jpg",
        alt: "The same Mercedes S-Class, clean and parked after the wash",
        caption: "After: the same car, finished",
      },
    ],
    details: [
      {
        src: "/images/job2-interior-1.jpg",
        alt: "Wood-trimmed door panel of a Mercedes S-Class after detailing",
        caption: "Door trim, cleaned and conditioned",
      },
      {
        src: "/images/job2-interior-2.jpg",
        alt: "Wood shifter surround and leather console of a Mercedes S-Class",
        caption: "Console and shifter surround",
      },
    ],
  },
  {
    mark: "Job 3, real work",
    title: "A Ford Expedition, inside and out.",
    body: "Interior detail and a full exterior wash and finish, same vehicle, same visit.",
    wide: [
      {
        src: "/images/job3-exterior-front.jpg",
        alt: "Front three-quarter view of a black Ford Expedition after a full detail",
        caption: "Finished: front end, deep reflection",
      },
      {
        src: "/images/job3-exterior-rear.jpg",
        alt: "Rear taillight and badge of a black Ford Expedition after a full detail",
        caption: "Finished: rear badge and taillight",
      },
    ],
    details: [
      {
        src: "/images/job3-dash.jpg",
        alt: "Dashboard and steering wheel of a Ford Expedition",
        caption: "Dash and wheel, detailed",
      },
      {
        src: "/images/job3-seats.jpg",
        alt: "Rear leather seats of a Ford Expedition, cleaned and conditioned",
        caption: "Rear seats, cleaned and conditioned",
      },
      {
        src: "/images/job3-wheel.jpg",
        alt: "Wheel and tire of a Ford Expedition cleaned by hand",
        caption: "Wheel, cleaned by hand",
      },
    ],
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
            The frames above marked &ldquo;our work&rdquo; are real jobs. The
            rest of this grid is reference photography while we build the
            library, and we would rather label that than let you assume.
          </p>
        </div>
      </section>

      {jobs.map((job, i) => (
        <section
          key={job.title}
          className={`border-t border-line py-16 md:py-24 ${i % 2 === 0 ? "bg-ink-2" : ""}`}
        >
          <div className="wrap">
            <p className="mark">{job.mark}</p>
            <h2 className="rank-section mt-5 max-w-[24ch] text-bone">
              {job.title}
            </h2>
            <p className="prose-body mt-5">{job.body}</p>
          </div>

          <div className="wrap mt-10">
            <div className="grid gap-px bg-line md:grid-cols-2">
              {job.wide.map((s) => (
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

            <div
              className={`mt-px grid grid-cols-2 gap-px bg-line ${
                job.details.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {job.details.map((s) => (
                <figure
                  key={s.src}
                  className="group relative m-0 aspect-square overflow-hidden bg-ink"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-8 text-xs leading-snug text-silver">
                    {s.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Want your car or your furniture in here?"
        body="Send photos and the address. We will tell you what it needs, what it will cost, and how long we will have it."
      />
    </>
  );
}
