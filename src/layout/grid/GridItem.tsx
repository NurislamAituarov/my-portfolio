import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { PopUpModal } from '@/components/popup-modal/PopUpModal';
import { AnimateBlock } from '@/components/animate-block/AnimateBlock';
import { Icon } from '@/components/icons';
import { TLinks } from '@/types/interface';
import styles from './grid.module.scss';
import { DetailsBtn } from '@/components/base/details-btn/DetailsBtn';
import resume from '@/assets/resume.pdf';

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

  const downloadedPdf = () => {
    item._id === 'link_5' &&
      fetch('/resume.pdf')
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'resume.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        });
  };

  return (
    <a
      href={item.link[0]}
      onClick={downloadedPdf}
      rel="noreferrer"
      target="_blank"
      className={styles.item}>
      <div
        className={styles.gradient}
        style={{
          backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`,
        }}>
        <Icon name={item.icon.name} />

        {!['link_6', 'link_5', 'link_7'].includes(item._id) && (
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
