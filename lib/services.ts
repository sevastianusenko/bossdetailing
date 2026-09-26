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
    title: "Mobile Interior Car Detailing in Vancouver, WA & Portland, OR",
    meta: "Interior car detailing at your home or office. Full vacuum, hot-water extraction, leather care, stain and odor removal across Vancouver WA and Portland OR.",
    summary:
      "A full vacuum, hot-water extraction and hand work that pull the cabin back to a condition you can smell as well as see.",
    lede:
      "A cabin collects everything the Pacific Northwest throws at it. Wet dog, fir needles, spilled coffee, road grit ground into the carpet by winter boots. Interior work is where a detail is either done properly or only looked at.",
    body: [
      "We start dry. Every mat comes out, the seats go all the way forward and all the way back, and the cabin gets vacuumed with a crevice tool along the seat rails, under the tracks, into the map pockets. Those are the places a vacuum-and-wipe service never reaches. Compressed air drives grit out of the vents, seams and switch gear before any liquid touches a surface.",
      "Then the wet stage. Carpets and fabric seats are pre-treated, agitated, and pulled with a **hot-water extractor** that puts heat and solution into the fiber and takes the dirty water back out. Steam handles what chemistry should not touch: hard trim, cup holders, seat belt webbing, vents, door jambs. Leather gets a pH-appropriate cleaner, a soft brush, and conditioner rather than a shine product.",
      "Odor and stains are a source problem before they are a surface problem. If there is a spill under a seat or a cabin filter holding moisture, masking it buys you about a week. We find it, extract it, and tell you plainly when something has gone past what detailing can fix.",
    ],
    includes: [
      "Full removal and cleaning of floor mats",
      "Compressed-air and crevice vacuum through seat rails, seams and vents",
      "Hot-water extraction of carpets and cloth seating",
      "Steam cleaning of hard trim, console, jambs and switch gear",
      "Leather clean and condition, left matte rather than glossy",
      "Interior glass cleaned streak-free, including the windshield base",
      "Stain treatment on carpets and seats",
      "Odor source identification and extraction",
    ],
    specs: [
      { label: "Time", value: "2 to 6 hours depending on size and condition" },
      { label: "Best for", value: "Family vehicles, pet owners, lease returns" },
      { label: "You provide", value: "An outdoor water spigot and a nearby power outlet" },
      { label: "Not included", value: "Cabin filter replacement, upholstery repair, mold remediation" },
    ],
    image: "/images/interior-detailing.jpg",
    imageAlt: "Cleaned driver footwell and all-weather mat after an interior detail",
  },
  {
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    mark: "Exterior",
    title: "Mobile Exterior Car Wash & Detailing in Vancouver WA, Portland OR",
    meta: "Hand wash, wheel and wheel well cleaning, and safe decontamination, performed at your address in Vancouver WA and Portland OR.",
    summary:
      "A careful hand wash built to remove contamination instead of grinding it into the clear coat, plus the wheel work nobody else bothers with.",
    lede:
      "Most swirl marks in the Portland metro did not come from the road. They came from washing: a dirty mitt, a gas-station brush, a drive-through running recycled water. Our exterior process is built first around not adding damage.",
    body: [
      "Wheels and tires come first, while the paint is still cold and dry. Faces, barrels and lug seats get cleaned by hand with dedicated brushes, and the wheel wells get flushed. Once the car is back on the ground, that is the single most visible difference between a wash and a detail.",
      "The paint gets a pre-soak and a foam dwell to lift the loose layer before anything touches it, then a **two-bucket hand wash** with grit guards and fresh media for each panel section. Run your hand across the hood afterward and the surface should feel smooth, not gritty.",
      "You provide access to an outdoor water spigot and a standard electrical outlet, and we bring everything else: hose, brushes, buckets, vacuum, chemicals and towels. That keeps the price straightforward and puts the budget into better products rather than into hauling a water tank and a generator to every job.",
    ],
    includes: [
      "Wheel faces, barrels, lug seats and tires cleaned by hand",
      "Wheel wells flushed and dressed",
      "Foam pre-soak and dwell before contact",
      "Two-bucket contact wash with grit guards, fresh media per section",
      "Door, hood and trunk jambs cleaned",
      "Exterior glass cleaned",
      "Spray sealant applied by hand for extra shine and water beading",
      "Tire shine and trim dressing",
    ],
    specs: [
      { label: "Time", value: "1 to 3 hours depending on size and condition" },
      { label: "Best for", value: "Regular washes, seasonal resets, pre-sale prep" },
      { label: "You provide", value: "An outdoor water spigot and a nearby power outlet" },
      { label: "Best price", value: "Book interior and exterior together and save on the visit" },
    ],
    image: "/images/exterior-detailing.jpg",
    imageAlt: "Full-size SUV under snow foam on a residential driveway",
  },
  {
    slug: "furniture-upholstery-cleaning",
    name: "Furniture & Upholstery Cleaning",
    mark: "Furniture",
    title: "Furniture & Upholstery Cleaning in Vancouver, WA & Portland, OR",
    meta: "Indoor and outdoor furniture cleaning and stain removal. The same hot-water extraction we use in cars, on your sofa, mattress and patio furniture.",
    summary:
      "The same hot-water extraction we use on car interiors, brought inside for sofas, mattresses and dining chairs, and outside for patio furniture.",
    lede:
      "A couch and a car seat are cleaned the same way. Both are fabric or leather over foam, both trap spills and odor deep in the fiber, and both respond to the same tool: hot-water extraction, not a spray bottle and a rag.",
    body: [
      "Indoors, we clean sofas, sectionals, dining chairs, mattresses and area rugs in place, so nothing has to be carried out to the driveway. Fabric gets pre-treated, agitated and extracted; leather gets a pH-appropriate cleaner and conditioner. Stains are treated as a source problem: a wine spill, a pet accident or years of everyday use each respond to a different approach, and we tell you honestly if a stain is set deep enough that full removal is not realistic.",
      "Outdoors, patio cushions, outdoor sofas and dining sets take a beating from Northwest damp: mildew, pollen, and the green film that grows on anything left shaded and wet for a season. Extraction pulls that out of the fabric rather than just wetting the surface, and everything is left to dry properly before it goes back into use.",
      "You provide access to an outdoor water spigot and a power outlet, the same as for a car. If the furniture is indoors, a nearby outlet is usually all that is needed.",
    ],
    includes: [
      "Pre-treatment and agitation on fabric upholstery",
      "Hot-water extraction on sofas, chairs, mattresses and rugs",
      "Leather clean and condition for leather furniture",
      "Stain treatment, indoors and outdoors",
      "Mildew and green-film treatment on outdoor cushions and cushioned furniture",
      "Deodorizing pass on request",
    ],
    specs: [
      { label: "Time", value: "Varies by piece count and condition. We quote after seeing photos" },
      { label: "Best for", value: "Sofas, sectionals, dining chairs, mattresses, patio furniture" },
      { label: "You provide", value: "A power outlet, and an outdoor spigot for outdoor pieces" },
      { label: "Pricing", value: "Call or send photos for a quote. Priced by piece and condition" },
    ],
    image: "/images/furniture-cleaning.jpg",
    imageAlt: "Upholstered sofa cushion being cleaned with a fabric extraction tool",
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
      "We work on your schedule and at your location, whether that is a yard, a lot or a job site. All we need is access to a water spigot and a power outlet somewhere on the property. Nothing has to be driven anywhere and no bay time gets lost. Early mornings, evenings and weekends are normal for fleet accounts.",
      "Programs usually get built as a **recurring maintenance interval** rather than one-off deep cleans. A fixed cadence keeps every unit presentable, protects resale value at the end of the lease, and costs far less over a year than periodic rescue jobs. Interiors on work vehicles get the same extraction treatment as a family car, because that is where the wear actually shows.",
      "Vinyl wraps and decals get washed by hand with wrap-safe chemistry. Oversized units such as three-quarter-ton trucks, cargo vans and box bodies are priced by size rather than squeezed into a car rate.",
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
      { label: "You provide", value: "A water spigot and a power outlet somewhere on site" },
      { label: "Billing", value: "Per-visit or monthly, consolidated across units" },
    ],
    image: "/images/fleet-detailing.jpg",
    imageAlt: "Rows of white work vans parked at a commercial yard",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

/** Every service, shown as the home page pillars in reading order. */
export const homePillars = services;
