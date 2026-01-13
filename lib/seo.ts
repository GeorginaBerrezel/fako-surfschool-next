import type { Metadata } from "next";
import { site } from "./site";

const base = process.env.NEXT_PUBLIC_SITE_URL || site.url || "http://localhost:3000";

/**
 * Construit les OpeningHoursSpecification à partir de site.openingHours
 * (structure avec `days: string[]` et `ranges: { opens, closes }[]`).
 */
function openingHoursSpecification() {
  return site.openingHours.flatMap((d) => {
    const days = d.days && d.days.length > 0 ? d.days : ["Monday"];

    if (!d.ranges || d.ranges.length === 0) {
      // Jour(s) fermé(s)
      return days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens: "00:00",
        closes: "00:00",
      }));
    }

    // Jour(s) avec une ou plusieurs plages horaires
    return days.flatMap((day) =>
      d.ranges.map((r) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens: r.opens,
        closes: r.closes,
      }))
    );
  });
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: "Cuisine de saison, pizzas et plats du jour à Ayent.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: base,
    siteName: site.name,
    title: site.name,
    description: "Cuisine de saison, pizzas et plats du jour à Ayent.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  url: site.url,
  telephone: site.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    postalCode: site.address.postalCode,
    addressLocality: site.address.addressLocality,
    addressCountry: site.address.addressCountry,
  },
  image: [
    `${base}/images/cover-restaurant-ayent.jpg`,
    `${base}/images/logo.png`,
  ],
  servesCuisine: ["Française", "Pizzas", "Cuisine de saison"],
  priceRange: "CHF 20-60",
  openingHoursSpecification: openingHoursSpecification(),
  sameAs: site.sameAs,
};
