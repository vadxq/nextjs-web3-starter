import LayoutLink from '@/components/layout/link';
import prisma from '@/prisma';

// revalidate this page every 10 seconds, but don't useful for this app dir, so please use pages/api for restful api and fetch on here. example see [id]/page.tsx
export const revalidate = 10;
export async function getData() {
  const feed = await prisma.post.findMany({
    where: { published: true }
  });
  return feed;
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <main>
        <LayoutLink href={'/' + new Date().toISOString()}>button</LayoutLink>
        <div>{JSON.stringify(data)}</div>
      </main>
      <footer>footer</footer>
    </div>
  );
}
