import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function BurgerButton() {
  const [openBurger, isOpenBurger] = useState(false);
  const { pathname } = useLocation();

  function handleOpenBurger(event) {
    isOpenBurger(!openBurger);
    console.log(event);
  }

  const thisPageMoviesClassName = (
    `burger__menu-link ${pathname === '/movies'
      ? 'burger__menu-link_active'
      : ''
    }`
  );

  const thisPageSaveMoviesClassName = (
    `burger__menu-link ${pathname === '/saved-movies'
      ? 'burger__menu-link_active'
      : ''
    }`
  );

  const thisPageMainClassName = (
    `burger__menu-link ${pathname === '/'
      ? 'burger__menu-link_active'
      : ''
    }`
  );


  return (
    <section className="burger">
      <div className={`burger__overlay ${openBurger ? "burger__overlay_visible" : ""}`}>
        <div className={`burger__menu ${openBurger ? "burger__menu_opened" : ""}`}>
          <ul className="burger__menu-list">
            <li>
              <Link
                to="/"
                className={thisPageMainClassName}
              >Главная</Link>
            </li>
            <li>
              <Link
                to="/movies"
                className={thisPageMoviesClassName}
              >Фильмы</Link>
            </li>
            <li>
              <Link
                to="/saved-movies"
                className={thisPageSaveMoviesClassName}
              >Сохраненные фильмы</Link>
            </li>
          </ul>
          <Link
            to="/profile"
            className="burger__menu-profile"
          ></Link>
        </div>
      </div>
      <button
        className="burger__button"
        type="button"
        onClick={handleOpenBurger}
      >
        <span className={`burger__span ${openBurger ? "burger__button_opened" : ""}`} />
      </button>
    </section>
  )
}

export default BurgerButton;