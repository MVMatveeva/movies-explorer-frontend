import React from "react";
import logo from "../../images/header_logo.svg";
import profile from "../../images/profile.svg";

function Header() {
  return (
    <div className="Header">
      <img className="Header__logo" src={logo} alt="logo" />
      <nav className="Navigation">
        <p className="Header__film">Фильмы</p>
        <p className="Header__film-saved">Сохраненные фильмы</p>
        <button className="Header__button-account">
          Аккаунт
          <img className="Header__button-img" src={profile} alt="Profile" />
        </button>
      </nav>
    </div>
  );
}

export default Header;