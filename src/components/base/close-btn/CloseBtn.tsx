import styles from './CloseBtn.module.scss';

interface ICloseBtn {
  type: string;
  handelMore: () => void;
}

export function CloseBtn({ type, handelMore }: ICloseBtn) {
  return (
    <div className={styles.close} onClick={handelMore}>
      {type === 'type-1' && (
        <button className={styles[type]}>
          <span className={styles.inner}>
            <span className={styles.label}>Close</span>
          </span>
        </button>
      )}
      {type === 'type-2' && <button className={styles['type-2']}></button>}
      {type === 'type-3' && <button className={styles['type-3']}></button>}
    </div>
  );
}
