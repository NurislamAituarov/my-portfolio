// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TLinks } from '@/types/interface';
import type { NextApiRequest, NextApiResponse } from 'next';

const links = [
  {
    _id: 'link_1',
    icon: {
      name: 'auto',
      width: 76,
    },
    gradient: {
      from: '#13E780',
      to: '#00bbd5',
    },
    link: 'https://nurislamaituarov.github.io/auto-shop-project',
    title: 'Auto shop project',
  },
  {
    _id: 'link_2',
    icon: {
      name: 'todo',
      width: 76,
    },
    gradient: {
      from: '#ddd6fe',
      to: '#c026d3',
    },
    link: 'https://nurislamaituarov.github.io/ToDo-List-Test',
    title: 'ToDo List',
  },
  {
    _id: 'link_3',
    icon: {
      name: 'auth',
      width: 76,
    },
    gradient: {
      from: '#4ade80',
      to: '#60a5fa',
    },
    link: 'https://nurislamaituarov.github.io/project-auth',
    title: 'Project authorization',
  },
  {
    _id: 'link_4',
    icon: {
      name: 'telegram',
      width: 76,
    },
    gradient: {
      from: '#dc2626',
      to: '#fb923c',
    },
    link: ' https://t.me/NurislamAituarov',
    title: 'Telegram',
  },
  {
    _id: 'link_5',
    icon: {
      name: 'resume',
      width: 76,
    },
    gradient: {
      from: '#6b2d2d',
      to: '#22c55e',
    },
    link: '/resume.pdf',
    title: 'Job resume',
  },
  {
    _id: 'link_6',
    icon: {
      name: 'logistic',
      width: 76,
    },
    gradient: {
      from: '#13E780',
      to: '#00bbd5',
    },
    link: 'https://nurislamaituarov.github.io/logistics-project/#/load',
    title: 'Logistic project',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<TLinks[]>) {
  res.status(200).json(links);
}
