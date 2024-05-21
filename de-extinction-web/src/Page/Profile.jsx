import React, { useState, useEffect } from "react";
import ApiService from '../services/ApiService';
import "../Page/Css/Scores.css";
import HeaderScores from "../layout/HeaderScores";

const Scores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const scoresData = await ApiService.fetchTopScores();
        setScores(scoresData);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
  }, []);

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
            {scores.map((data, index) => (
              <div key={index} className="score-entry">
                <div className="position">{index + 1}</div>
                <div className="username">{data.name}</div>
                <div className="score">{data.score} Puntos</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
