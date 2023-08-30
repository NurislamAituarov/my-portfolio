// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const links = {
  _id: 'link_1',
  icon: {
    path: '',
    with: 76,
  },
  gradient: {
    from: '#13E780',
    to: '#00bbd5',
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}
