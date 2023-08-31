import Image from 'next/image';
import styles from './EmailButton.module.scss';
import { APP_URL } from '@/utils/constants';

export function EmailButton() {
  return (
    <div className={styles.button}>
      <a
        href="mailto:nurislamajtuarov@gmail.com"
        target="_blank"
        rel="noreferrer"
        title="nurislamajtuarov@gmail.com">
        <span>
          <Image src={`${APP_URL}/email.svg`} alt="email" height={18} width={18} />
        </span>
        <span>Email</span>
      </a>
    </div>
  );
}
