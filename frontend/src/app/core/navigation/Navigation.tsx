import { navMap } from 'app/utils/routing/nav-map';
import { Routing } from 'app/utils/routing/routing';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { logout, selectAccessToken } from 'redux/features/authSlice';
export const Navigation = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const login = useAppSelector(selectAccessToken);

  const links = navMap.map((el, idx) => {
    const currentPage = pathname === el.path;
    return (
      <li key={idx} className="nav-item">
        <Link
          to={el.path}
          aria-current={currentPage ? 'page' : undefined}
          className={currentPage ? 'nav-link active' : 'nav-link'}
        >
          {el.name}
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

      {login ? (
        <span className="mc-navigator__display">(<span className='active'>{login}</span>)</span>
      ) : null}

      <button
        type="button"
        className="btn mc-button mc-button-flow"
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </nav>
  );
};
