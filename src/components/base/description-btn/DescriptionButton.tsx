import { useOutside } from '@/utils/hooks';
import styles from './DescriptionButton.module.scss';
import cn from 'classnames';

interface IDescriptionButton {
  description: string;
}

export function DescriptionButton({ description }: IDescriptionButton) {
  const { isShow, setIsShow, ref } = useOutside(false);

  return (
    <div className={styles.parent} ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={cn({
          [styles.active]: isShow,
        })}>
        <span>Обо мне</span>
      </button>

      {isShow && <article>{description}</article>}
    </div>
  );
}
