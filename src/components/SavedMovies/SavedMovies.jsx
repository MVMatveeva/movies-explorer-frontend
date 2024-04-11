import React, { useEffect, useState } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies, onDelete }) {

  const [savedMoviesList, setSavedMoviesList] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedValue = localStorage.getItem("shortMovie");
    setIsChecked(savedValue === "true");
  }, []);

  useEffect(() => {
    const filteredMovies = handleFilterMovie(savedMovies, savedMoviesList)
    if (isChecked) {
      setFilteredMovies(handleFilterMovieCheckbox(filteredMovies))
    } else {
      setFilteredMovies(filteredMovies)
    }
  }, [savedMovies, savedMoviesList, isChecked]);

  function handleFilterMovie(data, search) {
    const searchLower = search.toLowerCase();
    return data.filter(f => {
      return f.nameRU.toLowerCase().includes(searchLower) || f.nameEN.toLowerCase().includes(searchLower);
    });
  }
  function handleFilterMovieCheckbox(data) {
    return data.filter(({ duration }) => duration <= 40);
  }

  function handleToggleCheckbox() {
    setIsChecked(!isChecked)
  }

  function handleFindMovies(data) {
    setSavedMoviesList(data)
  }


  return (
    <section>
      <SearchForm findMovies={handleFindMovies}
        handleToggleCheckbox={handleToggleCheckbox}
        isChecked={isChecked}
      />

      <MoviesCardList moviesList={filteredMovies}
        savedMovies={savedMovies}
        onDelete={onDelete}
      />
    </section>
  )
}

export default SavedMovies;