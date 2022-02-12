import { Routing } from 'app/utils/routing/routing';
import { Link } from 'react-router-dom';
import styles from './register.module.scss';

export const Register = () => {
  return (
    <div className={styles['register-page']}>
      <div className={`${styles['register-page__content']} common-card`}>
        <h1>Register</h1>

        <form autoComplete="off">
          <div className="mt-3">
            <label htmlFor="register-id" className="form-label">
              Login
            </label>
            <input id="register-id" type="text" className="form-control" />
          </div>
          <div className="mt-3">
            <label htmlFor="pass-id" className="form-label">
              Password
            </label>
            <input id="pass-id" type="password" className="form-control" />
          </div>
          <div className="mt-3">
            <label htmlFor="confirm-pass-id" className="form-label">
              Confirm password
            </label>
            <input
              id="confirm-pass-id"
              type="password"
              className="form-control"
            />
          </div>

          <div className="mt-5 d-flex align-items-center justify-content-between">
            <button type="submit" className="btn mc-button mc-button-solid">
              submit
            </button>

            <Link to={Routing.ROOT} className="mc-anchor">
              (return to login)
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
