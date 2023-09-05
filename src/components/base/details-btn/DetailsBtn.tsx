import styles from './DetailsBtn.module.scss';

interface IDetailsBtn {
  handelMore: () => void;
}

export function DetailsBtn({ handelMore }: IDetailsBtn) {
  return (
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
  );
}
