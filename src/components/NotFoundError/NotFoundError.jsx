import React from "react";
import { Link } from "react-router-dom";

function NotFoundError() {
  return (
    <div className="NotFoundError">
      <h2 className="NotFoundError__heading">404</h2>
      <p className="NotFoundError__text">Страница не найдена</p>
      <Link className="NotFoundError__link">Назад</Link>
    </div>
  );
}

export default NotFoundError;
