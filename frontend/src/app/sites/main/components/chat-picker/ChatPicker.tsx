import styles from './cp.module.scss';

export const ChatPicker = () => {
  return (
    <div className={`common-card ${styles['chat-picker']}`}>
      <h1 className={styles['chat-picker__title']}>List:</h1>

      <div className={styles['chat-picker__list']}>
        <button className={`mt-2 ${styles['chat-pick']}`}>Friend 1</button>
        <button className={`mt-2 ${styles['chat-pick']} ${styles['active']}`}>
          Stranger 2
        </button>
        <button className={`mt-2 ${styles['chat-pick']}`}>
          Stranger 4<div className="new"></div>
        </button>
      </div>
    </div>
  );
};
