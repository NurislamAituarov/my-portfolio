import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsSidebar.module.scss';
import { Context } from '@/utils/context';
import { listSkills } from '@/utils/constants';

const variants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.9,
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
  const audio = new Audio(`${url}sound.mp3`);
  const playSound = () => {
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
