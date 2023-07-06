import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {

  return (
    <header className="header">
      <Link
        to="/"
        className="header__link"
      >
        <img
          className="logo"
          src={headerLogo}
          alt="Логотип проекта"
        />
      </Link>
      {(loggedIn ?
        <>
          <Navigation />
        </>
        :
        <div className="header__menu">
          <Link
            className="header__register"
            to="/signup"
            type="button"
          >
            Регистрация
          </Link>
          <Link
            className="header__login"
            to="/signin"
            type="button"
          >
            Войти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;