"use client";

import { useState } from "react";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { sizeTiers } from "@/lib/packages";
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
  "Flexible — I have a date in mind",
];

export function RequestForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "We could not send that request.");
      }

      setStatus("sent");
      form.reset();
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
      {/* Honeypot — real people never see it, bots fill it in. */}
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
          <span>Vehicle *</span>
          <input
            className="control"
            name="vehicle"
            required
            placeholder="2019 Audi Q5, black"
          />
        </label>

        <label className="field">
          <span>Size</span>
          <select className="control" name="size" defaultValue={sizeTiers[0].label}>
            {sizeTiers.map((t) => (
              <option key={t.label} value={t.label}>
                {t.label}
              </option>
            ))}
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
          <option value="Not sure yet">Not sure yet — tell me what it needs</option>
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
          placeholder="Dog in the car, coffee spill on the passenger carpet, swirls under the streetlight — the more you tell us, the more accurate the quote."
        />
      </label>

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
        <button type="submit" className="btn" disabled={busy}>
          {busy ? "Sending…" : "Send the request"}
          {!busy && <Arrow />}
        </button>
        <p className="text-sm text-muted">
          Or call{" "}
          <a href={site.phone.href} className="link-inline">
            {site.phone.display}
          </a>{" "}
          — usually faster.
        </p>
      </div>
    </form>
  );
}
