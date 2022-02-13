import styles from './cm.module.scss';
import { format } from 'date-fns';

type Props = {
  name: string;
  message: string;
  date: Date;
  currentUser: boolean;
};

export const ChatMessage = ({ name, message, date, currentUser }: Props) => {
  const dateString = format(date, 'yyyy-MM-dd HH:mm:ss');
  const who = currentUser ? 'me' : name;
  const cssMessage = currentUser
    ? `${styles['chat-message']} ${styles['mine']}`
    : styles['chat-message'];
  ('');

  return (
    <div className={cssMessage}>
      <div className={styles['chat-message__who']}>
        {who}, {dateString}
      </div>
      <div className={styles['chat-message__msg']}>{message}</div>
    </div>
  );
};