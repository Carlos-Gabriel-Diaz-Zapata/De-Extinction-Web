import Header from '../layout/Header';
import { Routes, Route } from 'react-router-dom'; 
import LoginForm from '../components/Page/FormLog/LoginForm'; 

const PrincipalPage = () => {
  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };
    return (
      <div className='container'>
        <Header /> 
        <Routes> {/* Define las rutas */}
          <Route path='/' element /> {/* Ruta para la página de inicio */}

        </Routes>
        
      </div>
    );
  };
  
  export default PrincipalPage;