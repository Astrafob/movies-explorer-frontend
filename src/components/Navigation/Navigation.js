import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const { pathname } = useLocation();

  const thisPageMoviesClassName = (
    `nav__link ${pathname === '/movies'
      ? 'nav__link_active'
      : ''
    }`
  );

  const thisPageSaveMoviesClassName = (
    `nav__link ${pathname === '/saved-movies'
      ? 'nav__link_active'
      : '' 
    }`
  );

  return (
    <>
      <nav className="nav">
        <Link
          to="/movies"
          className={thisPageMoviesClassName}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={thisPageSaveMoviesClassName}
        >
          Сохраненные фильмы
        </Link>
      </nav>
      <Link
        to="/profile"
        className="profile-button"
      ></Link>
    </>
  )
}

export default Navigation;