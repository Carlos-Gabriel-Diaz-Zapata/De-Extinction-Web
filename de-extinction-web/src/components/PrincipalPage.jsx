import Header from '../layout/Header';
import { Routes, Route } from 'react-router-dom'; 
import LoginForm from '../Page/LoginForm';
import React, { useState } from 'react';
import BodyPage from '../Page/BodyPage';
import Footer from '../layout/Footer';
const PrincipalPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); 

  // Función para manejar el clic en el botón "Iniciar Sesión"
  const handleLoginButtonClick = () => {
    setShowLoginForm(true); // Mostrar el formulario al hacer clic en el botón "Iniciar Sesión"
  };

  return (
    <div className='container'>
      <Header onLoginButtonClick={handleLoginButtonClick} />
      {/* Mostrar el formulario de inicio de sesión si showLoginForm es verdadero */}
      {showLoginForm && <LoginForm />}
      <Routes> 
        <Route path='/' element ={<BodyPage />} /> 
      </Routes>
      <Footer/>
    </div>
  );
};
  
  export default PrincipalPage;