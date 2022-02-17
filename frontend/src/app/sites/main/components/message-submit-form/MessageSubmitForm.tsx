import React, { useRef, useState } from 'react';

export const MessageSubmitForm = () => {
  const [message, setMessage] = useState('');
  const formElement = useRef<HTMLFormElement>(null);

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

    console.log('new message is:', {
      message
    });
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
          id="new-message"
          name="new-message"
          rows={2}
          className="form-control"
          value={message}
          onKeyDown={handleMessageEnter}
          onInput={event => setMessage((event.target as HTMLTextAreaElement).value)}
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
