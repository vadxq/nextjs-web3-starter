// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: true
  },
  experimental: {
    // serverComponentsExternalPackages: ['@prisma/client'] // prisma support
  },
  rewrites: () => {
    return [
      {
        // 注意，加了一个be/，为什么？为了区分我们项目写的接口，避免被代理进去了。我们只需要代理外部的接口
        // Note that a be/ is added, why? In order to distinguish the interface written by our project, avoid being proxied. We only need to proxy the external interface
        source: '/api/be/:slug*',
        destination: `${process.env.BACKEND_URL}/api/:slug*`
      }
    ];
  }
};

module.exports = withPWA(nextConfig);
