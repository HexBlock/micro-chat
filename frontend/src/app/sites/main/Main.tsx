import { Navigation } from '../../core/navigation/Navigation';
import { ChatCore } from './components/chat-core/ChatCore';
import { ChatPicker } from './components/chat-picker/ChatPicker';
import styles from './main.module.scss';

export const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <div className="container">
        <Navigation />

        <div className={`row ${styles['main-page__top']}`}>
          <div className="col-12 col-md-4 col-lg-3">
            <ChatPicker />
          </div>

          <div className="col-12 col-md-8 col-lg-9 mt-5 mt-md-0">
            <ChatCore />

            <div className="mt-3">
              <form autoComplete="off">
                <div className="mt-1">
                  <label htmlFor="message-id" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message-id"
                    rows={2}
                    className="form-control"
                  ></textarea>
                </div>

                <div className="mt-1 d-flex align-items-center justify-content-end">
                  <button
                    type="submit"
                    className="btn mc-button mc-button-solid"
                  >
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
