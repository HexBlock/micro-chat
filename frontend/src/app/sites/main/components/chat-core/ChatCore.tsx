import { selectChatWithUser } from 'redux/features/chatSlice';
import { useAppSelector } from 'redux/hooks';
import { ChatMessage } from './chat-message/ChatMessage';
import styles from './cc.module.scss';
import { selectCurrentChat } from 'redux/features/friendSlice';

export const ChatCore = () => {
  const currentChat = useAppSelector(selectCurrentChat);
  const storedMessages = !currentChat
    ? []
    : useAppSelector(selectChatWithUser(currentChat.id));

  const messages = storedMessages.map((msg) => (
    <ChatMessage
      key={msg.id}
      name={msg.currentUser ? undefined : currentChat?.name}
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
