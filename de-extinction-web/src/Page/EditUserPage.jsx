import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/EditUserPage.css';
import HeaderEditUser from '../layout/HeaderEditUser';

const EditUserPage = () => {
  const { userId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await ApiService.getUserById(userId);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
      } catch (error) {
        console.error('Error obteniendo usuario:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ApiService.updateUser(userId, { name, email, password });
      alert('Usuario actualizado exitosamente');
      navigate('/admin');
    } catch (error) {
      console.error('Error actualizando usuario:', error);
      alert('Error actualizando usuario');
    }
  };

  return (
    <div>
      <HeaderEditUser />

    <div className="edit-user-page">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
            <label>Nombre</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
            <label>Contraseña</label>
          </div>
          <center>
            <button type="submit" className="submit-btn">
              <span></span>Actualizar
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
  );
};

export default EditUserPage;
