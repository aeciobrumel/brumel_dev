import type { MetadataRoute } from "next";
import { SITE_URL } from "@/consts/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 1,
      url: `${SITE_URL}/`,
    },
    {
      changeFrequency: "yearly",
      lastModified,
      priority: 0.3,
      url: `${SITE_URL}/politica-privacidade/`,
    },
    {
      changeFrequency: "yearly",
      lastModified,
      priority: 0.3,
      url: `${SITE_URL}/cola-do-dev/`,
    },
  ];
}
