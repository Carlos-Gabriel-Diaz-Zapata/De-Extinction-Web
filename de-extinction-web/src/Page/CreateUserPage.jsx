import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/CreateUserPage.css';
import HeaderCreateUsers from '../layout/HeaderCreateUser';

const CreateUserPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { name, email, password, admin: isAdmin };
    try {
      await ApiService.createUser(userData);
      alert('Usuario creado exitosamente');
      navigate('/admin');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <HeaderCreateUsers />
      <div className="create-user-container">
        <h2>Crear Nuevo Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Administrador</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <button type="submit" className="create-user-btn">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserPage;
