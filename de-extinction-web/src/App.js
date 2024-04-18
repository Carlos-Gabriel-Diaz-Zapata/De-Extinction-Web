import './App.css';
import PrincipalPage from './components/PrincipalPage'; 
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <PrincipalPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
