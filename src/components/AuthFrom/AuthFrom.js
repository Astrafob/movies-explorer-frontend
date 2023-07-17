import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo'
import { useState } from 'react';

function AuthFrom({ onSubmit, errorCatch, disabledInput }) {
  const { pathname } = useLocation();
  const [valueFrom, setValueForm] = useState({});
  const [errorMessageForm, setErrorMessageForm] = useState({});
  const formRegiserIsValid = (
    !errorMessageForm.name
    && !errorMessageForm.email
    && !errorMessageForm.password
    && errorMessageForm.name === ''
    && errorMessageForm.email === ''
    && errorMessageForm.password === ''
  );

  const formLoginIsValid = (
    !errorMessageForm.email
    && !errorMessageForm.password
    && errorMessageForm.email === ''
    && errorMessageForm.password === ''
  );

  function handleChangeName(event) {
    const { name, value } = event.target;
    setValueForm({
      ...valueFrom,
      [name]: value
    });

    setErrorMessageForm({
      ...errorMessageForm,
      [name]: event.target.validationMessage
    })
  }

  function handleChangeEmail(event) {
    const { name, value } = event.target;
    setValueForm({
      ...valueFrom,
      [name]: value
    });

    setErrorMessageForm({
      ...errorMessageForm,
      [name]: event.target.validationMessage
    })
  }

  function handleChangePassword(event) {
    const { name, value } = event.target;
    setValueForm({
      ...valueFrom,
      [name]: value
    });

    setErrorMessageForm({
      ...errorMessageForm,
      [name]: event.target.validationMessage
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(valueFrom);
  }

  const errorMessageNameClassName = (
    `auth__from-input-error ${errorMessageForm.name === undefined
      ? ''
      : 'auth__from-input-error_visible'
    }`
  )

  const errorMessageEmailClassName = (
    `auth__from-input-error ${errorMessageForm.email === undefined
      ? ''
      : 'auth__from-input-error_visible'
    }`
  )

  const errorMessagePasswordClassName = (
    `auth__from-input-error ${errorMessageForm.password === undefined
      ? ''
      : 'auth__from-input-error_visible'
    }`
  )

  const errorMessageCatchClassName = (
    `auth__from-catch-error ${errorCatch === undefined
      ? ''
      : 'auth__from-catch-error_visible'
    }`
  )

  function errorMessageCatchText() {
    if (errorCatch === "Получили ошибку: 409 Conflict") {
      return ("Пользователь с таким Email уже зарегистрирован")
    } if (errorCatch === "Получили ошибку: 400 Bad Request") {
      return ("Введены некоретные данные")
    } if (errorCatch === "Получили ошибку: 401 Unauthorized") {
      return ("Неверный логин или пароль")
    } return ("");
  }

  return (
    <section className="auth">
      <Logo />
      <h1 className="auth__title">
        {pathname === "/signup" ? "Добро пожаловать!" : "Рады видеть!"}
      </h1>
      <form
        id="authForm"
        className="auth__from"
        onSubmit={handleSubmit}
      >
        {pathname === "/signup"
          ? (
            <label className="auth__from-container">
              <span className="auth__from-name">Имя</span>
              <input
                className="auth__from-input"
                name="name"
                type="text"
                placeholder="Заполните Имя"
                minLength={2}
                maxLength={30}
                disabled={disabledInput}
                required
                onChange={handleChangeName}
              />
              <span
                className={errorMessageNameClassName}
              >
                {errorMessageForm.name || ''}
              </span>
            </label>
          ) : ''
        }
        <label className="auth__from-container">
          <span className="auth__from-name">E-mail</span>
          <input
            className="auth__from-input"
            name="email"
            type="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="Заполните E-mail"
            disabled={disabledInput}
            required
            onChange={handleChangeEmail}
          />
          <span
            className={errorMessageEmailClassName}
          >
            {errorMessageForm.email || ''}
          </span>
        </label>
        <label className="auth__from-container">
          <span className="auth__from-name">Пароль</span>
          <input
            className="auth__from-input"
            name="password"
            type="password"
            placeholder="Укажите пароль"
            minLength={6}
            disabled={disabledInput}
            required
            onChange={handleChangePassword}
          />
          <span
            className={errorMessagePasswordClassName}
          >
            {errorMessageForm.password || ''}
          </span>
        </label>
        <span
          className={errorMessageCatchClassName}
        >
          {errorMessageCatchText()}
        </span>
      </form>
      {pathname === "/signup"
        ? (
          <div className="auth__buttons-reg">
            <button
              className="auth__button"
              form="authForm"
              type="submit"
              disabled={!formRegiserIsValid}
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
          <div className="auth__buttons-log">
            <button
              className="auth__button"
              form="authForm"
              type="submit"
              disabled={!formLoginIsValid}
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