'use client';

import { useState } from "react";

export type Tab = { id: string; label: string };

type Props = {
  tabs: Tab[];
  onChange?: (id: string) => void;
};

export default function MenuTabs({ tabs, onChange }: Props) {
  const firstId = tabs[0]?.id ?? "";
  const [active, setActive] = useState<string>(firstId);

  const handleClick = (id: string) => {
    setActive(id);
    if (onChange) onChange(id);
  };

  if (!tabs.length) return null;

  return (
    <div
      className="menu-tabs"
      role="tablist"
      aria-label="Catégories du menu"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={isActive ? "tab tab--active" : "tab"}
            onClick={() => handleClick(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
