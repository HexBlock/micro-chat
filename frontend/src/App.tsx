import { Route, Link, Routes } from 'react-router-dom';
import { Login } from 'app/sites/login/Login';
import { Register } from 'app/sites/register/Register';
import { Profile } from 'app/sites/profile/Profile';
import { MainPage } from 'app/sites/main/Main';
import { Routing } from 'app/utils/routing/routing';

export const App = () => {
  return (
    <>
      <nav>
        <Link to={Routing.ROOT}>Login</Link> |{' '}
        <Link to={Routing.REGISTER}>Register</Link> |{' '}
        <Link to={Routing.PROFILE}>Profile</Link> |{' '}
        <Link to={Routing.MAIN}>Main</Link>
      </nav>

      <Routes>
        <Route path={Routing.ROOT} element={<Login />} />
        <Route path={Routing.REGISTER} element={<Register />} />
        <Route path={Routing.PROFILE} element={<Profile />} />
        <Route path={Routing.MAIN} element={<MainPage />} />
      </Routes>
    </>
  );
};
