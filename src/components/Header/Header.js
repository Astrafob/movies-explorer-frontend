import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header({ loggedIn }) {

  return (
    <header className="header">
      <Logo />
      {(loggedIn ?
          <Navigation />
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