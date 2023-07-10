import studentPhoto from '../../../images/photo-studet.png';

function AboutMe() {
  return (
    <section
      className="about-me"
      id="student"
    >
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__desc">
          <h3 className="about-me__desc-title">Виталий</h3>
          <p className="about-me__desc-subtitle">Фронтенд-разработчик, 30&nbsp;лет</p>
          <p className="about-me__desc-text">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
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