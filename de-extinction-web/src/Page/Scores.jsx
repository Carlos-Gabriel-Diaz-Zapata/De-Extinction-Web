import React, { useState, useEffect } from "react";
import ApiService from '../services/ApiService';
import "../Page/Css/Scores.css";
import HeaderScores from "../layout/HeaderScores";
import goldTrophy from '../assets/Copa1.png';
import silverTrophy from '../assets/Copa2.png';
import bronzeTrophy from '../assets/Copa3.png';
import image1 from '../assets/Dino1G.png';
import image2 from '../assets/Dino2G.png';
import image3 from '../assets/Dino3G.png';
import image4 from '../assets/Dino4G.png';

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

  const getTrophyImage = (index) => {
    switch (index) {
      case 0:
        return goldTrophy;
      case 1:
        return silverTrophy;
      case 2:
        return bronzeTrophy;
      default:
        return null;
    }
  };

  const getRandomImage = () => {
    const images = [image1, image2, image3, image4];
    return images[Math.floor(Math.random() * images.length)];
  };

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
                <div className="score">
                  <div className="score-trophy-container">
                    {data.score} Puntos
                    {index < 3 ? (
                      <img 
                        src={getTrophyImage(index)} 
                        alt={`Trophy ${index + 1}`} 
                        className="trophy-image"
                      />
                    ) : (
                      <img 
                        src={getRandomImage()} 
                        alt={`Player ${index + 1}`} 
                        className="random-image"
                      />
                    )}
                  </div>
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
