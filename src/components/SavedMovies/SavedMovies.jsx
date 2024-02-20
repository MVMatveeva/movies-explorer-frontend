import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";


function SavedMovies() {
  return (
    <div className="SavedMovies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default SavedMovies;
