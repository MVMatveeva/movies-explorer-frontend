import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import * as MoviesApi from "../../utils/MoviesApi";

function Movies({ savedMovies, onAdd, onDelete }) {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [error, setError] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  

  useEffect(() => {
    const savedValue = localStorage.getItem("shortMovie");
    setIsChecked(savedValue === "true");
  }, []);

  useEffect(() => {
    const storedMovie = localStorage.getItem("moviesFilter");
    const storedShortMovie = localStorage.getItem("shortMovie");

    if (storedMovie) {
      const storedMovies = JSON.parse(storedMovie);
      setMoviesList(storedMovies);

      if (storedShortMovie && isChecked) {
        setFilteredMovies(handleFilterMovieCheckbox(storedMovies));
      } else {
        setFilteredMovies(storedMovies);
      }
    }
  }, [isChecked]); 
  

  useEffect(() => {
    if (localStorage.getItem("searchMovies")) {
        if (filteredMovies.length === 0) {
            setShowSearchResults(true);
        } else {
          setShowSearchResults(false);
        }
    } else {
      setShowSearchResults(false);
    }
}, [filteredMovies]);


  function handleFilterMovie(data, search) {
    const searchLower = search.toLowerCase();
    return data.filter(f => {
      return f.nameRU.toLowerCase().includes(searchLower) || f.nameEN.toLowerCase().includes(searchLower);
    });
  }
  function handleFilterMovieCheckbox(data) {
    return data.filter(({ duration }) => duration <= 40);
  }


  function updateMovieResults(data, search, shorts) {
    const filteredResults = handleFilterMovie(data, search, shorts);

    setMoviesList(filteredResults);

    if (shorts) {
      setFilteredMovies(handleFilterMovieCheckbox(filteredResults));
    } else {
      setFilteredMovies(filteredResults);
    }

    localStorage.setItem("moviesFilter", JSON.stringify(filteredResults));
    localStorage.setItem("allMovies", JSON.stringify(data));
  }

  function handleFindMovies(search) {
    setPreloader(true);
    localStorage.setItem("searchMovies", search);
    localStorage.setItem("shortMovie", JSON.stringify(isChecked));

    const allMovies = localStorage.getItem("allMovies");
    if (allMovies) {
      const savedMovieData = JSON.parse(allMovies);
      updateMovieResults(savedMovieData, search, isChecked);
      setPreloader(false);
    } else {
      MoviesApi.getMovies()
        .then((movieData) => {
          updateMovieResults(movieData, search, isChecked);
          setShowSearchResults(false)
        })
        .catch(() => {
          setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
        })
        .finally(() => {
          setPreloader(false)
        });
    }
  }

  function handleToggleCheckbox() {
    setIsChecked((state) => !state);
    if (!isChecked) {
      const filteredMovies = handleFilterMovieCheckbox(moviesList);
      if (filteredMovies.length > 0) {
        setFilteredMovies(filteredMovies);
      }
    }
    else {
      setFilteredMovies(moviesList);
    }
    localStorage.setItem("shortMovie", JSON.stringify(!isChecked).toString());
  };

  

  return (
    <section>
      <SearchForm
        findMovies={handleFindMovies}
        handleToggleCheckbox={handleToggleCheckbox}
        isChecked={isChecked}
      />
      {preloader && <Preloader />}
      {error && <p className="Movies__error">{error}</p>}
      {!preloader && filteredMovies.length === 0 && <p className="Movies__error">Ничего не найдено</p>}
      {filteredMovies.length > 0 &&
        <MoviesCardList
          moviesList={filteredMovies}
          onAdd={onAdd}
          savedMovies={savedMovies}
          onDelete={onDelete}
        />}
    </section>
  )
}

export default Movies;