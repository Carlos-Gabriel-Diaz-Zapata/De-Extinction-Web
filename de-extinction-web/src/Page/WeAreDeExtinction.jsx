import React from 'react';
import fosil from '../assets/fondoDino.jpg';
import '../Page/Css/WeAreDeExtinction.css';

const WeAreDeExtinction = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="container3" id="somos-de-extinction">
      <h1 className="title4">Somos De-Extinction</h1>
      <div>
        <h2 className="subtitle3">Desafía los límites</h2>
      </div>
      <div className="card2">
        <div className="content">
          <div className="back2">
            <div className="back2-content">
              <p>Objetivo del juego: Guía al dinosaurio a través de un mundo
                prehistórico lleno de obstáculos mientras corre sin parar. Salta
                sobre obstáculos y evita colisiones para sobrevivir el mayor
                tiempo posible y obtener la puntuación más alta.
              </p>
              <p>Contenido:</p>
              <ul>
                <li>Guía al dinosaurio a través de un mundo prehistórico</li>
                <li>Salta sobre obstáculos y evita colisiones</li>
                <li>Sobrevive el mayor tiempo posible para obtener la puntuación más alta</li>
              </ul>
            </div>
          </div>
          <div className="front2">
            <div className="front-content">
              <div className="title2">
                <p className="card-footer">
                  <strong>Objetivo del juego</strong>
                </p>
              </div>
              <img src={fosil} alt="Imagen 1" />
            </div>
          </div>
        </div>
      </div>
      <button className="button3" onClick={handleClick}>
        Descubre el Juego
      </button>
    </div>
  );
};

export default WeAreDeExtinction;
