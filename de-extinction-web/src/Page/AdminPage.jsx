import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Page/Css/AdminPage.css';
import HeaderAdminPage from '../layout/HeaderAdminPage';

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sampleData = [
    { id: 1, firstName: "Nombre1", lastName: "Apellido1" },
    { id: 2, firstName: "Nombre2", lastName: "Apellido2" },
    { id: 3, firstName: "Nombre3", lastName: "Apellido3" },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = sampleData.filter((data) => {
    const fullName = `${data.firstName} ${data.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
    <div className='adminContainer'>
     <HeaderAdminPage/>
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
          <div className="col">Apellido</div>
          <div className="col">Acciones</div>
        </header>

        <div style={{ overflowY: 'auto', maxHeight: '500px', backgroundColor: '#1C1C1C' }}>
          {filteredData.map(({ id, firstName, lastName }) => (
              <div className="row" key={id}>
              <div className="col"> {id} </div>
              <div className="col"> {firstName} </div>
              <div className='col'> {lastName} </div>
              <div className="col">
                <Link to={`/admin/edit/${id}`} className="btn btn-primary">
                  Editar
                </Link>
                <button className="btn btn-danger">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default AdminPage;
