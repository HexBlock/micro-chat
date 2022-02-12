import { Route, Link, Routes } from 'react-router-dom';
import { Login } from './app/sites/login/Login';
import { Register } from './app/sites/register/Register';
import { Profile } from './app/sites/profile/Profile';
import { MainPage } from './app/sites/main/Main';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Login</Link> | <Link to="register">Register</Link> | <Link to="profile">Profile</Link> | <Link to="main">Main</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chat" element={<MainPage />} />
      </Routes>
    </>
  );
};
