'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Route } from "next";
import { site } from "@/lib/site";
import { toWaNumber } from "@/lib/phone";

const links: { href: Route; label: string }[] = [
  { href: "/" as Route, label: "Accueil" },
  { href: "/menu" as Route, label: "Menu" },
  { href: "/histoire" as Route, label: "L’histoire" },
  { href: "/avis" as Route, label: "Avis client" },
  { href: "/contact" as Route, label: "Contact" },
];

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 0 1 2 2v10.001A1.999 1.999 0 0 1 20 20H4a2 2 0 0 1-2-1.999V7a2 2 0 0 1 2-2Zm0 2v.217l8 5.334 8-5.334V7H4Zm0 2.883V18h16v-8.117l-7.39 4.929a1.5 1.5 0 0 1-1.64 0L4 9.883Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.23 6.35 2.23 11.81c0 2.03.61 3.92 1.78 5.55L2 22l4.8-1.95a9.77 9.77 0 0 0 5.24 1.53h.01c5.46 0 9.81-4.35 9.81-9.81C21.86 6.35 17.5 2 12.04 2Zm-.01 17.53h-.01a8.02 8.02 0 0 1-4.09-1.12l-.29-.17-2.85 1.16.76-2.95-.19-.3a7.55 7.55 0 0 1-1.15-4.03c0-4.19 3.41-7.6 7.6-7.6 2.03 0 3.94.79 5.38 2.23a7.53 7.53 0 0 1 2.22 5.37c0 4.19-3.41 7.6-7.59 7.6Zm4.14-5.51c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12-.15.23-.6.75-.73.9-.13.15-.27.17-.5.06-.23-.12-.99-.37-1.89-1.18-.7-.62-1.18-1.39-1.32-1.62-.14-.23-.01-.35.1-.47.11-.11.23-.27.35-.4.12-.13.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.52-1.25-.72-1.72-.19-.46-.38-.4-.52-.4h-.45c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.94 2.35.12.15 1.61 2.46 3.9 3.45.55.24.98.38 1.32.49.55.17 1.05.15 1.45.09.44-.07 1.36-.55 1.55-1.07.19-.52.19-.96.13-1.06-.06-.1-.21-.16-.44-.28Z"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  // Blocage du scroll de la page derrière quand le menu est ouvert
  useEffect(() => {
    const root = document.documentElement;

    if (open) {
      const prevBody = document.body.style.overflow;
      const prevRoot = root.style.overflowY;

      document.body.style.overflow = "hidden";
      root.style.overflowY = "hidden";

      return () => {
        document.body.style.overflow = prevBody;
        root.style.overflowY = prevRoot;
      };
    }

    document.body.style.overflow = "";
    root.style.overflowY = "";
  }, [open]);

  const waHref = useMemo(() => {
    const phone = toWaNumber(site.telephone);
    return `https://wa.me/${phone}`;
  }, []);

  const mailHref = "mailto:georgina.berrezel@gmail.com";

  const linkList = (
    <ul>
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            aria-current={pathname === l.href ? "page" : undefined}
            onClick={close}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const contacts = (
    <div className="nav-contacts">
      <a
        href={mailHref}
        className="nav-icon-button"
        aria-label="Envoyer un email"
      >
        <MailIcon />
      </a>
      <a
        href={waHref}
        className="nav-icon-button"
        aria-label="Écrire sur WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );

  return (
    <>
      <header className="header" role="banner">
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: ".75rem",
            position: "relative",
          }}
        >
          <Link
            href={"/" as Route}
            aria-label="Retour à l’accueil"
            onClick={close}
          >
            <img
              src="/images/logo-l-atelier-des-gourmets.png"
              alt="L’atelier des Gourmets"
              width={130}
              height={40}
            />
          </Link>

          {/* Nav desktop */}
          <nav
            aria-label="Navigation principale"
            className="site-nav-desktop"
          >
            {linkList}
            {contacts}
          </nav>

          {/* Burger mobile (barre toujours visible) */}
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? (
              <span className="nav-toggle-close" aria-hidden="true">
                ×
              </span>
            ) : (
              <>
                <span />
                <span />
                <span />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Overlay sous la barre : liens + mail + WhatsApp */}
      {open && (
        <div className="nav-overlay" onClick={close}>
          <nav
            className="site-nav-mobile"
            aria-label="Navigation principale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav-mobile-body">
              {linkList}
              <div className="nav-mobile-contacts">{contacts}</div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
