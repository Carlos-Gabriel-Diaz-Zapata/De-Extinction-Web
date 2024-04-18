import React from 'react';
import '../App.css';
import logo from '../assets/LogoDino.png';
import logoX from '../assets/icons8-twitter-50.png';
import insta from '../assets/icons8-instagram-50.png';
import youtube from '../assets/icons8-youtube-play-50.png';
import facebook from '../assets/icons8-facebook-nuevo-50.png';
import tiktok from '../assets/icons8-tik-tok-50.png';
import discord from '../assets/icons8-logotipo-de-la-discordia-50.png';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer"><img src={logoX}  /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={insta}  /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={youtube}  /></a>
          <a href="https://www.facebook.com/?locale=es_ES" target="_blank" rel="noopener noreferrer"><img src={facebook}  /></a>
          <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer"><img src={tiktok}  /></a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><img src={discord}  /></a>
        </div>
        <div>
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <h4>© 2024 De-Extinction. All rights reserved.</h4>
      </div>
    </footer>
  );
}

export default Footer;
