import React, { useContext } from "react";
import "../Page/Css/Profile.css";
import HeaderProfile from "../layout/HeaderProfile";
import { AuthContext } from "../context/AuthContext";

// Profile component to display user's profile information
const Profile = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext

  // If no user is authenticated, show a message
  if (!user) {
    return <div>No estás autenticado</div>;
  }

  return (
    <div>
      {/* Render header for profile page */}
      <HeaderProfile />
      <div className="ProfileContainer1">
        <div className="form-container1">
          {/* Form to display user information */}
          <form>
            <div className="input-group1">
              <label>Correo Electrónico:</label>
              <input type="text" value={user.email} disabled />{" "}
              {/* Display user's email */}
            </div>
            <div className="input-group1">
              <label>Nombre de usuario:</label>
              <input type="text" value={user.name} disabled />{" "}
              {/* Display user's name */}
            </div>
            <div className="input-group1">
              <label>Contraseña:</label>
              <input type="password" value={user.password} disabled />{" "}
              {/* Display user's password */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
