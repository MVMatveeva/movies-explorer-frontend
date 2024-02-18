import React from "react";

function Portfolio() {
  return (
    <div className="Portfolio">
      {/*компонент со ссылками на другие проекты*/}
      <h2 className="Portfolio__about">Портфолио</h2>
      <div className="Portfolio__blocks">
        <div className="Portfolio__block">
          <p className="Portfolio__link">Статичный сайт</p>
          <p className="Portfolio__arrow">&#8599;</p>
        </div>
        <div className="Portfolio__block">
          <p className="Portfolio__link">Адаптивный сайт</p>
          <p className="Portfolio__arrow">&#8599;</p>
        </div>
        <div className="Portfolio__block">
          <p className="Portfolio__link">Одностраничное приложение</p>
          <p className="Portfolio__arrow">&#8599;</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
