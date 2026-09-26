# Boss Auto Detailing: autodetailingwa.com

Marketing site for Boss Auto Detailing LLC, a mobile car detailing and
furniture cleaning operation based in Vancouver, WA and working both sides
of the Columbia. Live on Vercel at autodetailingwa.com.

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build, 37 static routes
npm start
```

## Before launch

Read [HANDOFF.md](HANDOFF.md). The request-form inbox, some photography,
opening hours and the September promo terms all need attention or
confirmation from the client; they are flagged in code with `PLACEHOLDER`
comments where they apply.

## Structure

| Route | Notes |
|---|---|
| `/` | Home. Hero -> what we need/bring -> four pillars -> real pricing -> process -> service area -> work -> FAQ -> request form |
| `/services` + `/services/[slug]` | 4 service pages (interior, exterior, furniture & upholstery, fleet), `Service` schema each |
| `/service-areas` + `/service-areas/[slug]` | 7 city pages with genuinely local copy |
| `/packages` | Real interior/exterior pricing by vehicle class, plus a furniture-cleaning quote note |
| `/blog` + `/blog/[slug]` | 21 posts, `BlogPosting` and `FAQPage` schema |
| `/gallery` `/about` `/faq` `/contact` | |
| `/api/request` | Form handler; accepts JSON or multipart (with photo attachments), posts to Resend when configured |

All content lives in `lib/`. See the map at the end of HANDOFF.md.

Boss Auto Detailing is **not** a self-contained mobile rig: the customer
provides an outdoor water spigot and a power outlet, and the site says so
plainly (hero, FAQ, about, and a required field on the request form). This
is a deliberate business decision made by the client on 2026-09-25, not an
oversight; do not walk it back without being asked.

## Design system

`PRODUCT.md` holds the product record. `DESIGN.md` documents the visual system
as built. The direction contract is an HTML comment at the top of the emitted
`<body>`: see `DIRECTION_CONTRACT` in `app/layout.tsx`.

Short version: near-black graphite ground because the product is reflected
light; bone and cool-silver type; one carmine action colour; hairline rules and
label/value spec rows instead of cards; compressed Archivo display against
Public Sans text; and a single authored motion moment, the clear-coat sweep,
reused as the material signature. The client's shield emblem is the mark in
the header, footer and favicon, alongside the typographic wordmark.

## Scripts

```bash
node scripts/find-photos.mjs "car detailing" ...   # stock candidates + alt text
node scripts/build-images.mjs [--force]            # download + one shared grade
node scripts/shots.mjs [baseUrl]                   # desktop + mobile capture
node scripts/contact-sheet.mjs                     # review all site imagery at once
node scripts/candidate-sheet.mjs <pexels ids...>   # review replacement candidates
node scripts/shot-one.mjs <url> <out> [--promo]    # one page, optionally triggering the dialog
node scripts/resend-status.mjs [--send]            # check a Resend key's domains, optionally send a test
node scripts/test-request-form.mjs [baseUrl]       # posts a marked test lead to a running server
```
