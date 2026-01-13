import createNextIntlPlugin from 'next-intl/plugin';
import baseConfig from './next.config.base.ts';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(baseConfig);
