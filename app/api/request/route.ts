import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const FIELDS = [
  "name",
  "phone",
  "email",
  "vehicle",
  "size",
  "service",
  "city",
  "space",
  "timing",
  "notes",
] as const;

const LABELS: Record<(typeof FIELDS)[number], string> = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  vehicle: "Vehicle",
  size: "Size",
  service: "Service",
  city: "City",
  space: "Parked at",
  timing: "Timing",
  notes: "Notes",
};

const clean = (v: unknown) =>
  typeof v === "string" ? v.trim().slice(0, 2000) : "";

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]!,
  );

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: a filled "company" field means a bot. Answer 200 so it stops.
  if (clean(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const values = Object.fromEntries(
    FIELDS.map((f) => [f, clean(payload[f])]),
  ) as Record<(typeof FIELDS)[number], string>;

  const missing = (["name", "phone", "vehicle", "service", "city"] as const).filter(
    (f) => !values[f],
  );

  if (missing.length) {
    return NextResponse.json(
      {
        error: `Please fill in: ${missing.map((f) => LABELS[f].toLowerCase()).join(", ")}.`,
      },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.REQUEST_INBOX;

  if (!apiKey || !to) {
    // Not configured yet. Say so honestly rather than pretending it sent.
    console.warn(
      "[request] RESEND_API_KEY or REQUEST_INBOX is not set. Request was not delivered.",
      values,
    );
    return NextResponse.json(
      {
        error: `The request form is not connected to an inbox yet, so this did not send. Please call ${site.phone.display}.`,
      },
      { status: 503 },
    );
  }

  const rows = FIELDS.filter((f) => values[f])
    .map(
      (f) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#666;font:12px/1.4 -apple-system,sans-serif;text-transform:uppercase;letter-spacing:.08em;vertical-align:top">${LABELS[f]}</td><td style="padding:6px 0;font:14px/1.5 -apple-system,sans-serif;color:#111">${escapeHtml(values[f]).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const html = `<div style="max-width:560px"><h2 style="font:600 18px/1.3 -apple-system,sans-serif;margin:0 0 16px">New detailing request from ${escapeHtml(values.city)}</h2><table cellpadding="0" cellspacing="0">${rows}</table></div>`;

  const text = FIELDS.filter((f) => values[f])
    .map((f) => `${LABELS[f]}: ${values[f]}`)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.REQUEST_FROM ??
          `Boss Auto Detailing <requests@${site.domain}>`,
        to: [to],
        reply_to: values.email || undefined,
        subject: `Detailing request from ${values.name}, ${values.city} (${values.service})`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[request] Resend rejected the message:", res.status, detail);
      return NextResponse.json(
        {
          error: `We could not send that just now. Please call ${site.phone.display}.`,
        },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[request] Delivery failed:", err);
    return NextResponse.json(
      {
        error: `We could not send that just now. Please call ${site.phone.display}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
