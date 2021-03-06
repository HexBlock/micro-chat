import { withAuthGuard } from 'app/utils/routing/with-auth.guard';
import { selectAccessToken } from 'redux/features/authSlice';
import { useAppSelector } from 'redux/hooks';
import { Navigation } from '../../core/navigation/Navigation';
import { ChangePasswordForm } from './components/ChangePasswordForm';
import { DisplayNameForm } from './components/DisplayNameForm';
import styles from './profile.module.scss';

const ProfileInit = () => {
  const login = useAppSelector(selectAccessToken); // TODO: Fix and change to user data and login

  return (
    <div className={styles['profile-page']}>
      <div className="container">
        <Navigation />

        <h1 className={`text-truncate ${styles['profile-page__top']}`}>
          Welcome, {login}
        </h1>

        <div className={`row ${styles['profile-page__top']}`}>
          <div className="col-12 col-md-4">
            <div className="common-card">
              <h2>Data:</h2>

              <div className="mt-2 text-truncate">
                <b>Login:</b> {login}
              </div>
              <div className="mt-2 text-truncate">
                <b>Nick:</b> [to be added]
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8 mt-5 mt-md-0">
            <div className={styles['profile-page__edit']}>
              <h3>Edit profile:</h3>

              <div className="row mt-4">
                <div className="col-11 col-lg-9 col-xl-7">
                  <DisplayNameForm />

                  <ChangePasswordForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Profile = withAuthGuard(ProfileInit);
