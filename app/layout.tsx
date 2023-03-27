import '@/styles/index.scss';
import RootLayoutClient from '@/components/layout';
import { Flexible } from '@/components/theme/flexible';
import { Toaster } from '@/components/toast/toast';
import Navbar from '@/components/navbar';

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
        <Toaster />
        <RootLayoutClient>
          <Navbar />
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
