import type { Post } from "./post-types";
import { pricingPosts } from "@/content/posts/pricing";
import { paintPosts } from "@/content/posts/paint";
import { carePosts } from "@/content/posts/care";

export type { Post, PostSection } from "./post-types";

/** Newest first. Ties keep the order the content files declare. */
export const posts: Post[] = [...pricingPosts, ...paintPosts, ...carePosts].sort(
  (a, b) => b.published.localeCompare(a.published),
);

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const categories = Array.from(new Set(posts.map((p) => p.category)));

/** Rough reading time from the post body, at 220 words per minute. */
export function readingMinutes(post: Post): number {
  const words = post.sections
    .flatMap((s) => [...s.p, ...(s.list ?? []), s.note ?? ""])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(2, Math.round(words / 220));
}

export function formatPostDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Same category first, then anything else, so a reader always has three
 * places to go next even in a thin category.
 */
export function relatedPosts(post: Post, count = 3): Post[] {
  const others = posts.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, count);
}
