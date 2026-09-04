---
name: Boss Auto Detailing
description: A near-black inspection bay on the web — graphite ground, hairline rules, one carmine action colour, and photography as the only decoration.
colors:
  ink: "#08090a"
  ink-2: "#0e1113"
  ink-3: "#161b1e"
  ink-4: "#1e2427"
  line: "#262c30"
  line-soft: "#1a1f22"
  bone: "#f3f2ee"
  silver: "#aab1b7"
  muted: "#838b92"
  carmine: "#a81e22"
  carmine-hi: "#c4262c"
  carmine-lt: "#e97078"
  chalk: "#edece7"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.55rem, 7.2vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "wdth 92"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "wdth 94"
  list-heading:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    fontVariation: "wdth 94"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.2rem, 2vw, 1.55rem)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.02em"
    fontVariation: "wdth 96"
  body:
    fontFamily: "Public Sans, system-ui, -apple-system, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lede:
    fontFamily: "Public Sans, system-ui, -apple-system, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label-action:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.11em"
  label-nav:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  label-mark:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.2em"
  label-index:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.2em"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
  label-meta:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
  label-micro:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  focus: "2px"
  full: "9999px"
spacing:
  gutter: "1.25rem"
  gutter-lg: "2rem"
  hairline-gap: "1px"
  block: "2rem"
  time-gutter: "3.5rem"
  section: "5rem"
  section-lg: "7rem"
  container: "82rem"
  container-tight: "58rem"
components:
  button-primary:
    backgroundColor: "{colors.carmine}"
    textColor: "{colors.bone}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.carmine-hi}"
    textColor: "{colors.bone}"
  button-primary-disabled:
    backgroundColor: "{colors.ink-4}"
    textColor: "{colors.muted}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink-3}"
    textColor: "{colors.bone}"
  input-control:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  input-control-focus:
    backgroundColor: "{colors.ink-3}"
    textColor: "{colors.bone}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.silver}"
    typography: "{typography.label-nav}"
    rounded: "{rounded.none}"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
  spec-row:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 0"
  timeline-row:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label-index}"
    rounded: "{rounded.none}"
    padding: "1.25rem 0"
  section-mark:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label-mark}"
  tier-flag:
    backgroundColor: "{colors.carmine}"
    textColor: "{colors.bone}"
    typography: "{typography.label-micro}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.5rem"
  price-tier-featured:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2.5rem"
---

# Design System: Boss Auto Detailing

## Overview

**Creative North Star: "The Inspection Bay"**

The site is lit the way corrected paint is inspected: a near-black room, one raking light, and a surface that either holds a clean reflection or does not. Every visual decision follows from that. The ground is graphite rather than white because the product being sold is reflected light — swirl marks, gloss and coating depth are only legible against a dark field, and the buying moment is a phone screen in a driveway at dusk. Type is bone and cool silver on that ground; the single carmine is the colour of the action, never of the decoration.

Density is editorial, not promotional. Structure is carried by hairlines and by 1px gaps in dark grids, so sections divide without any object floating above the page. Where a competitor would place a rounded icon card, this build places a label/value row on a rule — a spec row for facts, a timeline row for hours. Where a competitor would place a badge cluster, it places a photograph at full bleed. The one authored motion moment — a specular clear-coat sweep travelling across a surface like an inspection lamp across a panel — is a material signature, not an interaction reward.

The confirmed rejection is the local-contractor template: stacked icon cards, trust-badge rows, three-column feature grids with drop shadows, and a second decorative accent hue. This site sells a shop, not a car wash, and its surfaces are supposed to look measured.

**Key Characteristics:**
- Near-black graphite ground on every page; no light-mode alternative exists.
- One accent hue (carmine) in three steps, used almost exclusively on actions and marks.
- Square by default: zero corner radius on every panel, button, field and image.
- Hairline rules and 1px grid gaps in place of borders-plus-shadows.
- Compressed Archivo display against Public Sans text, set tight and negative-tracked.
- A deep family of small uppercase display labels, stepped by how loud the label should be.
- Full-bleed photography, normalised to one grade, as the only decoration.

## Colors

A graphite-to-bone monochrome with a single carmine action colour; there is no secondary or tertiary palette by design.

