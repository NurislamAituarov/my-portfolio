import { TMeData } from '@/types/interface';
import Image from 'next/image';

import { EmailButton } from '@/components/base/email-btn/EmailButton';
import { DescriptionButton } from '@/components/base/description-btn/DescriptionButton';
import { SkillsBtn } from '@/components/skills/skills-btn/SkillsBtn';
import { TextAnimation } from '@/components/base/text-animation/TextAnimation';

import avatar from '@/assets/img/avatar.jpg';

import styles from './AboutMe.module.scss';
import { Icon } from '@/components/icons';
interface IPropsMe {
  me: TMeData;
}

export function AboutMe({ me }: IPropsMe) {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          src={avatar}
          width={190}
          height={190}
          alt={me.siteName}
          quality={100}
          className={styles.img}
        />
      </div>

      <div className={styles.heading}>
        <TextAnimation text="портфолио" animationClass="one" />
        <Icon name="verified" height={30} width={40} />
      </div>
      <div style={{ display: 'flex', width: 'max-content', margin: '0 auto' }}>
        <EmailButton />
        <SkillsBtn />
      </div>
      <DescriptionButton description={me.description} />
    </div>
  );
}
