/**
 * Batched inspection capture: desktop and mobile in one run.
 * Full-page frames are downscaled and sliced so they stay readable.
 *
 *   node scripts/shots.mjs [baseUrl]
 */
import { mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";
import sharp from "sharp";

const BASE = process.argv[2] ?? "http://localhost:3111";
const OUT = process.env.SHOT_DIR ?? join(process.cwd(), ".shots");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const targets = [
  { path: "/", name: "home" },
  { path: "/services/paint-correction", name: "service" },
  { path: "/packages", name: "packages" },
  { path: "/service-areas/vancouver-wa", name: "area" },
  { path: "/contact", name: "contact" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: 1,
    isMobile: !!vp.isMobile,
    hasTouch: !!vp.isMobile,
  });

  for (const t of targets) {
    await page.goto(`${BASE}${t.path}`, { waitUntil: "networkidle0" });
    // Let fonts settle and lazy images decode.
    await page.addStyleTag({
      content: ".rise{animation:none!important;opacity:1!important;filter:none!important;transform:none!important}",
    });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(async () => {
      await new Promise((r) => {
        let y = 0;
        const step = () => {
          y += window.innerHeight * 0.8;
          window.scrollTo(0, y);
          if (y < document.body.scrollHeight) requestAnimationFrame(step);
          else {
            window.scrollTo(0, 0);
            setTimeout(r, 350);
          }
        };
        step();
      });
    });
    // Native lazy-loading can be outrun by a scripted scroll; force every
    // image eager, then wait for them to decode before the frame is taken.
    await page.evaluate(() => {
      document.querySelectorAll("img[loading=lazy]").forEach((img) => {
        img.loading = "eager";
      });
    });
    try {
      await page.waitForFunction(
        () =>
          Array.from(document.images).every(
            (i) => i.complete && i.naturalWidth > 0,
          ),
        { timeout: 20000 },
      );
    } catch {
      const pending = await page.evaluate(() =>
        Array.from(document.images)
          .filter((i) => !i.complete || !i.naturalWidth)
          .map((i) => i.currentSrc || i.src),
      );
      console.warn(`  ! images still pending on ${t.path}:`, pending);
    }

    const buf = await page.screenshot({ fullPage: true, type: "png" });
    const img = sharp(buf);
    const meta = await img.metadata();

    const targetW = vp.name === "desktop" ? 900 : 390;
    const scale = targetW / meta.width;
    const scaledH = Math.round(meta.height * scale);
    const resized = await sharp(buf).resize(targetW).png().toBuffer();

    const SLICE = 2200;
    const slices = Math.max(1, Math.ceil(scaledH / SLICE));
    for (let i = 0; i < slices; i++) {
      const top = i * SLICE;
      const h = Math.min(SLICE, scaledH - top);
      await sharp(resized)
        .extract({ left: 0, top, width: targetW, height: h })
        .png()
        .toFile(join(OUT, `${t.name}-${vp.name}-${i + 1}.png`));
    }
    console.log(`${t.name} ${vp.name}: ${meta.width}x${meta.height} -> ${slices} slice(s)`);
  }

  await page.close();
}

await browser.close();
console.log(`\nWritten to ${OUT}`);
