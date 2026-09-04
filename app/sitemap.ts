import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/packages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areas.map((a) => ({
      url: `${site.url}/service-areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.published),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
