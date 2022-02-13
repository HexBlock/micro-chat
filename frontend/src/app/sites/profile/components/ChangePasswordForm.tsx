import styles from '../profile.module.scss';

export const ChangePasswordForm = () => {
  return (
    <form autoComplete="off" className={`${styles['profile-page__form']} mt-5`}>
      <h4 className={styles['profile-page__form-title']}>Change password:</h4>

      <div>
        <label htmlFor="current-pass-id" className="form-label">
          Current password
        </label>
        <input id="current-pass-id" type="password" className="form-control" />
      </div>
      <div className="mt-3">
        <label htmlFor="new-pass-id" className="form-label">
          New password
        </label>
        <input id="new-pass-id" type="password" className="form-control" />
      </div>
      <div className="mt-3">
        <label htmlFor="confirm-new-pass-id" className="form-label">
          Confirm password
        </label>
        <input
          id="confirm-new-pass-id"
          type="password"
          className="form-control"
        />
      </div>

      <div className="mt-2 d-flex align-items-center justify-content-end">
        <button type="submit" className="btn mc-button mc-button-flow">
          submit
        </button>
      </div>
    </form>
  );
};
