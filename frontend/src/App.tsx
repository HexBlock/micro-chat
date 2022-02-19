import { Route, Routes } from 'react-router-dom';
import { Login } from 'app/sites/login/Login';
import { Register } from 'app/sites/register/Register';
import { Profile } from 'app/sites/profile/Profile';
import { MainPage } from 'app/sites/main/Main';
import { Routing } from 'app/utils/routing/routing';
import { TinyDebug } from 'app/debug/TinyDebug';

export const App = () => {
  return (
    <>
      <TinyDebug />

      <Routes>
        <Route path={Routing.ROOT} element={<Login />} />
        <Route path={Routing.REGISTER} element={<Register />} />
        <Route path={Routing.PROFILE} element={<Profile />} />
        <Route path={Routing.MAIN} element={<MainPage />} />
      </Routes>
    </>
  );
};
