import { Route, Link, Routes } from 'react-router-dom';
import { Login } from './app/sites/login/Login';
import { Register } from './app/sites/register/Register';

export const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Login</Link> | <Link to="register">Register</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
