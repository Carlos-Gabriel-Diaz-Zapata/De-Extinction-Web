import Header from '../layout/Header';
import React, { useState } from 'react';
import BodyPage from '../Page/BodyPage';
import Footer from '../layout/Footer';
import HowToPlay from '../Page/HowToPlay';
import WeAreDeExtinction from '../Page/WeAreDeExtinction';

const PrincipalPage = () => {
  return (
    <div className='container'>
      <Header/>
      <BodyPage/>
      <HowToPlay/>
      <WeAreDeExtinction/>
      <Footer/>
    </div>
  );
};
  
  export default PrincipalPage;