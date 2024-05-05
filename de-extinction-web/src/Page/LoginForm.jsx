import React, { useState } from 'react';
import closeIcon from '../assets/icons8-multiplicación-2-50.png'; 
import { useNavigate } from 'react-router-dom'; 
import '../Page/Css/LoginForm.css';
const LoginForm = ({ onCloseForm }) => {
  const navigate = useNavigate(); 

  const handleLoginButtonClick = () => {
    navigate('/Login'); 
  }
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleCloseForm = () => {
    setShowLoginForm(false);
    onCloseForm();
  };

  return (
    <>
      {showLoginForm && (
        <div className='login-form-overlay'>
          <div className="login-form">
            <button className="close-button" onClick={handleCloseForm}><img src={closeIcon} alt="Cerrar" /></button>
            <h2 className='titleform'>\ PREPARADOS PARA JUGAR \</h2>
            <div className="button-container">
                <button onClick={handleLoginButtonClick}>Iniciar Sesión</button>
                <button>Crear Cuenta</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;

