import 'server-only';
import type { Locale } from './config';
import enJson from '@/i18n/locales/en.json' assert { type: 'json' };
import zhCNJson from '@/i18n/locales/zh-CN.json' assert { type: 'json' };

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => enJson,
  'zh-CN': () => zhCNJson
  // https://github.com/vercel/next.js/issues/47595
  // en: () =>
  // import('@/i18n/locales/en.json', { assert: { type: 'json' } }).then(
  //   (module) => module.default
  // ),
  // 'zh-CN': () =>
  //   import('@/i18n/locales/zh-CN.json', { assert: { type: 'json' } }).then(
  //     (module) => module.default
  //   )
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
