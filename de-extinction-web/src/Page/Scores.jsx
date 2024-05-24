import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import "../Page/Css/Scores.css";
import HeaderScores from "../layout/HeaderScores";
import goldTrophy from "../assets/Copa1.png";
import silverTrophy from "../assets/Copa2.png";
import bronzeTrophy from "../assets/Copa3.png";
import image1 from "../assets/Dino1G.png";
import image2 from "../assets/Dino2G.png";
import image3 from "../assets/Dino3G.png";
import image4 from "../assets/Dino4G.png";

/**
 * Scores component to display the top scores.
 * Fetches the top scores from the API and displays them with corresponding trophy images.
 * 
 * @returns {JSX.Element} The rendered Scores component.
 */
const Scores = () => {
  const [scores, setScores] = useState([]); // State to store the scores

  /**
   * useEffect hook to fetch scores when the component mounts.
   * Fetches the top scores from the API and updates the state.
   */
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const scoresData = await ApiService.fetchTopScores(); // Fetch top scores from the API
        setScores(scoresData); // Update state with fetched scores
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchScores();
  }, []);

  /**
   * Gets the trophy image based on the index.
   * 
   * @param {number} index - The index of the score entry.
   * @returns {string|null} The URL of the trophy image or null.
   */
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

  /**
   * Gets a random image for players beyond the top 3.
   * 
   * @returns {string} The URL of a random image.
   */
  const getRandomImage = () => {
    const images = [image1, image2, image3, image4];
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div>
      <HeaderScores /> {/* Render header for scores page */}
      <div className="ScoresContainer">
        <div className="scores-content">
          <h2>Descubre las mejores puntuaciones</h2>
          <div className="scores-table">
            <div className="scores-header">
              <div className="header-item">Posición</div>
              <div className="header-item">Jugadores</div>
              <div className="header-item">Puntos</div>
            </div>
            {/* Map over the scores array to render each score entry */}
            {scores.map((data, index) => (
              <div key={index} className="score-entry">
                <div className="position">{index + 1}</div>
                <div className="username">{data.name}</div>
                <div className="score">
                  <div className="score-trophy-container">
                    {data.score} Puntos
                    {index < 3 ? (
                      // Render trophy image for top 3 players
                      <img
                        src={getTrophyImage(index)}
                        alt={`Trophy ${index + 1}`}
                        className="trophy-image"
                      />
                    ) : (
                      // Render random image for other players
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
