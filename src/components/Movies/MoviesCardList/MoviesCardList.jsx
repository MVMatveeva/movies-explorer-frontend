import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="MoviesCardList">
      <ul className="MoviesCardList__list">
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>
        <li className="Movies__li"><MoviesCard /></li>      
      </ul>
      <button className="MoviesCardList__button">Еще</button>
    </section>
  );
}

export default MoviesCardList;
