"use client";

import { useRef, useState } from "react";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { vehicleClasses } from "@/lib/packages";
import { site } from "@/lib/site";
import { Arrow, PhoneGlyph } from "./Arrow";

type Status = "idle" | "sending" | "sent" | "error";

const spaces = [
  "Driveway",
  "Garage or carport",
  "Office or business lot",
  "Street parking",
  "Apartment or condo garage",
];

const timings = [
  "As soon as you can",
  "This week",
  "Next week",
  "Flexible, I have a date in mind",
];

const accessOptions = [
  "Yes, an outdoor spigot and outlet are available",
  "Not sure, let's check",
  "No, I don't think I have those",
];

const MAX_PHOTOS = 3;
const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 0.72;

/**
 * Downscales an image in the browser before it ever leaves the device.
 * A phone photo can run 3 to 8 MB, and Vercel's serverless functions cap
 * the incoming request body well below what three or four of those would
 * add up to. Compressing client-side keeps a normal phone photo under a few
 * hundred KB, comfortably inside that limit.
 *
 * EXIF orientation is not corrected here. For a quoting photo that is a
 * cosmetic issue, not a functional one, and not worth the extra complexity.
 * Returns null on any failure so a bad file never blocks the rest of the
 * request from submitting.
 */
async function compressImage(file: File): Promise<File | null> {
  if (!file.type.startsWith("image/")) return null;

  try {
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });

    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new window.Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("Could not decode image"));
      el.src = dataUrl;
    });

    const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.width * scale));
    canvas.height = Math.max(1, Math.round(img.height * scale));

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY),
    );
    if (!blob) return null;

    const base = file.name.replace(/\.[^.]+$/, "") || "photo";
    return new File([blob], `${base}.jpg`, { type: "image/jpeg" });
  } catch {
    return null;
  }
}

export function RequestForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [compressing, setCompressing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function onPhotosChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []).slice(0, MAX_PHOTOS);
    if (!files.length) return;

    setCompressing(true);
    const compressed = await Promise.all(files.map(compressImage));
    setCompressing(false);
    setPhotos(compressed.filter((f): f is File => f !== null));
  }

  function removePhoto(i: number) {
    setPhotos((prev) => prev.filter((_, idx) => idx !== i));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Text fields ride the native FormData. The file input itself carries no
    // name, so it is never included here; the compressed photos below are
    // appended in its place.
    const data = new FormData(form);
    for (const photo of photos) data.append("photos", photo, photo.name);

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "We could not send that request.");
      }

      setStatus("sent");
      form.reset();
      setPhotos([]);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "We could not send that request.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-ink-2 p-8 md:p-12">
        <p className="mark">Request received</p>
        <h3 className="rank-section mt-4 text-bone">
          We&rsquo;ll come back to you with a scope and a window.
        </h3>
        <p className="prose-body mt-5">
          Most requests get a reply the same working day. If you need an answer
          sooner than that, calling is always faster than waiting on a form.
        </p>
        <a href={site.phone.href} className="btn mt-7">
          <PhoneGlyph />
          {site.phone.display}
        </a>
      </div>
    );
  }

  const busy = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-5">
      {/* Honeypot: real people never see it, bots fill it in. */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Name *</span>
          <input
            className="control"
            name="name"
            required
            autoComplete="name"
            placeholder="Jordan Reyes"
          />
        </label>

        <label className="field">
          <span>Phone *</span>
          <input
            className="control"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="(360) 555-0142"
          />
        </label>
      </div>

      <label className="field">
        <span>Email</span>
        <input
          className="control"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Vehicle or furniture *</span>
          <input
            className="control"
            name="vehicle"
            required
            placeholder="2019 Audi Q5, black, or a gray fabric sectional"
          />
        </label>

        <label className="field">
          <span>Size</span>
          <select
            className="control"
            name="size"
            defaultValue={vehicleClasses[0].label}
          >
            {vehicleClasses.map((vc) => (
              <option key={vc.slug} value={vc.label}>
                {vc.label}
              </option>
            ))}
            <option value="Furniture, not a vehicle">
              Furniture, not a vehicle
            </option>
          </select>
        </label>
      </div>

      <label className="field">
        <span>What are you after? *</span>
        <select
          className="control"
          name="service"
          required
          defaultValue={defaultService ?? ""}
        >
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet, tell me what it needs</option>
        </select>
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>City *</span>
          <select className="control" name="city" required defaultValue="">
            <option value="" disabled>
              Choose a city
            </option>
            {areas.map((a) => (
              <option key={a.slug} value={a.label}>
                {a.label}
              </option>
            ))}
            <option value="Somewhere else nearby">Somewhere else nearby</option>
          </select>
        </label>

        <label className="field">
          <span>Where will it be parked?</span>
          <select className="control" name="space" defaultValue={spaces[0]}>
            {spaces.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        <span>Water &amp; power access *</span>
        <select
          className="control"
          name="access"
          required
          defaultValue={accessOptions[0]}
        >
          {accessOptions.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <p className="mt-2 text-xs text-muted">
          We need an outdoor water spigot and a power outlet at the address.
          If you are not sure, pick &ldquo;let&rsquo;s check&rdquo; and we
          will help you figure it out.
        </p>
      </label>

      <label className="field">
        <span>Timing</span>
        <select className="control" name="timing" defaultValue={timings[0]}>
          {timings.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Anything we should know</span>
        <textarea
          className="control"
          name="notes"
          rows={4}
          placeholder="Dog in the car, coffee spill on the passenger carpet, a sofa with a wine stain. The more you tell us, the more accurate the quote."
        />
      </label>

      <div className="field">
        <span>Photos (optional, but helps a lot)</span>
        <input
          ref={fileInputRef}
          className="control"
          type="file"
          accept="image/*"
          multiple
          onChange={onPhotosChange}
        />
        <p className="mt-2 text-xs text-muted">
          {compressing
            ? "Preparing your photos…"
            : `Up to ${MAX_PHOTOS} photos. We resize them automatically before sending.`}
        </p>

        {photos.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {photos.map((p, i) => (
              <li
                key={p.name + i}
                className="flex items-center justify-between gap-3 text-sm text-silver"
              >
                <span className="truncate">{p.name}</span>
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="shrink-0 text-xs uppercase tracking-wide text-muted transition-colors hover:text-carmine-lt"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === "error" && error && (
        <p
          role="alert"
          className="border border-carmine-lt/40 bg-carmine/10 px-4 py-3 text-sm text-bone"
        >
          {error} You can always reach us on{" "}
          <a href={site.phone.href} className="link-inline">
            {site.phone.display}
          </a>
          .
        </p>
      )}

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn" disabled={busy || compressing}>
          {busy ? "Sending…" : "Send the request"}
          {!busy && <Arrow />}
        </button>
        <p className="text-sm text-muted">
          Or call{" "}
          <a href={site.phone.href} className="link-inline">
            {site.phone.display}
          </a>
          . Usually faster.
        </p>
      </div>
    </form>
  );
}
