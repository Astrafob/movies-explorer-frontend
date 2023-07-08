import { useEffect, useState } from 'react';
import Header from '../Header/Header';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdateUser }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru'
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleEditChange() {
    setIsEdit(true);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setCurrentUser({
      name: name,
      email: email,
    });

    setIsEdit(false);
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
      />
      <main>
        <section className="profile__container">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form className="profile__form">
            <label className="profile__form-container">
              <span className="profile__form-text">Имя</span>
              <input
                className="profile__form-input"
                name="name"
                placeholder="Заполните Имя"
                value={name || ""}
                type="text"
                minLength={2}
                maxLength={20}
                disabled={!isEdit}
                onChange={handleChangeName}
                required
              ></input>
            </label>
            <label className="profile__form-container">
              <span className="profile__form-text">E-mail</span>
              <input
                className="profile__form-input"
                name="email"
                placeholder="Запоните E-mail"
                value={email}
                type="email"
                disabled={!isEdit}
                onChange={handleChangeEmail}
                required
              ></input>
            </label>
          </form>
          <div className="profile__buttons">
            {isEdit
              ? (
                <button
                  className="profile__submit"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Сохранить
                </button>
              )
              : (
                <>
                  <button
                    className="profile__button profile__button_type_edit"
                    type="button"
                    onClick={handleEditChange}
                  >
                    Редактировать
                  </button>
                  <button
                    className="profile__button profile__button_type_exit"
                    type="button"
                  >
                    Выйти из аккаунта
                  </button>
                </>
              )}
          </div>
        </section>
      </main >
    </>
  )
}

export default Profile;