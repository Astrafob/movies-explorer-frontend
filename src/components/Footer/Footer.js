function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </h2>
      <div className="footer__container">
        <div className="footer__date">
          © 2023
        </div>
        <div className="footer__menu">
          <a
            href="https://practicum.yandex.ru/"
            target='_blank'
            rel="noopener noreferrer"
            className="footer__link"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/Astrafob"
            target='_blank'
            rel="noopener noreferrer"
            className="footer__link"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;