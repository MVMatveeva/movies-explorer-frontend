import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__project">
        <p className="Footer__header">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="Footer__block">
        <p className="Footer__year">&copy; 2024</p>
        <div className="Footer__links">
          <Link className="Footer__link" to="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</Link>
          <Link className="Footer__link" to="https://github.com/" target="_blank">Github</Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
