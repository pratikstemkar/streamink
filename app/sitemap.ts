import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://streamink.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://streamink.vercel.app/watch",
      lastModified: new Date(),
    },
    {
      url: "https://streamink.vercel.app/browse",
      lastModified: new Date(),
    },
  ];
}
