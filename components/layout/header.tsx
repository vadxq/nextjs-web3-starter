import { useTranslations } from 'next-intl';
import { Menu, X, Heart, UserRound, ShoppingBag } from 'lucide-react';
import { Badge } from '~/components/ui/badge';

export default function Header() {
  const t = useTranslations('layout');

  const cartCount = 0;
  const favoriteCount = 0;

  return (
    <header className="sticky top-0 h-22 bg-white p-6">
      <nav className="mx-6 flex h-full items-center justify-between">
        <div className="flex items-center justify-between text-base">
          <div className="flex cursor-pointer items-center gap-2">
            <Menu className="size-4" />
            {t('menu')}
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <X className="size-4" />
            {t('search')}
          </div>
        </div>
        <h1 className="text-lg font-bold">{t('title')}</h1>
        <div className="flex items-center justify-end gap-4">
          <div className="relative flex items-center justify-center gap-1">
            <Heart className="size-4 cursor-pointer" />
            {favoriteCount > 0 && <Badge className="absolute top-[-6px] right-[-12px] flex size-3 items-center justify-center rounded-full p-1 text-[8px]">{favoriteCount}</Badge>}
          </div>
          <UserRound className="size-4 cursor-pointer" />
          <div className="relative flex items-center justify-center gap-1">
            <ShoppingBag className="size-4 cursor-pointer" />
            <Badge className="absolute top-[-6px] right-[-12px] flex size-3 items-center justify-center rounded-full p-1 text-[8px]">{cartCount}</Badge>
          </div>
        </div>
      </nav>
    </header>
  );
}
