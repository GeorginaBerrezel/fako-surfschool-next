import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

function siteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) throw new Error("NEXT_PUBLIC_SITE_URL is required");
  return url.replace(/\/+$/, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) notFound();

  const t = await getTranslations({ locale });
  const title = t("seo.title");
  const description = t("seo.description");

  const base = new URL(siteUrl());
  const canonical = new URL(`/${locale}`, base).toString();

  return {
    metadataBase: base,
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: new URL("/fr", base).toString(),
        en: new URL("/en", base).toString(),
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) notFound();

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header locale={locale as any} />
      <main id="main">{children}</main>
      <Footer locale={locale as any} />
    </NextIntlClientProvider>
  );
}
