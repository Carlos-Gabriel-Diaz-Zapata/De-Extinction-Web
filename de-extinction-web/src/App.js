import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import PrincipalPage from './components/PrincipalPage'; 
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/RegisterPage';  
import Profile from './Page/Profile';
import Scores from './Page/Scores';
import AdminPage from './Page/AdminPage';
import CreateUserPage from './Page/CreateUserPage';
import EditUserPage from './Page/EditUserPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute ';
import AdminRoute from './components/AdminRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<PrincipalPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path='/scores' element={
              <ProtectedRoute>
                <Scores />
              </ProtectedRoute>
            } />
            <Route path='/admin' element={
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            } />
            <Route path="/admin/new" element={
              <AdminRoute>
                <CreateUserPage />
              </AdminRoute>
            } />
            <Route path="/admin/edit/:userId" element={
              <AdminRoute>
                <EditUserPage />
              </AdminRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
