import { Navigation } from '../../core/navigation/Navigation';
import styles from './profile.module.scss';

export const Profile = () => {
  return (
    <div className={styles['profile-page']}>
      <div className="container">
        <Navigation />

        <h1 className={styles['profile-page__top']}>Welcome, yourlogin here</h1>

        <div className={`row ${styles['profile-page__top']}`}>
          <div className="col-12 col-md-4">
            <div className="common-card">
              <h2>Data:</h2>

              <div className="mt-2">
                <b>Login:</b> login
              </div>
              <div className="mt-2">
                <b>Nick:</b> nick || login
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8 mt-5 mt-md-0">
            <div className={styles['profile-page__edit']}>
              <h3>Edit profile:</h3>

              <div className="row mt-4">
                <div className="col-11 col-lg-9 col-xl-7">
                  <form
                    autoComplete="off"
                    className={styles['profile-page__form']}
                  >
                    <h4 className={styles['profile-page__form-title']}>
                      Change display name:
                    </h4>

                    <div>
                      <label htmlFor="nick-id" className="form-label">
                        Nick
                      </label>
                      <input
                        id="nick-id"
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="mt-2 d-flex align-items-center justify-content-end">
                      <button
                        type="submit"
                        className="btn mc-button mc-button-flow"
                      >
                        submit
                      </button>
                    </div>
                  </form>

                  <form
                    autoComplete="off"
                    className={`${styles['profile-page__form']} mt-5`}
                  >
                    <h4 className={styles['profile-page__form-title']}>
                      Change password:
                    </h4>

                    <div>
                      <label htmlFor="current-pass-id" className="form-label">
                        Current password
                      </label>
                      <input
                        id="current-pass-id"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="new-pass-id" className="form-label">
                        New password
                      </label>
                      <input
                        id="new-pass-id"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        htmlFor="confirm-new-pass-id"
                        className="form-label"
                      >
                        Confirm password
                      </label>
                      <input
                        id="confirm-new-pass-id"
                        type="password"
                        className="form-control"
                      />
                    </div>

                    <div className="mt-2 d-flex align-items-center justify-content-end">
                      <button
                        type="submit"
                        className="btn mc-button mc-button-flow"
                      >
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
