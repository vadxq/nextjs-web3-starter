import LayoutLink from '@/components/layout/link';

export default function Home() {
  return (
    <div>
      <main>
        <LayoutLink href={'/' + new Date().toISOString()}>button</LayoutLink>
      </main>
      <footer>footer</footer>
    </div>
  );
}
