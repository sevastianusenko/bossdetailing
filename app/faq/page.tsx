import type { Metadata } from "next";
import { faqs } from "@/lib/faq";
import { PageHero } from "@/components/PageHero";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mobile Detailing FAQ for Vancouver WA & Portland OR",
  description:
    "Do I need to provide water and power? Do you work in the rain? Do you clean furniture too? Straight answers about mobile detailing in the Portland metro.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        mark="Questions"
        title="Straight answers, including the unhelpful ones."
        lede="Some of these say no. We would rather tell you what detailing cannot do before you book than explain it while you are standing next to the car."
        image="/images/faq-hero.jpg"
        imageAlt="Detailer working a polisher across a panel in a workshop"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap-tight">
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Still not answered?"
        body="Call and ask. We would rather spend five minutes on the phone than have you book the wrong thing."
      />
    </>
  );
}
