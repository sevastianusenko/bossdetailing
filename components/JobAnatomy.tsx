/**
 * The stage-by-stage job record — the device the top detailing studios build
 * their sites around. It describes the schedule of the work, not a specific
 * customer's vehicle, so nothing here is a claim about a job we performed.
 */

const days: {
  label: string;
  note: string;
  rows: { at: string; title: string; body: string }[];
}[] = [
  {
    label: "Day one",
    note: "Decontamination and cutting. Nothing is polished until the paint is measured.",
    rows: [
      {
        at: "08:00",
        title: "Arrive and set up",
        body: "Tank, generator, extraction and lighting come off the rig. Roughly half an hour, and your driveway stays usable around us.",
      },
      {
        at: "08:30",
        title: "Wheels, barrels, arches",
        body: "First, while the paint is still cold and dry. Faces, barrels, lug seats and wheel wells by hand, with dedicated brushes.",
      },
      {
        at: "09:30",
        title: "Foam dwell, contact wash, dry",
        body: "A dwell lifts the loose layer before anything touches the paint, then a two-bucket wash with fresh media per panel section.",
      },
      {
        at: "10:30",
        title: "Iron and clay decontamination",
        body: "The iron remover bleeds purple off the lower panels. Clay shears off what is left. The hood goes from sandpaper to glass.",
      },
      {
        at: "12:00",
        title: "Measure, then inspect",
        body: "Paint thickness readings recorded panel by panel, then the defect map under raking light. Clear coat is finite; this decides what is safe to remove.",
      },
      {
        at: "13:00",
        title: "Test spot — your approval",
        body: "One section corrected and shown to you on your own paint, under the same light. The rest of the car is not touched until you have seen it.",
      },
      {
        at: "14:00",
        title: "Cutting stage",
        body: "Panel by panel, with trim and edges taped. This is the long part and it does not get rushed to fit a day.",
      },
      {
        at: "18:00",
        title: "Stop, cover, leave",
        body: "The vehicle stays under cover overnight. Nothing half-corrected gets driven.",
      },
    ],
  },
  {
    label: "Day two",
    note: "Refinement and protection. The finish is stripped bare before anything goes on it.",
    rows: [
      {
        at: "08:00",
        title: "Refinement stage",
        body: "The cutting stage leaves its own light haze. This removes it and brings the gloss up to the level the test spot promised.",
      },
      {
        at: "12:00",
        title: "Oil-stripping wipe-down",
        body: "Every trace of polishing oil comes off, so what you approve is bare corrected paint and not a temporary shine.",
      },
      {
        at: "13:00",
        title: "Coating, levelled by hand",
        body: "Applied and levelled panel by panel under controlled light. A missed high spot cures hard and has to be polished back out, so this stage is deliberately slow.",
      },
      {
        at: "16:00",
        title: "Cure begins",
        body: "The vehicle stays in your covered space, dry and untouched, for the stated cure window. No rain contact, no washing.",
      },
      {
        at: "—",
        title: "Walkaround and handover",
        body: "We go over the car with you in good light: what came out, what did not, and why. Written aftercare, and the date worth booking the inspection.",
      },
    ],
  },
];

export function JobAnatomy() {
  return (
    <section id="anatomy" className="scroll-mt-24 border-t border-line py-16 md:py-24">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="mark">Anatomy of the job</p>
          <h2 className="rank-section mt-5 text-bone">
            What two days actually look like.
          </h2>
          <p className="prose-body mt-6">
            &ldquo;Multi-stage correction&rdquo; is a phrase. This is the
            schedule behind it — where the hours go, and the two points where
            the work stops and waits for you.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {days.map((day) => (
            <div key={day.label}>
              <div className="flex items-baseline gap-4">
                <h3 className="rank-list text-bone">
                  {day.label}
                </h3>
              </div>
              <p className="mt-2 max-w-[46ch] text-sm text-muted">{day.note}</p>

              <ol className="mt-8">
                {day.rows.map((r) => (
                  <li
                    key={r.at + r.title}
                    className="grid grid-cols-[3.5rem_1fr] gap-x-5 border-t border-line py-5"
                  >
                    <span className="pt-1 font-display text-[0.7rem] font-semibold tracking-[0.12em] text-carmine-lt tabular-nums">
                      {r.at}
                    </span>
                    <div>
                      <h4 className="rank-sub text-bone">{r.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-silver">
                        {r.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[70ch] text-sm text-muted">
          A typical schedule for a mid-size vehicle in fair condition — not a
          promise for yours. Condition moves every number on this page, which
          is why we look at the car before we quote it.
        </p>
      </div>
    </section>
  );
}
