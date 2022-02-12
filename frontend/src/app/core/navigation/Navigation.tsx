import { navMap } from 'app/utils/routing/nav-map';
import { Routing } from 'app/utils/routing/routing';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  const links = navMap.map((xx, idx) => {
    const currentPage = pathname === xx.path;
    return (
      <li key={idx} className="nav-item">
        <Link
          to={xx.path}
          aria-current={currentPage ? 'page' : undefined}
          className={currentPage ? 'nav-link active' : 'nav-link'}
        >
          {xx.name}
        </Link>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand mc-navigator">
      <Link to={Routing.ROOT} className="navbar-brand">
        <b>Micro Chat</b>
      </Link>

      <ul className="navbar-nav me-auto">{links}</ul>

      <button type="button" className="btn mc-button mc-button-flow">
        logout
      </button>
    </nav>
  );
};
