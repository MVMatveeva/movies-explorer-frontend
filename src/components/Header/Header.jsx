import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/header_logo.svg";
import profile from "../../images/profile.svg";

function Header(props) {
  const location = useLocation();
  return (
    <div className="Header" style={{ backgroundColor: props.backgroundColor }}>
      <img className="Header__logo" src={logo} alt="logo" />
      {location.pathname !== "/signup" && location.pathname !== "/signin" && (
      <nav className="Navigation">
        {props.loggedIn ? (
          <>
            <Link className="Header__film">Фильмы</Link>
            <Link className="Header__film-saved">Сохраненные фильмы</Link>
            <button className="Header__button-account">
              Аккаунт
              <img className="Header__button-img" src={profile} alt="Profile" />
            </button>
          </>
        ) : (
          <>
            <Link className="Header__register" path="/signup">
              Регистрация
            </Link>
            <button className="Header__enter">Войти</button>
          </>
        )}
      </nav>
      )}
    </div>
  );
}

export default Header;
