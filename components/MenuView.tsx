'use client';

import MenuTabs, { Tab } from "./MenuTabs";
import MenuCard, { MenuItem } from "./MenuCard";

type Category = { id: string; label: string; items: MenuItem[] };

// garder cohérent avec --header-height dans globals.css
const HEADER_OFFSET = 80; // px

export default function MenuView({ categories }: { categories: Category[] }) {
  const tabs: Tab[] = categories.map((c) => ({ id: c.id, label: c.label }));

  const handleChange = (id: string) => {
    const el = document.getElementById(id);
    if (!el || typeof window === "undefined") return;

    const rect = el.getBoundingClientRect();
    const absoluteY = rect.top + window.scrollY;

    // on laisse un petit espace sous le header
    const targetY = Math.max(0, absoluteY - HEADER_OFFSET - 8);

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MenuTabs tabs={tabs} onChange={handleChange} />

      <div className="sections">
        {categories.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="menu-section"
            aria-labelledby={`${section.id}-title`}
          >
            <h2 id={`${section.id}-title`}>{section.label}</h2>
            <div className="grid-cards">
              {section.items.map((it) => (
                <MenuCard key={it.name} item={it} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
