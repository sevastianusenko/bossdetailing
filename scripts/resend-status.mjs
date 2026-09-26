/**
 * Asks Resend directly what is wrong, instead of guessing from a 502.
 *
 *   node --env-file=.env.local scripts/resend-status.mjs          # status only
 *   node --env-file=.env.local scripts/resend-status.mjs --send   # also send one test
 *
 * Prints the account's domains and their verification state, then optionally
 * attempts one real send and prints Resend's verbatim rejection. The API key
 * is read from the environment and never printed.
 */
const key = process.env.RESEND_API_KEY;
const inbox = process.env.REQUEST_INBOX;
const from =
  process.env.REQUEST_FROM ??
  "Boss Auto Detailing <requests@autodetailingwa.com>";

if (!key) {
  console.error("RESEND_API_KEY is not set. Paste it into .env.local.");
  process.exit(1);
}

console.log(`key:   ${key.slice(0, 3)}... (${key.length} chars)`);
console.log(`from:  ${from}`);
console.log(`to:    ${inbox ?? "(REQUEST_INBOX not set)"}`);
console.log("");

/* ── Which domains does this account have, and are they verified? ───────── */
const domainsRes = await fetch("https://api.resend.com/domains", {
  headers: { Authorization: `Bearer ${key}` },
});

if (!domainsRes.ok) {
  const body = await domainsRes.text();
  console.error(`Resend refused the key: ${domainsRes.status}`);
  console.error(body);
  console.error(
    "\nA 401 means the key is wrong, revoked, or from a different account.",
  );
  process.exit(1);
}

const domains = await domainsRes.json();
const list = domains.data ?? [];

if (!list.length) {
  console.log("DOMAINS: none on this account.");
  console.log(
    "The DNS records exist on autodetailingwa.com, so they were probably",
    "\nadded under a different Resend account than this key belongs to.",
  );
} else {
  console.log("DOMAINS:");
  for (const d of list) {
    console.log(`  ${d.name}  status=${d.status}  region=${d.region}`);
  }
}
console.log("");

/* ── Optionally prove it end to end ────────────────────────────────────── */
if (!process.argv.includes("--send")) {
  console.log("Run again with --send to attempt one real test email.");
  process.exit(0);
}

if (!inbox) {
  console.error("REQUEST_INBOX is not set, nothing to send to.");
  process.exit(1);
}

const sendRes = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from,
    to: [inbox],
    subject: "TEST, please ignore: Boss Auto Detailing form check",
    text: "Automated deliverability test while wiring up the request form. No action needed.",
  }),
});

const sendBody = await sendRes.json().catch(() => ({}));
console.log(`SEND -> ${sendRes.status}`);
console.log(JSON.stringify(sendBody, null, 2));

if (sendRes.ok) {
  console.log("\nAccepted. Check the inbox, including Spam and Promotions.");
} else {
  console.log("\nRejected. The message above is Resend's own wording.");
}
