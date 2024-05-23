import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/LogoDino.png";
import "../layout/Css/Header.css";

/**
 * Header component to display the top navigation bar.
 * Contains navigation buttons, a logo, and options for user interactions based on authentication status.
 * 
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // Access user and logout function from AuthContext

  /**
   * Navigates to the profile page.
   */
  const handleProfile = () => {
    navigate("/profile");
  };

  /**
   * Navigates to the scores page.
   */
  const handleScores = () => {
    navigate("/scores");
  };

  /**
   * Navigates to the admin page.
   */
  const handleAdmin = () => {
    navigate("/admin");
  };

  /**
   * Navigates to the login page.
   */
  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  /**
   * Logs out the user and navigates to the home page.
   */
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  /**
   * Smoothly scrolls to a section of the page.
   * 
   * @param {string} id - The id of the section to scroll to.
   */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header-container">
      <div className="header-left">
        {/* Buttons to scroll to specific sections */}
        <button
          className="header-button"
          onClick={() => scrollToSection("como-jugar")}
        >
          Como se Juega
        </button>
        <button
          className="header-button"
          onClick={() => scrollToSection("somos-de-extinction")}
        >
          Somos De-Extinction
        </button>
      </div>
      <div className="header-center">
        {user && (
          <>
            {/* Buttons visible only if user is logged in */}
            <button className="header-button" onClick={handleProfile}>
              Perfil
            </button>
            <button className="header-button" onClick={handleScores}>
              Puntuaciones
            </button>
            {user.admin && (
              // Show Admin button only if user is an admin
              <button className="header-button" onClick={handleAdmin}>
                Administrador
              </button>
            )}
          </>
        )}
      </div>
      <div className="header-right">
        {user ? (
          // Show Logout button if user is logged in
          <button className="header-button" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        ) : (
          // Show Login button if no user is logged in
          <button className="header-button" onClick={handleLoginButtonClick}>
            Iniciar Sesión
          </button>
        )}
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
    </header>
  );
};

export default Header;
