import { useContext, useRef } from 'react';
import { Transition } from 'react-transition-group';
import cn from 'classnames';

import { Context } from '@/utils/context';
import { TLinks } from '@/types/interface';
import { CloseBtn } from '../base/close-btn/CloseBtn';
import styles from './PopUpModal.module.scss';

interface IPopUpModal {
  open: boolean;
  item: TLinks;
  handelMore: () => void;
}

export const PopUpModal = ({ open, handelMore, item }: IPopUpModal) => {
  const refModal = useRef(null);
  const links = useContext(Context);

  return (
    <>
      <Transition nodeRef={refModal} in={open} timeout={300} unmountOnExit={true}>
        {(state) => (
          <div ref={refModal} className={open ? `${styles.modal} ${styles[state]}` : ''}>
            <CloseBtn type="type-1" handelMore={handelMore} />
            <div className={styles.title}>
              <strong>Названия :</strong> {item.title}
            </div>
            {item.technical_task && (
              <strong>
                Техническое задания:
                <br />
                {item.technical_task.map((el, ind) => {
                  return <div key={ind}>- {el}</div>;
                })}
              </strong>
            )}
            {item.description && (
              <div className={styles.title}>
                <strong>Краткое описание:</strong>
                <br />
                <span>{item.description}</span>
              </div>
            )}
            <div className={styles.title}>
              <strong>Используемый стек:</strong>
              <br></br>
              <em>FrontEnd: </em>
              <span>{item.about_application && item.about_application[0]}</span>
              {item.about_application && item.about_application[1] && (
                <>
                  <br></br>
                  <em>BackEnd :</em> <span>{item.about_application[1]}</span>
                </>
              )}
            </div>
            <div className={styles.title}>
              <strong>Ссылка на репозиторий GitHub:</strong>{' '}
              <a rel="noreferrer" target="_blank" href={item.link[1]}>
                {item.link[1]}
              </a>
            </div>
            <div className={styles.title}>
              <strong>Ссылка на приложения:</strong>
              <a rel="noreferrer" target="_blank" href={item.link[0]}>
                {item.link[0]}
              </a>
            </div>
          </div>
        )}
      </Transition>

      {open && <div className={styles.overlay} onClick={() => handelMore()} />}
    </>
  );
};
