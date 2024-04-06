import React, { useEffect, useState } from "react";
import logo from "../../images/header_logo.svg";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    validateForm();
  }, [name, email, password]);


  function validateForm() {
    let validation = true;
  
    if (nameError || emailError || passwordError || !name || !email || !password) {
      validation = false;
    }
  
    return validation;
  }

  function handleName(evt) {
    const name = evt.target.value;

    setNameError(
      (name.length < 2 && "Длина имени должна быть более 2 символов!") ||
      (name.length > 30 && "Длина имени должна быть менее 30 символов!") ||
      ""
    );

    setIsValid(name.length >= 2 && name.length <= 30);

    setName(name);
  }

  function handleEmail(evt) {
    const email = evt.target.value;

    setEmailError(
      !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) && "Введите корректный Email!"
    );

    setIsValid(email.length === 0 || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email));

    setEmail(email);
  }


  function handlePassword(evt) {
    const password = evt.target.value;

    setPasswordError(
      (password.length < 6 && "Длина пароля должна быть более 6 символов!") ||
      ""
    );

    setIsValid(password.length >= 6);

    setPassword(password);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      onRegister(name, email, password);
    }
  }

  return (
    <section className="Register">
      <div className="Register__header">
        <img className="Register__logo" src={logo} alt="Лого" />
        <h2 className="Register__heading">Добро пожаловать!</h2>
      </div>
      <form className="Register__form" onSubmit={handleSubmit}>
        <fieldset className="Register__fieldset">
          <div className="Register__block">
            <p className="Register__text">Имя</p>
            <input className="Register__input Register__input_name" type="text" value={name} onChange={handleName} />
            <span className="Register__error Register__error_name">{nameError}</span>
          </div>
          <div className="Register__block">
            <p className="Register__text" >E-mail</p>
            <input className="Register__input Register__input_email" type="email" value={email} onChange={handleEmail} />
            <span className="Register__error Register__error_email">{emailError}</span>
          </div>
          <div className="Register__block">
            <p className="Register__text">Пароль</p>
            <input className="Register__input Register__input_password" type="password" value={password} onChange={handlePassword} />
            <span className="Register__error Register__error_password">{passwordError}</span>
          </div>
        </fieldset>
        <button className={`Register__button ${!isValid ? "Profile__save_disabled" : ""}`} type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="Register__sign">
        <p className="Register__sign-text">Уже зарегистрированы?</p>
        <Link className="Register__sign-link" to="/signin">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;

