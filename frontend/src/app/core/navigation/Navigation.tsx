import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand mc-navigator">
      <Link to="/" className="navbar-brand">
        <b>Micro Chat</b>
      </Link>

      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/chat" className="nav-link">
            Chat
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" aria-current="page" className="nav-link active">
            Profile
          </Link>
        </li>
      </ul>

      <button type="button" className="btn mc-button mc-button-flow">
        logout
      </button>
    </nav>
  );
};
