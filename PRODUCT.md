# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: vehicle and homeowners in the Vancouver WA / Portland OR metro who value their time more than they value a Saturday morning at a wash bay or hauling furniture out for cleaning. Recurring situations:

1. **The busy owner at home or at work.** Books during a weekday, wants the car handled in the driveway or office lot while they keep working. Decides on a phone, often between meetings.
2. **The family with pets and kids.** Interior work — pet hair, stains, spills — is the majority of what gets booked. Cares about a clean, odor-free cabin more than showroom gloss.
3. **The homeowner with furniture that needs cleaning.** Sofas, mattresses, outdoor patio furniture — wants the same convenience (comes to you) that mobile car detailing offers, without hauling pieces anywhere.

Secondary: small commercial fleet owners in Clark / Multnomah / Washington / Clackamas counties.

## Product Purpose

Boss Auto Detailing LLC brings professional interior and exterior car detailing, and furniture/upholstery cleaning, to the customer's address. Success is a booked on-site appointment: the visitor understands what is offered and what is needed from them (water and power access), sees a real price, and either calls +1 (509) 224-8299 or submits the request form with photos.

## Positioning

Mobile detailing and furniture cleaning that comes to the customer rather than the other way around. The operator is **not** a fully self-contained rig — it relies on the customer's outdoor water spigot and an electrical outlet rather than carrying its own water tank and generator. That is a deliberate trade the client made (confirmed 2026-09-25): it keeps prices lower and the equipment focused on doing the actual work (commercial vacuums, hot-water extraction, professional products) rather than hauling infrastructure. The site discloses this plainly and turns it into a qualifying step in the request form rather than hiding it.

The service list is deliberately narrow: interior detailing, exterior hand washing, furniture & upholstery cleaning (indoor and outdoor), and fleet/commercial work. **No paint correction, no ceramic coating, no headlight restoration, no dedicated pre-sale package** — these were explicitly removed by the client (2026-09-25) in favor of a simpler, faster-to-book service and a real, non-tiered price list.

## Operating Context

- Work happens outdoors, at a home, office lot or commercial yard, by appointment.
- **Water and power are supplied by the customer.** An outdoor spigot and a standard electrical outlet are required at the address; this is confirmed in the request form (a required field) and disclosed across the site (hero, FAQ, about, service pages).
- Service radius: Vancouver WA, Portland OR, Camas WA, Ridgefield WA, Lake Oswego OR, West Linn OR, Happy Valley OR, and the surrounding Clark, Multnomah, Washington and Clackamas counties.
- Base location: 2909 NE 57th Ave, Vancouver, WA 98661.
- Jobs are single-visit: a car exterior in 1–3 hours, an interior in 2–6 hours. Furniture cleaning duration depends on piece count.
- Vehicle size drives car pricing: Sedan & Wagon → SUV & Crossover → Minivan/Van/Pickup.
- Furniture and upholstery cleaning is quoted per piece from photos, not from a published rate card.
- Most visitors arrive on a phone, frequently from a Google Maps / local pack result.

## Capabilities and Constraints

Services offered (as of 2026-09-25):

- **Interior detailing** — full vacuum, hot-water extraction and steam on carpets and cloth seating, leather cleaning and conditioning, stain and odor removal.
- **Exterior detailing** — two-bucket hand wash, wheel faces/barrels/wells cleaned by hand, spray sealant, tire shine and trim dressing.
- **Furniture & upholstery cleaning** — indoor (sofas, sectionals, mattresses, dining chairs, rugs) and outdoor (patio cushions, outdoor sofas) using the same hot-water extraction equipment as car interiors. Stain treatment included. Priced by piece and condition, not a flat rate.
- **Fleet & commercial** — recurring on-site service for vans, trucks and small fleets.

Explicitly **not** offered, by the client's instruction (2026-09-25): paint correction, ceramic coating, headlight restoration, a dedicated pre-sale package. Blog and service copy must not imply these are available.

Constraints and confirmed facts:

