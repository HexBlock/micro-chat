import styles from '../profile.module.scss';

export const DisplayNameForm = () => {
  return (
    <form autoComplete="off" className={styles['profile-page__form']}>
      <h4 className={styles['profile-page__form-title']}>
        Change display name:
      </h4>

      <div>
        <label htmlFor="nick-id" className="form-label">
          Nick
        </label>
        <input id="nick-id" type="text" className="form-control" />
      </div>

      <div className="mt-2 d-flex align-items-center justify-content-end">
        <button type="submit" className="btn mc-button mc-button-flow">
          submit
        </button>
      </div>
    </form>
  );
};
