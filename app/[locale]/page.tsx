import { Button } from "~/components/ui/button";
import { ThemeToggle } from "~/components/themeToggle";
import { useTranslations } from "next-intl";

import { getTranslations } from 'next-intl/server';
import LocaleSwitcher from "~/components/langSelect/localeSwitcher";

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'homePage' });

  return {
    title: t('title')
  };
}

export default function Home() {
  const t = useTranslations('homePage');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{t('title')}</h1>
      <LocaleSwitcher />
      <Button>Click me</Button>
      <ThemeToggle />
    </div>
  );
}
