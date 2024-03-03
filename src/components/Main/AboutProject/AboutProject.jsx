import React from "react";

function AboutProject() {
  return (
    <section className="AboutProject" id="AboutProject">
      {/* компонент с описанием дипломного проекта*/}
      <h2 className="AboutProject__about">О проекте</h2>
      <div className="AboutProject__block">
        <h3 className="AboutProject__heading">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="AboutProject__heading">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="AboutProject__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="AboutProject__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="AboutProject__block-weeks">
        <p className="AboutProject__week">1 неделя</p>
        <p className="AboutProject__weeks">4 недели</p>
        <p className="AboutProject__weeks-text">Back-end</p>
        <p className="AboutProject__weeks-text">Front-end</p>
      </div>
    </section>
  );
}
export default AboutProject;