### Primary
- **Carmine** (`{colors.carmine}`): the resting fill of every primary action — call buttons, quote buttons, the "Most booked" tier flag, the "after" chip on the comparison, the wordmark rule, the selection highlight.
- **Carmine Hot** (`{colors.carmine-hi}`): the hover state of a filled action, and only that.
- **Carmine Light** (`{colors.carmine-lt}`): the legible carmine on dark ground. Focus outlines, the slash in the section mark, inline links, the hero fact-strip labels, process-step numbers and job-timeline times, hover colour on large display links, and the bright centre of the drifting footer rule. Where carmine must be read as text or as a 1px line, this is the step used.

### Neutral
- **Ink** (`{colors.ink}`): the page ground and the browser theme colour; also the text colour on light chalk passages. The system's black is this graphite — there is no pure `#000` in the palette.
- **Ink 2** (`{colors.ink-2}`): the alternating band ground that separates one section from the next without a border, and the resting fill of form controls.
- **Ink 3** (`{colors.ink-3}`): row hover on the service list and the focused state of a form control.
- **Ink 4** (`{colors.ink-4}`): disabled action fill and the hover border on a control.
- **Line** (`{colors.line}`): the structural hairline. Section tops, spec and timeline rules, panel borders, and the background colour behind 1px-gap grids.
- **Line Soft** (`{colors.line-soft}`): the quieter hairline inside a list, where the structural rule would be too loud.
- **Bone** (`{colors.bone}`): default body colour and every headline; the "on" state of navigation.
- **Silver** (`{colors.silver}`): running prose, ledes and secondary list text; the resting state of navigation.
- **Muted** (`{colors.muted}`): labels, spec keys, placeholders, captions, counters and metadata.
- **Chalk** (`{colors.chalk}`): the inversion. Reserved for the featured pricing tier, where the whole panel flips to a light ground with ink type.

### Named Rules
**The One Lamp Rule.** Carmine is the only hue on the page. If a new element needs a colour to mean something, it earns carmine or it stays in the graphite ramp; a second accent hue is not available.

**The Inversion Budget Rule.** Chalk exists to make exactly one thing win — the featured tier. A page carries at most one chalk panel, or the inversion stops meaning "this one".

**The Hairline Structure Rule.** Separation is a 1px line or a 1px gap in `{colors.line}`, never a box. A grid separates by `gap: 1px` over a line-coloured background so divisions weigh the same as rules.

**The No Pure Black Rule.** Ink, not `#000`, is the bottom of this world. Scrims, masks and overlays are built from the ink token at partial alpha; a literal `#000` in the build is drift, not a palette member. The one occurrence (an unused `.fade-b` mask) has been deleted along with the other dead declarations — the two shadow tokens, `.btn-chalk` and `--color-chalk-2` — so the stylesheet now declares only what ships.

## Typography

**Display Font:** Archivo (variable, `wdth` axis, with Helvetica Neue / Arial fallback)
**Body Font:** Public Sans (with system-ui / Arial fallback)

Both load through `next/font`; the display face is requested with its width axis so headings are optically compressed rather than horizontally scaled.

**Character:** Archivo compressed to 88–96% width and tracked negative gives headings the stamped, plate-like density of shop signage; Public Sans underneath is neutral and long-form-legible at 1.65 line-height. The pairing reads as a technical document written by someone with a strong hand.

