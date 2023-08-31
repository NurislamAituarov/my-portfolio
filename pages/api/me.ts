// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TMeData } from '@/types/interface';
import type { NextApiRequest, NextApiResponse } from 'next';

const me = {
  siteName: 'Red Links',
  avatar: '/avatar.jpg',
  description: `Меня зовут Нурислам`,
};

export default function handler(req: NextApiRequest, res: NextApiResponse<TMeData>) {
  res.status(200).json(me);
}
