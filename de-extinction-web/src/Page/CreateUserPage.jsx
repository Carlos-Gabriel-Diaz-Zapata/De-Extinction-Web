import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/CreateUserPage.css';
import HeaderCreateUsers from '../layout/HeaderCreateUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      if (error.message === 'El nombre de usuario ya existe') {
        toast.error('El nombre de usuario ya existe');
      } else {
        toast.error('Error creando usuario');
      }
      console.error('Error creando usuario:', error);
    }
  };

  return (
    <div>
      <HeaderCreateUsers />
      <div className="edit-user-page">
        <div className="create-user-container">
          <h2>Crear Nuevo Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group user-box">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Nombre</label>
            </div>
            <div className="form-group user-box">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="form-group user-box">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Contraseña</label>
            </div>
            <div className="form-group admin-group">
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
            <button type="submit" className="create-user-btn">
              Crear
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateUserPage;