### Hierarchy
- **Display / hero rank** (700, `clamp(2.55rem, 7.2vw, 5.4rem)`, line-height 0.94, `wdth` 92): the single H1 per page, set at the bottom-left of a full-bleed photograph, capped at 17–19ch.
- **Headline / section rank** (700, `clamp(1.9rem, 4vw, 3.25rem)`, line-height 1.02, `wdth` 94): every section H2 and the request form's success state.
- **List heading rank** (700, `clamp(1.6rem, 3vw, 2.5rem)`, line-height 1.05, `wdth` 94): the headline *inside* a repeating row — service pillars, city links, the job-timeline day heads. Carried by `.rank-list`; all four call sites use the class.
- **Title / sub rank** (600, `clamp(1.2rem, 2vw, 1.55rem)`, line-height 1.16, `wdth` 96): process-step titles, timeline stage titles, feature terms, FAQ questions.
- **Body** (400, 1rem, line-height 1.65): running prose in silver, capped at 70ch; the lede variant runs larger and caps at 48ch. Spec values run one notch down (0.97rem) at line-height 1.5.
- **Wordmark** (800, fixed 1.4rem, `wdth` 88, tracking −0.035em): deliberately off the ramp. The logotype is a mark, not a text rank — it holds one size at every placement and does not scale with the surrounding hierarchy. Its discipline line sits at the Micro label step.
- **Label family** (display face, 600–700, uppercase, tracking 0.11em–0.2em): seven steps, sized by how loud the label is meant to be. Tracking widens as the size falls, so the smallest steps stay readable.
  - **Action** (0.84rem / 0.11em, weight 700): button labels — the loudest small type on the page.
  - **Nav** (0.78rem / 0.13–0.14em): header navigation and the "read more" link.
  - **Mark** (0.75rem / 0.2em): the slash-prefixed section kicker. One size, one role.
  - **Index** (0.7rem / 0.2em, carmine-light): the counter in a numbered row — process step numbers, job-timeline times (the latter also `tabular-nums`).
  - **Spec** (0.68rem / 0.16em): the workhorse. Spec keys, form field labels, hero fact-strip keys, tier size labels.
  - **Meta** (0.65rem / 0.18em): the quietest readable label — "From" above a price, mobile-nav indices, tier metadata.
  - **Micro** (0.6rem / 0.2em): labels that sit *on* something — the comparison chips, the tier flag, the wordmark's discipline line.

### The label ramp, honestly
The build once carried eleven distinct sub-1rem sizes where these seven steps exist. The extras were hand-tuning, not steps, and have since been collapsed onto the ramp:

| Was in the build | Collapsed into | Status |
| --- | --- | --- |
| `0.53rem` (small wordmark variant) | Micro `0.6rem` | Done — the unused `small` prop was removed with it |
| `0.58rem` ("Most booked" flag, home + packages) | Micro `0.6rem` | Done |
| `0.72rem` (job-timeline time) | Index `0.7rem` | Done |
| `0.82rem` (sticky call bar) | Action `0.84rem` | Done |
| `0.86rem` (header phone number) | Action `0.84rem` | Done |

The list-heading rank had the same problem at display scale. Three call sites ran narrower than the recorded step — `1.6→2.35rem` (service areas), `1.5→2rem` (timeline day head), `1.35→1.9rem` (city links). All three now use `.rank-list` at the recorded `clamp(1.6rem, 3vw, 2.5rem)`, and the rank has a class instead of four inline styles. Nothing was recorded as a new step: the fix was to fold the variants in, not to ratify hand-tuning as a system.

The only size deliberately left off the ramp is the wordmark's fixed 1.4rem, recorded above as a mark rather than a rank.

### Named Rules
**The One Lamp Rule.** Carmine is the only hue on the page. If a new element needs a colour to mean something, it earns carmine or it stays in the graphite ramp; a second accent hue is not available.

**The Inversion Budget Rule.** Chalk exists to make exactly one thing win — the featured tier. A page carries at most one chalk panel, or the inversion stops meaning "this one".

**The Hairline Structure Rule.** Separation is a 1px line or a 1px gap in `{colors.line}`, never a box. A grid separates by `gap: 1px` over a line-coloured background so divisions weigh the same as rules.

**The No Pure Black Rule.** Ink, not `#000`, is the bottom of this world. Scrims, masks and overlays are built from the ink token at partial alpha; a literal `#000` in the build is drift, not a palette member.

## Typography

**Display Font:** Archivo (variable, `wdth` axis, with Helvetica Neue / Arial fallback)
**Body Font:** Public Sans (with system-ui / Arial fallback)

Both load through `next/font`; the display face is requested with its width axis so headings are optically compressed rather than horizontally scaled.

**Character:** Archivo compressed to 88–96% width and tracked negative gives headings the stamped, plate-like density of shop signage; Public Sans underneath is neutral and long-form-legible at 1.65 line-height. The pairing reads as a technical document written by someone with a strong hand.

