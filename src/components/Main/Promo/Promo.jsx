import React from "react";
import landing from  "../../../images/pic__COLOR_landing-logo.svg";

function Promo() {
  return (
    <div className="Promo">
      {/*компонент с вёрсткой баннера страницы «О проекте»*/}
      <h1 className="Promo__text">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="Promo__logo" src={landing} alt="logo" />
    </div>
  );
}

export default Promo;