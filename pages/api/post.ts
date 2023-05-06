// API prisma API demo
// import type { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '@/prisma';

// type Data = any[];

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   try {
//     const feed = await prisma.post.findMany({
//       where: { published: true }
//     });
//     res.status(200).json(feed);
//   } catch (error) {
//     res.status(500).json([]);
//   }
// }
