import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header_logo.svg";
import profile from "../../images/profile.svg";
import exit from "../../images/Exit.svg";
import profileBlack from "../../images/header-logo-black.svg";

function Header(props) {

  return (
    <div className="Header" style={{ backgroundColor: props.backgroundColor }}>
      <img className="Header__logo" src={logo} alt="logo" />
      <nav className="Navigation">
        {/*{props.loggedIn ? (*/}
        <div className="Navigation__desktop">
          <Link className="Header__film" to="/movies">
            Фильмы
          </Link>
          <Link className="Header__film-saved" to="/saved-movies">
            Сохраненные фильмы
          </Link>
          <Link className="Header__button" to="/profile">
            <button className="Header__button-account" style={{ backgroundColor: props.backgroundColor }}>
              Аккаунт
              <img
                className="Header__button-img"
                src={props.profile}
                alt="Profile"
              />
            </button>
          </Link>
        </div>
        <div className="Hamburger">
          <button className="Hamburger__opening" onClick={props.menuOpen} style={{ backgroundColor: props.backgroundColor }}>
            <span className="Line"></span>
            <span className="Line"></span>
            <span className="Line"></span>
          </button>
          {props.hamburgerOpen && <div className="Navigation__hamburger">
            <button className="Navigation__hamburger-exit" onClick={props.onClose}>
              <img className="Navigation__exit-img" src={exit} alt="Закрыть" />
            </button>
            <div className="Navigation__hamburger-menu">
            <ul className="Navigation__hamburger-ul">
              <li className="Navigation__hamburger-li"><Link className="Navigation__hamburger-link" to="/">Главная</Link></li>
              <li className="Navigation__hamburger-li"><Link className="Navigation__hamburger-link" to="/movies">Фильмы</Link></li>
              <li className="Navigation__hamburger-li"><Link className="Navigation__hamburger-link" to="/saved-movies">Сохраненные фильмы</Link></li>
              <li className="Navigation__hamburger-li"><Link className="Navigation__hamburger-link" to="/profile">
                <button className="Navigation__hamburger-button">
                  Аккаунт
                  <img
                    className="Navigation__hamburger-account"
                    src={profileBlack}
                    alt="Profile"
                  />
                </button>
              </Link>
              </li>
            </ul>
            </div>
            </div>
          }
        </div>
        {/* ) : (
          <>
            <Link className="Header__register" to="/signup">
              Регистрация
            </Link>
            <Link className="Header__enter" to="/signin">
              <button className="Header__enter-button">Войти</button>
            </Link>
          </>
     )}*/}
      </nav >
    </div >
  );
}

export default Header;
