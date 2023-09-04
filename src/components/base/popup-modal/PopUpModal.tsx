import cn from 'classnames';
import styles from './PopUpModal.module.scss';
import { CloseBtn } from '../close-btn/CloseBtn';

interface IPopUpModal {
  text: string;
  open: boolean;
  handelMore: () => void;
}

export const PopUpModal = ({ text, open, handelMore }: IPopUpModal) => {
  return (
    <>
      <div className={open ? styles.modal : ''}>
        <p>Названия:</p>
        <p>Используемый стек:</p>
        <p>Ссылка на репозиторий GitHub:</p>
        <p>Ссылка на приложения:</p>

        <CloseBtn type="type-1" handelMore={handelMore} />
      </div>
      <div className={styles.overlay} onClick={() => handelMore()} />
    </>
  );
};
