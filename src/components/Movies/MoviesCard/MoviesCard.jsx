import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Image from "../../../images/pic__COLOR_pic.jpg";
import IconDelete from "../../../images/icon__COLOR_icon-main.svg"

function MoviesCard() {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [location]);

  function handleToggleButton() {
    setToggleButton(!toggleButton)
  }

  return (
    <section className="MoviesCard">
      <img className="MoviesCard__image" src={Image} alt="Изображение" />
      {isSaved ? (
        <button className="MoviesCard__button MoviesCard__button_delete">
          <img className="MoviesCard__delete-icon" src={IconDelete} alt="Удалить" />
        </button>
      ) : (
        <button className={`MoviesCard__button MoviesCard__button${toggleButton ? "_saved" : "_save"}`} onClick={handleToggleButton} />
        )}
      <div className="MoviesCard__block">
        <p className="MoviesCard__name">33 слова о дизайне</p>
        <p className="MoviesCard__time">1ч 17м</p>
      </div>
    </section>
  );
}

export default MoviesCard;
