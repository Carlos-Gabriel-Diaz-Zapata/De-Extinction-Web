import React, { useState, useEffect } from "react";
import ApiService from '../services/ApiService';
import "../Page/Css/Scores.css";
import HeaderScores from "../layout/HeaderScores";

const Scores = () => {
  // Estado para almacenar las puntuaciones
  const [scores, setScores] = useState([]);

  // useEffect que se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    const fetchScores = async () => {
      try {
        // Llamada a la API para obtener las mejores puntuaciones
        const scoresData = await ApiService.fetchTopScores();
        // Actualiza el estado con las puntuaciones obtenidas
        setScores(scoresData);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
  }, []); // El arreglo vacío indica que esto se ejecuta solo una vez al montar el componente

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
                <div className="username">{data.username}</div>
                <div className="score">
                  {data.score} Puntos
                  {data.trophy && <img src={data.trophy} alt={`Trophy ${index + 1}`} />}
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
