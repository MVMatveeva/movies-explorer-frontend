import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="Portfolio">
      {/*компонент со ссылками на другие проекты*/}
      <h2 className="Portfolio__about">Портфолио</h2>
      <div className="Portfolio__blocks">
        <Link className="Portfolio__block" to="https://mvmatveeva.github.io/first-project/" target="_blank">
          <p className="Portfolio__link">Статичный сайт</p>
          <p className="Portfolio__arrow">&#8599;</p>
        </Link>
        <Link className="Portfolio__block" to="https://mvmatveeva.github.io/how-to-learn/" target="_blank">
          <p className="Portfolio__link">Адаптивный сайт</p>
          <p className="Portfolio__arrow">&#8599;</p>
        </Link>
        <Link className="Portfolio__block" to="https://mvmatveeva.github.io/russian-travel/" target="_blank">
          <p className="Portfolio__link">Одностраничное приложение</p>
          <p className="Portfolio__arrow">&#8599;</p>
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
