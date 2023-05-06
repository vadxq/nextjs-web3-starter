import { Metadata } from 'next';

// you can see in this docs: https://beta.nextjs.org/docs/api-reference/metadata
export const DefaultMetadata: Metadata = {
  title: {
    default: 'vadxq',
    template: '%s | vadxq'
  }, // title or you can only string
  description: 'The nextjs for the Web', // <meta name="description" content="The nextjs for the Web">
  referrer: 'origin-when-cross-origin', // <meta name="referrer" content = "origin-when-cross-origin" >
  keywords: ['Next.js', 'React', 'JavaScript'], // <meta name="keywords" content = "Next.js,React,JavaScript" >
  authors: [{ name: 'vadxq', url: 'https://blog.vadxq.com' }], // <meta name="author" content="vadxq"/>< link rel = "author" href = "https://blog.vadxq.com" />
  colorScheme: 'light', // <meta name="color-scheme" content = "light" > // or dark
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.ico'
    }
  }
};
