export const MessageSubmitForm = () => {
  return (
    <form autoComplete="off">
      <div className="mt-1">
        <label htmlFor="message-id" className="form-label">
          Message
        </label>
        <textarea id="message-id" rows={2} className="form-control"></textarea>
      </div>

      <div className="mt-1 d-flex align-items-center justify-content-end">
        <button type="submit" className="btn mc-button mc-button-solid">
          send
        </button>
      </div>
    </form>
  );
};
