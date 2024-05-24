import React from 'react';
import '../layout/Css/Footer.css';
import logo from '../assets/LogoDino.png';
import logoX from '../assets/icons8-twitter-50.png';
import insta from '../assets/icons8-instagram-50.png';
import youtube from '../assets/icons8-youtube-play-50.png';
import facebook from '../assets/icons8-facebook-nuevo-50.png';
import tiktok from '../assets/icons8-tik-tok-50.png';
import discord from '../assets/icons8-logotipo-de-la-discordia-50.png';

/**
 * Footer component to display the footer section of the page.
 * Contains social media icons with links, company logo, a community join message, and a copyright message.
 * 
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          {/* Social media icons with links */}
          <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer">
            <img src={logoX} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" />
          </a>
          <a href="https://www.facebook.com/?locale=es_ES" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
            <img src={discord} alt="Discord" />
          </a>
        </div>
        <div>
          {/* Company logo */}
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <div>
          {/* Community join message */}
          <h3>¡Únete a la comunidad de jugadores y descubre un mundo lleno de aventuras!</h3>
        </div>
        {/* Footer copyright message */}
        <h4>© 2024 De-Extinction. All rights reserved.</h4>
      </div>
    </footer>
  );
}

export default Footer;
