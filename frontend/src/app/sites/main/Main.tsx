import styles from './main.module.scss';

export const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <div className="container">
        <div className={`row ${styles['main-page__top']}`}>
          <div className="col-12 col-md-4 col-lg-3">
            <div className={`common-card ${styles['main-page__picker']}`}>
              <h1 className={styles['main-page__picker-title']}>List:</h1>

              <div className={styles['main-page__list']}>
                <button className={`mt-2 ${styles['chat-pick']}`}>
                  Friend 1
                </button>
                <button
                  className={`mt-2 ${styles['chat-pick']} ${styles['active']}`}
                >
                  Stranger 2
                </button>
                <button className={`mt-2 ${styles['chat-pick']}`}>
                  Stranger 4<div className="new"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-9 mt-5 mt-md-0">
            <div className={styles['chat-core']}>
              <div className={styles['chat-core__scroll']}>
                <div className={styles['chat-message']}>
                  <div className={styles['chat-message__who']}>
                    nick, 2022-02-07 20:21:34
                  </div>
                  <div className={styles['chat-message__msg']}>Hello!</div>
                </div>

                <div className={`${styles['chat-message']} ${styles['mine']}`}>
                  <div className={styles['chat-message__who']}>
                    me, 2022-02-07 20:21:35
                  </div>
                  <div className={styles['chat-message__msg']}>hi!</div>
                </div>

                <div className={styles['chat-message']}>
                  <div className={styles['chat-message__who']}>
                    nick, 2022-02-07 20:22:11
                  </div>
                  <div className={styles['chat-message__msg']}>
                    How be your day? Can I test for &quot;wwww&quot;?
                  </div>
                </div>

                <div className={styles['chat-message']}>
                  <div className={styles['chat-message__who']}>
                    nick, 2022-02-07 20:22:11
                  </div>
                  <div className={styles['chat-message__msg']}>
                    WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWv
                  </div>
                </div>

                <div className={`${styles['chat-message']} ${styles['mine']}`}>
                  <div className={styles['chat-message__who']}>
                    me, 2022-02-07 20:21:35
                  </div>
                  <div className={styles['chat-message__msg']}>
                    no no no no no no no no no no
                  </div>
                </div>
              </div>
            </div>
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
