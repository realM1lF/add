import type { MetadataRoute } from "next";
import { topics } from "@/lib/data/topics";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adhsleben.org";

  const staticRoutes = [
    "/",
    "/screener",
    "/result",
    "/ergebnis",
    "/fragebogen",
    "/themen",
    "/strategien",
    "/quellen",
    "/about",
    "/impressum",
    "/datenschutz",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const topicRoutes = topics.map((topic) => ({
    url: `${baseUrl}/themen/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...topicRoutes];
}
