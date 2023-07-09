import { Link, useLocation } from 'react-router-dom';
import BurgerButton from '../BurgerButton/BurgerButton';

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
    <section className='navigation'>
      <nav className="nav">
        <div className="nav__container">
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
        </div>
        <Link
          to="/profile"
          className="profile-button"
        ></Link>
      </nav>
      <BurgerButton />
    </section>
  )
}

export default Navigation;