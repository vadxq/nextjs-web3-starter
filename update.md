# update

## 2023-8

将 API 代理外部接口迁移到了 nextjs 支持的 rewrites，详情见`next.config.js`，去除了`http-proxy-middleware`

Migrated the API proxy external interface to the rewrites supported by nextjs, see `next.config.js` for details, delete `http-proxy-middleware`

将自身的 API 编写接口迁移到了 app dir 目录下，具体可以参考最新的 nextjs 文档

Migrated its own API writing interface to the app dir directory, for details, please refer to the latest nextjs documentation

更新了依赖包

Updated dependencies

```bash
dependencies:
- @prisma/client 4.13.0
+ @prisma/client 5.1.1
- ethers 6.3.0
+ ethers 6.7.0
- next 13.4.1
+ next 13.4.12
- tailwind-variants 0.1.5
+ tailwind-variants 0.1.13
- typescript 5.0.4
+ typescript 5.1.6

devDependencies:
- @commitlint/cli 17.6.3
+ @commitlint/cli 17.6.7
- @commitlint/config-conventional 17.6.3
+ @commitlint/config-conventional 17.6.7
- @tailwindcss/forms 0.5.3
+ @tailwindcss/forms 0.5.4
- @types/node 18.16.5
+ @types/node 20.4.8
- @types/react 18.2.6
+ @types/react 18.2.18
- @types/react-dom 18.2.4
+ @types/react-dom 18.2.7
- @typescript-eslint/eslint-plugin 5.59.2
+ @typescript-eslint/eslint-plugin 6.2.1
- @typescript-eslint/parser 5.59.2
+ @typescript-eslint/parser 6.2.1
- eslint 8.40.0
+ eslint 8.46.0
- eslint-config-next 13.4.1
+ eslint-config-next 13.4.12
- eslint-config-prettier 8.8.0
+ eslint-config-prettier 9.0.0
- eslint-plugin-import 2.27.5
+ eslint-plugin-import 2.28.0
- eslint-plugin-react 7.32.2
+ eslint-plugin-react 7.33.1
- eslint-plugin-tailwindcss 3.11.0
+ eslint-plugin-tailwindcss 3.13.0
- lint-staged 13.2.2
+ lint-staged 13.2.3
- postcss 8.4.23
+ postcss 8.4.27
- prisma 4.13.0
+ prisma 5.1.1
- tailwindcss 3.3.2
+ tailwindcss 3.3.3
```
