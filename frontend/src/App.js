import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
//components
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Main from './pages/Main';


function App() {
  const {user}=useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="site-pages">
          <Routes>
            <Route path='/' element={user ? <Main></Main> : <Navigate to='/login'></Navigate>}></Route>
            <Route path='/login' element={!user ? <Login></Login> : <Navigate to='/'></Navigate>}></Route>
            <Route path='/signup' element={!user ? <Register></Register> : <Navigate to='/'></Navigate>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
