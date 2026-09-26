import type { Post } from "@/lib/post-types";

export const paintPosts: Post[] = [
  {
    slug: "remove-tree-sap-safely",
    title: "Getting tree sap off paint without wrecking the clear coat",
    metaTitle: "How to Remove Tree Sap From Car Paint Safely",
    description:
      "Why sap etches Northwest paint so quickly, what dissolves it safely, and the household fixes that cause more damage than the sap did.",
    published: "2026-09-25",
    category: "Paint",
    excerpt:
      "Park under a fir for a week in August and you will find out how fast sap goes from sticky to permanent.",
    hero: "/images/gallery-7.jpg",
    heroAlt: "Machine polisher working along the edge of a painted panel",
    services: ["exterior-detailing"],
    areas: ["portland-or", "west-linn-or", "camas-wa"],
    sections: [
      {
        h: "Why sap is worse here than people expect",
        p: [
          "Conifer sap is not just sticky. As it dries it contracts and concentrates, and warm paint accelerates the whole process. What lands as a soft droplet becomes a hard resin bead in a day or two.",
          "The damage happens underneath. As the resin hardens it pulls at the clear coat and, given a warm week, can leave a shallow mark that stays behind after the sap itself is gone.",
        ],
      },
      {
        h: "Do this first",
        p: [
          "Time matters more than technique. Fresh sap comes off easily. Sap that has sat for a week or more is much harder to shift without leaving a mark.",
        ],
        list: [
          "Wash the panel first, so you are not dragging grit around while you work",
          "Soak the spot rather than rubbing it. Let the solvent do the work",
          "Use a dedicated automotive sap or tar remover, or isopropyl alcohol at moderate dilution",
          "Hold a soaked microfiber on the bead for thirty seconds, then lift, do not scrub",
          "Repeat rather than pressing harder",
          "Wash the area again afterwards, because solvents strip whatever protection was there",
        ],
      },
      {
        h: "What not to reach for",
        p: [
          "The internet is full of household fixes for sap. Most of them work in the sense that the sap leaves, and cause a second problem in the process.",
        ],
        list: [
          "A fingernail or a plastic scraper: can leave a mark exactly where the sap was etching",
          "Acetone or nail polish remover: attacks clear coat as happily as it attacks resin",
          "Bug and tar remover left to sit for ten minutes: strips protection well beyond the spot",
          "Hot water on a cold panel in winter: thermal shock is a real risk on glass",
          "Scrubbing dry: guaranteed marring on a dark car",
        ],
        note: "If the sap has already left a visible mark after removal, that is beyond what washing or a home fix can undo, and a paint specialist is the right next call.",
      },
      {
        h: "Preventing the next round",
        p: [
          "You cannot always move where you park, and in Laurelhurst or Robinwood there may be no unshaded option at all.",
          "What you can change is how fast sap can bite. A washed, sealed surface gives the resin something harder to work through and buys you days rather than hours. That is one reason a regular wash interval matters more under trees than out in the open.",
        ],
      },
    ],
  },

  {
    slug: "water-spots-and-etching",
    title: "Water spots, and the point where a wash stops fixing them",
    metaTitle: "Water Spots on Car Paint: Removal and Prevention",
    description:
      "The three kinds of water spot, how to tell which one you have, and why the worst kind needs more than a wash to fix.",
    published: "2026-09-25",
    category: "Paint",
    excerpt:
      "Everyone has scrubbed at a water spot that would not budge. Usually because by then it was no longer sitting on the paint.",
    hero: "/images/gallery-2.jpg",
    heroAlt: "Snow foam being rinsed from the flank of a full-size SUV",
    services: ["exterior-detailing"],
    areas: ["west-linn-or", "happy-valley-or"],
    sections: [
      {
        h: "Three problems with one name",
        p: [
          "**Mineral deposit.** Water evaporates and leaves dissolved solids behind as a visible ring. It sits on top of the paint and comes off with a proper wash.",
          "**Bonded scale.** The same deposit, left through repeated wet and dry cycles, hardens onto the surface. A normal wash does nothing. It usually needs a dedicated acidic water-spot remover.",
          "**Etching.** The deposit has been sitting long enough, often with heat, that it has marked the clear coat itself. There is nothing left to dissolve. This is past what washing or a spot remover can undo.",
        ],
      },
      {
        h: "Telling them apart",
        p: [
          "Wash and dry the panel, then look across it at a low angle under a hard light. If the marks vanish when the panel is wet and reappear as it dries, you are looking at deposit or scale. If you can still see them clearly while the surface is wet, it is likely etched.",
          "The wet test works because water fills a shallow mark and hides it temporarily. It is the same reason a rainy day makes tired paint look better than it is.",
        ],
      },
      {
        h: "Why this region produces so many",
        p: [
          "Two local habits do most of the damage. Sprinkler overspray onto a car parked on a driveway is the biggest single cause we see, because sprinkler water is untreated and runs on a daily cycle. The second is the dry-out after rain: a panel covered in road film dries in patches and concentrates minerals wherever the last droplets sat.",
          "Both are worse on a car that is never dried after washing, because the same thing happens with rinse water.",
        ],
        note: "Drying the car properly after every wash removes most of this problem before it starts.",
      },
      {
        h: "What actually helps at each stage",
        p: [
          "Deposit: a normal, thorough wash. Scale: a dedicated water-spot remover, followed by drying the panel properly. Etching: at that point it is a paint specialist's job, not a wash or a home product.",
          "Catching it early is the whole game. The first two are a normal part of a wash. The third is a different kind of appointment entirely.",
        ],
      },
    ],
  },
];
