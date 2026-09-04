export type Area = {
  slug: string;
  city: string;
  state: "WA" | "OR";
  /** "Vancouver, WA" */
  label: string;
  county: string;
  title: string;
  meta: string;
  lede: string;
  body: string[];
  neighborhoods: string[];
  /** Facts specific to working in this city. */
  notes: { label: string; value: string }[];
  /** Rough coordinates, used for the schema areaServed geo. */
  lat: number;
  lng: number;
};

export const areas: Area[] = [
  {
    slug: "vancouver-wa",
    city: "Vancouver",
    state: "WA",
    label: "Vancouver, WA",
    county: "Clark County",
    title: "Mobile Auto Detailing in Vancouver, WA",
    meta: "Mobile detailing at your home or office anywhere in Vancouver, WA. Interior extraction, hand wash, paint correction and ceramic coating. Call (509) 224-8299.",
    lede:
      "Vancouver is home. Our rig is based on NE 57th Avenue, so most of the city is a short drive and same-week scheduling is usually realistic rather than aspirational.",
    body: [
      "The wear pattern here is specific. Cars that live on I-5 and I-205 pick up a hard film of brake and rail dust along the lower quarter panels. Cars parked under the fir and maple canopy in Hough, Carter Park and Rose Village collect sap and needle stain that turns into etch marks if it sits through a warm week. Both are decontamination problems rather than wash problems, which is why a drive-through never quite gets a Vancouver car clean.",
      "Winter adds the other half. De-icer off the freeway climbs the rocker panels and wheel wells, and by February the wheel barrels on most daily drivers carry a baked-on layer that only comes off by hand. Wheel work is a standing part of every exterior service we do here, never an upsell.",
      "We work at houses and at offices. If you are downtown, at the waterfront, or in one of the Columbia Tech Center and Cascade Park office parks, a detail during your workday is the easiest booking we do. You hand over the keys, we work in the lot, and the car is finished before you leave.",
    ],
    neighborhoods: [
      "Downtown & Esther Short",
      "The Waterfront",
      "Hough",
      "Carter Park",
      "Rose Village",
      "Hazel Dell",
      "Felida",
      "Salmon Creek",
      "Cascade Park",
      "Fisher's Landing",
      "Columbia Tech Center",
      "Ellsworth & Burton",
      "Minnehaha",
      "Image",
    ],
    notes: [
      { label: "Base", value: "2909 NE 57th Ave. This is our home city" },
      { label: "Typical drive", value: "Under 20 minutes to most Vancouver addresses" },
      { label: "Common work", value: "Winter de-icer removal, sap decontamination, wheel barrels" },
      { label: "Office lots", value: "Weekday service at Columbia Tech Center and Cascade Park" },
    ],
    lat: 45.6387,
    lng: -122.6615,
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "OR",
    label: "Portland, OR",
    county: "Multnomah County",
    title: "Mobile Auto Detailing in Portland, OR",
    meta: "Mobile detailing that comes to your Portland address: inner eastside, the Pearl, the west hills. Interior extraction, correction and ceramic coating. (509) 224-8299.",
    lede:
      "We cross the river most days. Portland is our largest service city outside Vancouver, and after enough visits you learn that the hard part here is rarely the car. It is where the car is parked.",
    body: [
      "Inner eastside streets are narrow, and on-street parking in Laurelhurst, Irvington, Alameda and Sellwood can be tight enough that setup matters more than equipment. Our rig is self-contained, carrying its own water and power, so there are no cords through your window and no hose to your spigot. That lets us work from a legal street spot without turning your block into a job site. Tell us where you usually park when you book and we will plan around it.",
      "Condo and apartment garages in the Pearl and downtown are their own case. Most buildings allow detailing in a resident stall with prior notice, and some require a certificate of insurance on file. Give us the building name and we will handle that conversation with the management office ahead of the appointment rather than on the morning of it.",
      "The west hills and the Forest Park edge are the sap and moss belt. Heavy tree cover, damp shade and slow drying give organic growth a foothold in window seals and trim, and give sap a chance to etch clear coat. Those cars want decontamination and real protection far more often than they want another wash.",
    ],
    neighborhoods: [
      "Pearl District",
      "Nob Hill / NW 23rd",
      "Laurelhurst",
      "Irvington",
      "Alameda",
      "Hawthorne",
      "Sellwood-Moreland",
      "Eastmoreland",
      "Multnomah Village",
      "Forest Park & the West Hills",
      "Beaumont-Wilshire",
      "St. Johns",
    ],
    notes: [
      { label: "Typical drive", value: "Roughly 15 to 30 minutes from our Vancouver base" },
      { label: "Street parking", value: "Fully self-contained rig. No spigot or outlet needed" },
      { label: "Buildings", value: "Tell us the building name and we clear garage access in advance" },
      { label: "Common work", value: "Sap and moss decontamination, coating on shaded-street cars" },
    ],
    lat: 45.5152,
    lng: -122.6784,
  },
  {
    slug: "camas-wa",
    city: "Camas",
    state: "WA",
    label: "Camas, WA",
    county: "Clark County",
    title: "Mobile Auto Detailing in Camas, WA",
    meta: "On-site detailing in Camas, WA: Prune Hill, Grass Valley, Lacamas Lake and downtown. Interior extraction, paint correction and ceramic coating at your home.",
    lede:
      "Camas is an easy city to work in. Newer hillside construction means wide driveways and deep garages, which is exactly what correction and coating work needs.",
    body: [
      "Prune Hill and Grass Valley homes usually have the covered space a ceramic coating requires for its cure window. That matters more than people expect. Coatings have to stay dry and protected while they harden, and a car left sitting outside through a Clark County November is a car whose coating did not get a fair start. If you have a garage bay we can use, a multi-day correction and coating job here is straightforward.",
      "The tree canopy around Lacamas Lake and Round Lake is the other constant: sap, spring pollen, and needle debris packed into the trim channels. We handle all of it at the decontamination stage instead of by washing harder.",
      "Downtown Camas along NE 4th Avenue and the surrounding older streets have narrower driveways and mature trees overhead. We work fine in those spaces. Just flag it when you book so we bring the right setup.",
    ],
    neighborhoods: [
      "Prune Hill",
      "Grass Valley",
      "Lacamas Lake",
      "Downtown Camas",
      "Fisher Investments corridor",
      "Green Mountain",
      "Forest Home",
    ],
    notes: [
      { label: "Typical drive", value: "Roughly 15 to 25 minutes from our Vancouver base" },
      { label: "Good for", value: "Multi-day coating work. Most homes have covered space" },
      { label: "Common work", value: "Sap and pollen decontamination, coating installs" },
      { label: "Downtown", value: "Narrower driveways. Mention it when booking" },
    ],
    lat: 45.5871,
    lng: -122.4043,
  },
  {
    slug: "ridgefield-wa",
    city: "Ridgefield",
    state: "WA",
    label: "Ridgefield, WA",
    county: "Clark County",
    title: "Mobile Auto Detailing in Ridgefield, WA",
    meta: "Mobile detailing in Ridgefield, WA. Larger lots, new construction and gravel-road grime. Interior extraction, decontamination and ceramic coating on site.",
    lede:
      "Ridgefield has grown faster than almost anywhere in Clark County, and the vehicle mix shows it. New builds, big driveways, and plenty of trucks and three-row SUVs that actually get used.",
    body: [
      "New construction is the local signature. Concrete dust, drywall silt and overspray from a neighboring build settle on paint and bond harder than road dirt, and washing them is what puts scratches into a brand-new clear coat. That contamination needs chemical and clay treatment. A car in a new subdivision is also a strong candidate for coating, simply because the construction phase is not over yet.",
      "Away from town, gravel and rural roads mean the underside of a vehicle and the wheel wells collect far more than a city car's do. Wheel wells and barrels are a real part of the job here, and we plan the time for them.",
      "The lots are the advantage: room to work, room to open all four doors, and usually a garage available for the correction and coating stages. It makes Ridgefield one of the more efficient cities on our schedule.",
    ],
    neighborhoods: [
      "Downtown & Pioneer Street",
      "Abrams Park area",
      "Taverner Ridge",
      "Ridgefield Junction",
      "Union Ridge",
      "Rural North Clark County",
    ],
    notes: [
      { label: "Typical drive", value: "Roughly 20 to 30 minutes from our Vancouver base" },
      { label: "Common work", value: "Construction fallout removal, wheel wells, large-vehicle details" },
      { label: "Vehicle mix", value: "Trucks and three-row SUVs are priced by size, never squeezed into a car rate" },
      { label: "Space", value: "Wide driveways make full-vehicle work efficient here" },
    ],
    lat: 45.8151,
    lng: -122.7423,
  },
  {
    slug: "lake-oswego-or",
    city: "Lake Oswego",
    state: "OR",
    label: "Lake Oswego, OR",
    county: "Clackamas County",
    title: "Mobile Auto Detailing in Lake Oswego, OR",
    meta: "Premium mobile detailing in Lake Oswego, OR. Paint correction, ceramic coating and interior detailing at your home or the Kruse Way office corridor.",
    lede:
      "Lake Oswego is where the work skews toward correction and coating rather than maintenance washing. A different mix of cars, and owners who tend to know exactly what a swirl mark is.",
    body: [
      "The tree canopy through Lake Grove, First Addition and the lakefront streets is heavy, and shaded damp parking causes most of what we see here: sap etch, organic film on glass and trim, and water spotting left long enough to bite into the clear coat. By the time most people call, all three have become correction-stage problems.",
      "Homes here usually have the garage space that multi-stage correction and a coating cure window need, which is why the bigger jobs on our calendar often land in this city. We will walk the space with you before booking a multi-day job.",
      "The Kruse Way office corridor is straightforward for weekday work. Park in your usual stall, hand over the keys, and the car is finished by the time you are.",
    ],
    neighborhoods: [
      "First Addition",
      "Lake Grove",
      "Mountain Park",
      "Forest Highlands",
      "Palisades",
      "Kruse Way corridor",
      "Lakewood",
    ],
    notes: [
      { label: "Typical drive", value: "Roughly 30 to 45 minutes from our Vancouver base" },
      { label: "Common work", value: "Multi-stage correction, ceramic coating, water spot removal" },
      { label: "Good for", value: "Multi-day jobs. Most homes have usable garage space" },
      { label: "Weekdays", value: "Office-lot service along the Kruse Way corridor" },
    ],
    lat: 45.4207,
    lng: -122.6706,
  },
  {
    slug: "west-linn-or",
    city: "West Linn",
    state: "OR",
    label: "West Linn, OR",
    county: "Clackamas County",
    title: "Mobile Auto Detailing in West Linn, OR",
    meta: "Mobile auto detailing in West Linn, OR: Willamette, Robinwood, Bolton and Sunset. Interior extraction, paint correction and ceramic coating at your address.",
    lede:
      "West Linn is hills, trees and river air. Between the shade and the grade it is one of the harder cities to keep a car looking good in, and one of the more rewarding to detail.",
    body: [
      "Steep driveways are normal in Bolton, Sunset and along the bluff. That is no problem for us, but it does change how we set up. The rig parks where it can stay level, and we plan hose and cord runs before anything comes off the truck. Flag a very steep or narrow approach when you book so we allow for it.",
      "The heavy canopy through Robinwood and Willamette gives the same sap-and-shade profile as Lake Oswego, with river-valley damp added on top so panels stay wet longer. Water sits, minerals concentrate, and spotting etches. Protection is worth more here than in most of the metro, because the drying conditions work against you.",
      "Older homes in the Willamette neighborhood have tighter garages. If a coating job needs covered space and yours is snug, send us the dimensions and we will tell you honestly whether it will work before you commit to the booking.",
    ],
    neighborhoods: [
      "Willamette",
      "Robinwood",
      "Bolton",
      "Sunset",
      "Savanna Oaks",
      "Tanner Basin",
      "Hidden Springs",
    ],
    notes: [
      { label: "Typical drive", value: "Roughly 35 to 50 minutes from our Vancouver base" },
      { label: "Access", value: "Steep or narrow driveways are common. Flag it when booking" },
      { label: "Common work", value: "Water spot removal, sap decontamination, protection" },
      { label: "Garages", value: "Older Willamette homes can be tight. Send dimensions for coating jobs" },
    ],
    lat: 45.3651,
    lng: -122.6126,
  },
  {
    slug: "happy-valley-or",
    city: "Happy Valley",
    state: "OR",
    label: "Happy Valley, OR",
    county: "Clackamas County",
    title: "Mobile Auto Detailing in Happy Valley, OR",
    meta: "On-site detailing in Happy Valley, OR. Family SUVs, trucks and daily drivers. Interior extraction, exterior decontamination and ceramic coating at your home.",
    lede:
      "Happy Valley is family-vehicle country. Three-row SUVs, half-ton trucks, and interiors that have been genuinely lived in. Interior work is the majority of what we do here.",
    body: [
      "A third row is not a small addition to a detail. Car seats come out, the rearmost carpet and seat backs get extracted properly, and the cargo area behind the third row, where the spilled things end up, gets treated as its own zone rather than a quick vacuum. That is exactly why we price by size.",
      "The newer subdivisions off Sunnyside Road and around Mt Scott have the driveways and three-car garages that make this easy. Room to work outside, and covered space when a job needs it.",
      "Because most of these vehicles are daily drivers doing school runs and freeway commutes, a scheduled maintenance interval usually beats an annual rescue detail. The interior never gets far enough gone to need the full extraction, and the paint keeps its protection.",
    ],
    neighborhoods: [
      "Sunnyside",
      "Mt Scott",
      "Scouters Mountain",
      "Altamont",
      "Rock Creek",
      "Clackamas Town Center area",
    ],
    notes: [
      { label: "Typical drive", value: "Roughly 30 to 45 minutes from our Vancouver base" },
      { label: "Common work", value: "Three-row interior extraction, pet hair, family-vehicle resets" },
      { label: "Vehicle mix", value: "Large SUVs and trucks priced by size" },
      { label: "Best value", value: "A recurring maintenance interval rather than annual rescue details" },
    ],
    lat: 45.4468,
    lng: -122.5162,
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
