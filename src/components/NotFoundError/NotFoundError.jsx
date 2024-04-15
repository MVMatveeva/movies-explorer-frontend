import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundError() {
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
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