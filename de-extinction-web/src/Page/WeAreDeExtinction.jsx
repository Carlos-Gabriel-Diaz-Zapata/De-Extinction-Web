import React, { useState } from 'react';
import dino1 from '../assets/Dino1G.png';
import dino2 from '../assets/Dino2G.png';
import dino3 from '../assets/Dino3G.png';
import dino4 from '../assets/Dino4G.png';
import '../Page/Css/WeAreDeExtinction.css';

/**
 * WeAreDeExtinction component to display information about different dinosaurs.
 * Allows users to select a dinosaur and view its image and description.
 * 
 * @returns {JSX.Element} The rendered WeAreDeExtinction component.
 */
const WeAreDeExtinction = () => {
  const [selectedDino, setSelectedDino] = useState(null); // State to store the selected dinosaur

  /**
   * Array of dinosaur objects containing id, image, and description.
   */
  const dinos = [
    { id: 1, img: dino1, description: 'Un dinosaurio curioso y aventurero que siempre está en busca de nuevas aventuras.' },
    { id: 2, img: dino2, description: 'Un dinosaurio amigable y protector que se preocupa por sus amigos, le encanta el bosque.' },
    { id: 3, img: dino3, description: 'Un dinosaurio valiente y fuerte que lidera con el ejemplo, es el mas desafiante de todos.' },
    { id: 4, img: dino4, description: 'Un dinosaurio rápido y ágil, conocido por su destreza y velocidad, tiene la velocidad de un rayo.' },
  ];

  return (
    <div className="container3" id="somos-de-extinction">
      <h1 className="title4">Somos De-Extinction</h1>
      <div className="content-area">
        <div className="sidebar">
          {/* Map over the dinos array to render each dinosaur button */}
          {dinos.map((dino) => (
            <button
              key={dino.id}
              className={`dino-button ${selectedDino === dino.id ? 'selected' : ''}`} // Add selected class if the dino is selected
              onClick={() => setSelectedDino(dino.id)} // Set the selected dinosaur on click
            >
              <img src={dino.img} alt={`Dinosaurio ${dino.id}`} />
            </button>
          ))}
        </div>
        <div className="main-content2">
          <div className={`card2 ${selectedDino ? 'animate-' + selectedDino : ''}`}> {/* Add animation class if a dino is selected */}
            <div className="content2">
              {selectedDino ? (
                <>
                  <div className="dino-image">
                    <img src={dinos.find(dino => dino.id === selectedDino).img} alt={`Dinosaurio ${selectedDino}`} /> {/* Display selected dino image */}
                  </div>
                  <div className="dino-description">
                    <p>{dinos.find(dino => dino.id === selectedDino).description}</p> {/* Display selected dino description */}
                  </div>
                </>
              ) : (
                <div className="placeholder">
                  <h2>Seleccione un dinosaurio para ver la información</h2> {/* Placeholder text */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreDeExtinction;
