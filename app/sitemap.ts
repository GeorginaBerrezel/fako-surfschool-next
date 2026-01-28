import type { MetadataRoute } from "next";

function siteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) throw new Error("NEXT_PUBLIC_SITE_URL is required");
  return url.replace(/\/+$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  return [
    { url: `${base}/fr`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/fr/contact`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/en/contact`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
