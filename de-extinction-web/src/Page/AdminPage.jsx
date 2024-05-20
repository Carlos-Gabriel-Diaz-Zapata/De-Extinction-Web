import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/AdminPage.css';
import HeaderAdminPage from '../layout/HeaderAdminPage';

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  // useEffect para cargar los usuarios cuando el componente se monta
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await ApiService.fetchAllUsers();
        console.log('Usuarios obtenidos:', data); // Log para verificar la estructura de los datos
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (userId) => {
    try {
      await ApiService.deleteUser(userId);
      setUsers(users.filter((user) => user.userId !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='adminContainer'>
      <HeaderAdminPage />
      <section>
        <div className='centrado'>
          <Link to="/admin/new" className="btn">
            Nuevo
          </Link>
          <input
            type="text"
            placeholder="Buscar administradores..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="input"
          />
        </div>
        <header className='col2'>
          <div className="col">Id</div>
          <div className="col">Nombre</div>
          <div className="col">Email</div>
          <div className="col">Administrador</div>
          <div className="col">Acciones</div>
        </header>

        <div style={{ overflowY: 'auto', maxHeight: '500px', backgroundColor: '#1C1C1C' }}>
          {filteredUsers.map((user) => (
            <div className="row" key={user.userId}>
              <div className="col"> {user.userId} </div>
              <div className="col"> {user.name} </div>
              <div className='col'> {user.email} </div>
              <div className="col"> {user.admin ? 'Sí' : 'No'} </div>
              <div className="col">
                <Link to={`/admin/edit/${user.userId}`} className="btn btn-primary">
                  Editar
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(user.userId)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
