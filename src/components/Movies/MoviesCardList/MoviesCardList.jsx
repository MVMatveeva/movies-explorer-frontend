import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <div className="MoviesCardList">
      <ul className="MoviesCardList__list">
      <MoviesCard />
      </ul>
      <button className="MoviesCardList__button">Еще</button>
    </div>
  );
}



export default MoviesCardList;
