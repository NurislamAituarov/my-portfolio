import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsSidebar.module.scss';
import { Context } from '@/utils/context';

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
  const context = useContext(Context);
  const url = process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/';

  const playSound = () => {
    const audio = new Audio(`${url}sound.mp3`);
    audio.play();
  };

  const closeSkills = () => {
    context?.setSkillsOpen && context.setSkillsOpen((value: boolean) => !value);
  };

  return (
    <div className={styles.skills__wrapper}>
      <button onClick={closeSkills} className={styles.skills__btn}>
        Закрыть
      </button>
      <motion.div
        layout
        variants={variants}
        initial={'hidden'}
        animate={true ? 'visible' : 'hidden'}
        className={styles.skills__container}>
        {skills.map((skill, ind) => {
          return (
            <motion.div
              variants={variantsChildren}
              className={styles.skill}
              key={ind}
              onAnimationStart={playSound}
              onAnimationComplete={playSound}>
              {skill}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
