import { Routing } from 'app/utils/routing/routing';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';

export const Login = () => {
  return (
    <div className={styles['login-page']}>
      <div className={`${styles['login-page__content']} common-card`}>
        <h1>Hello!</h1>

        <form autoComplete="off">
          <div className="mt-3">
            <label htmlFor="login-id" className="form-label">
              Login
            </label>
            <input id="login-id" type="text" className="form-control" />
          </div>
          <div className="mt-3">
            <label htmlFor="pass-id" className="form-label">
              Password
            </label>
            <input id="pass-id" type="password" className="form-control" />
          </div>

          <div className="mt-5 d-flex align-items-center justify-content-between">
            <button type="submit" className="btn mc-button mc-button-flow">
              sign in
            </button>

            <Link to={Routing.REGISTER} className="mc-anchor">sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
