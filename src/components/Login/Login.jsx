import React, { useEffect, useState } from "react";
import logo from "../../images/header_logo.svg";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    validateForm();
  }, [email, password]);

  function validateForm() {
    if (emailError || passwordError || !email || !password) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
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

    onLogin(email, password);
  }
  return (
    <section className="Login">
      <div className="Login__header">
        <img className="Login__logo" src={logo} alt="Лого" />
        <h2 className="Login__heading">Рады видеть!</h2>
      </div>
      <form className="Login__form" onSubmit={handleSubmit}>
        <fieldset className="Login__fieldset">
          <div className="Login__block">
            <p className="Login__text">E-mail</p>
            <input className="Login__input Login__input_email" type="email" value={email} onChange={handleEmail} />
            <span className="Login__error Login__error_email">{emailError}</span>
          </div>
          <div className="Login__block">
            <p className="Login__text">Пароль</p>
            <input className="Login__input Login__input_password" type="password" value={password} onChange={handlePassword} />
            <span className="Login__error Login__error_password">{passwordError}</span>
          </div>
        </fieldset>
        <button className={`Login__button ${!isValid ? "Profile__save_disabled" : ""}`} type="submit">
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
