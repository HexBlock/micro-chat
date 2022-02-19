import React, { useEffect, useRef, useState } from 'react';
import { addMessage } from 'redux/features/chatSlice';
import { selectCurrentChat } from 'redux/features/friendSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export const MessageSubmitForm = () => {
  const dispatch = useAppDispatch();
  const currentChat = useAppSelector(selectCurrentChat);
  const [message, setMessage] = useState('');
  const formElement = useRef<HTMLFormElement>(null);
  const txtAreaElement = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setMessage('');
    txtAreaElement.current?.focus();
  }, [currentChat]);

  const handleMessageEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      formElement.current?.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
    }
  };
  const handleSubmitNewMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!currentChat?.id || !message) return;

    dispatch(
      addMessage({
        userId: currentChat.id,
        id: `${Math.random()}`,
        message: message,
        date: new Date().toISOString(),
        currentUser: true,
      })
    );
    setMessage('');
  };

  return (
    <form
      ref={formElement}
      autoComplete="off"
      onSubmit={handleSubmitNewMessage}
    >
      <div className="mt-1">
        <label htmlFor="new-message" className="form-label">
          Message
        </label>
        <textarea
          ref={txtAreaElement}
          id="new-message"
          name="new-message"
          rows={2}
          className="form-control"
          value={message}
          onKeyDown={handleMessageEnter}
          onInput={(event) =>
            setMessage((event.target as HTMLTextAreaElement).value)
          }
        ></textarea>
      </div>

      <div className="mt-1 d-flex align-items-center justify-content-end">
        <button type="submit" className="btn mc-button mc-button-solid">
          send
        </button>
      </div>
    </form>
  );
};
