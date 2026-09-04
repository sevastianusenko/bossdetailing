/**
 * Captures a single page, optionally after forcing an interaction, so a
 * component that only appears on a trigger can still be reviewed.
 *
 *   node scripts/shot-one.mjs <url> <outfile> [--promo] [--width N] [--full]
 */
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import puppeteer from "puppeteer-core";
import sharp from "sharp";

const [url, out] = process.argv.slice(2);
const args = process.argv.slice(2);
const width = Number(args[args.indexOf("--width") + 1]) || 1440;
const promo = args.includes("--promo");
const full = args.includes("--full");

mkdirSync(dirname(out), { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});

const page = await browser.newPage();
await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.addStyleTag({
  content:
    ".rise{animation:none!important;opacity:1!important;filter:none!important;transform:none!important}",
});
await page.evaluate(() => document.fonts.ready);

if (promo) {
  // The dialog arms on scroll depth. Nudge it, then come back to the top.
  await page.evaluate(() => window.scrollTo(0, window.innerHeight));
  await page.evaluate(
    () => new Promise((r) => setTimeout(r, 600)),
  );
}

await page.evaluate(() => {
  document.querySelectorAll("img[loading=lazy]").forEach((img) => {
    img.loading = "eager";
  });
});
await page
  .waitForFunction(
    () =>
      Array.from(document.images).every((i) => i.complete && i.naturalWidth > 0),
    { timeout: 20000 },
  )
  .catch(() => {});

const buf = await page.screenshot({ fullPage: full, type: "png" });
const target = full ? 900 : width;
await sharp(buf).resize(target).png().toFile(out);

const meta = await sharp(buf).metadata();
console.log(`${url} -> ${out} (${meta.width}x${meta.height})`);

await browser.close();
