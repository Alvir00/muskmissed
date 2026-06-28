import type { MetadataRoute } from "next";
import { getAllPredictions, predictionSlug } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const predictions = await getAllPredictions();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1, lastModified: new Date() },
    {
      url: `${SITE_URL}/add`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: new Date(),
    },
  ];

  const predictionRoutes: MetadataRoute.Sitemap = predictions.map((p) => ({
    url: `${SITE_URL}/p/${predictionSlug(p)}`,
    lastModified: p.createdAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...predictionRoutes];
}
