import createNextIntlPlugin from 'next-intl/plugin';
import baseConfig from './next.config.base.ts';

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(baseConfig);
