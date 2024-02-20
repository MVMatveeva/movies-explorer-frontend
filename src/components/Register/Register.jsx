import React from "react";
import logo from "../../images/header_logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="Register">
      <div className="Register__header">
        <img className="Register__logo" src={logo} alt="Лого" />
        <h2 className="Register__heading">Добро пожаловать!</h2>
      </div>
      <form className="Register__form">
        <fieldset className="Register__fieldset">
          <div className="Register__block">
            <p className="Register__text">Имя</p>
            <input className="Register__input Register__input_name" />
            <span className="Register__error Register__error_name"></span>
          </div>
          <div className="Register__block">
            <p className="Register__text">E-mail</p>
            <input className="Register__input Register__input_email" />
            <span className="Register__error Register__error_email"></span>
          </div>
          <div className="Register__block">
            <p className="Register__text">Пароль</p>
            <input className="Register__input Register__input_password" />
            <span className="Register__error Register__error_password"></span>
          </div>
        </fieldset>
        <button className="Register__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="Register__sign">
        <p className="Register__sign-text">Уже зарегистрированы?</p>
        <Link className="Register__sign-link" to="/signin">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
