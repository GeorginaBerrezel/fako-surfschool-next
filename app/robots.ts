import type { MetadataRoute } from "next";

function siteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) throw new Error("NEXT_PUBLIC_SITE_URL is required");
  return url.replace(/\/+$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
