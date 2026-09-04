export type PostSection = {
  /** Section heading, rendered as an h2. */
  h: string;
  /** Paragraphs. `**bold**` is honoured, nothing else. */
  p: string[];
  /** Optional bullet list, rendered after the paragraphs. */
  list?: string[];
  /** Optional pull-out line, set apart from the body. */
  note?: string;
};

export type Post = {
  slug: string;
  title: string;
  /** Overrides the <title> when the H1 is too long for a SERP. */
  metaTitle?: string;
  description: string;
  /** ISO date. */
  published: string;
  category: "Pricing" | "Paint" | "Interior" | "Seasonal" | "Practical";
  excerpt: string;
  hero: string;
  heroAlt: string;
  sections: PostSection[];
  /** Service slugs this post should send a reader to. */
  services?: string[];
  /** Area slugs this post should send a reader to. */
  areas?: string[];
  faq?: { q: string; a: string }[];
};
