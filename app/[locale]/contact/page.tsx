import { getTranslations } from "next-intl/server";
import { site } from "@/lib/site";
import { toWaNumber } from "@/lib/phone";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "contact" });
  return { title: t("seoTitle"), description: t("seoDescription") };
}

export default async function ContactPage({ params }: { params: { locale: "fr" | "en" } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "contact" });

  const waHref = `https://wa.me/${toWaNumber(site.telephone)}?text=${encodeURIComponent(
    params.locale === "en"
      ? "Hello, I would like some information."
      : "Bonjour, je souhaiterais des informations."
  )}`;

  return (
    <section className="container" style={{ paddingTop: "1.25rem", paddingBottom: "2rem" }}>
      <h1>{t("title")}</h1>
      <p>{t("intro")}</p>

      <div className="card" style={{ padding: "1rem" }}>
        <p>
          <strong>{t("phone")}:</strong>{" "}
          <a href={`tel:${site.telephone.replace(/\s/g, "")}`}>{site.telephone}</a>
        </p>

        <p style={{ marginTop: "0.75rem" }}>
          <a className="btn btn-primary" href={waHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </p>
      </div>

      <p style={{ marginTop: "1rem" }}>{t("formNote")}</p>
    </section>
  );
}
