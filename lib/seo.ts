import { site } from "./site";

function baseUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/+$/, "");
  return "http://localhost:3000";
}

export function absoluteUrl(path: string) {
  const base = baseUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

type OpeningRange = { opens: string; closes: string };
type OpeningDay = { days: string[]; ranges: OpeningRange[] };

export function openingHoursSpecification() {
  const days = ((site.openingHours ?? []) as unknown as OpeningDay[]).flatMap((d) =>
    (d.ranges ?? []).map((r) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: d.days,
      opens: r.opens,
      closes: r.closes,
    }))
  );

  return days;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    telephone: site.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address?.streetAddress,
      postalCode: site.address?.postalCode,
      addressLocality: site.address?.addressLocality,
      addressCountry: site.address?.addressCountry,
    },
    url: absoluteUrl("/"),
  };
}
