// src/layout/Header.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/LogoDino.png';
import '../layout/Css/Header.css'; 

const Header = () => {
  const navigate = useNavigate(); 
  const { user, logout } = useContext(AuthContext);

  const handleProfile = () => {
    navigate('/profile');
  }

  const handleScores = () => {
    navigate('/scores');
  }

  const handleAdmin = () => {
    navigate('/admin');
  }

  const handleLoginButtonClick = () => {
    navigate('/login'); 
  }

  const handleLogout = () => {
    logout();
    navigate('/');
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
        {user && (
          <>
            <button className='header-button' onClick={handleProfile}>Perfil</button>
            <button className='header-button' onClick={handleScores}>Puntuaciones</button>
            <button className='header-button' onClick={handleAdmin}>Administrador</button>
          </>
        )}
      </div>
      <div className='header-right'>
        {user ? (
          <button className='header-button' onClick={handleLogout}>Cerrar Sesión</button>
        ) : (
          <button className='header-button' onClick={handleLoginButtonClick}>Iniciar Sesión</button>
        )}
        <img src={logo} alt='Logo' className='header-logo' />
      </div>
    </header>
  );
}

export default Header;
