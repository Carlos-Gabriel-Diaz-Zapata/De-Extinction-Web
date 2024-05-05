import React from 'react';
import '../Page/Css/RegisterPage.css';
import { Link } from 'react-router-dom';
import fondoDIno from '../assets/fondoDino.jpg'
const RegisterPage = () => {
    return (
        <div className="register-container">
            <img src={fondoDIno} alt="T-Rex" className="t-rex-image" />
            <div className="form-container">
                <div className="computer-screen">
                    <div className='titles'>
                    <h2>Crear Cuenta</h2>
                    <h5>No te preocupes no la compartiremos con nadie</h5>
                    </div>
                    
                    <form>
                        <input type="text" placeholder='CORREO ELECTRÓNICO'/>
                        <br/>
                        <input type="text" placeholder='NOMBRE DE USUARIO'/>
                        <br/>
                        <input type="password" placeholder='CONTRASEÑA' />
                        <br/>
                        <button className='buttonLog' type="submit">Crear Cuenta</button>
                        <p>¿Ya tiénes una cuenta?</p>
                        <Link to="/login">Iniciar Sesión</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
