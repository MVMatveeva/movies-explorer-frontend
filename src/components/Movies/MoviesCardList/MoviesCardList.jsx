import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ moviesList, savedMovies,
  onAdd, onDelete }) {
  const [showCard, setShowCard] = useState(12);
  const [showMoreCards, setShowMoreCards] = useState(0);

  const handleButtonShowMore = () => {
    if (window.innerWidth > 768) {
    setShowMoreCards(showMoreCards + 3);
    } else {
    setShowMoreCards(showMoreCards + 2);
    }
    };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setShowCard(5);
      } else if (window.innerWidth <= 768) {
        setShowCard(8)
      } else {
        setShowCard(12);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [moviesList]);

  return (
    <section className="MoviesCardList">
      <ul className="MoviesCardList__list">
        {moviesList.slice(0, showCard + showMoreCards).map((movie) => (
          <MoviesCard
            onAdd={onAdd}
            onDelete={onDelete}
            moviesList={moviesList}
            savedMovies={savedMovies}
            movie={movie}
            key={movie.id || movie._id}
          />
        ))}
      </ul>
      {moviesList.length > (showCard + showMoreCards) &&
        (<button onClick={handleButtonShowMore} className="MoviesCardList__button">Еще</button>)
      }
    </section>
  );
}

export default MoviesCardList;

