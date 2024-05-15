// Scores.js
import React from "react";
import "../Page/Css/Scores.css";
import HeaderScores from "../layout/HeaderScores";

const Scores = () => {
  const scoresData = [
    { position: 1, username: "jugador1", score: 5000, trophy: "trophy1.png" },
    { position: 2, username: "jugador2", score: 3000, trophy: "trophy2.png" },
    { position: 3, username: "jugador3", score: 1000, trophy: "trophy3.png" },
  ];

  return (
  <div>
    <HeaderScores />
    <div className="ScoresContainer">
      <div className="scores-content">
        <h2>Descubre las mejores puntuaciones</h2>
        <div className="scores-table">
          <div className="scores-header">
            <div className="header-item">Posición</div>
            <div className="header-item">Jugadores</div>
            <div className="header-item">Puntos</div>
          </div>
          {scoresData.map((data) => (
            <div key={data.position} className="score-entry">
              <div className="position">{data.position}</div>
              <div className="username">{data.username}</div>
              <div className="score">
                {data.score} Puntos
                <img src={data.trophy} alt={`Trophy ${data.position}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Scores;
