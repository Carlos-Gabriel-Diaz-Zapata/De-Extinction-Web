import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/Css/HeaderScores.css';
import logo from '../assets/LogoDino.png'; 

const HeaderScores = () => {
  return (
    <header className='header-containerProfile2'>
      <div className='header-leftProfile2'>
        <Link to="/" className='header-buttonProfile1'>Volver</Link>
      </div>
      <div className='header-centerProfile2'>
        <h2 className='header-titleProfile2'>Puntuaciones</h2>
      </div>
      <div className='header-rightProfile2'>
        <img src={logo} alt="Logo" className="header-logoProfile2" />
      </div>
    </header>
  );
}

export default HeaderScores;
