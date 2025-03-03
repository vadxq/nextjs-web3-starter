import { useLocale, useTranslations } from 'next-intl';
import { routing } from '~/lib/i18n/routing';
import LocaleSwitcherSelect from '~/components/langSelect/localeSwitcherSelect';


export default async function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur.replace('-', '') })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}