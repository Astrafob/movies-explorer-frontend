import studentPhoto from '../../../images/photo.jpg';

function AboutMe() {
  return (
    <section
      className="about-me"
      id="student"
    >
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__desc">
          <h3 className="about-me__desc-title">Олег</h3>
          <p className="about-me__desc-subtitle">Junior Фронтенд-разработчик, 28&nbsp;лет</p>
          <p className="about-me__desc-text">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Иваново, закончил факультет теплоэнергетики ИГЭУ. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь велосипедом. Недавно начал кодить.
            После того, как прошёл курс по&nbsp;веб-разработке, интерес только усилился. Сейчас в планах ознакомиться с фреймворком Vue и изучить TypeScript.
          </p>
          <a
            href="https://github.com/Astrafob"
            target='_blank'
            rel="noopener noreferrer"
            className="about-me__desc-link"
          >Github</a>
        </div>
        <img
          src={studentPhoto}
          alt="фото студента"
          className="about-me__photo" />
      </div>
    </section>
  )
}

export default AboutMe;