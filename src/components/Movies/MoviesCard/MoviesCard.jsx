import React from "react";
import Image from "../../../images/pic__COLOR_pic.jpg";
//import IconSaved from "../../../images/icon__COLOR_invisible.svg"

function MoviesCard() {
  return (
    <div className="MoviesCard">
      <img className="MoviesCard__image" src={Image} alt="Изображение" />
      {/*<button className="MoviesCard__save">Сохранить</button>*/}
      {/*<button className="MoviesCard__saved">
        <img className="MoviesCard__saved-icon" src={IconSaved} alt="Сохранено" />
      </button>*/}
      <div className="MoviesCard__block">
        <p className="MoviesCard__name">33 слова о дизайне</p>
        <p className="MoviesCard__time">1ч 17м</p>
      </div>
    </div>
  );
}

export default MoviesCard;
