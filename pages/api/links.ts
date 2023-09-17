// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TLinks } from '@/types/interface';
import type { NextApiRequest, NextApiResponse } from 'next';
const linkResume =
  process.env.NODE_ENV === 'development' ? '/resume.pdf' : '/my-portfolio/resume.pdf';

export const links = [
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
    link: [
      'https://nurislamaituarov.github.io/auto-shop-project',
      'https://github.com/NurislamAituarov/auto-shop-project',
    ],
    title: 'Auto Shop App',
    about_application: [
      'React, State Management redux и React-Redux, axios для доступа к API, Material-UI, TypeScript для типизации,SCSS, CSS модуль.',
      'Node.js + Expres создал эндпоинты, цикл запросов CRUD, подключил базу данных PostgreSQL.',
      'Адаптивная верстка для мобильных устройств.',
    ],
    description:
      'Я создал проект магазина автомобилей. Взял макет, сверстал его, написал бэкенд и связал его с базой данных PostgreSQL. Написал список запросов CRUD и уже получал данные. В моем случае это сущности машин с информацией и отображал их на фронтенде. Оптимизировал, добавил ленивую загрузку картинок, ленивую загрузку скриптов. Сделал кастомный слайдер',
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
    link: [
      'https://nurislamaituarov.github.io/ToDo-List-Test',
      'https://github.com/NurislamAituarov/ToDo-List-Test',
    ],
    title: 'ToDo List',
    about_application: [
      'React, Redux/MobX, TypeScript, Для анимации использовал библиотеку react-transition-group, SCSS.',
    ],
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
    link: [
      'https://nurislamaituarov.github.io/project-auth',
      'https://github.com/NurislamAituarov/project-auth',
    ],
    title: 'Authorization App',
    about_application: [
      'React, Redux, Material-UI, React Hook-Form,',
      'Node.js, Express, MongoDB, для авторизации использовал JSON Web Token.',
    ],
  },
  {
    _id: 'link_4',
    icon: {
      name: 'logistic',
      width: 76,
    },
    gradient: { from: '#450a0a', to: '#dc2626' },
    link: [
      'https://nurislamaituarov.github.io/logistics-project/#/load',
      'https://github.com/NurislamAituarov/logistics-project',
    ],
    title: 'Logistic App',
    about_application: [
      'Vue, VueX, Vuetify, sortablejs. Реализовано адаптивная верстка для мобильных устройств.',
    ],
    technical_task: [
      'Колонки таблицы должны иметь возможность изменять свою ширину.',
      'Колонки должны быть перетаскиваемыми для изменения их порядка.',
      'Строки должны быть перетаскиваемыми для изменения их порядка.',
      'Должен быть реализован функционал добавления, удаления и изменения строк.',
      'При изменении ширины заголовка таблицы или при перетаскивании колонок должна появляться плашка с предупреждением "Сохранить изменения". Если пользователь не сохранит изменения и обновит страницу, то изменения не должны быть применены.',
      'Должна быть общая настройка, позволяющая скрыть колонки таблицы и добавить новые. Также должна быть возможность изменить порядок колонок путем их перетаскивания. Все изменения должны быть реактивными и применяться в таблице.',
      'Реализовано адаптивная верстка для мобильных устройств.',
      'Настроил деплой приложения через GitHub Actions.',
    ],
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
    link: [linkResume],
    title: 'Job resume',
  },
  {
    _id: 'link_6',
    icon: {
      name: 'telegram',
      width: 76,
    },
    gradient: {
      from: '#13E780',
      to: '#00bbd5',
    },
    link: ['https://t.me/NurislamAituarov'],
    title: 'Telegram',
  },
  {
    _id: 'link_7',
    icon: {
      name: 'whatsapp',
      width: 76,
    },
    gradient: {
      from: '#22c55e',
      to: '#6b2d2d',
    },
    link: ['https://wa.me/87053047662'],
    title: 'Whatsapp',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<TLinks[]>) {
  res.status(200).json(links);
}
