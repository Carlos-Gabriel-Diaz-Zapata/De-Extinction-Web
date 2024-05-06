import React from 'react';
import '../layout/Css/Header.css'; 
import logo from '../assets/LogoDino.png';

const Header = ({ onLoginButtonClick }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <header className='header-container'>
      <div className='header-left'>
        <button className='header-button' onClick={() => scrollToSection('como-jugar')}>
          Como se Juega</button>
        <button className='header-button' onClick={() => scrollToSection('somos-de-extinction')}>Somos De-Extinction</button>
        <button className='header-button' onClick={onLoginButtonClick}>
          Iniciar Sesión
        </button>
        <button className='header-button'>Perfil</button>
        <button className='header-button'>Puntuaciones</button>
        <button className='header-button'>Administrador</button>
        <button className='header-button'>Cerrar Cesión</button>
      </div>
      <div className='header-right'>
        <img src={logo} alt='Logo' className='header-logo' />
      </div>
    </header>
  );
}

export default Header;
