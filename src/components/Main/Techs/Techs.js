function Techs() {
  return (
    <section
      className="techs"
      id="techs"
    >
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__container">
        <h3 className="techs__desc-title">7&nbsp;технологий</h3>
        <p className="techs__desc-text">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
      </div>
      <ul className="techs__skills">
        <li className="techs__skill">HTML</li>
        <li className="techs__skill">CSS</li>
        <li className="techs__skill">JS</li>
        <li className="techs__skill">React</li>
        <li className="techs__skill">Git</li>
        <li className="techs__skill">Express.js</li>
        <li className="techs__skill">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;