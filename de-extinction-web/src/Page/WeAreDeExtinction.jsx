import React, { useState } from 'react';
import dino1 from '../assets/Dino1G.png';
import dino2 from '../assets/Dino2G.png';
import dino3 from '../assets/Dino3G.png';
import dino4 from '../assets/Dino4G.png';
import '../Page/Css/WeAreDeExtinction.css';

const WeAreDeExtinction = () => {
  const [selectedDino, setSelectedDino] = useState(null);

  const dinos = [
    { id: 1, img: dino1, description: 'Descripción del Dinosaurio 1' },
    { id: 2, img: dino2, description: 'Descripción del Dinosaurio 2' },
    { id: 3, img: dino3, description: 'Descripción del Dinosaurio 3' },
    { id: 4, img: dino4, description: 'Descripción del Dinosaurio 4' },
  ];

  return (
    <div className="container3" id="somos-de-extinction">
      <h1 className="title4">Somos De-Extinction</h1>
      <div className="content-area">
        <div className="sidebar">
          {dinos.map((dino) => (
            <button
              key={dino.id}
              className={`dino-button ${selectedDino === dino.id ? 'selected' : ''}`}
              onClick={() => setSelectedDino(dino.id)}
            >
              <img src={dino.img} alt={`Dinosaurio ${dino.id}`} />
            </button>
          ))}
        </div>
        <div className="main-content2">
          <div className={`card2 ${selectedDino ? 'animate-' + selectedDino : ''}`}>
            <div className="content2">
              {selectedDino ? (
                <>
                  <div className="dino-image">
                    <img src={dinos.find(dino => dino.id === selectedDino).img} alt={`Dinosaurio ${selectedDino}`} />
                  </div>
                  <div className="dino-description">
                    <p>{dinos.find(dino => dino.id === selectedDino).description}</p>
                  </div>
                </>
              ) : (
                <div className="placeholder">
                  <h2>Seleccione un dinosaurio para ver la información</h2>
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
