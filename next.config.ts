import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";
import createNextIntlPlugin from 'next-intl/plugin';

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [{ url: "/~offline", revision }],
  disable: process.env.NODE_ENV === "development",
});

const withNextIntl = createNextIntlPlugin(
  './lib/i18n/request.ts'
);

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default withSerwist(withNextIntl(nextConfig));
