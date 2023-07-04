import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';

function Header({ pathSignUp, pathSignIn, onSignUp, onSignIn }) {
  return (
    <header className="header">
      <img
        className="logo"
        src={headerLogo}
        alt="Логотип проекта"
      />
      <div className="header__menu">
        <Link
          className="header__register"
          to={pathSignUp}
          type="button"
          onClick={onSignUp}
        >
          Регистрация
        </Link>
        <Link
          className="header__login"
          to={pathSignIn}
          type="button"
          onClick={onSignIn}
        >
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;