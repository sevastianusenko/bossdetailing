/**
 * Downloads candidate Pexels frames and lays them out as one labelled sheet,
 * so replacements can be judged on what the picture actually shows rather
 * than on its alt text.
 *
 *   node scripts/candidate-sheet.mjs 12345 67890 ...
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ids = process.argv.slice(2);
if (!ids.length) {
  console.error("Pass Pexels photo ids.");
  process.exit(1);
}

const cacheDir = join(process.cwd(), ".image-cache");
const out = join(process.cwd(), ".shots", "candidates.png");
mkdirSync(cacheDir, { recursive: true });
mkdirSync(join(process.cwd(), ".shots"), { recursive: true });

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36";

const cols = 5;
const tw = 460;
const th = 304;
const labelH = 26;
const cellH = th + labelH;

const tiles = [];
const kept = [];

for (const id of ids) {
  const cached = join(cacheDir, `${id}.jpg`);
  if (!existsSync(cached)) {
    try {
      execFileSync(
        "curl",
        [
          "-sL",
          "--fail",
          "-A",
          UA,
          "-o",
          cached,
          `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`,
        ],
        { stdio: "ignore" },
      );
    } catch {
      // Some ids 404 on the direct pattern; drop them rather than stop.
      console.warn(`! ${id} unavailable, skipped`);
      continue;
    }
  }
  kept.push(id);
}

for (const [i, id] of kept.entries()) {
  const cached = join(cacheDir, `${id}.jpg`);
  const x = (i % cols) * tw;
  const y = Math.floor(i / cols) * cellH;

  tiles.push({
    input: await sharp(readFileSync(cached))
      .resize(tw - 4, th - 4, { fit: "cover" })
      .png()
      .toBuffer(),
    left: x + 2,
    top: y + 2,
  });

  tiles.push({
    input: Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${tw}" height="${labelH}">
         <rect width="${tw}" height="${labelH}" fill="#111"/>
         <text x="6" y="18" font-family="monospace" font-size="15" fill="#eee">${i + 1}. ${id}</text>
       </svg>`,
    ),
    left: x,
    top: y + th,
  });
}

await sharp({
  create: {
    width: cols * tw,
    height: Math.ceil(kept.length / cols) * cellH,
    channels: 3,
    background: "#000",
  },
})
  .composite(tiles)
  .png()
  .toFile(out);

console.log(`${kept.length} candidates -> ${out}`);
kept.forEach((id, i) => console.log(`${i + 1}. ${id}`));
