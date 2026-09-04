# Handoff: what must be replaced or confirmed before launch

Everything below is either a placeholder or a fact the client has not supplied.
None of it is a claim Boss Auto Detailing has made. Work through it before the
domain points at this build.

## 1. Blocking: do not launch without these

| # | Item | Where | Why it blocks |
|---|------|-------|---------------|
| 1 | **Most photography** | `public/images/` | Six frames are the client own work (gallery 1 to 4, plus the interior and exterior service images). Everything else is licensed Pexels reference imagery. `public/images/CREDITS.txt` splits the two lists. The gallery page and the home page both say in plain sight which is which; delete those lines once the library is all real. |
| 2 | **Package prices** | `lib/packages.ts` | $169 / $349 / $1,159 and the size surcharges are market-rate estimates reduced 10 percent on request, not the client rates. All numbers live in that one file; `PRICING_IS_PLACEHOLDER` flags it. |
| 3 | **Opening hours** | `lib/site.ts` -> `site.hours` | Industry-typical hours, invented. These are emitted into LocalBusiness schema, so wrong values are worse than no values. |
| 4 | **Request-form inbox** | `.env` | Without `RESEND_API_KEY` and `REQUEST_INBOX` the form returns an honest "not connected yet, please call" error. It never pretends to have sent. See `.env.example`. |
| 5 | **Email address** | `lib/site.ts` -> `site.email` | `hello@autodetailingwa.com` is assumed. Not currently shown on any page, but it is in the record. |
| 6 | **Promotion terms** | `lib/promo.ts` | The September offer (30 percent off the second vehicle) is live in a dialog and on the packages page. The five terms were written to be sensible, not quoted by the client. Confirm them, especially what counts as a second vehicle. Set `active: false` to pull it, and note the static banner only re-evaluates on a rebuild. |

## 2. Confirm with the client

- **Base coordinates**: `site.address.lat/lng` are approximated from the NE 57th Ave address and go into schema `geo`. Replace with the exact pin from the Google Business Profile.
- **Before/after comparison**: the frame on the home page and the gallery is one photograph shown with and without *simulated* clear-coat marring, labelled as an illustration in the caption. Replace with a real corrected panel and remove the "Illustration" note in `components/BeforeAfter.tsx` usage.
- **Ceramic coating brand, durability rating and warranty terms**: deliberately left as "call for current options" on `/services/ceramic-coating`. Fill in once known.
- **Years in business, technician count, licence and insurance**: not stated anywhere on the site because they were not supplied. Good candidates for the About page once known.
- **Fleet minimums**: `/services/fleet-detailing` says "call to discuss" rather than naming a unit count.

## 2b. The blog

Fifteen posts live in `content/posts/` as typed data, split into three files by theme, and surface at `/blog`. They carry BlogPosting and FAQPage schema, sitemap entries, and internal links into the matching service and city pages.

Every post is dated 2026-09-03 because that is when they were written. If you would rather they looked staggered, change `published` per post; nothing else depends on the date. Adding a post is one object in one of the three files.

Nothing in them invents a statistic, a study, a customer or a review. Where a claim would need evidence the copy says what we do instead.

## 3. Not built, by agreement

- **Online booking calendar.** The agreed flow is request form + phone call. If that changes, the form already collects everything a calendar would need.
- **Reviews / testimonials.** None exist yet. Nothing was invented. Once the Google Business Profile has reviews, the natural home is a band between the packages and the process sections on the home page, plus `AggregateRating` in `components/JsonLd.tsx`.

## 4. Launch checklist

- [ ] Replace imagery, prices, hours (section 1)
- [ ] Set `RESEND_API_KEY`, `REQUEST_INBOX`, `REQUEST_FROM`; verify the sending domain in Resend
- [ ] Send one test request through `/contact` and confirm it lands
- [ ] Deploy to Vercel, point `autodetailingwa.com` (currently parked at Hostinger) at it
- [ ] Confirm HTTPS and the `www` -> apex redirect
- [ ] Google Search Console: verify the property, submit `/sitemap.xml`
- [ ] Google Business Profile: create/claim, match the NAP in `lib/site.ts` exactly, add the site URL
- [ ] Bing Webmaster Tools: import from GSC
- [ ] Re-run `npx next build` and check Core Web Vitals on the deployed URL

## 5. Where things live

```
lib/site.ts        NAP, nav, hours: change the business record here only
lib/services.ts    7 services: copy, includes, specs, image
lib/areas.ts       7 cities: local copy, neighborhoods, notes
lib/packages.ts    3 tiers + size surcharges  ← PLACEHOLDER PRICES
lib/faq.ts         10 questions (also feeds FAQPage schema)
lib/promo.ts       the running offer, its terms and its end date
lib/posts.ts       blog index, reading time, related posts
content/posts/     the 15 posts, three files by theme
public/brand/      logo derivatives generated from the client PNG
lib/process.ts     the 6 stages
components/JsonLd.tsx   LocalBusiness, Service, Breadcrumb, FAQPage schema
scripts/build-images.mjs   image manifest, download + one shared colour grade
scripts/find-photos.mjs    scrapes stock candidates with alt text
scripts/shots.mjs          desktop + mobile screenshot capture
```

Adding a city is one entry in `lib/areas.ts`: the page, the sitemap entry, the
footer link, the schema `areaServed` and every cross-link update themselves.
