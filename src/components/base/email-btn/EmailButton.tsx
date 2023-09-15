import Image from 'next/image';
import styles from './EmailButton.module.scss';
import { APP_URL } from '@/utils/constants';
import email from '@/assets/img/email.svg';

export function EmailButton() {
  return (
    <div className={styles.button}>
      <a
        href="mailto:nurislamajtuarov@gmail.com"
        target="_blank"
        rel="noreferrer"
        title="nurislamajtuarov@gmail.com">
        <span>
          <Image src={email} alt="email" height={18} width={18} />
        </span>
        <span>Email</span>
      </a>
    </div>
  );
}
