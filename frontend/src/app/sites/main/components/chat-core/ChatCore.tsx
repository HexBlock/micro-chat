import styles from './cc.module.scss';
import { ChatMessage } from './chat-message/ChatMessage';
import { mockChat } from './mock-chat';

export const ChatCore = () => {
  const messages = mockChat.map((msg) => {
    const { id, ...properties } = msg;
    return <ChatMessage key={id} {...properties} />;
  });

  return (
    <div className={styles['chat-core']}>
      <div className={styles['chat-core__scroll']}>{messages}</div>
    </div>
  );
};
