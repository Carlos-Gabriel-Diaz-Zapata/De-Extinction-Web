import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import PrincipalPage from './components/PrincipalPage'; 
import LoginPage from './Page/LoginPage';
import RegisterPage from '../src/Page/RegisterPage';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<PrincipalPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
