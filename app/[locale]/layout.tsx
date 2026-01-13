import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [messages, locale] = await Promise.all([getMessages(), getLocale()]);

  return (
    <NextIntlClientProvider messages={messages}>
      <Header locale={locale as 'fr' | 'en'} />
      <main id="main">{children}</main>
      <Footer locale={locale as 'fr' | 'en'} />
    </NextIntlClientProvider>
  );
}
