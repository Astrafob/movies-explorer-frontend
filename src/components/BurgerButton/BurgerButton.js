import { useState } from "react";

function BurgerButton() {
  const [openBurger, isOpenBurger] = useState(false);

  function handleOpenBurger(event) {
    isOpenBurger(!openBurger);
    console.log(event);
  }
  return (
    <section className="overlay">
      <button
        className="burger"
        type="button"
        onClick={handleOpenBurger}
      >
        <span className={`burger__span ${openBurger ? "burger_opened" : ""}`} />
      </button>
    </section>
  )
}

export default BurgerButton;