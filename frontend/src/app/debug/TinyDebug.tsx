import { Routing } from 'app/utils/routing/routing';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addMessage } from 'redux/features/chatSlice';
import { selectCurrentChat } from 'redux/features/friendSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import styles from './tiny-debug.module.scss';

export const TinyDebug = () => {
  const [message, setMessage] = useState('');
  const currentChat = useAppSelector(selectCurrentChat);
  const dispatch = useAppDispatch();

  const handleMessageEnter = (event: React.KeyboardEvent) => {
    if (!(event.key === 'Enter' && !event.shiftKey)) return;
    event.preventDefault();

    if (!currentChat?.id || !message) return;

    dispatch(
      addMessage({
        userId: currentChat.id,
        id: `${Math.random()}`,
        message: message,
        date: new Date().toISOString(),
      })
    );
  };

  return (
    <div className={styles.x}>
      <nav>
        <Link to={Routing.ROOT}>Login</Link> |{' '}
        <Link to={Routing.REGISTER}>Register</Link> |{' '}
        <Link to={Routing.PROFILE}>Profile</Link> |{' '}
        <Link to={Routing.MAIN}>Main</Link>
      </nav>

      <div className="d-flex">
        <input
          id="debug-chat-message"
          name="debug-chat-message"
          className="form-control"
          value={message}
          onKeyDown={handleMessageEnter}
          onInput={(event) =>
            setMessage((event.target as HTMLTextAreaElement).value)
          }
        />
      </div>
    </div>
  );
};
