import React from "react";

function Techs() {
  return (
    <div className="Techs">
      {/*компонент с использованными технологиями*/}
      <h2 className="Techs__about">Технологии</h2>
      <div className="Techs__block">
        <h3 className="Techs__heading">7 технологий</h3>
        <p className="Techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="Techs__table">
          <p className="Techs__cell">HTML</p>
          <p className="Techs__cell">CSS</p>
          <p className="Techs__cell">JS</p>
          <p className="Techs__cell">React</p>
          <p className="Techs__cell">Git</p>
          <p className="Techs__cell">Express.js</p>
          <p className="Techs__cell">mongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Techs;
