'use client';

import {Link, usePathname} from '@/i18n/navigation';

export default function LocaleSwitch() {
  const pathname = usePathname(); // pathname "interne" (sans prefix locale) :contentReference[oaicite:2]{index=2}

  return (
    <div className="lang-switch" aria-label="Language switch">
      <Link href={pathname as any} locale="fr">FR</Link>
      <Link href={pathname as any} locale="en">EN</Link>
    </div>
  );
}
