import React from "react";
import myPhoto from "../../../images/photo_2024-02-14_23-02-24.jpg";

function AboutMe() {
  return (
    <div className="AboutMe">
      {/*компонент с информацией о студенте*/}
      <h2 className="AboutMe__about">Студент</h2>
      <div className="AboutMe__block">
        <div className="AboutMe__student">
          <h3 className="AboutMe__name">Мария</h3>
          <p className="AboutMe__profession">Фронтенд-разработчик, 27 лет</p>
          <p className="AboutMe__description">
            Живу в Москве. Закончила Первый МГМУ им. И.М. Сеченова по
            специальности медико-профилактическое дело. Далее закончила
            ординатуру по специальности эпидемиология. Работаю в одной из
            больниц города Москвы врачом-эпидемиологом. У меня есть муж и
            маленький сын, в настоящее время в декрете.
          </p>
          <p className="AboutMe__github">Github</p>
        </div>
        <img
          className="AboutMe__photo"
          src={myPhoto}
          alt="Фотография профиля"
        />
      </div>
    </div>
  );
}

export default AboutMe;
