function AboutProject() {
  return (
    <section
      className="about-project"
      id="aboutProject"
    >
      <h2 className="about-project__title">
        О&nbsp;проекте
      </h2>
      <div className="about-project__desc-container">
        <div className="about-project__desc">
          <h3 className="about-project__desc-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__desc-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="about-project__desc">
          <h3 className="about-project__desc-title">
            На&nbsp;выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__desc-text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__weeks-container">
        <div className="about-project__time-back">
          <p className="about-project__week about-project__week_one">
            1&nbsp;неделя
          </p>
          <p className="about-project__caption">
            Back-end
          </p>
        </div>
        <div className="about-project__time-front">
          <p className="about-project__week about-project__week_four">
            4&nbsp;недели
          </p>
          <p className="about-project__caption">
            Front-end
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;