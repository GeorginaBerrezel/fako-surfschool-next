'use client';

import {Link, usePathname} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

export default function Header({locale}: {locale: 'fr' | 'en'}) {
  const t = useTranslations('nav');
  const pathname = usePathname();

  return (
    <header className="header" role="banner">
      <a className="skip-link" href="#main">{t('skip')}</a>

      <div
        className="container"
        style={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          gap:'.75rem'
        }}
      >
        {/* Home: next-intl Link garde le locale courant */}
        <Link href="/" aria-label={t('homeAria')}>
          {t('brand')}
        </Link>

        <nav aria-label={t('aria')} className="site-nav-desktop" style={{display:'flex', alignItems:'center', gap:'1rem'}}>
          <ul>
            {/* ancres -> on force /{locale}/#... pour fonctionner depuis /contact aussi */}
            <li><a href={`/${locale}/#cours`}>{t('courses')}</a></li>
            <li><a href={`/${locale}/#tarifs`}>{t('pricing')}</a></li>
            <li><a href={`/${locale}/#spot`}>{t('spot')}</a></li>
            <li><Link href="/contact">{t('contact')}</Link></li>
          </ul>

          {/* Switch langue (sans strings bricolées) */}
          <div aria-label="Language switch" style={{display:'flex', gap:'.5rem', alignItems:'center'}}>
            <Link href={pathname} locale="fr" aria-current={locale === 'fr' ? 'page' : undefined}>FR</Link>
            <span aria-hidden="true">|</span>
            <Link href={pathname} locale="en" aria-current={locale === 'en' ? 'page' : undefined}>EN</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
