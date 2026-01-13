import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Locale = 'fr' | 'en';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;

  const t = await getTranslations({locale});
  const title = t('seo.title');
  const description = t('seo.description');

  return {
    title,
    description,
    alternates: {
      languages: {
        fr: '/fr',
        en: '/en'
      }
    },
    openGraph: {
      title,
      description,
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider messages={messages}>
      <Header locale={locale} />
      <main id="main">{children}</main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
