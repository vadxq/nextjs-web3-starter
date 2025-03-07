import React from 'react';
import Header from './header';
import Footer from './footer';
export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-7xl">{children}</main>
      <Footer />
    </div>
  );
}
