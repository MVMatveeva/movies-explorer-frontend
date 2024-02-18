import React from "react";
import Image from "../../../images/pic__COLOR_pic.jpg"

function MoviesCard() {
  return (
    <div className="MoviesCard">
      <img className="MoviesCard__image" src={Image} alt="Изображение" />
    </div>
  );
}

export default MoviesCard;