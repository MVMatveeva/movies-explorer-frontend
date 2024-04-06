import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile({ onUpdateUser, onClick }) {
  const CurrentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edit, setEdit] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [updateInput, setUpdateInput] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setName(CurrentUser.name);
    setEmail(CurrentUser.email);
  }, [CurrentUser]);

  useEffect(() => {
    setUpdateInput(name !== CurrentUser.name || email !== CurrentUser.email);
  }, [name, CurrentUser.name, email, CurrentUser.email]);

  useEffect(() => {
    inputValidation();
  }, [name, email, CurrentUser]);

  function handleEditName(e) {
    setName(e.target.value);
    setUpdateInput(true);
  }

  function handleEditEmail(e) {
    setEmail(e.target.value);
    setUpdateInput(true);
  }
  function inputValidation() {
    const isNameValid = !nameError && name && name !== CurrentUser.name;
    const isEmailValid = !emailError && email && email !== CurrentUser.email;

    setIsValid(isNameValid && isEmailValid);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(true);
    onUpdateUser({ name: name, email: email })
    setUpdateInput(false);
  };

  const handleInputEdit = () => {
    setButtonDisabled(false);
    setUpdateInput(true);
  };

  const handleSaveClick = () => {
    if (handleInputEdit) {
      setButtonDisabled(true);
      setError(false);
    } else {
      setButtonDisabled(true);
      setError(true);
    }
  };

  return (
    <section className="Profile">
      <h2 className="Profile__hello">Привет, {CurrentUser.name}!</h2>
      <form className="Profile__form" onSubmit={handleSubmit}>
        <fieldset className="Profile__fieldset">
          <div className="Profile__block">
            <p className="Profile__text">Имя</p>
            <input className="Profile__input Profile__input_name" type="text"
              minLength="2"
              maxLength="30"
              value={edit ? name : CurrentUser.name}
              onChange={(e) => {
                handleEditName(e);
                handleInputEdit();
              }}
              required />
            <span className="Profile__error Profile__error_name"></span>
          </div>
          <div className="Profile__block">
            <p className="Profile__text">E-mail</p>
            <input className="Profile__input Profile__input_email" type="email"
              minLength="2"
              value={edit ? email : CurrentUser.email}
              onChange={(e) => {
                handleEditEmail(e);
                handleInputEdit();
              }}
              required />
            <span className="Profile__error Profile__error_email"></span>
          </div>
        </fieldset>
        <div className="Profile__edit">
          {edit ? (
            <>
              <button className={`Profile__save ${updateInput && !error ? "" : "Profile__save_disabled"}`} onClick={handleSaveClick} >
                Сохранить
              </button>
              {error && <span className="Profile__error Profile__error_update">При обновлении профиля произошла ошибка.</span>}
            </>
          ) : (
            <>
              <button className="Profile__button" type="submit">
                Редактировать
              </button>
              <button className="Profile__exit" onClick={onClick}>
                Выйти из аккаунта
              </button>
            </>
          )}

        </div>
      </form>
    </section>
  );
}

export default Profile;
