import React from 'react';
import '../layout/Css/Header.css'; 
import logo from '../assets/LogoDino.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Header = ({ onLoginButtonClick }) => {
  const navigate = useNavigate(); 

  const handleProfile = () => {
    navigate('/profile');
  }

  const handleScores = () => {
    navigate('/scores')
  }

  const handleAdmin = () => {
    navigate('/admin')
  }

  const handleLoginButtonClick = () => {
    navigate('/Login'); 
  }

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
        <button className='header-button' onClick={() => scrollToSection('como-jugar')}>Como se Juega</button>
        <button className='header-button' onClick={() => scrollToSection('somos-de-extinction')}>Somos De-Extinction</button>
      </div>
      <div className='header-center'>
        <button className='header-button' onClick={handleProfile}>Perfil</button>
        <button className='header-button' onClick={handleScores}>Puntuaciones</button>
        <button className='header-button' onClick={handleAdmin}>Administrador</button>
      </div>
      <div className='header-right'>
        <button className='header-button' onClick={handleLoginButtonClick}>Iniciar Sesión</button>
        <button className='header-button'>Cerrar Sesión</button>
        <img src={logo} alt='Logo' className='header-logo' />
      </div>
    </header>
  );
}

export default Header;
