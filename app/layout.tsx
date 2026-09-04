import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCall } from "@/components/StickyCall";
import { PromoDialog } from "@/components/PromoDialog";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

/**
 * Direction contract. Kept as an HTML comment in the emitted markup so the
 * commitment survives the production build and can be audited against the
 * render. See PRODUCT.md for the product record it serves.
 */
const DIRECTION_CONTRACT = `<!--
  THESIS: This site sells a shop, not a car wash. The offer is that a
  controlled, measurable process arrives at your address. It refuses the
  local-contractor template of stacked icon cards and badge rows.
  OWN-WORLD: Near-black graphite ground, bone and cool-silver type, one
  carmine action colour, hairline rules, compressed Archivo display against
  Public Sans text, label/value spec rows in place of cards, and full-bleed
  photography as the only decoration.
  STORY: The visitor learns the rig is self-contained, sees corrected paint
  proved rather than claimed, self-qualifies on a tier, then calls or files
  a work order.
  FIRST VIEWPORT: Full-bleed dark vehicle photograph with a clear-coat sweep
  crossing it; headline at hero rank on the lower left; call and quote
  actions side by side; a hairline fact strip pinned to the bottom edge.
  FORM: Category canon, taken by the user over three dealt worlds.
  Seed key b43e2bd3. Staging: the canon's own vertical narrative.
-->`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Boss Auto Detailing | Mobile Detailing in Vancouver, WA & Portland, OR",
    template: "%s | Boss Auto Detailing",
  },
  description:
    "Self-contained mobile auto detailing across Vancouver WA and Portland OR. Interior extraction, hand wash, paint correction and ceramic coating at your home or office. Call (509) 224-8299.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Boss Auto Detailing | Mobile Detailing, Vancouver WA & Portland OR",
    description:
      "We bring the shop to your driveway. Interior extraction, decontamination, paint correction and ceramic coating across both sides of the Columbia.",
    images: [{ url: "/images/hero.jpg", width: 1600, height: 900, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boss Auto Detailing | Vancouver WA & Portland OR",
    description:
      "Self-contained mobile detailing. Paint correction and ceramic coating at your address.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${publicSans.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-carmine focus:px-4 focus:py-3 focus:font-display focus:text-sm focus:uppercase focus:tracking-widest focus:text-bone"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCall />
        <PromoDialog />

        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
