import { TMeData } from '@/types/interface';
import styles from './AboutMe.module.scss';
import Image from 'next/image';
import { APP_URL } from '@/utils/constants';
import { EmailButton } from '@/components/base/email-btn/EmailButton';
import { DescriptionButton } from '@/components/base/description-btn/DescriptionButton';

interface IPropsMe {
  me: TMeData;
}

export function AboutMe({ me }: IPropsMe) {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          src={`${APP_URL}/${me.avatar}`}
          width={190}
          height={190}
          alt={me.siteName}
          quality={100}
          className={styles.img}
        />
      </div>

      <div className={styles.heading}>
        <span>My portfolio</span>

        <Image src={`${APP_URL}/verified.svg`} alt="verified" height={16} width={16} />
      </div>
      <EmailButton />
      <DescriptionButton description={me.description} />
    </div>
  );
}
