// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TLinks } from '@/types/interface';
import type { NextApiRequest, NextApiResponse } from 'next';

const links = [
  {
    _id: 'link_1',
    icon: {
      path: '/item1.jpg',
      width: 76,
    },
    gradient: {
      from: '#13E780',
      to: '#00bbd5',
    },
    link: 'ddddddddddddddddddddddddddddd',
    title: 'Пэт проект',
  },
  {
    _id: 'link_2',
    icon: {
      path: '/item1.jpg',
      width: 76,
    },
    gradient: {
      from: '#13E780',
      to: '#00bbd5',
    },
    link: 'ddddddddddddddddddddddddddddd',
    title: 'Пэт проект',
  },
  {
    _id: 'link_3',
    icon: {
      path: '/item1.jpg',
      width: 76,
    },
    gradient: {
      from: '#13E780',
      to: '#00bbd5',
    },
    link: 'ddddddddddddddddddddddddddddd',
    title: 'Пэт проект',
  },
  {
    _id: 'link_4',
    icon: {
      path: '/item1.jpg',
      width: 76,
    },
    gradient: {
      from: '#13E780',
      to: '#00bbd5',
    },
    link: 'ddddddddddddddddddddddddddddd',
    title: 'Пэт проект',
  },
  {
    _id: 'link_5',
    icon: {
      path: '/item1.jpg',
      width: 76,
    },
    gradient: {
      from: '#13E780',
      to: '#00bbd5',
    },
    link: 'ddddddddddddddddddddddddddddd',
    title: 'Пэт проект',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<TLinks[]>) {
  res.status(200).json(links);
}
