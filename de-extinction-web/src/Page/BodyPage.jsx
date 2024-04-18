import React from 'react';
import trailer from '../assets/trailer.mp4';

const BodyPage = () => {
    return (
        <div className="main-page">
          <video autoPlay loop muted className="background-video">
            <source src={trailer} type="video/mp4"/>
          </video>
          <div className="content">
            <h1 className='title' data-text="De-Extinction"></h1>
            <button>Descargar</button>
          </div>
        </div>
      );
    };

export default BodyPage;
