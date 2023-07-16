import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const dataUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(dataUser.name);
    setEmail(dataUser.email);
  }, [dataUser]);

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

    

    setIsEdit(false);
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/sign-in');
  }

  return (
    <div className='page__container'>
      <Header
        loggedIn={loggedIn}
      />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {dataUser.name}!</h1>
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
          {isEdit
            ? (
              <div className="profile__buttons">
                <button
                  className="profile__submit"
                  type="submit"
                  onClick={handleSubmit}
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
                  to="/signin"
                  className="profile__button profile__button_type_exit"
                  type="button"
                  onClick={handleSignOut}
                >
                  Выйти из аккаунта
                </Link>
              </div>
            )}
        </section>
      </main >
    </div >
  )
}

export default Profile;