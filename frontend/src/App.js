import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

//components
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* //NavbarHere */}
        <div className="site-pages">
          <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Register></Register>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
