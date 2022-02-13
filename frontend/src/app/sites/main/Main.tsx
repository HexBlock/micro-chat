import { Navigation } from '../../core/navigation/Navigation';
import { ChatCore } from './components/chat-core/ChatCore';
import { ChatPicker } from './components/chat-picker/ChatPicker';
import { MessageSubmitForm } from './components/message-submit-form/MessageSubmitForm';
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
              <MessageSubmitForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
