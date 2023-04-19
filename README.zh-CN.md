# Nextjs Web3 Starter

> 这是一个 nextjs with turbopack 的 starter。兼顾 Web3 项目和 Nodejs + Prisma 后端。你可以纯 nextjs 前端，也可以前后端一起写，做一个小全栈仔。

**中文** | [English](./README.md)

## Getting Started

开发运行命令

```bash
npm run dev
# 或者
yarn dev
```

用浏览器打开 [http://localhost:3000](http://localhost:3000)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

这个目录 `pages/api` 是 `/api/*`下路由，用来写 API 或者是对后端 api 做中转

## 学习更多

为了学习 nextjs，请查看一下文档：

- [Next.js Beta 文档](https://beta.nextjs.org) - 了解最新的 nextjs 特行
- [Next.js 标准文档](https://nextjs.org/docs) - 学习 Next.js 通用特性和 API.
- [学习 Next.js](https://nextjs.org/learn) - tutorial.

## 一些特性

- **app dir**: 项目使用的是 nextjs13 最新的 app dir，关于 app dir 特性可以阅读[Next.js Beta 文档](https://beta.nextjs.org)
- **i18n**: 此项目支持国际化，根目录 i18n 为多语言文件，middleware 中间件判断跳转哪个语言

## 文件目录一览

```txt
├── LICENSE
├── README.md
├── README_zh-CN.md
├── app                                      app dir目录
│   └── [lang]                               语言类型
│       ├── [id]                             /:id路由
│       │   ├── loading.tsx                  loading页面
│       │   └── page.tsx                     page页面
│       ├── layout.tsx                       全局layout
│       └── page.tsx                         首页
├── commitlint.config.js                     commitlint
├── components                               组件文件夹
│   ├── button
│   │   └── index.tsx
│   ├── layout                               layout文件
│   │   ├── index.tsx
│   │   ├── link.tsx
│   │   └── state.ts
│   ├── navbar                               导航
│   │   └── index.tsx
│   ├── skeleton
│   │   └── skeletonCard.tsx
│   ├── theme                                一些通用配置
│   │   ├── defaultHeadTag.tsx
│   │   ├── flexible.tsx
│   │   └── metadata.ts
│   ├── toast
│   │   └── toast.tsx
│   └── typography
│       └── index.tsx
├── i18n                                     i18n文件夹
│   ├── config.ts                            语言配置
│   ├── getDictionary.ts                     词典配置
│   └── locales                              词典包文件
│       ├── en.json
│       └── zh-CN.json
├── middleware.ts                            中间件，识别语言跳转
├── next-env.d.ts
├── next.config.js                           nextjs配置
├── package.json
├── pages                                    目前主要就剩api在这里
│   └── api                                  api文件夹
│       ├── [...slug].ts                     代理转发后端接口
│       ├── hello.ts
│       └── post.ts
├── pnpm-lock.yaml
├── postcss.config.js                        postcss配置
├── prisma                                   prisma文件夹
│   ├── index.ts                             prisma暴露方法
│   └── schema.prisma                        prisma schema文件
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── services                                 请求api函数主要目录
│   ├── client                               客户端请求数据
│   │   └── login.ts
│   └── server                               服务器端请求数据
├── styles                                   全局css文件
│   ├── index.css
│   ├── reset.css
│   └── tailwind.css
├── tailwind.config.js                       tailwind配置文件
├── tsconfig.json
├── types                                    ts类型
│   ├── api.d.ts
│   ├── components
│   │   └── theme.d.ts
│   ├── global.d.ts
│   └── index.d.ts
├── utils                                    工具类函数文件夹
│   ├── cookie.ts                            cookie操作
│   ├── helpers.ts                           工具函数
│   ├── request.ts                           http请求
│   └── web3.ts                              web3函数
└── views                                    app dir分离出来的client业务层
```
