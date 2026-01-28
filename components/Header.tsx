'use client';

import {useEffect, useId, useState} from 'react';
import {Link, usePathname} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

export default function Header({locale}: {locale: 'fr' | 'en'}) {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const dialogId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header" role="banner">
      <a className="skip-link" href="#main">{t('skip')}</a>

      <div className="container header-inner">
        {/* Gauche: langue (desktop + mobile) */}
        <div className="header-actions" aria-label="Header actions">
          <div className="lang-switch" aria-label="Language switch">
            <Link href={pathname} locale="fr" aria-current={locale === 'fr' ? 'page' : undefined}>FR</Link>
            <span aria-hidden="true">|</span>
            <Link href={pathname} locale="en" aria-current={locale === 'en' ? 'page' : undefined}>EN</Link>
          </div>
        </div>

        {/* Centre: logo */}
        <Link href="/" aria-label={t('homeAria')} className="header-brand" onClick={close}>
          <img src="/logo-fako-surfschool.png" alt={t('brand')} />
        </Link>

        {/* Droite: nav desktop (mobile: cachée via CSS) */}
        <nav aria-label={t('aria')} className="site-nav-desktop">
          <ul>
            <li><a href={`/${locale}/#cours`}>{t('courses')}</a></li>
            <li><a href={`/${locale}/#tarifs`}>{t('pricing')}</a></li>
            <li><a href={`/${locale}/#spot`}>{t('spot')}</a></li>
            <li><Link href="/contact">{t('contact')}</Link></li>
          </ul>
        </nav>

        {/* Droite: burger (mobile/tablette via CSS) */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Open menu"
          aria-controls={dialogId}
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div className="nav-overlay" role="presentation" onClick={close}>
          <nav
            id={dialogId}
            className="site-nav-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="nav-toggle nav-toggle-close"
              aria-label="Close menu"
              onClick={close}
            >
              ×
            </button>

            <div className="nav-mobile-body">
              <ul>
                <li><a href={`/${locale}/#cours`} onClick={close}>{t('courses')}</a></li>
                <li><a href={`/${locale}/#tarifs`} onClick={close}>{t('pricing')}</a></li>
                <li><a href={`/${locale}/#spot`} onClick={close}>{t('spot')}</a></li>
                <li><Link href="/contact" onClick={close}>{t('contact')}</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
