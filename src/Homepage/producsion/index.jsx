import React from "react";
import "./style.css";

function Production() {
  return (
    <section className="production">
      <div className="prod-card left">
        <span>01</span>
        <h3>ПЛОЩАДЬ<br />ПРОИЗВОДСТВА<br />3 500 М²</h3>
        <p>На нашей фабрике работают более 200 сотрудников</p>
      </div>

      <div className="prod-card center">
        <span>02</span>
        <h3>310 ЕДИНИЦ<br />ОБОРУДОВАНИЯ<br />ДЛЯ ПРОИЗВОДСТВА</h3>
        <p>
          Более 1,5 млн пар шнурков, 3 млн. метров шнуров и не менее 3 млн.
          метров различных текстильных лент.
        </p>
        <button>ПОДРОБНЕЕ</button>
      </div>

      <div className="prod-card right">
        <span>03</span>
        <h3>ПЛОЩАДЬ<br />ПРОИЗВОДСТВА<br />3 500 М²</h3>
        <p>На нашей фабрике работают более 200 сотрудников</p>
      </div>
    </section>
  );
}

export default Production;
