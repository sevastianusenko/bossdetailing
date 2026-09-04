# Boss Auto Detailing — autodetailingwa.com

Marketing site for Boss Auto Detailing LLC, a self-contained mobile detailing
operation based in Vancouver, WA and working both sides of the Columbia.

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build, 28 static routes
npm start
```

## Before launch

Read [HANDOFF.md](HANDOFF.md). Photography, prices and opening hours are
placeholders and are flagged in code.

## Structure

| Route | Notes |
|---|---|
| `/` | Home. Hero → mechanism → four pillars → correction proof → packages → process → service area → work → FAQ → request form |
| `/services` + `/services/[slug]` | 7 service pages, `Service` schema each |
| `/service-areas` + `/service-areas/[slug]` | 7 city pages with genuinely local copy |
| `/packages` | Three tiers, size surcharges, condition note |
| `/gallery` `/about` `/faq` `/contact` | |
| `/api/request` | Form handler, posts to Resend when configured |

All content lives in `lib/`. See the map at the end of HANDOFF.md.

## Design system

`PRODUCT.md` holds the product record. `DESIGN.md` documents the visual system
as built. The direction contract is an HTML comment at the top of the emitted
`<body>` — see `DIRECTION_CONTRACT` in `app/layout.tsx`.

Short version: near-black graphite ground because the product is reflected
light; bone and cool-silver type; one carmine action colour; hairline rules and
label/value spec rows instead of cards; compressed Archivo display against
Public Sans text; a single authored motion moment — the clear-coat sweep —
reused as the material signature.

## Scripts

```bash
node scripts/find-photos.mjs "car detailing" ...   # stock candidates + alt text
node scripts/build-images.mjs [--force]            # download + one shared grade
node scripts/shots.mjs [baseUrl]                   # desktop + mobile capture
```
