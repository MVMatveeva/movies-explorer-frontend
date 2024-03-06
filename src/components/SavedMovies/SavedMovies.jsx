import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";


function SavedMovies() {
  return (
    <section className="SavedMovies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;
