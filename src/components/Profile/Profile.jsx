import React from "react";
import logo from "../../images/header_logo.svg";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="Profile">
      <h2 className="Profile__hello">Привет, Виталий!</h2>
      <form className="Profile__form">
        <fieldset className="Profile__fieldset">
          <div className="Profile__block">
            <p className="Profile__text">Имя</p>
            <input className="Profile__input Profile__input_email" />
            <span className="Profile__error Profile__error_email"></span>
          </div>
          <div className="Profile__block">
            <p className="Profile__text">E-mail</p>
            <input className="Profile__input Profile__input_password" />
            <span className="Profile__error Profile__error_password"></span>
          </div>
        </fieldset>
        <div className="Profile__edit">
          <button className="Profile__button" type="submit">
          Редактировать
          </button>
          <Link className="Profile__exit" path="/signup">
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Profile;
