import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
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
    }
  };
}

export default async function LocaleLayout({children}: {children: React.ReactNode}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
