import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edit, setEdit] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [updateInput, setUpdateInput] = useState(false);
  const saveSucceeded = false;

  function handleEditName(e) {
    setName(e.target.value);
  }

  function handleEditEmail(e) {
    setEmail(e.target.value);
  }

  const handleEditClick = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  const handleInputEdit = () => {
    setButtonDisabled(false);
    setUpdateInput(true)
  };

  const handleSaveClick = () => {
    if (saveSucceeded) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(true);
      setError(true);
    }
  };

  return (
    <section className="Profile">
      <h2 className="Profile__hello">Привет, Виталий!</h2>
      <form className="Profile__form">
        <fieldset className="Profile__fieldset">
          <div className="Profile__block">
            <p className="Profile__text">Имя</p>
            <input className="Profile__input Profile__input_name" type="text"
              minLength="2"
              maxLength="30"
              value={name || ""}
              onChange={handleEditName}
              required />
            <span className="Profile__error Profile__error_name"></span>
          </div>
          <div className="Profile__block">
            <p className="Profile__text">E-mail</p>
            <input className="Profile__input Profile__input_email" type="email"
              minLength="2"
              value={email || ""}
              onChange={handleEditEmail}
              required />
            <span className="Profile__error Profile__error_email"></span>
          </div>
        </fieldset>
        <div className="Profile__edit">
          {edit ? (
            <>
              <button className={`Profile__save ${updateInput && !error ? "" : "Profile__save_disabled"}`} onClick={handleSaveClick} disabled={error}>
                Сохранить
              </button>
              {error && <span className="Profile__error Profile__error_update">При обновлении профиля произошла ошибка.</span>}
            </>
          ) : (
            <>
              <button className="Profile__button" onClick={handleEditClick} type="submit">
                Редактировать
              </button>
              <Link className="Profile__exit" to="/signup">
                Выйти из аккаунта
              </Link>
            </>
          )}

        </div>
      </form>
    </section>
  );
}

export default Profile;
