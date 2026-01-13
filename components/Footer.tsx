import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {site} from '@/lib/site';

type OpeningRange = {opens: string; closes: string;};

function isClosed(ranges: OpeningRange[]): boolean {
  return !ranges || ranges.length === 0;
}

export default async function Footer({locale}: {locale: 'fr' | 'en'}) {
  const t = await getTranslations({locale, namespace: 'footer'});
  const base = `/${locale}` as const;

  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="grid">
          {/* Address */}
          <section aria-labelledby="loc">
            <h2 id="loc">{t('addressTitle')}</h2>
            <address>
              {site.address.streetAddress} – {site.address.postalCode}{' '}
              {site.address.addressLocality}, {site.address.addressCountry}
              <br />
              <a href={`tel:${site.telephone.replace(/\s/g, '')}`}>
                {site.telephone}
              </a>
            </address>
            <p>
              <a
                className="btn"
                href={site.googleMapsLink ?? 'https://www.google.com/maps'}
                target="_blank"
                rel="noopener"
              >
                {t('directions')}
              </a>
            </p>
          </section>

          {/* Links */}
          <section aria-labelledby="links">
            <h2 id="links">{t('linksTitle')}</h2>
            <ul>
              <li><Link href={base}>{t('home')}</Link></li>
              <li><a href={`${base}/#cours`}>{t('courses')}</a></li>
              <li><a href={`${base}/#tarifs`}>{t('pricing')}</a></li>
              <li><a href={`${base}/#spot`}>{t('spot')}</a></li>
              <li><Link href={`${base}/contact`}>{t('contact')}</Link></li>
            </ul>
          </section>

          {/* Hours (minimal) */}
          <section aria-labelledby="hours">
            <h2 id="hours">{t('hoursTitle')}</h2>
            <ul className="hours-list" aria-describedby="hours-note">
              {(site.openingHours ?? []).map((d, idx) => (
                <li key={idx} className="hours-row">
                  <span className="hours-day">{t('hoursDefaultLabel', {index: idx + 1})}</span>
                  {isClosed(d.ranges) ? (
                    <span className="hours-slots">{t('closed')}</span>
                  ) : (
                    <span className="hours-slots">
                      {d.ranges.map((r, i) => (
                        <span key={`${idx}-${r.opens}-${r.closes}-${i}`} className="hours-slot">
                          <time dateTime={r.opens}>{r.opens}</time>–<time dateTime={r.closes}>{r.closes}</time>
                          {i < d.ranges.length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p id="hours-note" className="hours-note">{t('hoursNote')}</p>
          </section>
        </div>

        <p>
          <small>&copy; {new Date().getFullYear()} {site.name}</small>
        </p>
      </div>
    </footer>
  );
}
