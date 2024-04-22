import React from 'react';
import fosil from '../assets/fondoDino.jpg'; // Importa la imagen

const HowToPlay = () => {
  return (
    <div className="how-to-play">
      <h2 className='title3'>¿Cómo se juega?</h2>
      <div className="cards-container">
        {/* Tarjeta 1 */}
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <p> El objetivo principal del juego es guiar a un dinosaurio a través de un mundo prehistórico lleno de obstáculos mientras corre sin parar. El jugador debe saltar sobre obstáculos y evitar colisiones para sobrevivir el mayor tiempo posible y obtener la puntuación más alta.
                Contenido:
                "Guía al dinosaurio a través de un mundo prehistórico"
                "Salta sobre obstáculos y evita colisiones"
                "Sobrevive el mayor tiempo posible para obtener la puntuación más alta"</p>
              </div>
            </div>
            <div className="front">
              <div className="front-content">
                <div className="title2">
                  <p className="card-footer"><strong>Objetivo del juego</strong></p>
                </div>
                <img src={fosil} alt="Imagen 1" /> {/* Añade la imagen */}
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <p>"De-Extinction" es un juego de tipo "infinite runner" en el que el dinosaurio corre automáticamente. El jugador debe controlar los saltos del dinosaurio para evitar obstáculos y recolectar bonificaciones. Los controles son simples, con un solo botón para saltar.
                Contenido:
                "Dinosaurio corre automáticamente"
                "Controla los saltos para evitar obstáculos"
                "Recoge bonificaciones para mejorar tu puntuación"</p>
              </div>
            </div>
            <div className="front">
              <div className="front-content">
                <div className="title2">
                  <p className="card-footer"><strong>Mecánica de juego</strong></p>
                </div>
                <img src={fosil} alt="Imagen 2" /> {/* Añade la imagen */}
              </div>
            </div>
          </div>
        </div>
        {/* Tarjeta 3 */}
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
              <p>Para tener éxito en "De-Extinction",
                es importante seguir algunos consejos clave.
                Estos incluyen mantener la concentración, practicar el timing de los saltos
                y aprender a reconocer patrones de obstáculos. 
                Contenido:
                "Mantén la concentración y la calma para tomar decisiones precisas"
                "Practica el timing de los saltos para evitar obstáculos"
                "Aprende a reconocer patrones de obstáculos para anticipar tus movimientos"</p>
              </div>
            </div>
            <div className="front">
              <div className="front-content">
                <div className="title2">
                  <p className="card-footer"><strong>Consejos para el jugador</strong></p>
                </div>
                <img src={fosil} alt="Imagen 3" /> {/* Añade la imagen */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
