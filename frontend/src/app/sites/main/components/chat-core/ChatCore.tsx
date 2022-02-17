import { MOCK_USER_ID, selectChatWithUser } from 'redux/features/chatSlice';
import { useAppSelector } from 'redux/hooks';
import { ChatMessage } from './chat-message/ChatMessage';
import styles from './cc.module.scss';

export const ChatCore = () => {
  const storedMessages = useAppSelector(selectChatWithUser(MOCK_USER_ID));

  const messages = storedMessages.map((msg) => (
    <ChatMessage
      key={msg.id}
      name={msg.currentUser ? undefined : 'mockname'} // TODO: current chat username!
      message={msg.message}
      date={msg.date}
      currentUser={msg.currentUser}
    />
  ));

  return (
    <div className={styles['chat-core']}>
      <div className={styles['chat-core__scroll']}>{messages}</div>
    </div>
  );
};
