import { Routing } from 'app/utils/routing/routing';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { login } from 'redux/features/authSlice';
import { useRef } from 'react';
import styles from './login.module.scss';

const mockAuth = {
  accessToken: 'login1',
  refreshToken: 'djseucvhdsrugrdshgyouig',
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginInput = useRef<HTMLInputElement>(null);

  return (
    <div className={styles['login-page']}>
      <div className={`${styles['login-page__content']} common-card`}>
        <h1>Hello!</h1>

        <form
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();
            const loginValue = loginInput.current?.value || null;

            dispatch(login({ ...mockAuth, accessToken: loginValue }));
            navigate(Routing.MAIN);
          }}
        >
          <div className="mt-3">
            <label htmlFor="login-id" className="form-label">
              Login
            </label>
            <input
              ref={loginInput}
              id="login-id"
              type="text"
              className="form-control"
            />
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

            <Link to={Routing.REGISTER} className="mc-anchor">
              sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
