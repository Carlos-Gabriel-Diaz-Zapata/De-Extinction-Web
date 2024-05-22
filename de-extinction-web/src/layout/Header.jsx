import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/LogoDino.png";
import "../layout/Css/Header.css";

// Header component to display the top navigation bar
const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // Access user and logout function from AuthContext

  // Function to navigate to the profile page
  const handleProfile = () => {
    navigate("/profile");
  };

  // Function to navigate to the scores page
  const handleScores = () => {
    navigate("/scores");
  };

  // Function to navigate to the admin page
  const handleAdmin = () => {
    navigate("/admin");
  };

  // Function to navigate to the login page
  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  // Function to handle user logout
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Function to smoothly scroll to a section of the page
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
            {user.admin && ( // Show Admin button only if user is an admin
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
