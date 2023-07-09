import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo'

function AuthFrom() {
  const { pathname } = useLocation();

  return (
    <section className="auth">
      <Logo />
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form className="auth__from">
        <label className="auth__from-container">
          <p className="auth__from-name">Имя</p>
          <input
            className="auth__from-input"
            name="userName"
            type="text"
            placeholder="Заполните Имя"
            required
          ></input>
          <span className="auth__from-input-error"></span>
        </label>
        {pathname === "/signup"
          ? (
            <label className="auth__from-container">
              <p className="auth__from-name">E-mail</p>
              <input
                className="auth__from-input"
                name="email"
                type="email"
                placeholder="Заполните E-mail"
                autoComplete="email"
                required
              ></input>
              <span className="auth__from-input-error"></span>
            </label>
          ) : ''
        }
        <label className="auth__from-container">
          <p className="auth__from-name">Пароль</p>
          <input
            className="auth__from-input"
            name="password"
            type="password"
            placeholder="Укажите пароль"
            autoComplete="password"
            required
          ></input>
          <span className="auth__from-input-error"></span>
        </label>
      </form>
      {pathname === "/signup"
        ? (
          <div className="auth__buttons">
            <button
              className="auth__button"
              type="submit"
            >
              Зарегистрироваться
            </button>
            <div className="auth__button-wrapper">
              <p className="auth__question">Уже зарегистрированы?</p>
              <Link
                to="/signin"
                className="auth__link"
              >
                Войти
              </Link>
            </div>
          </div>
        ) : (
          <div className="auth__buttons">
            <button
              className="auth__button"
              type="submit"
            >
              Войти
            </button>
            <div className="auth__button-wrapper">
              <p className="auth__question">Ещё не зарегистрированы?</p>
              <Link
                to="/signup"
                className="auth__link"
              >
                Регистрация
              </Link>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default AuthFrom;