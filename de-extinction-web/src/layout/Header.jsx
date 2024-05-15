import React from 'react';
import '../layout/Css/Header.css'; 
import logo from '../assets/LogoDino.png';
import { useState } from 'react';
import LoginForm from '../Page/LoginForm';
import { useNavigate } from 'react-router-dom'; 

const Header = ({ onLoginButtonClick }) => {
  const [showLoginForm, setShowLoginForm] = useState(false); 
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
  };
  return (
    <header className='header-container'>
      <div className='header-left'>
        <button className='header-button' onClick={() => scrollToSection('como-jugar')}>
          Como se Juega</button>
        <button className='header-button' onClick={() => scrollToSection('somos-de-extinction')}>Somos De-Extinction</button>
        <button className='header-button' onClick={handleLoginButtonClick}>
          Iniciar Sesión
        </button>
        <button className='header-button' onClick={handleProfile}>Perfil</button>
        <button className='header-button' onClick={handleScores}>Puntuaciones</button>
        <button className='header-button' onClick={handleAdmin}>Administrador</button>
        <button className='header-button'>Cerrar Cesión</button>
      </div>
      <div className='header-right'>
        <img src={logo} alt='Logo' className='header-logo' />
      </div>
      {showLoginForm && <LoginForm onCloseForm={handleCloseForm} />}
    </header>
  );
}

export default Header;
