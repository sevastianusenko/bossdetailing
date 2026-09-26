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
  "access",
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
  access: "Water & power",
  timing: "Timing",
  notes: "Notes",
};

// The client compresses images before upload, but these are the hard limits
// enforced here regardless. Vercel's serverless functions cap the incoming
// request body well under what several full-size phone photos would add up
// to, so this also protects against a client that skipped compression.
const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 2 * 1024 * 1024; // 2 MB per photo
const MAX_TOTAL_ATTACHMENT_BYTES = 4 * 1024 * 1024; // 4 MB combined

const clean = (v: FormDataEntryValue | null | undefined) =>
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

type Attachment = { filename: string; content: string };

async function readAttachments(
  form: FormData,
): Promise<{ attachments: Attachment[]; dropped: number }> {
  const files = form
    .getAll("photos")
    .filter((f): f is File => f instanceof File && f.size > 0);

  const attachments: Attachment[] = [];
  let dropped = 0;
  let total = 0;

  for (const file of files) {
    if (attachments.length >= MAX_PHOTOS) {
      dropped++;
      continue;
    }
    if (!file.type.startsWith("image/") || file.size > MAX_PHOTO_BYTES) {
      dropped++;
      continue;
    }
    if (total + file.size > MAX_TOTAL_ATTACHMENT_BYTES) {
      dropped++;
      continue;
    }

    const buf = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: file.name || `photo-${attachments.length + 1}.jpg`,
      content: buf.toString("base64"),
    });
    total += file.size;
  }

  return { attachments, dropped };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let values: Record<(typeof FIELDS)[number], string>;
  let attachments: Attachment[] = [];
  let droppedPhotos = 0;

  if (contentType.includes("multipart/form-data")) {
    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return NextResponse.json({ error: "Malformed request." }, { status: 400 });
    }

    // Honeypot: a filled "company" field means a bot. Answer 200 so it stops.
    if (clean(form.get("company"))) {
      return NextResponse.json({ ok: true });
    }

    values = Object.fromEntries(
      FIELDS.map((f) => [f, clean(form.get(f))]),
    ) as Record<(typeof FIELDS)[number], string>;

    const result = await readAttachments(form);
    attachments = result.attachments;
    droppedPhotos = result.dropped;
  } else {
    let payload: Record<string, unknown>;
    try {
      payload = (await request.json()) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Malformed request." }, { status: 400 });
    }

    if (typeof payload.company === "string" && payload.company.trim()) {
      return NextResponse.json({ ok: true });
    }

    values = Object.fromEntries(
      FIELDS.map((f) => [
        f,
        typeof payload[f] === "string" ? (payload[f] as string).trim().slice(0, 2000) : "",
      ]),
    ) as Record<(typeof FIELDS)[number], string>;
  }

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

  const photoNote =
    attachments.length > 0
      ? `<p style="margin:16px 0 0;font:13px/1.5 -apple-system,sans-serif;color:#666">${attachments.length} photo(s) attached.${droppedPhotos ? ` ${droppedPhotos} more were sent but too large to include.` : ""}</p>`
      : droppedPhotos
        ? `<p style="margin:16px 0 0;font:13px/1.5 -apple-system,sans-serif;color:#666">${droppedPhotos} photo(s) were submitted but too large to attach. Ask the customer to text them.</p>`
        : "";

  const html = `<div style="max-width:560px"><h2 style="font:600 18px/1.3 -apple-system,sans-serif;margin:0 0 16px">New detailing request from ${escapeHtml(values.city)}</h2><table cellpadding="0" cellspacing="0">${rows}</table>${photoNote}</div>`;

  const text = [
    ...FIELDS.filter((f) => values[f]).map((f) => `${LABELS[f]}: ${values[f]}`),
    attachments.length ? `Photos attached: ${attachments.length}` : "",
    droppedPhotos ? `Photos too large to attach: ${droppedPhotos}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const from =
    process.env.REQUEST_FROM ?? `Boss Auto Detailing <requests@${site.domain}>`;
  const subject = `Detailing request from ${values.name}, ${values.city} (${values.service})`;

  async function send(withAttachments: boolean) {
    return fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email || undefined,
        subject,
        html,
        text,
        attachments: withAttachments && attachments.length ? attachments : undefined,
      }),
    });
  }

  try {
    let res = await send(true);

    // A payload that is too large is the one failure worth retrying without
    // the photos rather than losing the lead entirely.
    if (!res.ok && attachments.length) {
      const detail = await res.text().catch(() => "");
      console.warn(
        "[request] Resend rejected the message with attachments, retrying without them:",
        res.status,
        detail,
      );
      res = await send(false);
    }

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

  return NextResponse.json({ ok: true, photosAttached: attachments.length });
}
