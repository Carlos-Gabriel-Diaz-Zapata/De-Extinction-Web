import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/Css/HeaderProfile.css';
import logo from '../assets/LogoDino.png'; 

const HeaderProfile = () => {
  return (
    <header className='header-containerProfile1'>
      <div className='header-leftProfile1'>
        <Link to="/" className='header-buttonProfile1'>Volver</Link>
      </div>
      <div className='header-centerProfile1'>
        <h2 className='header-titleProfile1'>Perfil</h2>
      </div>
      <div className='header-rightProfile1'>
        <img src={logo} alt="Logo" className="header-logoProfile1" />
      </div>
    </header>
  );
}

export default HeaderProfile;
