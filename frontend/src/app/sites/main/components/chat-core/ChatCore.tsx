import { selectChatWithUser } from 'redux/features/chatSlice';
import { useAppSelector } from 'redux/hooks';
import { ChatMessage } from './chat-message/ChatMessage';
import styles from './cc.module.scss';
import { selectCurrentChat } from 'redux/features/friendSlice';
import { useRef } from 'react';

export const ChatCore = () => {
  const scrollDivRef = useRef<HTMLDivElement>(null);

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

  if (scrollDivRef.current) {
    const _div = scrollDivRef.current;
    if (_div.scrollHeight - _div.clientHeight - 40 < _div.scrollTop) {
      setTimeout(() => {
        _div.scrollTop = _div.scrollHeight;
      });
    }
  }

  return (
    <div className={styles['chat-core']}>
      <div ref={scrollDivRef} className={styles['chat-core__scroll']}>
        {messages}
      </div>
    </div>
  );
};
