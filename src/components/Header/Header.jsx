import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg";
import profile from "../../images/profile.svg";

function Header(props) {
  return (
    <div className="Header" style={{ backgroundColor: props.backgroundColor }}>
      <img className="Header__logo" src={logo} alt="logo" />

      <nav className="Navigation">
        {props.loggedIn ? (
          <>
            <Link className="Header__film" to="/movies">
              Фильмы
            </Link>
            <Link className="Header__film-saved" to="/saved-movies">
              Сохраненные фильмы
            </Link>
            <Link className="Header__button" to="/profile">
              <button className="Header__button-account">
                Аккаунт
                <img
                  className="Header__button-img"
                  src={profile}
                  alt="Profile"
                />
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link className="Header__register" to="/signup">
              Регистрация
            </Link>
            <Link className="Header__enter" to="/signin">
              <button className="Header__enter-button">Войти</button>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
