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
/** Client phone photography is 960x1280. These sizes never upscale it. */
const CARD_REAL = [960, 720];
const SQUARE_REAL = [940, 940];

const manifest = [
  // Home
  { file: "hero.jpg", id: 4876639, size: WIDE, grade: { brightness: 0.92, a: 1.1, b: -10 } },
  { file: "rig.jpg", id: 20042048, size: CARD },
  { file: "area.jpg", id: 32403749, size: WIDE },

  // Services
  // Real job: Ford Explorer footwell after extraction.
  { file: "interior-detailing.jpg", id: "4956687487505992978.jpg", size: CARD_REAL, real: true },
  // Real job: full-size SUV under snow foam on a residential driveway.
  { file: "exterior-detailing.jpg", id: "4956687487505992955.jpg", size: CARD_REAL, real: true },
  { file: "furniture-cleaning.jpg", id: 4401537, size: CARD },
  { file: "fleet-detailing.jpg", id: 33623769, size: CARD },

  // Page heroes
  { file: "services-hero.jpg", id: 33093191, size: WIDE },
  { file: "packages-hero.jpg", id: 6872572, size: WIDE },
  { file: "faq-hero.jpg", id: 14908957, size: WIDE },
  { file: "about-hero.jpg", id: 35149470, size: WIDE },
  { file: "about-side.jpg", id: 35149473, size: PORTRAIT },
  { file: "contact-hero.jpg", id: 32073602, size: WIDE, grade: { brightness: 0.9, a: 1.1, b: -8 } },
  { file: "gallery-hero.jpg", id: 6872162, size: WIDE },

  // Areas
  { file: "area-vancouver.jpg", id: 186077, size: WIDE },
  { file: "area-portland.jpg", id: 19665312, size: WIDE },
  { file: "area-suburb.jpg", id: 5353883, size: WIDE },

  // Gallery
  { file: "gallery-1.jpg", id: "4956687487505992954.jpg", size: SQUARE_REAL, real: true },
  { file: "gallery-2.jpg", id: "4956687487505992956.jpg", size: SQUARE_REAL, real: true },
  { file: "gallery-3.jpg", id: "4956687487505992973.jpg", size: SQUARE_REAL, real: true },
  { file: "gallery-4.jpg", id: "4956687487505992981.jpg", size: SQUARE_REAL, real: true },
  { file: "gallery-5.jpg", id: 248395, size: SQUARE, grade: { saturation: 0.3, cool: true } },
  { file: "gallery-6.jpg", id: 12190248, size: SQUARE },
  { file: "gallery-7.jpg", id: 28571826, size: SQUARE },
  { file: "gallery-8.jpg", id: 8237050, size: WIDE },
];

mkdirSync(outDir, { recursive: true });
mkdirSync(cacheDir, { recursive: true });

/** Client photography lives here, at its native resolution. */
const localDir = join(root, "public", "images");

const src = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2400`;

function download(id) {
  // A manifest entry can name a local file instead of a Pexels id.
  if (typeof id === "string" && id.endsWith(".jpg")) {
    return readFileSync(join(localDir, id));
  }

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

writeFileSync(
  join(outDir, "CREDITS.txt"),
  [
    "Boss Auto Detailing image credits.",
    "",
    "REAL: the client's own job photography. Keep.",
    ...manifest
      .filter((m) => m.real)
      .map((m) => `  ${m.file}  <- ${m.id}`),
    "",
    "REFERENCE: licensed Pexels frames, free to use, attribution not required.",
    "Replace these with the client's own work as it is documented.",
    ...manifest
      .filter((m) => !m.real)
      .map((m) => `  ${m.file}  https://www.pexels.com/photo/${m.id}/`),
  ].join("\n"),
);

console.log(`\n${built.length} images in public/images`);
