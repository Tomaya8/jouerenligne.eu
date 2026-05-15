import type { MetadataRoute } from "next";
import { casinos } from "./data/casinos";
import { blogArticles } from "./data/articles";

export const dynamic = "force-static";

const BASE_URL = "https://jouerenligne.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/casino-en-ligne`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const casinoPages: MetadataRoute.Sitemap = casinos.map((c) => ({
    url: `${BASE_URL}/casino-en-ligne/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...casinoPages, ...blogPages];
}
