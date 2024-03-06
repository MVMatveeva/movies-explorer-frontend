import React, { useState } from "react";
import SearchIcon from "../../../images/icon.svg";

function SearchForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeFilter = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section className="SearchForm">
      <form className="SearchForm__form" name="SearchForm">
        <div className="SearchForm__block-input">
          <div className="SearchForm__search">
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
          </div>
          <button className="SearchForm__button" type="submit">
            Найти
          </button>
        </div>
        <div className="SearchForm__block-filter">
          <label className="SearchForm__switch">
            <input type="checkbox" className="SearchForm__checkbox" checked={isChecked} onChange={handleChangeFilter} />
            <span className="slider round" />
          </label>
          <p className="SearchForm__filter">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
