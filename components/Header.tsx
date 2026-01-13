'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {site} from '@/lib/site';
import {toWaNumber} from '@/lib/phone';

export default function Header() {
  const pathname = usePathname();
  const waHref = `https://wa.me/${toWaNumber(site.telephone)}`;

  // basePath = "/fr" ou "/en"
  const seg = pathname.split('/').filter(Boolean);
  const locale = seg[0] === 'en' ? 'en' : 'fr';
  const base = `/${locale}`;

  return (
    <header className="header" role="banner">
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'.75rem'}}>
        <Link href={base} aria-label="Accueil">
          {site.name}
        </Link>

        <nav aria-label="Navigation principale" style={{display:'flex', gap:'1rem', alignItems:'center'}}>
          <a href="#cours">Cours</a>
          <a href="#ecole">École</a>
          <a href="#location">Localisation</a>
          <a href={waHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
