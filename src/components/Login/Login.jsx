import React from "react";
import logo from "../../images/header_logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="Login">
      <div className="Login__header">
        <img className="Login__logo" src={logo} alt="Лого" />
        <h2 className="Login__heading">Рады видеть!</h2>
      </div>
      <form className="Login__form">
        <fieldset className="Login__fieldset">
          <div className="Login__block">
            <p className="Login__text">E-mail</p>
            <input className="Login__input Login__input_email" />
            <span className="Login__error Login__error_email"></span>
          </div>
          <div className="Login__block">
            <p className="Login__text">Пароль</p>
            <input className="Login__input Login__input_password" />
            <span className="Login__error Login__error_password"></span>
          </div>
        </fieldset>
        <button className="Login__button" type="submit">
          Войти
        </button>
      </form>
      <div className="Login__sign">
        <p className="Login__sign-text">Ещё не зарегистрированы?</p>
        <Link className="Login__sign-link" to="/signup">
        Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
