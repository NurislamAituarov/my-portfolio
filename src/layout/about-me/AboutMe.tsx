import { TMeData } from '@/types/interface';
import Image from 'next/image';

import { APP_URL } from '@/utils/constants';
import { EmailButton } from '@/components/base/email-btn/EmailButton';
import { DescriptionButton } from '@/components/base/description-btn/DescriptionButton';
import { TextAnimation } from '@/components/base/text-animation/TextAnimation';
import avatar from '@/assets/img/avatar.jpg';
import verified from '@/assets/img/verified.svg';
import { SkillsBtn } from '@/components/skills/skills-btn/SkillsBtn';

import styles from './AboutMe.module.scss';
interface IPropsMe {
  me: TMeData;
}

export function AboutMe({ me }: IPropsMe) {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          // src={`${APP_URL}/${me.avatar}`}
          src={avatar}
          width={190}
          height={190}
          alt={me.siteName}
          quality={100}
          className={styles.img}
        />
      </div>

      <div className={styles.heading}>
        <TextAnimation text="My portfolio" animationClass="one" />
        {/* <span>My portfolio</span> */}

        <Image src={verified} alt="verified" height={16} width={16} />
      </div>
      <div style={{ display: 'flex', width: 'max-content', margin: '0 auto' }}>
        <EmailButton />
        <SkillsBtn />
      </div>
      <DescriptionButton description={me.description} />
    </div>
  );
}
