import React from 'react';
import trailer3 from '../assets/Trailer3.mp4';

const BodyPage = () => {
    return (
      <div>
        <div className="main-page">
          <video autoPlay loop muted className="background-video">
            <source src={trailer3} type="video/mp4"/>
          </video>
          <div className="content">
            <h1 className='title' data-text="De-Extinction"></h1>
            <h3 className='subtitle'>¡Corre sin límites en un mundo donde la aventura nunca termina!</h3>
            <button>Descargar</button>
          </div>
        </div>
      </div>
       
      );
    };

export default BodyPage;
