import { useContext } from 'react';
import cn from 'classnames';

import { Context } from '@/utils/context';
import { TLinks } from '@/types/interface';
import { CloseBtn } from '../base/close-btn/CloseBtn';
import styles from './PopUpModal.module.scss';

interface IPopUpModal {
  text: string;
  open: boolean;
  item: TLinks;
  handelMore: () => void;
}

export const PopUpModal = ({ text, open, handelMore, item }: IPopUpModal) => {
  const links = useContext(Context);
  return (
    <>
      <div className={open ? styles.modal : ''}>
        <p>Названия: {item.title} </p>
        {item.technical_task && (
          <p>
            Техническое задания:
            <br />
            {item.technical_task.map((el, ind) => {
              return <div key={ind}>- {el}</div>;
            })}
          </p>
        )}
        <p>
          Используемый стек:
          <br></br>
          <strong>FrontEnd</strong> :
          <span>{item.about_application && item.about_application[0]}</span>
          {item.about_application && item.about_application[1] && (
            <>
              <br></br>
              <strong>BackEnd</strong> :<span>{item.about_application[1]}</span>
            </>
          )}
        </p>
        <p>Ссылка на репозиторий GitHub: {item.link[1]}</p>
        <p>Ссылка на приложения: {item.link[0]}</p>

        <CloseBtn type="type-1" handelMore={handelMore} />
      </div>
      <div className={styles.overlay} onClick={() => handelMore()} />
    </>
  );
};
