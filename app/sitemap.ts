import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://latelierdesgourmets.ch/", lastModified: new Date() },
    { url: "https://latelierdesgourmets.ch/menu", lastModified: new Date() },
    { url: "https://latelierdesgourmets.ch/histoire", lastModified: new Date() },
    { url: "https://latelierdesgourmets.ch/avis", lastModified: new Date() },
    { url: "https://latelierdesgourmets.ch/contact", lastModified: new Date() }
  ];
}