### Hierarchy
- **Display / hero rank** (700, `clamp(2.55rem, 7.2vw, 5.4rem)`, line-height 0.94, `wdth` 92): the single H1 per page, set at the bottom-left of a full-bleed photograph, capped at 17–19ch.
- **Headline / section rank** (700, `clamp(1.9rem, 4vw, 3.25rem)`, line-height 1.02, `wdth` 94): every section H2 and the request form's success state.
- **List heading rank** (700, `clamp(1.6rem, 3vw, 2.5rem)`, line-height 1.05, `wdth` 94): the headline *inside* a repeating row — service pillars, city links, the job-timeline day heads. Carried by `.rank-list`; all four call sites use the class.
- **Title / sub rank** (600, `clamp(1.2rem, 2vw, 1.55rem)`, line-height 1.16, `wdth` 96): process-step titles, timeline stage titles, feature terms, FAQ questions.
- **Body** (400, 1rem, line-height 1.65): running prose in silver, capped at 70ch; the lede variant runs larger and caps at 48ch. Spec values run one notch down (0.97rem) at line-height 1.5.
- **Wordmark** (800, fixed 1.4rem, `wdth` 88, tracking −0.035em): deliberately off the ramp. The logotype is a mark, not a text rank — it holds one size at every placement and does not scale with the surrounding hierarchy. Its discipline line sits at the Micro label step.
- **Label family** (display face, 600–700, uppercase, tracking 0.11em–0.2em): seven steps, sized by how loud the label is meant to be. Tracking widens as the size falls, so the smallest steps stay readable.
  - **Action** (0.84rem / 0.11em, weight 700): button labels — the loudest small type on the page.
  - **Nav** (0.78rem / 0.13–0.14em): header navigation and the "read more" link.
  - **Mark** (0.75rem / 0.2em): the slash-prefixed section kicker. One size, one role.
  - **Index** (0.7rem / 0.2em, carmine-light): the counter in a numbered row — process step numbers, job-timeline times (the latter also `tabular-nums`).
  - **Spec** (0.68rem / 0.16em): the workhorse. Spec keys, form field labels, hero fact-strip keys, tier size labels.
  - **Meta** (0.65rem / 0.18em): the quietest readable label — "From" above a price, mobile-nav indices, tier metadata.
  - **Micro** (0.6rem / 0.2em): labels that sit *on* something — the comparison chips, the tier flag, the wordmark's discipline line.

### The label ramp, honestly
The build carries eleven distinct sub-1rem sizes where these seven steps exist. The extras are drift, not steps, and should collapse on next touch:

| Found in build | Collapses into |
| --- | --- |
| `0.53rem` (small wordmark) | Micro `0.6rem` |
| `0.58rem` ("Most booked" flag, home + packages) | Micro `0.6rem` |
| `0.72rem` (job-timeline time) | Index `0.7rem` |
| `0.82rem` (sticky call bar) | Action `0.84rem` |
| `0.86rem` (header phone number) | Action `0.84rem` |

The list-heading rank has the same problem at display scale: `clamp(1.6rem, 3vw, 2.5rem)` is the recorded step, and the three narrower call sites — `1.6→2.35rem` (service areas), `1.5→2rem` (timeline day head), `1.35→1.9rem` (city links) — are variants to fold into it or down into Title. None of these are recorded as steps; recording them would ratify hand-tuning as a system.

### Named Rules
**The Slash Mark Rule.** A section announces itself with one kicker system and one only: an uppercase muted label preceded by a carmine slash, at the Mark step. No eyebrow variants, no pill kickers, no numbered chips in its place.

**The One Voice Per Screen Rule.** Exactly one hero-rank element per page. A second element at hero size means the page has two headlines and no hierarchy.

**The Compression Rule.** Display type is always compressed and negative-tracked (`wdth` 88–96, tracking −0.02em to −0.04em). Archivo at default width is not part of this system.

**The Seven Steps Rule.** A new small label takes one of the seven label steps. If none of them fits, the label is doing a job the system has not got — solve that before inventing a size between two existing steps.

## Layout

A single centred container (`{spacing.container}`, 82rem) with a tight variant (`{spacing.container-tight}`, 58rem) for reading-length pages; gutters step from `{spacing.gutter}` to `{spacing.gutter-lg}` at 768px. The header is fixed and reserves a live `--header-h` of 74px, rising to 88px at 768px, which every full-bleed hero pads against and which scroll anchoring reads for `scroll-padding-top`.

Vertical rhythm is a repeating section block of 5rem padding, 7rem from 768px, each opened by a `{colors.line}` top border. Alternate sections carry the `{colors.ink-2}` ground so bands read as separate rooms without adding a container. Inside a section, content sits on a 12-column grid at `lg` (common splits 5/7, 7/5, 4/8) and collapses to a single column below it; multi-item groups use `gap: 1px` over a line-coloured background so the grid's own gaps become the rules.

