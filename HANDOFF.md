# Handoff: what must be replaced or confirmed

The site is live on Vercel at autodetailingwa.com. Everything below is either
a placeholder or a fact the client has not supplied yet. None of it is a
claim Boss Auto Detailing has made publicly beyond what is flagged here.

## 1. Blocking or near-blocking

| # | Item | Where | Why it matters |
|---|------|-------|-----------------|
| 1 | **Request-form delivery** | Vercel env vars | `RESEND_API_KEY` and `REQUEST_INBOX` must be set in the Vercel project (Settings > Environment Variables, all environments), then redeploy. Until then the form returns an honest "not connected yet, please call" error rather than pretending to send. `REQUEST_FROM` should be `Boss Auto Detailing <requests@autodetailingwa.com>` once that domain is verified in Resend; otherwise use a sandbox sender that only reaches the Resend account owner. See `.env.example` and `scripts/resend-status.mjs` / `scripts/test-request-form.mjs` for diagnostics. |
| 2 | **Most photography** | `public/images/` | Six frames are the client's own work (gallery 1 to 4, plus the interior and exterior service images). Everything else, including the furniture cleaning photo, is licensed reference imagery. `public/images/CREDITS.txt` splits the two lists. The gallery and home pages say in plain sight which is which; update the disclosure line as more real photos are added. |
| 3 | **Opening hours** | `lib/site.ts` -> `site.hours` / `hoursConfirmed` | Still unconfirmed. The site says "by appointment" everywhere and `hoursConfirmed: false` keeps real hours out of LocalBusiness schema. Set real hours and flip the flag once known. |
| 4 | **September promotion** | `lib/promo.ts` | 30% off a second vehicle booked at the same address on the same visit, live through 2026-09-30. The five terms were written to be sensible, not dictated by the client; confirm them, especially what counts as a qualifying second vehicle. It expires on its own (`endsOn`), but the static banner on `/packages` only re-evaluates on a rebuild, so redeploy on or after the end date to clear it, or extend `endsOn` for a follow-up offer. |

## 2. Confirmed facts worth knowing

- **The service list changed on 2026-09-25.** Paint correction, ceramic coating, headlight restoration and the dedicated pre-sale package were all removed at the client's request. The site now offers exactly four services: interior detailing, exterior detailing, furniture & upholstery cleaning, and fleet/commercial. Do not reintroduce correction/coating language without the client asking for it back.
- **Water and power are the customer's responsibility**, not something the rig carries. This reverses the original "self-contained mobile rig" premise and is now the central qualifying fact on the site: the hero, the FAQ, the about page and the request form (a required field) all state it. If this business fact ever changes again, it touches a lot of copy; grep for "water" and "spigot" across `app/`, `lib/`, and `content/` to find every place it is asserted.
- **Car pricing is real**, supplied by the client on 2026-09-25, in `lib/packages.ts` (`vehicleClasses`). It is a flat interior/exterior rate by vehicle size with a $30 bundle discount, not a tiered package system. `PRICING_IS_PLACEHOLDER` is `false`.
- **Furniture and upholstery cleaning has no fixed price list** by design; it is quoted from photos. Do not invent a rate card for it.
- **The request form accepts photo uploads** (client-side compressed, up to 3 images) and asks a required water/power access question. This exists because the client specifically asked that sending photos be made easy, not just requested in copy.

## 3. Confirm with the client

- **Base coordinates**: `site.address.lat/lng` are approximated from the NE 57th Ave address and go into schema `geo`. Replace with the exact pin from the Google Business Profile.
- **Years in business, technician count, licence and insurance**: not stated anywhere on the site because they were not supplied. Good candidates for the About page once known.
- **Fleet minimums**: `/services/fleet-detailing` says "call to discuss" rather than naming a unit count.
- **Furniture cleaning turnaround times**: currently described qualitatively ("varies by piece count"). A real range would help conversion once a few jobs have been run.

## 4. The blog

Twenty-one posts live in `content/posts/` as typed data across four files (`pricing.ts`, `paint.ts`, `care.ts`, `fleet.ts`), surfaced at `/blog`. They carry BlogPosting and FAQPage schema, sitemap entries, and internal links into the matching service and city pages. Each runs 1500+ words of genuine body content, no filler.

Six posts that were specifically about paint correction, ceramic coating or headlight restoration were removed on 2026-09-25 along with those services. Two paint-care posts (tree sap, water spots) were kept and edited to stop implying we perform correction ourselves. Two new posts were added at the time: one on furniture cleaning pricing, one comparing indoor and outdoor furniture cleaning.

Ten more posts were added later the same day, adding a new **Fleet** category (`fleet.ts`) alongside the existing Pricing, Paint, Interior, Seasonal, Practical and Furniture ones: flat-pricing rationale, bird droppings, coffee/drink stains, leather care, pet stains and odor in a mattress, mildew on patio furniture, what a detailing appointment actually looks like, getting ready for a Pacific Northwest fall, and two fleet-specific posts on cleaning schedules and on-site requirements. Adding a post is one object in one of the four files; nothing in them invents a statistic, a study, a customer, a review, or a business process we do not actually follow.

## 5. Not built, by agreement

- **Online booking calendar.** The agreed flow is request form + phone call. If that changes, the form already collects everything a calendar would need.
- **Reviews / testimonials.** None exist yet. Nothing was invented. Once the Google Business Profile has reviews, the natural home is a band on the home page plus `AggregateRating` in `components/JsonLd.tsx`.

## 6. Outstanding launch/ops items

- [ ] Confirm the request-form inbox is delivering (item 1 above) and send one real test through `/contact`
- [ ] Confirm real opening hours and flip `hoursConfirmed`
- [ ] Confirm the September promo's terms, or let it expire on 2026-09-30
- [ ] Google Search Console: verify the property, submit `/sitemap.xml`, connect analytics
- [ ] Google Business Profile: create/claim, match the NAP in `lib/site.ts` exactly, add the site URL and the new service list
- [ ] Bing Webmaster Tools: import from GSC
- [ ] Replace reference photography with real jobs as they are documented (furniture cleaning especially, since it currently has none)

## 7. Where things live

```
lib/site.ts        NAP, nav, hours: change the business record here only
lib/services.ts    4 services: interior, exterior, furniture, fleet
lib/areas.ts       7 cities: local copy, neighborhoods, notes
lib/packages.ts    real car pricing by vehicle class + bundle discount
lib/promo.ts       the running offer, its terms and its end date
lib/faq.ts         10 questions (also feeds FAQPage schema)
lib/posts.ts       blog index, reading time, related posts
content/posts/     the 21 posts, four files by theme (pricing, paint, care, fleet)
public/brand/      logo derivatives generated from the client PNG
lib/process.ts     the 6 booking stages
components/JsonLd.tsx   LocalBusiness, Service, Breadcrumb, FAQPage schema
components/RequestForm.tsx  the request form, incl. client-side photo compression
app/api/request/route.ts    form handler: JSON or multipart, Resend delivery
scripts/build-images.mjs    image manifest, download + one shared colour grade
scripts/find-photos.mjs     scrapes stock candidates with alt text
scripts/resend-status.mjs   checks a Resend API key's domains and can send a test email
scripts/test-request-form.mjs  posts a marked test lead to a running server
```

Adding a city is one entry in `lib/areas.ts`: the page, the sitemap entry, the
footer link, the schema `areaServed` and every cross-link update themselves.
Adding a service is one entry in `lib/services.ts`; it appears in the home
page pillars, the services index, the sitemap and the request form's service
dropdown automatically.
