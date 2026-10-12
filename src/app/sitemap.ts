import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ayatiworks.com/performance-marketing-agency",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.ayatiworks.com/ecommerce-growth-agency",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
  
  ];
}