Two fixed label gutters recur: `minmax(6.5rem, 11ch)` for a spec key, and `{spacing.time-gutter}` (3.5rem) for a clock time. Both hold the value column on a common left edge down the whole list.

Heroes are full-bleed and bottom-aligned: `min-height: 92svh` on the home page, `62svh` on interior pages, with the headline stack pinned to the lower left and, on the home page, a hairline three-fact strip pinned to the bottom edge. Photographs are placed at fixed aspect ratios (16/10 comparison, 4/3 gallery and rig, 5/4 service thumbnails, 3/4 portrait), never free-height.

Mobile is a first-class case, not a fallback: navigation becomes a full-height panel of list-rank rows numbered 01–0n, and a phone-only action bar docks to the bottom edge after the first viewport, retracting over the page's own request form.

## Elevation & Depth

This system is flat. Nothing floats. Depth comes from three sources instead: tonal layering across the four ink steps, hairlines in `{colors.line}`, and photographic scrim — a top-to-bottom and left-to-right ink gradient over every hero image, plus a fine overlay grain on the primary photographs. Fixed chrome (the header once scrolled, the mobile call bar) separates itself with a translucent ink ground and a backdrop blur, still finished with a hairline rather than a shadow.

The theme declares two shadow tokens; the shipped build uses neither, so shadows are not part of the recorded vocabulary.

### Named Rules
**The No-Float Rule.** No element in this system casts a shadow. If something must separate from what is behind it, it takes a hairline, a darker ink step, or a scrim — in that order.

**The Scrim-Not-Overlay Rule.** Text over photography is made legible by a directional ink gradient anchored to the text's own corner, never by a flat black wash and never by a text shadow.

## Shapes

Square, everywhere. Panels, buttons, form controls, images, tier cards and labels all sit at zero radius (`{rounded.none}`); the corner is a design position, not an oversight. Two exceptions are real and native to the world: the focus ring rounds to `{rounded.focus}` (2px) so the outline does not spike, and a genuinely circular control — the comparison slider's drag handle — is a full circle (`{rounded.full}`). Borders are 1px and default globally to `{colors.line}`. Emphasis inside lists is a 12px carmine hairline dash rather than a bullet or a checkmark, and the wordmark's mark is a 3px carmine vertical bar.

## Components

### Buttons
- **Shape:** hard rectangle (0 radius), minimum height 3.25rem, inline-flex with a 0.6rem gap so a glyph can lead the label.
- **Primary:** carmine ground, bone label at the Action label step (0.84rem / 0.11em), 1.6rem inline padding.
- **Hover / Focus:** ground shifts to carmine-hot over 0.25s on the expo-out curve; active nudges down 1px; focus is the global carmine-light outline at 3px offset.
- **Ghost:** transparent ground with a `{colors.line}` border; on hover the ground fills to ink-3 and the border lifts to muted. Used as the second of a pair, never alone.
- **Disabled:** ink-4 ground, muted label, no transform.
- **Chalk variant:** defined in the stylesheet for a light-ground passage; not exercised by the shipped build.

### Inputs / Fields
- **Style:** ink-2 ground, 1px `{colors.line}` border, bone text, 3.25rem minimum height, square corners. The label above is the Spec label step in muted, 0.5rem clear of the control.
- **Focus:** border becomes carmine-light and the ground lifts to ink-3; the native outline is suppressed only because that border shift plus the global focus ring already carry the state.
- **Hover / Error:** border to ink-4 on hover; `aria-invalid` takes the same carmine-light border, paired with a text message rather than an icon.

### Navigation
- **Style:** Nav label step (0.78rem, uppercase, 0.13em). Silver at rest, bone on hover and on the current page — no underline, no pill, no bar.
- **Header:** transparent over the hero, transitioning to 92% ink with a backdrop blur and a bottom hairline once scrolled past 24px.
- **Mobile:** a full-height panel under the header; each destination is a list-rank row on a `{colors.line-soft}` rule with a Meta-step index on the right, followed by the call and quote actions stacked.

### Spec Rows (signature)
The system's replacement for the icon card. A two-column grid — a `minmax(6.5rem, 11ch)` Spec-step key against a bone value — sitting under a `{colors.line}` top rule with 0.85rem block padding. Any fact a template would put in a card goes here.

