/**
 * Downloads the licensed reference photography and grades it to one look, so
 * a page built from twenty different photographers still reads as one site.
 *
 *   node scripts/build-images.mjs [--force]
 *
 * Source: Pexels (free to use, no attribution required). Every file here is
 * REFERENCE imagery and must be replaced with the client's own work — see
 * HANDOFF.md.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");
const cacheDir = join(root, ".image-cache");
const force = process.argv.includes("--force");

/** width, height — the crop the layout actually renders. */
const WIDE = [2000, 1250];
const CARD = [1400, 1050];
const SQUARE = [1200, 1200];
const PORTRAIT = [1100, 1467];

const manifest = [
  // Home
  { file: "hero.jpg", id: 9966016, size: WIDE, grade: { brightness: 1.06, a: 1.06, b: -2 } },
  { file: "rig.jpg", id: 20042048, size: CARD },
  { file: "area.jpg", id: 32403749, size: WIDE },

  // Services
  { file: "interior-detailing.jpg", id: 5233285, size: CARD, grade: { saturation: 0.5, cool: true } },
  { file: "exterior-detailing.jpg", id: 6873174, size: CARD, grade: { saturation: 0.5, brightness: 0.9, cool: true } },
  { file: "paint-correction.jpg", id: 5233258, size: CARD },
  { file: "ceramic-coating.jpg", id: 17216298, size: CARD },
  { file: "headlight-restoration.jpg", id: 4870702, size: CARD },
  { file: "pre-sale-detailing.jpg", id: 3786092, size: CARD },
  { file: "fleet-detailing.jpg", id: 12700835, size: CARD },

  // Page heroes
  { file: "services-hero.jpg", id: 14615262, size: WIDE },
  { file: "packages-hero.jpg", id: 29018388, size: WIDE },
  { file: "faq-hero.jpg", id: 14908957, size: WIDE },
  { file: "about-hero.jpg", id: 35149470, size: WIDE },
  { file: "about-side.jpg", id: 35149473, size: PORTRAIT },
  { file: "contact-hero.jpg", id: 17081564, size: WIDE },
  { file: "gallery-hero.jpg", id: 6872162, size: WIDE },

  // Areas
  { file: "area-vancouver.jpg", id: 186077, size: WIDE },
  { file: "area-portland.jpg", id: 19665312, size: WIDE },
  { file: "area-suburb.jpg", id: 5353883, size: WIDE },

  // Correction comparison. The "after" is the source frame; the "before" is
  // the SAME frame with simulated clear-coat marring composited over it, so
  // the slider compares like with like and claims nothing about a real job.
  { file: "correction-after.jpg", id: 29755711, size: WIDE, grade: { brightness: 1.15, a: 1.12, b: 0 } },

  // Gallery
  { file: "gallery-1.jpg", id: 20131971, size: WIDE },
  { file: "gallery-2.jpg", id: 5233264, size: SQUARE, grade: { saturation: 0.5, cool: true } },
  { file: "gallery-3.jpg", id: 4870705, size: SQUARE },
  { file: "gallery-4.jpg", id: 6873015, size: SQUARE },
  { file: "gallery-5.jpg", id: 248395, size: SQUARE, grade: { saturation: 0.3, cool: true } },
  { file: "gallery-6.jpg", id: 18517124, size: SQUARE },
  { file: "gallery-7.jpg", id: 29922284, size: SQUARE },
  { file: "gallery-8.jpg", id: 8237050, size: WIDE },
];

mkdirSync(outDir, { recursive: true });
mkdirSync(cacheDir, { recursive: true });

