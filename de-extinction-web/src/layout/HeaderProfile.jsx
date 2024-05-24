import React from "react";
import { Link } from "react-router-dom";
import "../layout/Css/HeaderProfile.css";
import logo from "../assets/LogoDino.png";

/**
 * HeaderProfile component to display the header for the profile page.
 * Contains a link to navigate back to the home page, a title, and the company logo.
 * 
 * @returns {JSX.Element} The rendered HeaderProfile component.
 */
const HeaderProfile = () => {
  return (
    <header className="header-containerProfile1">
      <div className="header-leftProfile1">
        {/* Link to navigate back to the home page */}
        <Link to="/" className="header-buttonProfile1">
          Volver
        </Link>
      </div>
      <div className="header-centerProfile1">
        <h2 className="header-titleProfile1">Perfil</h2>
      </div>
      <div className="header-rightProfile1">
        {/* Company logo */}
        <img src={logo} alt="Logo" className="header-logoProfile1" />
      </div>
    </header>
  );
};

export default HeaderProfile;
