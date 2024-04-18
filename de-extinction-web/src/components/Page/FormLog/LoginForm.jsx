// LoginForm.jsx

import React from 'react';

const LoginForm = () => {
  const handleLogin = () => {
    // Manejar la acción de inicio de sesión
  };

  const handleCreateAccount = () => {
    // Manejar la acción de crear cuenta
  };

  return (
    <div className="login-form">
      <input type="text" placeholder="Nombre de usuario" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={handleCreateAccount}>Crear Cuenta</button>
    </div>
  );
};

export default LoginForm;
