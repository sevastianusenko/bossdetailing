/**
 * Scrapes Pexels search pages for candidate photo ids + alt text so the
 * imagery can be art-directed by what the picture actually shows rather than
 * by filename guesswork. Usage:
 *
 *   node scripts/find-photos.mjs "car detailing" "foam car wash"
 *
 * Writes scripts/photo-candidates.json.
 */
import { writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const queries = process.argv.slice(2);
if (!queries.length) {
  console.error("Pass at least one search query.");
  process.exit(1);
}

const out = {};

for (const q of queries) {
  const url = `https://www.pexels.com/search/${encodeURIComponent(q)}/`;
  // Node's fetch is rejected by the CDN; curl with a browser UA is not.
  let html;
  try {
    html = execFileSync(
      "curl",
      ["-sL", "--compressed", "-A", UA, "-H", "Accept: text/html", url],
      { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
    );
  } catch (err) {
    console.error(`! ${q} — ${err.message}`);
    continue;
  }

  // Photo records look like: "id":12345,"slug":...,"alt":"..."
  const records = [];
  const idRe = /"id":(\d{5,9}),"slug"/g;
  let m;
  const marks = [];
  while ((m = idRe.exec(html))) marks.push({ id: m[1], at: m.index });

  for (let i = 0; i < marks.length; i++) {
    const slice = html.slice(marks[i].at, marks[i + 1]?.at ?? marks[i].at + 6000);
    const alt = slice.match(/"alt":"((?:[^"\\]|\\.){10,200})"/);
    if (!alt) continue;
    records.push({
      id: marks[i].id,
      alt: JSON.parse(`"${alt[1]}"`),
    });
  }

  // Dedupe by id, keep source order (Pexels ranks by relevance).
  const seen = new Set();
  out[q] = records.filter((r) => !seen.has(r.id) && seen.add(r.id)).slice(0, 26);
  console.log(`${q}: ${out[q].length} candidates`);
}

writeFileSync(
  new URL("./photo-candidates.json", import.meta.url),
  JSON.stringify(out, null, 2),
);
