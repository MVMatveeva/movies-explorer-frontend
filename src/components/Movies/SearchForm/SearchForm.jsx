import React, { useEffect, useState } from "react";
import SearchIcon from "../../../images/icon.svg";
import { useLocation } from "react-router-dom";

function SearchForm({ findMovies, handleToggleCheckbox, isChecked }) {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchMovies = localStorage.getItem("searchMovies");
    if (location.pathname === "/movies" && searchMovies) {
      setSearchInput(searchMovies);
    }
  }, [location.pathname]);

  function handleChangeInput(e) {
    setSearchInput(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!searchInput) {
      setError("Нужно ввести ключевое слово!");
    } else {
      findMovies(searchInput);
      setError(false);
    }
  }

  return (
    <section className="SearchForm">
      <form className="SearchForm__form" name="SearchForm" onSubmit={handleSubmit}>
        <div className="SearchForm__block-input">
          <div className="SearchForm__search">
            <img className="SearchForm__icon" src={SearchIcon} alt="Лупа" />
            <input
              className="SearchForm__input"
              type="text"
              name="Search"
              placeholder="Фильм"
              value={searchInput || ""}
              onChange={handleChangeInput}
              minLength="2"
              maxLength="30"
            />
            <span className="SearchForm__error">{error}</span>
          </div>
          <button className="SearchForm__button" type="submit">
            Найти
          </button>
        </div>
        <div className="SearchForm__block-filter">
          <label className="SearchForm__switch">
            <input type="checkbox" className="SearchForm__checkbox" checked={isChecked} onChange={handleToggleCheckbox} />
            <span className="slider round" />
          </label>
          <p className="SearchForm__filter">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
