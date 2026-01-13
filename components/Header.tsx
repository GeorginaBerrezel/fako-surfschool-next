'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useMemo} from 'react';

function getLocaleFromPathname(pathname: string): 'fr' | 'en' {
  const seg = pathname.split('/').filter(Boolean)[0];
  return seg === 'en' ? 'en' : 'fr';
}

export default function Header() {
  const pathname = usePathname() || '/fr';
  const locale = useMemo(() => getLocaleFromPathname(pathname), [pathname]);

  const base = `/${locale}` as const;

  return (
    <header className="header" role="banner">
      <a className="skip-link" href="#main">Aller au contenu</a>

      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'.75rem'}}>
        <Link href={base} aria-label="Accueil">
          FAKO Surf School
        </Link>

        <nav aria-label="Navigation principale" className="site-nav-desktop">
          <ul>
            <li><a href={`${base}/#cours`}>Cours</a></li>
            <li><a href={`${base}/#tarifs`}>Tarifs</a></li>
            <li><a href={`${base}/#spot`}>Spot</a></li>
            <li><Link href={`${base}/contact`}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