- Booking is by **request form + phone call**. No online calendar or payment is in scope.
- The request form collects a required **water & power access** field (yes / not sure / no) so the qualifying question is answered before a visit is scheduled, not discovered on arrival.
- The request form accepts **optional photo uploads** (client-side compressed, up to 3 images), attached to the lead email via Resend. This exists because accurate quoting depends on seeing the vehicle/furniture condition, and the client asked (2026-09-25) that sending photos be made easy and emphasized, not just requested in copy.
- **Pricing is real, not a placeholder**, supplied by the client on 2026-09-25: Sedan & Wagon interior $150 / exterior $100 / bundle $220; SUV & Crossover interior $250 / exterior $100 / bundle $320; Minivan/Van/Pickup interior $300 / exterior $150 / bundle $420. All numbers live in `lib/packages.ts`. Furniture pricing is intentionally not a flat number — quoted from photos.
- A time-boxed promotion is live: 30% off the second vehicle when two are booked at the same address on the same visit, through 2026-09-30 (`lib/promo.ts`). It surfaces both as a triggered dialog and as a static band on the packages page.
- Business hours, years in operation, technician count, and license/insurance details: **not supplied**. Do not invent them. The site says "by appointment" rather than asserting hours, and emits no `openingHours` into schema until confirmed.
- Domain autodetailingwa.com is live on Vercel (verified 2026-09-20), pointed at this build.

## Brand Commitments

- Legal name **Boss Auto Detailing LLC**; the working name on the site is **Boss Auto Detailing**.
- Phone **+1 (509) 224-8299**, domain **autodetailingwa.com**, base address as above.
- A client-supplied shield emblem logo is in use (added 2026-09-03, integrated 2026-09-25) as the site's mark in the header, footer and favicon, alongside the typographic wordmark. Source file: `public/images/logo boss.png`; derivatives generated into `public/brand/`.
- Explicit user constraint: the site must not read as AI-generated template work. Distinctive and high-craft, not a generic contractor layout.
- **Standing visual preference (recorded 2026-09-02, durable):** the user was offered three out-of-category visual worlds and chose the category standard, played straight — dark cinematic hero, real vehicle photography, plain pricing, a persistent call action. Future work honors this: execute the automotive-detailing canon at full fidelity, no irony and no smuggled quirk. The craft bar is the top international detailing studios (large real-work galleries, process-forward editorial layout), not the local-contractor template.
- Launch scope agreed 2026-09-02, revised 2026-09-25: home, service pages (interior/exterior/furniture/fleet), city/service-area pages, gallery, about, contact, FAQ, blog, LocalBusiness/Service schema, sitemap.

## Evidence on Hand

- **Six real client job photos** (added 2026-09-03): a full-size SUV washed on a residential driveway (three angles: pre-wash, foamed, mid-rinse) and a Ford Explorer interior (dashboard/seat, footwell, steering wheel/cluster). In use as the hero, the interior/exterior service images, and four of the home/gallery grid frames. See `public/images/CREDITS.txt` for the exact mapping.
- Everything else is licensed stock (Pexels), art-directed to a single grade, and labeled as reference photography on the gallery and home pages. No reviews, case studies, or press exist. Any figure, review, or credential not in this file is a placeholder and must be flagged for the client to replace.

## Product Principles

1. **The ask is a feature, not a hedge.** "We need your water and power" is stated plainly and turned into a qualifying question in the booking flow, not buried in an FAQ. Hiding it would only produce a cancelled appointment on arrival.
2. **Photos change the price more than anything else.** Condition (pet hair, set-in stains, time since last clean) moves the number more than vehicle size does. The form makes sending photos as close to effortless as a plain HTML form can get.
3. **The phone is the primary device and the primary conversion.** Calling must never be more than a thumb away, and the form must be completable one-handed.
4. **Geography is a product feature.** Two states, one operator: the service area is a selling point and the main organic-search surface, not a footer afterthought.
5. **Scope honesty.** The service list says what it does and does not include (no correction, no coating). Real prices are shown; furniture is honestly quoted per piece rather than forced into a fake flat rate.
6. **Never fabricate proof.** No invented reviews, counts, awards, hours, or certifications — placeholders instead, flagged for the client.

## Accessibility & Inclusion

No client-specific standard was set. Target WCAG 2.2 AA as the working floor: real text over images, visible focus, tap targets ≥44px, and full keyboard operation of the request form (including the file input and its remove-photo controls).
