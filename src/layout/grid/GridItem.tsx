import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { PopUpModal } from '@/components/popup-modal/PopUpModal';
import { AnimateBlock } from '@/components/animate-block/AnimateBlock';
import { DetailsBtn } from '@/components/base/details-btn/DetailsBtn';
import { Icon } from '@/components/icons';
import { TLinks } from '@/types/interface';
import styles from './grid.module.scss';

interface IGridItem {
  item: TLinks;
}

export function GridItem({ item }: IGridItem) {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
  }, []);

  useEffect(() => {
    const portal = document.getElementById('portal');
    if (portal) portal.style.display = 'none';

    if (openModal && portal) {
      portal.style.display = 'flex';

      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
      document.body.style.overflowX = 'hidden';
    }
  }, [openModal]);

  const handelMore = () => {
    setOpenModal((val) => !val);
  };
  return (
    <a href={item.link[0]} rel="noreferrer" target="_blank" className={styles.item}>
      <div
        className={styles.gradient}
        style={{
          backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`,
        }}>
        <Icon name={item.icon.name} />

        {!['link_6', 'link_7', 'link_8'].includes(item._id) && (
          <DetailsBtn handelMore={handelMore} />
        )}
      </div>
      <div className={styles.title}>{item.title}</div>
      {item._id === 'link_4' && <AnimateBlock />}

      {ref.current &&
        createPortal(
          <PopUpModal open={openModal} handelMore={handelMore} item={item} />,
          ref.current,
        )}
    </a>
  );
}
