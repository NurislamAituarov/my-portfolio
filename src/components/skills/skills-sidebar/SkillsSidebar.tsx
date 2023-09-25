import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsSidebar.module.scss';

const listSkills = [
  'HTML5',
  'CSS3',
  'SCSS',
  'JavaScript',
  'Работа с различными API запросами (DOM, Fetch,)',
  'Git ',
  'Адаптивная верстка',
  'Кроссбраузерная верстка',
  'ES6',
  'Axios',
  'TypeScript',
  'React.js',
  'Vue.js',
  'Next.js',
  'Nuxt.js',
  'Redux, Redux-Thunk, Redux-Toolkit',
  'Vuex',
  ' MobX',
  'Material-UI',
  'Vuetify',
  'Ant Design',
  'Node.js',
  'Работа с базами данных - PostgreSQL, MongoDB',
  'WebSocket',
];

const variants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
  hidden: {},
};
const variantsChildren = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: 100 },
};

export function SkillsSidebar() {
  const [skills] = useState(listSkills);
  return (
    <div className={styles.skills__wrapper}>
      <motion.div
        layout
        variants={variants}
        initial={'hidden'}
        animate={true ? 'visible' : 'hidden'}
        className={styles.skills__container}>
        {skills.map((skill, ind) => {
          return (
            <motion.div variants={variantsChildren} className={styles.skill} key={ind}>
              {skill}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
