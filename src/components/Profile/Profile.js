import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Profile({ loggedIn, setLoggedIn, onUpdateUser, isOpen, onClose, isSuccess }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const [valueFrom, setValueForm] = useState({});
  const [errorMessageForm, setErrorMessageForm] = useState({});
  const formProfileIsValid = (
    (!errorMessageForm.name
      && !errorMessageForm.email)
    && (errorMessageForm.name === ''
      || errorMessageForm.email === '')
    && (name !== currentUser.name
      || email !== currentUser.email)
  );

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(event) {
    const { name, value } = event.target;
    setValueForm({
      ...valueFrom,
      [name]: value
    });

    setErrorMessageForm({
      ...errorMessageForm,
      [name]: event.target.validationMessage
    });
    setName(event.target.value);
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
    });
    setEmail(event.target.value);
  }

  function handleEditChange(event) {
    event.preventDefault();

    setIsEdit(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      name: name,
      email: email,
    });

    setIsEdit(false);
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/');
  }

  const errorMessageNameClassName = (
    `profile__from-input-error ${errorMessageForm.name === undefined
      ? ''
      : 'profile__from-input-error_visible'
    }`
  )

  const errorMessageEmailClassName = (
    `profile__from-input-error ${errorMessageForm.email === undefined
      ? ''
      : 'profile__from-input-error_visible'
    }`
  )

  return (
    <div className='page__container'>
      <Header
        loggedIn={loggedIn}
      />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form
            id='profileForm'
            className="profile__form"
          >
            <label className="profile__form-container">
              <span className="profile__form-text">Имя</span>
              <input
                className="profile__form-input"
                name="name"
                placeholder="Заполните Имя"
                value={name || ""}
                type="text"
                minLength={2}
                maxLength={30}
                disabled={!isEdit}
                onChange={handleChangeName}
                required
              />
              <span
                className={errorMessageNameClassName}
              >
                {errorMessageForm.name || ''}
              </span>
            </label>
            <label className="profile__form-container">
              <span className="profile__form-text">E-mail</span>
              <input
                className="profile__form-input"
                name="email"
                placeholder="Запоните E-mail"
                value={email || ""}
                type="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                disabled={!isEdit}
                onChange={handleChangeEmail}
                required
              />
              <span
                className={errorMessageEmailClassName}
              >
                {errorMessageForm.email || ''}
              </span>
            </label>
          </form>
          {isEdit
            ? (
              <div className="profile__buttons">
                <button
                  form="profileForm"
                  className="profile__submit"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!formProfileIsValid}
                >
                  Сохранить
                </button>
              </div>
            )
            : (
              <div className="profile__buttons">
                <button
                  className="profile__button profile__button_type_edit"
                  type="button"
                  onClick={handleEditChange}
                >
                  Редактировать
                </button>
                <Link
                  to="/"
                  className="profile__button profile__button_type_exit"
                  type="button"
                  onClick={handleSignOut}
                >
                  Выйти из аккаунта
                </Link>
              </div>
            )}
          <InfoTooltip
            isOpen={isOpen}
            onClose={onClose}
            isSuccess={isSuccess}
          />
        </section>
      </main >
    </div >
  )
}

export default Profile;