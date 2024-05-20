import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/Css/HeaderAdminPage.css';
import logo from '../assets/LogoDino.png'; 

const HeaderCreateUsers = () => {
  return (
    <header className='header-containerProfile2'>
      <div className='header-leftProfile2'>
        <Link to="/admin" className='header-buttonProfile1'>Volver</Link>
      </div>
      <div className='header-centerProfile2'>
        <h2 className='header-titleProfile2'>Crear Usuario</h2>
      </div>
      <div className='header-rightProfile2'>
        <img src={logo} alt="Logo" className="header-logoProfile2" />
      </div>
    </header>
  );
}

export default HeaderCreateUsers;
