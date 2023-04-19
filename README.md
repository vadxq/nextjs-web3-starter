# Nextjs Web3 Starter

> This is a starter for nextjs with turbopack. Consider both Web3 project and Nodejs + Prisma backend. You can use the pure nextjs front-end, or you can write the front-end and back-end together to make a small full-stack boy.

**English** | [中文](./README.zh-CN.md)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Beta Documentation](https://beta.nextjs.org) - learn about Next.js features and app dir.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Some features

- **app dir**: The project uses the latest app dir of nextjs13, you can read [Next.js Beta Document](https://beta.nextjs.org) about the app dir feature
- **i18n**: This project supports internationalization, the root directory i18n is a multilingual file, and the middleware middleware determines which language to jump to

## 文件目录一览

```txt
├── LICENSE
├── README.md
├── README_zh-CN.md
├── app                                      app dir
│   └── [lang]                               language type
│       ├── [id]                             /:id route
│       │   ├── loading.tsx                  loading page
│       │   └── page.tsx                     page
│       ├── layout.tsx                       global layout
│       └── page.tsx                         main home
├── commitlint.config.js                     commitlint
├── components                               components folder
│   ├── button
│   │   └── index.tsx
│   ├── layout                               layout file
│   │   ├── index.tsx
│   │   ├── link.tsx
│   │   └── state.ts
│   ├── navbar                               navbar
│   │   └── index.tsx
│   ├── skeleton
│   │   └── skeletonCard.tsx
│   ├── theme                                config file
│   │   ├── defaultHeadTag.tsx
│   │   ├── flexible.tsx
│   │   └── metadata.ts
│   ├── toast
│   │   └── toast.tsx
│   └── typography
│       └── index.tsx
├── i18n                                     i18n folder
│   ├── config.ts                            language config
│   ├── getDictionary.ts                     Dictionary configuration
│   └── locales                              dictionary package file
│       ├── en.json
│       └── zh-CN.json
├── middleware.ts                            Middleware, recognition language jump
├── next-env.d.ts
├── next.config.js                           nextjs config
├── package.json
├── pages                                    At present, the main remaining api is here
│   └── api                                  api folder
│       ├── [...slug].ts                     proxy forwarding backend interface
│       ├── hello.ts
│       └── post.ts
├── pnpm-lock.yaml
├── postcss.config.js                        postcss config
├── prisma                                   prisma folder
│   ├── index.ts                             prisma exposure method
│   └── schema.prisma                        prisma schema file
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── services                                 request api function main directory请求api函数主要目录
│   ├── client                               client request data
│   │   └── login.ts
│   └── server                               server request data
├── styles                                   global css file
│   ├── index.css
│   ├── reset.css
│   └── tailwind.css
├── tailwind.config.js                       tailwind config
├── tsconfig.json
├── types                                    ts type
│   ├── api.d.ts
│   ├── components
│   │   └── theme.d.ts
│   ├── global.d.ts
│   └── index.d.ts
├── utils                                    utils
│   ├── cookie.ts                            cookie utils
│   ├── helpers.ts                           utils functions
│   ├── request.ts                           http request
│   └── web3.ts                              web3 functions
└── views                                    app dir client component
```
