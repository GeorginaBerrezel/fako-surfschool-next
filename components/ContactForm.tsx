'use client';
import { useState, useMemo } from "react";
import { toWaNumber } from "@/lib/phone";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const waHref = useMemo(() => {
    const phone = toWaNumber(site.telephone);
    const text = `Bonjour, je souhaiterais des informations.\nNom: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [form]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: fd });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) {
      e.currentTarget.reset();
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <form className="card contact-form" onSubmit={onSubmit}>
      <div className="contact-form-fields">
        <div className="field-row">
          <label>
            <span className="field-label">Nom complet</span>
            <input
              name="name"
              required
              autoComplete="name"
              placeholder="Nom Prénom"
              onChange={(e) =>
                setForm((s) => ({ ...s, name: e.target.value }))
              }
            />
          </label>

          <label>
            <span className="field-label">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="vous@example.com"
              onChange={(e) =>
                setForm((s) => ({ ...s, email: e.target.value }))
              }
            />
          </label>
        </div>

        <label className="field-full">
          <span className="field-label">Message</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Précisez votre demande, la date souhaitée, le nombre de personnes, etc."
            onChange={(e) =>
              setForm((s) => ({ ...s, message: e.target.value }))
            }
          />
        </label>
      </div>

      <div className="contact-form-actions">
        <button className="btn" type="submit">
          Envoyer par email
        </button>

        <a
          className="btn btn-outline"
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/whatsapp.svg"
            alt=""
            width="18"
            height="18"
            style={{ marginRight: ".5rem" }}
          />
          WhatsApp
        </a>

        <p className="form-status" aria-live="polite">
          {status === "ok" && "Message envoyé."}
          {status === "error" && "Erreur d’envoi. Veuillez réessayer."}
        </p>
      </div>
    </form>
  );
}
