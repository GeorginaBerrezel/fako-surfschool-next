'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';

function swapLocale(pathname: string, nextLocale: 'fr' | 'en') {
  // pathname attendu: /fr/... ou /en/...
  // fallback: renvoie /{nextLocale}
  if (!pathname) return `/${nextLocale}`;

  const parts = pathname.split('/');
  // parts[0] = '' ; parts[1] = locale
  if (parts.length >= 2 && (parts[1] === 'fr' || parts[1] === 'en')) {
    parts[1] = nextLocale;
    return parts.join('/') || `/${nextLocale}`;
  }

  return `/${nextLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
}

export default function Header({locale}: {locale: 'fr' | 'en'}) {
  const t = useTranslations('nav');
  const pathname = usePathname() || `/${locale}`;
  const base = `/${locale}` as const;

  const frHref = swapLocale(pathname, 'fr');
  const enHref = swapLocale(pathname, 'en');

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
        <Link href={base} aria-label={t('homeAria')}>
          {t('brand')}
        </Link>

        <nav aria-label={t('aria')} className="site-nav-desktop" style={{display:'flex', alignItems:'center', gap:'1rem'}}>
          <ul>
            <li><a href={`${base}/#cours`}>{t('courses')}</a></li>
            <li><a href={`${base}/#tarifs`}>{t('pricing')}</a></li>
            <li><a href={`${base}/#spot`}>{t('spot')}</a></li>
            <li><Link href={`${base}/contact`}>{t('contact')}</Link></li>
          </ul>

          {/* Switch langue */}
          <div aria-label="Language switch" style={{display:'flex', gap:'.5rem', alignItems:'center'}}>
            <Link href={frHref} aria-current={locale === 'fr' ? 'page' : undefined}>FR</Link>
            <span aria-hidden="true">|</span>
            <Link href={enHref} aria-current={locale === 'en' ? 'page' : undefined}>EN</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
