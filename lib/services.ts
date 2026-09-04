export type Service = {
  slug: string;
  /** Nav / card label. */
  name: string;
  /** The one-word section mark used on the home page pillars. */
  mark: string;
  /** Page <title> and H1 support. */
  title: string;
  /** 155-char meta description. */
  meta: string;
  /** One sentence, used on the home page and in listings. */
  summary: string;
  /** Opening paragraph on the service page. */
  lede: string;
  /** Body copy, one string per paragraph. */
  body: string[];
  /** What the service physically includes. */
  includes: string[];
  /** Facts a buyer needs to self-qualify. */
  specs: { label: string; value: string }[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    mark: "Interior",
    title: "Mobile Interior Detailing in Vancouver, WA & Portland, OR",
    meta: "Deep interior detailing at your home or office. Hot-water extraction, steam, leather care, stain and odor removal across Vancouver WA and Portland OR.",
    summary:
      "Hot-water extraction, steam and hand work that pull the cabin back to a condition you can smell as well as see.",
    lede:
      "A cabin collects everything the Pacific Northwest throws at it. Wet dog, fir needles, spilled coffee, road grit ground into the carpet by winter boots. Interior work is where a detail is either done properly or only looked at.",
    body: [
      "We start dry. Every mat comes out, the seats go all the way forward and all the way back, and the cabin gets vacuumed with a crevice tool along the seat rails, under the tracks, into the map pockets. Those are the places a vacuum-and-wipe service never reaches. Compressed air drives grit out of the vents, seams and switch gear before any liquid touches a surface.",
      "Then the wet stage. Carpets and fabric seats are pre-treated, agitated, and pulled with a **hot-water extractor** that puts heat and solution into the fiber and takes the dirty water back out. Steam handles what chemistry should not touch: hard trim, cup holders, seat belt webbing, vents, door jambs. Leather gets a pH-appropriate cleaner, a soft brush, and conditioner rather than a shine product.",
      "Odor is a source problem before it is a smell problem. If there is a spill under a seat or a cabin filter holding moisture, masking it buys you about a week. We find it, extract it, and tell you plainly when something has gone past what detailing can fix.",
    ],
    includes: [
      "Full removal and cleaning of floor mats",
      "Compressed-air and crevice vacuum through seat rails, seams and vents",
      "Hot-water extraction of carpets and cloth seating",
      "Steam cleaning of hard trim, console, jambs and switch gear",
      "Leather clean and condition, left matte rather than glossy",
      "Interior glass cleaned streak-free, including the windshield base",
      "Headliner spot treatment where the adhesive allows it",
      "Odor source identification and extraction",
    ],
    specs: [
      { label: "Time", value: "2 to 6 hours depending on size and condition" },
      { label: "Best for", value: "Family vehicles, pet owners, lease returns" },
      { label: "Drying", value: "Cabin is damp-dry at handover. An hour with the windows down finishes it" },
      { label: "Not included", value: "Cabin filter replacement, upholstery repair, mold remediation" },
    ],
    image: "/images/interior-detailing.jpg",
    imageAlt: "Cleaned driver footwell and all-weather mat after an interior detail",
  },
  {
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    mark: "Exterior",
    title: "Mobile Exterior Detailing & Hand Wash in Vancouver WA, Portland OR",
    meta: "Two-bucket hand wash, chemical and clay decontamination, wheels, barrels and wheel wells, performed at your address in Vancouver WA and Portland OR.",
    summary:
      "A hand wash built to remove contamination instead of grinding it into the clear coat, plus the wheel work nobody else bothers with.",
    lede:
      "Most swirl marks in the Portland metro did not come from the road. They came from washing: a dirty mitt, a gas-station brush, a drive-through running recycled water. Our exterior process is built first around not adding damage.",
    body: [
      "Wheels and tires come first, while the paint is still cold and dry. Faces, barrels and lug seats get cleaned by hand with dedicated brushes, and the wheel wells get flushed. Once the car is back on the ground, that is the single most visible difference between a wash and a detail.",
      "The paint gets a pre-soak and a foam dwell to lift the loose layer before anything touches it, then a **two-bucket hand wash** with grit guards and fresh media for each panel section. Our rinse water is filtered, so panels dry without mineral spotting even in hard-water neighborhoods.",
      "Decontamination is where the finish changes character. A chemical iron remover pulls out embedded brake and rail dust, and you will watch it bleed purple off the lower panels. A clay treatment shears off whatever is left of the tree sap, overspray and road film. Run your hand across the hood afterward and the surface feels like glass instead of fine sandpaper. That step is also mandatory before any polishing or coating work.",
    ],
    includes: [
      "Wheel faces, barrels, lug seats and tires cleaned by hand",
      "Wheel wells flushed and dressed",
      "Foam pre-soak and dwell before contact",
      "Two-bucket contact wash with grit guards, fresh media per section",
      "Chemical iron and fallout decontamination",
      "Clay treatment on bonded contaminants",
      "Door, hood and trunk jambs cleaned",
      "Exterior glass, trim dressing and a hand-applied sealant",
    ],
    specs: [
      { label: "Time", value: "1.5 to 3 hours depending on size and condition" },
      { label: "Best for", value: "Maintenance intervals, pre-coating prep, seasonal resets" },
      { label: "Water", value: "We bring our own filtered water and power" },
      { label: "Note", value: "Decontamination is required before correction or coating" },
    ],
    image: "/images/exterior-detailing.jpg",
    imageAlt: "Full-size SUV under snow foam on a residential driveway",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    mark: "Correction",
    title: "Paint Correction & Swirl Removal in Vancouver WA, Portland OR",
    meta: "Machine polishing that removes swirl marks, wash marring and light scratches. Single and multi-stage correction performed on site across the Portland metro.",
    summary:
      "Machine polishing that removes defects from the clear coat instead of filling them for six weeks.",
    lede:
      "Correction is the difference between a car that looks clean and a car that looks deep. Under direct light, most daily-driven paint in this region carries a haze of fine circular scratches. That haze is the reason a black car never quite looks black.",
    body: [
      "Every correction starts with inspection rather than a polisher. Clean, decontaminated paint gets read under raking light so the actual defect pattern shows: wash marring, buffer trails from a previous shop, bird-etch, sanding marks from a repaint. We measure paint thickness before any abrasive touches a panel, because clear coat is a finite resource and a panel corrected three times may not have a fourth in it.",
      "**Single-stage correction** uses one cut-and-finish step and typically removes 60 to 80 percent of light defects. It is the right call on a well-kept daily driver where the goal is a clear, honest gloss. **Multi-stage correction** adds a dedicated cutting step and a refinement step, chases the remaining defects panel by panel, and takes a finish close to 90 or 95 percent. That is the level people mean when they say a car looks better than new.",
      "We finish by wiping panels with a residue remover, so what you approve is bare corrected paint and not polishing oils. Then we tell you honestly what did not come out. A scratch you can catch with a fingernail has gone through the clear coat, which makes it a body shop conversation, and we would rather say so than polish around it.",
    ],
    includes: [
      "Full decontamination wash as the prerequisite stage",
      "Paint thickness readings recorded before work begins",
      "Inspection under raking and direct light, defect map by panel",
      "Test spot approved with you before the full car is started",
      "Machine cut and refinement, panel by panel",
      "Trim, badge and edge taping to protect vulnerable surfaces",
      "Oil-stripping wipe-down so the result you approve is the real result",
      "Protection applied on completion, either sealant or coating",
    ],
    specs: [
      { label: "Time", value: "1 day single stage, 2 to 3 days multi-stage" },
      { label: "Best for", value: "Dark and single-stage paint, resale prep, pre-coating" },
      { label: "Result", value: "60 to 80 percent single stage, 90 to 95 percent multi-stage" },
      { label: "Requires", value: "A garage, carport or covered space for the polishing stages" },
    ],
    image: "/images/paint-correction.jpg",
    imageAlt: "Machine polisher working across a painted panel during correction",
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    mark: "Protection",
    title: "Ceramic Coating Installation in Vancouver WA & Portland OR",
    meta: "Professional ceramic coating over corrected paint. Chemical resistance, easier washing and real gloss retention through Pacific Northwest winters.",
    summary:
      "A hard, chemically bonded layer over corrected paint, so the finish you paid for is the finish you keep.",
    lede:
      "A coating is not a shortcut. It is how you lock in correction work: a semi-permanent layer that takes the abuse the clear coat would otherwise absorb, and makes the car far easier to keep clean between visits.",
    body: [
      "Nine months of rain a year is not really the enemy. The enemy is what the rain carries and leaves behind: road film off I-5, brake dust, fir sap, and the mineral spotting that follows every dry-out. Coated paint stays hydrophobic, so that film sheets off instead of bonding, and a maintenance wash turns into a genuinely short job.",
      "Installation is mostly preparation. Paint gets washed, decontaminated, corrected to the level you have approved, then panel-wiped to strip every trace of polishing oil. Only then does the coating go on, leveled by hand, panel by panel, under controlled light. A missed high spot cures hard and has to be polished back out, which is why this stage stays slow and unhurried.",
      "The vehicle then needs **protected, dry cure time**. That means a garage or covered space, no rain contact and no washing for the cure window. We will walk your space with you before booking so nobody is surprised, and you get written aftercare: how to wash it, what to keep off it, and when to book the inspection.",
    ],
    includes: [
      "Full decontamination and paint preparation",
      "Correction to the agreed level before any coating goes on",
      "Panel wipe-down to remove all polishing residue",
      "Hand-leveled coating application under controlled lighting",
      "Glass, wheel face and trim coating options",
      "Controlled cure period at your covered space",
      "Written aftercare and a maintenance wash schedule",
      "Follow-up inspection after the first month",
    ],
    specs: [
      { label: "Time", value: "2 to 4 days including correction and cure" },
      { label: "Requires", value: "A garage or covered space for the cure window" },
      { label: "Aftercare", value: "No washing during the stated cure period, maintenance wash after" },
      { label: "Ask us", value: "Coating product, durability rating and warranty terms. Call for current options" },
    ],
    image: "/images/ceramic-coating.jpg",
    imageAlt: "Macro view of water beading on a dark, coated metallic panel",
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    mark: "Headlights",
    title: "Headlight Restoration in Vancouver, WA & Portland, OR",
    meta: "Yellowed, hazed polycarbonate headlights sanded, polished and re-sealed with UV protection. Mobile service across Vancouver WA and Portland OR.",
    summary:
      "Yellowed lenses sanded back, polished clear and re-sealed, so the light output comes back along with the looks.",
    lede:
      "Headlight haze is a safety problem before it is a cosmetic one. Polycarbonate lenses leave the factory with a thin UV coating. Once that coating fails, the plastic underneath oxidizes, scatters the beam and turns amber.",
    body: [
      "A polish-only job looks excellent for about four months. It removes the yellowed layer without replacing the reason the lens was protected in the first place, so the oxidation comes straight back, usually faster, because the surface is now bare.",
      "We wet-sand through progressive grits to cut past the failed coating and the oxidized plastic beneath it, machine-polish the lens back to optical clarity, then apply a **fresh UV-stable sealant** so the restored surface has protection again. The difference gets measured in years rather than months.",
      "If a lens is cracked, internally fogged, or holding moisture behind the seal, restoration will not fix it. We will tell you that before we start rather than after.",
    ],
    includes: [
      "Masking of surrounding paint and trim",
      "Progressive wet-sanding through the oxidized layer",
      "Machine polishing to optical clarity",
      "UV-stable protective sealant applied to the lens",
      "Both lenses treated as a pair for even appearance",
    ],
    specs: [
      { label: "Time", value: "60 to 90 minutes for a pair" },
      { label: "Best for", value: "Vehicles over roughly 6 years old, resale preparation" },
      { label: "Add-on", value: "Commonly booked alongside an exterior detail or pre-sale package" },
      { label: "Not fixable", value: "Cracked lenses, internal fogging, failed housing seals" },
    ],
    image: "/images/headlight-restoration.jpg",
    imageAlt: "Hand working suds across a headlight lens during restoration",
  },
  {
    slug: "pre-sale-detailing",
    name: "Pre-Sale Detailing",
    mark: "Resale",
    title: "Pre-Sale & Trade-In Detailing in Vancouver WA, Portland OR",
    meta: "Detailing aimed at listing photos and buyer inspection. Interior reset, paint enhancement, engine bay and headlights before you sell or trade in.",
    summary:
      "Detailing aimed at the listing photo and the walk-around, the two moments that set your price.",
    lede:
      "Private buyers and appraisers decide in the first ninety seconds, and they decide with their eyes and their nose. Pre-sale work is not about perfection. It is about removing every reason someone has to negotiate you down.",
    body: [
      "We prioritize what shows up in a listing photo and what a buyer touches on a test drive: the driver's seat and door card, the steering wheel, the console, the carpets, the glass. Then the paint gets enough correction to photograph honestly. An enhancement polish kills the haze so the color reads true in daylight instead of flat and gray.",
      "Wheels, tires and wheel wells get done properly, because a clean car sitting on dirty wheels reads as a car that was cleaned to be sold. Engine bays get cleaned and dressed conservatively. A bay that looks freshly steam-blasted makes an experienced buyer suspicious rather than impressed.",
      "Tell us your listing date when you book. We schedule pre-sale work close to the photo shoot so the car is at its best when the pictures are taken, not two weeks earlier.",
    ],
    includes: [
      "Full interior reset with extraction on carpets and seating",
      "Exterior decontamination and enhancement polish",
      "Wheels, barrels, tires and wheel wells",
      "Engine bay cleaned and conservatively dressed",
      "Headlight restoration where the lenses need it",
      "Glass inside and out, plus door and trunk jambs",
      "Trim restoration on faded plastics",
    ],
    specs: [
      { label: "Time", value: "5 to 8 hours, single visit" },
      { label: "Best for", value: "Private sale, trade-in appraisal, end of lease" },
      { label: "Timing", value: "Book it to land within a day or two of your listing photos" },
      { label: "Add-on", value: "Ask about a paint touch-up referral for stone chips" },
    ],
    image: "/images/pre-sale-detailing.jpg",
    imageAlt: "Vehicle parked on a clean driveway, photographed for a listing",
  },
  {
    slug: "fleet-detailing",
    name: "Fleet & Commercial",
    mark: "Fleet",
    title: "Fleet & Commercial Vehicle Detailing in Clark & Multnomah County",
    meta: "Scheduled mobile detailing for work vans, trucks and small fleets across Clark, Multnomah, Washington and Clackamas counties. We come to your yard.",
    summary:
      "Scheduled, on-site work for vans, trucks and small fleets. We come to the yard, you keep the vehicles working.",
    lede:
      "A vehicle with your name on the door is advertising whether you treat it that way or not. Fleet work is built around one constraint: the vehicles have to be earning during business hours.",
    body: [
      "We work on your schedule and at your location, whether that is a yard, a lot or a job site, with our own water and power. Nothing has to be driven anywhere and no bay time gets lost. Early mornings, evenings and weekends are normal for fleet accounts.",
      "Programs usually get built as a **recurring maintenance interval** rather than one-off deep cleans. A fixed cadence keeps every unit presentable, protects resale value at the end of the lease, and costs far less over a year than periodic rescue jobs. Interiors on work vehicles get the same extraction treatment as a family car, because that is where the wear actually shows.",
      "Vinyl wraps and decals get washed by hand with wrap-safe chemistry and no aggressive polishing over printed film. Oversized units such as three-quarter-ton trucks, cargo vans and box bodies are priced by size rather than squeezed into a car rate.",
    ],
    includes: [
      "On-site service at your yard, lot or job site",
      "Recurring intervals: weekly, biweekly or monthly",
      "Wrap- and decal-safe wash process",
      "Interior extraction and hard-surface disinfection",
      "Oversized vehicle capability including trucks, vans and box bodies",
      "Consolidated invoicing across the fleet",
      "Off-hours and weekend scheduling",
    ],
    specs: [
      { label: "Minimum", value: "Call to discuss. Pricing depends on unit count and interval" },
      { label: "Coverage", value: "Clark, Multnomah, Washington and Clackamas counties" },
      { label: "Scheduling", value: "Early morning, evening and weekend windows available" },
      { label: "Billing", value: "Per-visit or monthly, consolidated across units" },
    ],
    image: "/images/fleet-detailing.jpg",
    imageAlt: "Rows of white work vans parked at a commercial yard",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

/** The four pillars shown on the home page, in reading order. */
export const homePillars = [
  "interior-detailing",
  "exterior-detailing",
  "paint-correction",
  "ceramic-coating",
].map((slug) => serviceBySlug(slug)!) satisfies Service[];
