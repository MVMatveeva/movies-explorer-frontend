import React from "react";
import { useHistory } from "react-router-dom";

function NotFoundError() {
  const history = useHistory();

  const returnBack = () => {
    history.returnBack();
  };
  return (
    <section className="NotFoundError">
      <h2 className="NotFoundError__heading">404</h2>
      <p className="NotFoundError__text">Страница не найдена</p>
      <button className="NotFoundError__link" onClick={returnBack}>Назад</button>
    </section>
  );
}

export default NotFoundError;
