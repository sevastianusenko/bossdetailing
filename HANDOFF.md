# Handoff — what must be replaced or confirmed before launch

Everything below is either a placeholder or a fact the client has not supplied.
None of it is a claim Boss Auto Detailing has made. Work through it before the
domain points at this build.

## 1. Blocking — do not launch without these

| # | Item | Where | Why it blocks |
|---|------|-------|---------------|
| 1 | **All 30 photographs** | `public/images/` | Licensed Pexels reference imagery, not the client's jobs. `public/images/CREDITS.txt` lists each file and its source. Swap the files in place — the filenames are the contract, no code changes needed. Then delete the disclosure line at the bottom of `app/gallery/page.tsx`. |
| 2 | **Package prices** | `lib/packages.ts` | `fromPrice` on the three tiers ($189 / $389 / $1,290) and the size surcharges (+$60 / +$120) are market-rate estimates, not the client's rates. All numbers live in that one file; `PRICING_IS_PLACEHOLDER` flags it. |
| 3 | **Opening hours** | `lib/site.ts` → `site.hours` | Industry-typical hours, invented. These are emitted into LocalBusiness schema, so wrong values are worse than no values. |
| 4 | **Request-form inbox** | `.env` | Without `RESEND_API_KEY` and `REQUEST_INBOX` the form returns an honest "not connected yet, please call" error. It never pretends to have sent. See `.env.example`. |
| 5 | **Email address** | `lib/site.ts` → `site.email` | `hello@autodetailingwa.com` is assumed. Not currently shown on any page, but it is in the record. |

## 2. Confirm with the client

- **Base coordinates** — `site.address.lat/lng` are approximated from the NE 57th Ave address and go into schema `geo`. Replace with the exact pin from the Google Business Profile.
- **Before/after comparison** — the frame on the home page and the gallery is one photograph shown with and without *simulated* clear-coat marring, labelled as an illustration in the caption. Replace with a real corrected panel and remove the "Illustration" note in `components/BeforeAfter.tsx` usage.
- **Ceramic coating brand, durability rating and warranty terms** — deliberately left as "call for current options" on `/services/ceramic-coating`. Fill in once known.
- **Years in business, technician count, licence and insurance** — not stated anywhere on the site because they were not supplied. Good candidates for the About page once known.
- **Fleet minimums** — `/services/fleet-detailing` says "call to discuss" rather than naming a unit count.

## 3. Not built, by agreement

- **Online booking calendar.** The agreed flow is request form + phone call. If that changes, the form already collects everything a calendar would need.
- **Reviews / testimonials.** None exist yet. Nothing was invented. Once the Google Business Profile has reviews, the natural home is a band between the packages and the process sections on the home page, plus `AggregateRating` in `components/JsonLd.tsx`.

## 4. Launch checklist

- [ ] Replace imagery, prices, hours (section 1)
- [ ] Set `RESEND_API_KEY`, `REQUEST_INBOX`, `REQUEST_FROM`; verify the sending domain in Resend
- [ ] Send one test request through `/contact` and confirm it lands
- [ ] Deploy to Vercel, point `autodetailingwa.com` (currently parked at Hostinger) at it
- [ ] Confirm HTTPS and the `www` → apex redirect
- [ ] Google Search Console: verify the property, submit `/sitemap.xml`
- [ ] Google Business Profile: create/claim, match the NAP in `lib/site.ts` exactly, add the site URL
- [ ] Bing Webmaster Tools: import from GSC
- [ ] Re-run `npx next build` and check Core Web Vitals on the deployed URL

## 5. Where things live

```
lib/site.ts        NAP, nav, hours — change the business record here only
lib/services.ts    7 services: copy, includes, specs, image
lib/areas.ts       7 cities: local copy, neighborhoods, notes
lib/packages.ts    3 tiers + size surcharges  ← PLACEHOLDER PRICES
lib/faq.ts         10 questions (also feeds FAQPage schema)
lib/process.ts     the 6 stages
components/JsonLd.tsx   LocalBusiness, Service, Breadcrumb, FAQPage schema
scripts/build-images.mjs   image manifest, download + one shared colour grade
scripts/find-photos.mjs    scrapes stock candidates with alt text
scripts/shots.mjs          desktop + mobile screenshot capture
```

Adding a city is one entry in `lib/areas.ts`: the page, the sitemap entry, the
footer link, the schema `areaServed` and every cross-link update themselves.
