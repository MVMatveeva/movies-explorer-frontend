import React from "react";

function NotFoundError() {

  return (
    <section className="NotFoundError">
      <h2 className="NotFoundError__heading">404</h2>
      <p className="NotFoundError__text">Страница не найдена</p>
      <button className="NotFoundError__link">Назад</button>
    </section>
  );
}

export default NotFoundError;
