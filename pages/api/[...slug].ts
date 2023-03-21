import { createProxyMiddleware } from 'http-proxy-middleware';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false
  }
};

const proxy = createProxyMiddleware({
  target: process.env.BACKEND_URL,
  secure: false,
  ws: false,
  changeOrigin: true,
  pathRewrite: { '^/api/be': '/api' },
  xfwd: true, // 转发真实ip
  timeout: 60000,
  proxyTimeout: 60000
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return proxy(req, res);
}
