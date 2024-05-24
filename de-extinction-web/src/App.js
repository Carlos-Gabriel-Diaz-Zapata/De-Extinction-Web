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
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider> {/* Provide authentication context to the app */}
        <Router> {/* Setup router for handling routes */}
          <Routes>
            <Route path='/' element={<PrincipalPage />} /> {/* Route to principal page */}
            <Route path='/login' element={<LoginPage />} /> {/* Route to login page */}
            <Route path='/register' element={<RegisterPage />} /> {/* Route to register page */}
            <Route path='/profile' element={
              <ProtectedRoute> {/* Protect the profile route */}
                <Profile />
              </ProtectedRoute>
            } />
            <Route path='/scores' element={
              <ProtectedRoute> {/* Protect the scores route */}
                <Scores />
              </ProtectedRoute>
            } />
            <Route path='/admin' element={
              <AdminRoute> {/* Protect the admin route */}
                <AdminPage />
              </AdminRoute>
            } />
            <Route path="/admin/new" element={
              <AdminRoute> {/* Protect the create user route */}
                <CreateUserPage />
              </AdminRoute>
            } />
            <Route path="/admin/edit/:userId" element={
              <AdminRoute> {/* Protect the edit user route */}
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
