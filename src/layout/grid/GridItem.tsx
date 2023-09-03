import { TLinks } from '@/types/interface';
import styles from './grid.module.scss';
import Image from 'next/image';
import { AnimateBlock } from '@/components/animate-block/AnimateBlock';
import { Icon } from '@/components/icons';

interface IGridItem {
  item: TLinks;
}

export function GridItem({ item }: IGridItem) {
  function handelMore() {}

  return (
    <a href={item.link} rel="noreferrer" target="_blank" className={styles.item}>
      <div
        className={styles.gradient}
        style={{
          backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`,
        }}>
        <Icon name={item.icon.name} />

        <div
          className={styles['popup-options']}
          style={{
            backgroundImage: 'linear-gradient(to right, #000000 0%, #b40808 51%, #980000 100%)',
          }}
          onClick={(e) => {
            e.preventDefault();
            handelMore();
          }}>
          <span>Подробнее</span>
        </div>
      </div>
      <div className={styles.title}>{item.title}</div>
      {item._id === 'link_2' && <AnimateBlock />}
    </a>
  );
}
