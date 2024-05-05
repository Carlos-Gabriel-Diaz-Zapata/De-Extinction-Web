import React from 'react';
import LoginPageCSS from '../Page/Css/LoginPage.css';
import fondoDIno from '../assets/fondoDino.jpg'
import { Link } from 'react-router-dom';
const LoginPage = () => {
    return (
        <div className="login-container">
            <img src={fondoDIno} alt="T-Rex" className="t-rex-image" />
            <div className="form-container">
                <div className="computer-screen">
                    <h2>Iniciar Sesión</h2>
                    <form>
                        <input type="text" placeholder='NOMBRE DE USUARIO'/>
                        <br/>
                        <input type="password" placeholder='CONTRASEÑA' />
                        <br/>
                        <button className='buttonLog' type="submit">Iniciar Sesión</button>
                        <p>¿NO PUEDES INICIAR SESIÓN?</p>
                        <Link to="/register">Crear Cuenta</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
