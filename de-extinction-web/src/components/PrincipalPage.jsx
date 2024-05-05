import Header from '../layout/Header';
import LoginForm from '../Page/LoginForm';
import React, { useState } from 'react';
import BodyPage from '../Page/BodyPage';
import Footer from '../layout/Footer';
import HowToPlay from '../Page/HowToPlay';
import WeAreDeExtinction from '../Page/WeAreDeExtinction';

const PrincipalPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); 

  const handleLoginButtonClick = () => {
    setShowLoginForm(true); 
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
  }
  return (
    <div className='container'>
      <Header onLoginButtonClick={handleLoginButtonClick} />
      {showLoginForm && <LoginForm onCloseForm={handleCloseForm} />}  
      <BodyPage/>
      <HowToPlay/>
      <WeAreDeExtinction/>
      <Footer/>
    </div>
  );
};
  
  export default PrincipalPage;