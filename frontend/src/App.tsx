import { Route, Link, Routes } from 'react-router-dom';
import { Login } from './app/sites/login/Login';
import { Register } from './app/sites/register/Register';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Login</Link> | <Link to="register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};
