'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Header({locale}: {locale: 'fr' | 'en'}) {
  const t = useTranslations('nav');
  const base = `/${locale}` as const;

  return (
    <header className="header" role="banner">
      <a className="skip-link" href="#main">{t('skip')}</a>

      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'.75rem'}}>
        <Link href={base} aria-label={t('homeAria')}>
          {t('brand')}
        </Link>

        <nav aria-label={t('aria')} className="site-nav-desktop">
          <ul>
            <li><a href={`${base}/#cours`}>{t('courses')}</a></li>
            <li><a href={`${base}/#tarifs`}>{t('pricing')}</a></li>
            <li><a href={`${base}/#spot`}>{t('spot')}</a></li>
            <li><Link href={`${base}/contact`}>{t('contact')}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
