import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/AdminPage.css';
import HeaderAdminPage from '../layout/HeaderAdminPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await ApiService.fetchAllUsers();
        console.log('Usuarios obtenidos:', data);
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

  const handleDelete = async (userId, userName) => {
    const confirmDelete = window.confirm(`¿Está seguro que desea eliminar permanentemente a "${userName}"?`);
    if (confirmDelete) {
      try {
        await ApiService.deleteUser(userId);
        setUsers(users.filter((user) => user.userId !== userId));
        toast.success('Usuario eliminado exitosamente');
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error('Error eliminando usuario');
      }
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <HeaderAdminPage />
      <div className='adminContainer'>
        <section className='contentSection'>
          <div className='searchContainer'>
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
            <div className='tableContent'>
          <div className='tableWrapper'>
            <div className='col2'>
              <div className="col">Id</div>
              <div className="col">Nombre</div>
              <div className="col">Email</div>
              <div className="col">Administrador</div>
              <div className="col">Acciones</div>
            </div>
              {filteredUsers.map((user) => (
                <div className="row" key={user.userId}>
                  <div className="col"> {user.userId} </div>
                  <div className="col"> {user.name} </div>
                  <div className='col'> {user.email} </div>
                  <div className="col"> {user.admin ? 'Sí' : 'No'} </div>
                  <div className="col actionCol">
                    <Link to={`/admin/edit/${user.userId}`} className="btn btn-primary">
                      Editar
                    </Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(user.userId, user.name)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;