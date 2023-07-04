function NavTab() {
  return(
    <section className="nav-tab">
      <ul className="nav-tab__menu">
        <li className="nav-tab__list">
          <a
          className="nav-tab__link"
          href="#aboutProject">
            О проекте
          </a>
        </li>
        <li className="nav-tab__list">
          <a
          className="nav-tab__link"
          href="#techs">
            Технологии
          </a>
        </li>
        <li className="nav-tab__list">
          <a
          className="nav-tab__link"
          href="#student">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavTab;