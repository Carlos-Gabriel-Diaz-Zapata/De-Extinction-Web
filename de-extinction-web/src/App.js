import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import PrincipalPage from './components/PrincipalPage'; 
import LoginPage from './Page/LoginPage';
import RegisterPage from '../src/Page/RegisterPage';  
import Profile from './Page/Profile';
import Scores from '../src/Page/Scores'
import AdminPage from './Page/AdminPage';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<PrincipalPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/scores' element={<Scores/>} />
          <Route path='/admin' element={<AdminPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
