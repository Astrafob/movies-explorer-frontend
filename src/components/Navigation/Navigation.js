import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav className="nav">
          <Link
            to="/movies"
            className="nav__link"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="nav__link"
          >
            Сохраненные фильмы
          </Link>
      </nav>
      <Link
        to="/profile"
        className="profile"
      ></Link>
    </>
  )
}

export default Navigation;