import { useContext } from 'react';
import { Context } from '@/utils/context';
import styles from './SkillsBtn.module.scss';

export function SkillsBtn() {
  const context = useContext(Context);

  return (
    <div
      style={context?.skillsOpen ? { background: 'black' } : {}}
      className={styles['skills__btn']}
      onClick={() => context?.setSkillsOpen && context.setSkillsOpen((value: boolean) => !value)}>
      <span>Skills</span>
    </div>
  );
}
