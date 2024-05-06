import React from "react";
import { useState } from "react";
import "../Page/Css/Profile.css";
import HeaderProfile from "../layout/HeaderProfile";
const Profile = () => {
   
    const handleLogout = () => {
      }
    
      return (
        <div>
            <HeaderProfile />
            <form className="profile-form">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="Text"
                    id="email"
                    disabled
                />
                <br />
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                    type="text"
                    id="username"
                    disabled
                />
                <br />
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    disabled
                />
                <br />
            </form>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
  };
    
    export default Profile;