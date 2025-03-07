import { Button } from '~/components/ui/button';
import { ThemeToggle } from '~/components/themeToggle';
import { useTranslations } from 'next-intl';

import { getTranslations } from 'next-intl/server';
import LocaleSwitcher from '~/components/langSelect/localeSwitcher';
import PageLayout from '~/components/layout/pageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'homePage' });

  return {
    title: t('title'),
  };
}

export default function Home() {
  const t = useTranslations('homePage');
  return (
    <PageLayout>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <h1>{t('title')}</h1>
        <LocaleSwitcher />
        <Button>Click me</Button>
        <ThemeToggle />
      </div>
    </PageLayout>
  );
}
