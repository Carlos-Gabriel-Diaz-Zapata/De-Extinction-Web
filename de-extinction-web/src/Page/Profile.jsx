import React, { useContext } from 'react';
import '../Page/Css/Profile.css';
import HeaderProfile from '../layout/HeaderProfile';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>No estás autenticado</div>;
  }

  return (
    <div>
      <HeaderProfile />
      <div className="ProfileContainer1">
        <div className="form-container1">
          <form>
            <div className="input-group1">
              <label>Correo Electrónico:</label>
              <input type="text" value={user.email} disabled />
            </div>
            <div className="input-group1">
              <label>Nombre de usuario:</label>
              <input type="text" value={user.name} disabled />
            </div>
            <div className="input-group1">
              <label>Contraseña:</label>
              <input type="password" value={user.password} disabled />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
