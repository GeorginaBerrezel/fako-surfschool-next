"use client";

import { useMemo } from "react";
import { toWaNumber } from "@/lib/phone";
import { site } from "@/lib/site";

export default function ContactForm() {
  const waHref = useMemo(() => {
    const phone = toWaNumber(site.telephone);
    const text = "Bonjour, je souhaiterais des informations.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, []);

  return (
    <div>
      <a className="btn btn-primary" href={waHref} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
