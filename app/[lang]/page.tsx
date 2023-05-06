import LayoutLink from '@/components/layout/link';
// import prisma from '@/prisma';
import { getDictionary } from '@/i18n/getDictionary';
import { Locale } from '@/i18n/config';
import { Button } from '@/components/button';

// revalidate this page every 10 seconds, but don't useful for this app dir, so please use pages/api for restful api and fetch on here. example see [id]/page.tsx
export const revalidate = 10;

// prisma demo
// async function getData() {
//   const feed = await prisma.post.findMany({
//     where: { published: true }
//   });
//   return feed;
// }

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale };
}) {
  // const data = await getData();
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <main>
        <LayoutLink href={'/' + new Date().toISOString()}>button</LayoutLink>
        <div>{dictionary.title}</div>
        <div>by {dictionary.author}</div>
        <Button className="mx-3 w-[120px]">Button</Button>
      </main>
      <footer>footer</footer>
    </div>
  );
}
