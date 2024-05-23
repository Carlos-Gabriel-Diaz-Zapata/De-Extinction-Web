import React from "react";
import { Link } from "react-router-dom";
import "../layout/Css/HeaderAdminPage.css";
import logo from "../assets/LogoDino.png";

/**
 * HeaderEditUser component to display the header for the edit user page.
 * Contains a link to navigate back to the admin page, a title, and the company logo.
 * 
 * @returns {JSX.Element} The rendered HeaderEditUser component.
 */
const HeaderEditUser = () => {
  return (
    <header className="header-containerProfile2">
      <div className="header-leftProfile2">
        {/* Link to navigate back to the admin page */}
        <Link to="/admin" className="header-buttonProfile1">
          Volver
        </Link>
      </div>
      <div className="header-centerProfile2">
        <h2 className="header-titleProfile2">Editar Usuario</h2>
      </div>
      <div className="header-rightProfile2">
        {/* Company logo */}
        <img src={logo} alt="Logo" className="header-logoProfile2" />
      </div>
    </header>
  );
};

export default HeaderEditUser;
