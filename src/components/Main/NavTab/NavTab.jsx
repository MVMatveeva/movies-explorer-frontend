import React from "react";

function NavTab() {
  return (
    <div className="NavTab">
      {/* компонент с навигацией по странице «О проекте»*/}
      <p className="NavTab__navigation NavTab__navigation_about">О проекте</p>
      <p className="NavTab__navigation NavTab__navigation_technologies">
        Технологии
      </p>
      <p className="NavTab__navigation NavTab__navigation_student">Студент</p>
    </div>
  );
}

export default NavTab;
