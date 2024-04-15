import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IconDelete from "../../../images/icon__COLOR_icon-main.svg"

function MoviesCard({ movie, onDelete, onAdd, savedMovies }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const IMAGE_URL = `https://api.nomoreparties.co${movie.image.url}`;

  useEffect(() => {
    const checkIfMovieIsSaved = () => {
        if (location.pathname === "/movies") {
            setIsSaved(savedMovies.some(savedMovie => savedMovie.movieId === movie.id));
        }
    };
    checkIfMovieIsSaved();
}, [location.pathname, savedMovies, movie.id, setIsSaved]);

  function handleSaveButton() {
    const isMovieSaved = savedMovies.some((m) => m.movieId === movie.id);
    if (isMovieSaved) {
      const movieToDelete = savedMovies.find((m) => m.movieId === movie.id);
      onDelete(movieToDelete);
    } else {
      onAdd(movie);
      setIsSaved(true);
    }
  }

  function handleDeleteButton() {
    onDelete(movie);
  }

  return (
    <section className="MoviesCard">
      <Link to={movie.trailerLink} target="_blank">
        <img className="MoviesCard__image" src={location.pathname === "/saved-movies" ? `${movie.image}` : IMAGE_URL} alt={movie.name} />
      </Link>
      {location.pathname === "/saved-movies" ? (
        <button className="MoviesCard__button MoviesCard__button_delete">
          <img className="MoviesCard__delete-icon" src={IconDelete} alt="Удалить" onClick={handleDeleteButton} />
        </button>
      ) : (
        <button className={`MoviesCard__button MoviesCard__button${isSaved ? "_saved" : "_save"}`} onClick={handleSaveButton} />
      )}
      <div className="MoviesCard__block">
        <p className="MoviesCard__name">{movie.nameRU}</p>
        <p className="MoviesCard__time">{`${hours}ч ${minutes}м`}</p>
      </div>
    </section>
  );
}

export default MoviesCard;