/**
 * Builds a labelled contact sheet of public/images so the whole photo set can
 * be reviewed as one frame. Written for spotting things that should not be in
 * a Pacific Northwest business's photography: foreign licence plates, foreign
 * road signs, right-hand drive.
 *
 *   node scripts/contact-sheet.mjs [outPath] [cols] [tileWidth]
 */
import { readdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const dir = join(process.cwd(), "public", "images");
const out = process.argv[2] ?? join(process.cwd(), ".shots", "contact-sheet.png");
const cols = Number(process.argv[3] ?? 5);
const tw = Number(process.argv[4] ?? 460);
const th = Math.round(tw * 0.66);
const labelH = 26;

const files = readdirSync(dir)
  .filter((f) => /\.jpg$/i.test(f))
  .sort();

const rows = Math.ceil(files.length / cols);
const cellH = th + labelH;

const tiles = [];
for (const [i, f] of files.entries()) {
  const x = (i % cols) * tw;
  const y = Math.floor(i / cols) * cellH;

  tiles.push({
    input: await sharp(join(dir, f))
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
         <text x="6" y="18" font-family="monospace" font-size="15" fill="#eee">${i + 1}. ${f}</text>
       </svg>`,
    ),
    left: x,
    top: y + th,
  });
}

await sharp({
  create: {
    width: cols * tw,
    height: rows * cellH,
    channels: 3,
    background: "#000",
  },
})
  .composite(tiles)
  .png()
  .toFile(out);

console.log(`${files.length} images -> ${out}`);
files.forEach((f, i) => console.log(`${i + 1}. ${f}`));
