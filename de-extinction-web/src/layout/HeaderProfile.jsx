import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/Css/HeaderProfile.css';

const HeaderProfile = () => {
  return (
    <header className='header-containerProfile'>
      <div className='header-leftProfile'>
        <Link to="/" className='header-buttonProfile'>Volver</Link>
      </div>
      <div className='header-rightProfile'>
        <h2 className='header-titleProfile'>Perfil</h2>
      </div>
    </header>
  );
}

export default HeaderProfile;
