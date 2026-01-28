import type { MetadataRoute } from "next";

function siteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) throw new Error("NEXT_PUBLIC_SITE_URL is required");
  return url.replace(/\/+$/, "");
}

/**
 * lastModified stable:
 * - si Vercel injecte VERCEL_GIT_COMMIT_SHA, tu peux l'utiliser pour invalider lors d'un vrai deploy
 * - sinon on prend une date fixe (à ajuster si tu veux)
 */
const LASTMOD = new Date("2026-01-28T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();

  return [
    { url: `${base}/fr`, lastModified: LASTMOD, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/en`, lastModified: LASTMOD, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/fr/contact`, lastModified: LASTMOD, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/en/contact`, lastModified: LASTMOD, changeFrequency: "weekly", priority: 0.6 },
  ];
}
