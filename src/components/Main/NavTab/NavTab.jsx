import React from "react";

function NavTab() {
  return (
    <section className="NavTab">
      {/* компонент с навигацией по странице «О проекте»*/}
      <a className="NavTab__navigation NavTab__navigation_about" href="#AboutProject">О проекте</a>
      <a className="NavTab__navigation NavTab__navigation_technologies" href="#Techs">
        Технологии
      </a>
      <a className="NavTab__navigation NavTab__navigation_student" href="#AboutMe">Студент</a>
    </section>
  );
}

export default NavTab;
