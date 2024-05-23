import React from "react";
import { Link } from "react-router-dom";
import "../layout/Css/HeaderScores.css";
import logo from "../assets/LogoDino.png";

/**
 * HeaderScores component to display the header for the scores page.
 * Contains a link to navigate back to the home page, a title, and the company logo.
 * 
 * @returns {JSX.Element} The rendered HeaderScores component.
 */
const HeaderScores = () => {
  return (
    <header className="header-containerProfile2">
      <div className="header-leftProfile2">
        {/* Link to navigate back to the home page */}
        <Link to="/" className="header-buttonProfile1">
          Volver
        </Link>
      </div>
      <div className="header-centerProfile2">
        <h2 className="header-titleProfile2">Puntuaciones</h2>
      </div>
      <div className="header-rightProfile2">
        {/* Company logo */}
        <img src={logo} alt="Logo" className="header-logoProfile2" />
      </div>
    </header>
  );
};

export default HeaderScores;