### Job Timeline (signature)
The spec row taken to the time axis, used on the correction and coating service pages to show the schedule of a job stage by stage. A `{spacing.time-gutter}` (3.5rem) clock column in carmine-light at the Index step with `tabular-nums` so the times align down the list, against a Title-rank stage name and a silver paragraph, each row on a `{colors.line}` top rule with 1.25rem block padding. Days are two columns at `lg`, one below. It is canonical, not a one-off: it is the same label/value-on-a-hairline grammar as the spec row and is the correct device for any staged, timed or sequenced record. Every instance carries a caption stating that the schedule is typical rather than promised.

### Section Mark (signature)
An inline uppercase muted label at the Mark step preceded by a carmine-light slash. It is the only kicker in the system and appears directly above a section headline.

### Before / After Comparison (signature)
A 16/10 frame with the corrected image clipped over the marred one, a bone hairline divider carrying a circular blurred-ink handle, a muted "before" chip on the left and a carmine "after" chip on the right, both at the Micro label step. The control is a real range input laid transparently over the whole frame, so pointer, touch and arrow keys all drive it. Every instance carries a provenance caption stating what the frames actually are.

### Motion
- **Clear-coat sweep:** a specular band at 104° travelling across a surface on an 8s loop with a long dwell, applied to the hero photograph and a small number of primary images. The sweep utility supplies only `overflow`, `isolation` and the animated pseudo-element; **it deliberately declares no `position`**, because the rule lands in the utilities layer after Tailwind's own and a `position` here would beat `.absolute` / `.relative` at equal specificity and collapse the element. Every call site declares its own positioning alongside the class. The sweep is a material signature — it never attaches to hover states and never runs on more than a couple of surfaces per page.
- **Drifting rule:** a hairline whose carmine-light centre drifts across it on a 12s linear loop; used once, on the footer's dividing rule.
- **Scroll entrance:** a rise-and-unblur gated behind `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference`, applied to a handful of list rows. Content is fully visible without it by construction.
- **Easing / durations:** everything uses `cubic-bezier(0.16, 1, 0.3, 1)`; 0.2–0.25s for state, 0.3–0.5s for chrome, 0.9s and longer for entrances and image scale. A global reduced-motion block collapses all animation and transition duration to near zero.

## Do's and Don'ts

### Do:
- **Do** open every section with the slash mark, then a section-rank headline, in that order.
- **Do** express facts as spec rows and schedules as timeline rows — label gutter, value column, hairline above.
- **Do** take small labels from the seven-step label family, and widen tracking as the size falls.
- **Do** separate grid items with `gap: 1px` over a `{colors.line}` background so the gaps read as rules.
- **Do** keep body prose in silver at 70ch and ledes at 48ch; cap headlines at 17–20ch.
- **Do** run the hero photograph full-bleed with a directional ink scrim and the headline bottom-left.
- **Do** declare positioning at every `.sweep` call site; the utility does not position itself, on purpose.
- **Do** pair a filled carmine action with a ghost action; the call is the filled one.
- **Do** put new photography through the shared grade in `scripts/build-images.mjs` (saturation 0.76, contrast 1.08/−6, gamma 1.03) before it enters the site.
- **Do** gate any new scroll-linked animation behind `@supports (animation-timeline: view())` so content is never hidden by default.
- **Do** caption any illustrative, simulated or typical-case content with what it actually is.

### Don't:
- **Don't** introduce a second accent hue, a gradient-filled button, or a trust-badge row.
- **Don't** build a feature as a rounded icon card with a shadow; the spec row and the timeline row exist for that job.
- **Don't** add a drop shadow to any element — separation is hairline, ink step, or scrim.
- **Don't** round the corners of a panel, button, field or image; radius is reserved for focus rings and genuinely circular controls.
- **Don't** use literal `#000`; scrims and masks build from the ink token.
- **Don't** invent a label size between two steps of the family, or a fourth display clamp between List heading and Title.
- **Don't** add `position` to the `.sweep` utility, however tempting; it collapses every hero that uses it.
- **Don't** scatter the clear-coat sweep onto hover states or run it on more than a couple of surfaces per page.
- **Don't** set display type at Archivo's default width or with positive tracking.
- **Don't** put more than one hero-rank headline or more than one chalk-inverted panel on a page.
- **Don't** place a light panel on a page for contrast alone; chalk means "this tier wins".
