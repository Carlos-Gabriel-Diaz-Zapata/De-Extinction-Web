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
    <HeaderEditUser/>
    <div className="edit-user-container">
      <h2>Editar Usuario</h2>
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
        <button type="submit" className="edit-user-btn">Actualizar</button>
      </form>
    </div>
    </div>
  );
};

export default EditUserPage;
