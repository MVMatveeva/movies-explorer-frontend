import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";
import IconDelete from "../../../images/icon__COLOR_icon-main.svg"

function MoviesCard(props) {
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

  function handleSaveButton() {
    setToggleButton(!toggleButton)
  }

  function handleDeleteButton() {
    setToggleButton(!toggleButton)
  }

  return (
    <section className="MoviesCard">
      <img className="MoviesCard__image" src={props.movie} alt="Изображение" />
      {isSaved ? (
        <button className="MoviesCard__button MoviesCard__button_delete">
          <img className="MoviesCard__delete-icon" src={IconDelete} alt="Удалить" />
        </button>
      ) : (
        <button className={`MoviesCard__button MoviesCard__button${toggleButton ? "_saved" : "_save"}`} onClick={handleSaveButton} />
        )}
      <div className="MoviesCard__block">
        <p className="MoviesCard__name">{props.name}</p>
        <p className="MoviesCard__time">{props.time}</p>
      </div>
    </section>
  );
}

export default MoviesCard;
