import { GridItem } from './GridItem';
import { TLinks } from '@/types/interface';
import styles from './grid.module.scss';

interface IPropsLinks {
  links: TLinks[];
}

export function Grid({ links }: IPropsLinks) {
  return (
    <div className={styles.grid}>
      {links.map((link) => {
        return <GridItem item={link} key={link._id} />;
      })}
    </div>
  );
}
