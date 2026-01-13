import {getRequestConfig} from 'next-intl/server';

const locales = ['fr', 'en'] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) as Locale;

  if (!locales.includes(locale)) {
    return {
      locale: 'fr',
      messages: (await import('../messages/fr.json')).default
    };
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
