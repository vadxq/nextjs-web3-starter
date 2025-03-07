import Link from 'next/link';
import { Link as LinkUI } from '~/lib/i18n/navigation';

export default function Footer() {
  return (
    <footer className="mt-auto p-4">
      <div>
        <div>
          <LinkUI href="/sitemap">Sitemap</LinkUI>
          <LinkUI href="/privacy">Privacy Policy</LinkUI>
        </div>
        <div>
          <LinkUI href="/terms">Ship to : HONG KONG SAR</LinkUI>
          <Link href="/zh-CN/">切換到中文</Link>
        </div>
      </div>
      <div className="h-[96px]">
        <p className="flex items-center text-[12px]">Dealer in precious metals and stones Category A registration (registration number: A-B-23-12-03245)</p>
      </div>
    </footer>
  );
}
