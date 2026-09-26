/**
 * End-to-end check of the request form: posts a clearly marked test lead to
 * a running server and explains what the response means.
 *
 *   node scripts/test-request-form.mjs [baseUrl]
 *
 * A 200 means Resend accepted the message and it should be in the inbox.
 * A 503 means the env vars are missing. A 502 means Resend rejected it, and
 * the reason is printed by the server, usually an unverified sending domain
 * or a recipient the sandbox is not allowed to mail.
 */
const base = process.argv[2] ?? "http://localhost:3000";

const payload = {
  name: "TEST, please ignore",
  phone: "(360) 555-0142",
  email: "no-reply@example.com",
  vehicle: "2019 Ford Explorer, white",
  size: "Crossover & Mid SUV",
  service: "Interior Detailing",
  city: "Vancouver, WA",
  space: "Driveway",
  timing: "This week",
  notes:
    "This is an automated deliverability test sent while wiring up the form. No action needed.",
};

const res = await fetch(`${base}/api/request`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

const body = await res.json().catch(() => ({}));

console.log(`POST ${base}/api/request -> ${res.status}`);
console.log(JSON.stringify(body, null, 2));
console.log("");

if (res.status === 200) {
  console.log("DELIVERED: Resend accepted it. Check the inbox.");
} else if (res.status === 503) {
  console.log(
    "NOT CONFIGURED: RESEND_API_KEY or REQUEST_INBOX is missing from the environment.",
  );
} else if (res.status === 502) {
  console.log(
    "REJECTED BY RESEND: read the server log line starting [request].",
    "\nUsually the sending domain is not verified, or the sandbox sender is",
    "\nbeing used for a recipient other than the account owner.",
  );
} else if (res.status === 422) {
  console.log("VALIDATION: the payload is missing a required field.");
}

process.exit(res.status === 200 ? 0 : 1);