const src = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2400`;

function download(id) {
  const cached = join(cacheDir, `${id}.jpg`);
  if (existsSync(cached) && !force) return readFileSync(cached);

  execFileSync(
    "curl",
    [
      "-sL",
      "--fail",
      "-A",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36",
      "-o",
      cached,
      src(id),
    ],
    { stdio: "inherit" },
  );
  return readFileSync(cached);
}

/**
 * One grade for the whole site: pull saturation back so twenty different
 * white balances stop fighting, deepen the shadows toward the page ground,
 * and hold a little extra contrast so gloss still reads.
 */
function grade(pipeline, [w, h], opts = {}) {
  const {
    saturation = 0.76,
    brightness = 1,
    a = 1.08,
    b = -6,
    gamma = 1.03,
    // Some sources arrive under tungsten or sodium light. A warm cast inside
    // a graphite world reads as three different sites in one viewport.
    cool = false,
  } = opts;

  let p = pipeline
    .resize(w, h, { fit: "cover", position: "attention" })
    .modulate({ saturation, brightness });

  if (cool) {
    p = p.recomb([
      [0.9, 0.06, 0.04],
      [0.03, 0.94, 0.03],
      [0.02, 0.06, 0.98],
    ]);
  }

  return p.linear(a, b).gamma(gamma);
}

const built = [];

for (const item of manifest) {
  const target = join(outDir, item.file);
  if (existsSync(target) && !force) {
    built.push(item.file);
    continue;
  }

  const buf = download(item.id);
  await grade(sharp(buf), item.size, item.grade)
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(target);

  built.push(item.file);
  console.log(`✓ ${item.file}  (pexels ${item.id})`);
}

/* ── The simulated "before" frame ──────────────────────────────────────── */
{
  const target = join(outDir, "correction-before.jpg");
  const [w, h] = WIDE;

  // Fine circular marring, the pattern a rotary wash brush leaves behind.
  const arcs = [];
  const cx = w * 0.46;
  const cy = h * 0.42;
  for (let i = 0; i < 900; i++) {
    const r = 40 + Math.random() * (w * 0.55);
    const a0 = Math.random() * Math.PI * 2;
    const a1 = a0 + 0.25 + Math.random() * 0.9;
    const x0 = cx + r * Math.cos(a0);
    const y0 = cy + r * Math.sin(a0) * 0.62;
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1) * 0.62;
    const op = (0.22 + Math.random() * 0.5).toFixed(3);
    arcs.push(
      `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} A${r.toFixed(1)} ${(r * 0.62).toFixed(1)} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" stroke="#ffffff" stroke-opacity="${op}" stroke-width="${(0.7 + Math.random()).toFixed(2)}" fill="none"/>`,
    );
  }

  const overlay = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
       <defs>
         <radialGradient id="v" cx="46%" cy="42%" r="62%">
           <stop offset="0%" stop-color="#fff" stop-opacity="0.55"/>
           <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
         </radialGradient>
         <mask id="m"><rect width="${w}" height="${h}" fill="url(#v)"/></mask>
       </defs>
       <g mask="url(#m)">${arcs.join("")}</g>
     </svg>`,
  );

  const base = grade(sharp(download(29755711)), WIDE, {
    brightness: 1.15,
    a: 1.12,
    b: 0,
  })
    // Marring scatters the reflection: a little less contrast and a thin
    // grey veil. Kept subtle on purpose — the scratches do the work, and an
    // exposure change would prove nothing about correction.
    .linear(0.93, 11)
    .modulate({ saturation: 0.78 })
    .blur(0.35);

  await sharp(await base.toBuffer())
    .composite([{ input: overlay, blend: "screen" }])
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(target);

  built.push("correction-before.jpg");
  console.log("✓ correction-before.jpg  (simulated marring over the same frame)");
}

writeFileSync(
  join(outDir, "CREDITS.txt"),
  [
    "Reference photography — Pexels (free to use, attribution not required).",
    "REPLACE ALL OF THESE with Boss Auto Detailing's own job photography.",
    "",
    ...manifest.map((m) => `${m.file}  https://www.pexels.com/photo/${m.id}/`),
    "correction-before.jpg  simulated clear-coat marring over correction-after.jpg",
  ].join("\n"),
);

console.log(`\n${built.length} images in public/images`);
