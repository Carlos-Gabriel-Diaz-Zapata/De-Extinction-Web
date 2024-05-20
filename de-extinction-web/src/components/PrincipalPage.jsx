import Header from '../layout/Header';
import React from 'react';
import BodyPage from '../Page/BodyPage';
import Footer from '../layout/Footer';
import HowToPlay from '../Page/HowToPlay';
import WeAreDeExtinction from '../Page/WeAreDeExtinction';
import ScrollToTopButton from './ScrollToTopButton';

const PrincipalPage = () => {
  return (
    <div className='container'>
      <Header/>
      <BodyPage/>
      <HowToPlay/>
      <WeAreDeExtinction/>
      <Footer/>
      <ScrollToTopButton />
    </div>
  );
};
  
  export default PrincipalPage;