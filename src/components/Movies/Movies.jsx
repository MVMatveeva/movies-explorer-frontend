import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
//import Preloader from "./Preloader/Preloader";


function Movies() {
  return (
    <div className="Movies">
      <SearchForm />
      {/*<Preloader />*/}
      <MoviesCardList />
      <button className="Movies__button">Еще</button>
    </div>
  );
}

export default Movies;
