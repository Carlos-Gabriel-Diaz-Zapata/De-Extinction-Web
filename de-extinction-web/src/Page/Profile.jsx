import React from "react";
import { useState } from "react";
import "../Page/Css/Profile.css";
import HeaderProfile from "../layout/HeaderProfile";

const Profile = () => {
  return (
    <div>
      <HeaderProfile />
      <div className="ProfileContainer1">
      <div className="form-container1">
      <form>
        <div className="input-group1">
          <label >Correo Electrónico:</label> 
          <input type="Text" id="email" disabled />
        </div>
        <div className="input-group1">
          <label >Nombre de usuario:</label>
          <input type="text" id="username" disabled />
        </div>
        <div className="input-group1">
          <label >Contraseña:</label>
          <input type="password" id="password" disabled />
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Profile;
