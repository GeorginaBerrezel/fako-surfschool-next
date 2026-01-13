import Link from "next/link";
import type { Route } from "next";
import { site } from "@/lib/site";

type OpeningRange = {
  opens: string;
  closes: string;
};

function isClosed(ranges: OpeningRange[]): boolean {
  return !ranges || ranges.length === 0;
}

const dayLabels: Record<string, string> = {
  Monday: "Lundi",
  Tuesday: "Mardi",
  Wednesday: "Mercredi",
  Thursday: "Jeudi",
  Friday: "Vendredi",
  Saturday: "Samedi",
  Sunday: "Dimanche",
};

const navLinks: { href: Route; label: string }[] = [
  { href: "/" as Route,        label: "Accueil" },
  { href: "/menu" as Route,    label: "Menu" },
  { href: "/histoire" as Route,label: "L’histoire" },
  { href: "/avis" as Route,    label: "Avis client" },
  { href: "/contact" as Route, label: "Contact" },
];

// Construction OpeningHoursSpecification pour JSON-LD à partir de site.openingHours
const openingHoursLd = site.openingHours.flatMap((d) => {
  const days = d.days && d.days.length > 0 ? d.days : ["Monday"];

  if (isClosed(d.ranges)) {
    return days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day}`,
      opens: "00:00",
      closes: "00:00",
    }));
  }

  return days.flatMap((day) =>
    d.ranges.map((r) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day}`,
      opens: r.opens,
      closes: r.closes,
    }))
  );
});

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="grid">
          {/* Adresse */}
          <section aria-labelledby="loc">
            <h2 id="loc">Adresse</h2>
            <address>
              {site.address.streetAddress} – {site.address.postalCode}{" "}
              {site.address.addressLocality}, {site.address.addressCountry}
              <br />
              <a href={`tel:${site.telephone.replace(/\s/g, "")}`}>
                {site.telephone}
              </a>
            </address>
            <p>
              <a
                className="btn"
                href="https://www.google.com/maps/search/?api=1&query=Route+de+Botyre+30%2C+1966+Ayent"
                target="_blank"
                rel="noopener"
              >
                Itinéraire
              </a>
            </p>
          </section>

          {/* Liens utiles */}
          <section aria-labelledby="liens">
            <h2 id="liens">Liens utiles</h2>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Horaires */}
          <section aria-labelledby="horaires">
            <h2 id="horaires">Horaires</h2>
            <ul className="hours-list" aria-describedby="hours-note">
              {site.openingHours.map((d, idx) => {
                const label =
                  d.days && d.days.length > 0
                    ? d.days
                        .map((en) => dayLabels[en] ?? en)
                        .join(", ")
                    : `Jour ${idx + 1}`;

                return (
                  <li key={d.days.join(",") || idx} className="hours-row">
                    <span className="hours-day">{label}</span>
                    {isClosed(d.ranges) ? (
                      <span className="hours-slots">Fermé</span>
                    ) : (
                      <span className="hours-slots">
                        {d.ranges.map((r, i) => (
                          <span
                            key={`${label}-${r.opens}-${r.closes}-${i}`}
                            className="hours-slot"
                          >
                            <time dateTime={r.opens}>{r.opens}</time>
                            {"–"}
                            <time dateTime={r.closes}>{r.closes}</time>
                            {i < d.ranges.length - 1 ? " · " : ""}
                          </span>
                        ))}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p id="hours-note" className="hours-note">
              Horaires susceptibles d’évoluer les jours fériés.
            </p>

            {/* JSON-LD pour SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Restaurant",
                  name: site.name,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: site.address.streetAddress,
                    postalCode: site.address.postalCode,
                    addressLocality: site.address.addressLocality,
                    addressCountry: site.address.addressCountry,
                  },
                  telephone: site.telephone,
                  openingHoursSpecification: openingHoursLd,
                }),
              }}
            />
          </section>
        </div>

        <p>
          <small>
            &copy; {new Date().getFullYear()} {site.name}
          </small>
        </p>
      </div>
    </footer>
  );
}
