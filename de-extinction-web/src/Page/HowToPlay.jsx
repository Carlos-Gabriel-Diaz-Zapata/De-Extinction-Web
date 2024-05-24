import React from 'react';
import Consejo from '../assets/Consejos.png';
import Mecanicas from '../assets/Mecanica.png';
import Objetivo from '../assets/Objetivo.png';
import '../Page/Css/HowToPlay.css';

/**
 * HowToPlay component to display the instructions on how to play the game.
 * Contains cards with images, titles, and descriptions explaining the game objectives, mechanics, and tips.
 * 
 * @returns {JSX.Element} The rendered HowToPlay component.
 */
const HowToPlay = () => {
  /**
   * Array of card objects containing image, title, and description for each card.
   */
  const cards = [
    {
      img: Objetivo,
      title: 'Objetivo del juego',
      description: 'El objetivo principal del juego es guiar a un dinosaurio a través de un mundo prehistórico lleno de obstáculos mientras corre sin parar. El jugador debe saltar sobre obstáculos y evitar colisiones para sobrevivir el mayor tiempo posible y obtener la puntuación más alta.'
    },
    {
      img: Mecanicas,
      title: 'Mecánica de juego',
      description: '"De-Extinction" es un juego de tipo "Infinite Runner" en el que el dinosaurio corre automáticamente. El jugador debe controlar los saltos del dinosaurio para evitar obstáculos y recolectar bonificaciones. Los controles son simples, con un solo botón para saltar.'
    },
    {
      img: Consejo,
      title: 'Consejos para el jugador',
      description: 'Para tener éxito en "De-Extinction", es importante seguir algunos consejos clave. Estos incluyen mantener la concentración, practicar el timing de los saltos y aprender a reconocer patrones de obstáculos.'
    }
  ];

  return (
    <div className="how-to-play" id="como-jugar">
      <h2 className="title3">¿Cómo se juega?</h2>
      <div className="cards-container">
        {/* Map over the cards array to render each card */}
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="thumb-title">
              <img src={card.img} alt={card.title} className="thumb-img" />
              <p className="card-title">{card.title}</p>
            </div>
            <div className="textBox">
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToPlay;
