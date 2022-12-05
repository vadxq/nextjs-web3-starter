import '@/styles/index.scss';
import { Flexible } from '@/ui/flexible';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Flexible />
        {children}
      </body>
    </html>
  );
}
