import React from "react";
import SearchIcon from "../../../images/icon.svg";

function SearchForm() {
  return (
    <div className="SearchForm">
      <form className="SearchForm__form" name="SearchForm">
        <div className="SearchForm__block-input">
          <img className="SearchForm__icon" src={SearchIcon} alt="Лупа" />
          <input
            className="SearchForm__input"
            type="text"
            name="Search"
            placeholder="Фильм"
            minLength="2"
            maxLength="30"
            required
          />
          <button className="SearchForm__button" type="submit">
            Найти
          </button>
        </div>
        <div className="SearchForm__block-filter">
        <label className="SearchForm__switch">
          <input className="SearchForm__checkbox" type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p className="SearchForm__filter">Короткометражки</p>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
