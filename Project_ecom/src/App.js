import './App.css';

import Navbarecom from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mobile from './Component/Mobile/Mobile';
import Tablet from './Component/Tablet/Tablet';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Dashboard from './Component/Dashboard/Dashboard';
function App() {
  return (
    <div className='container-fliud'>
     <BrowserRouter>
       <Navbarecom></Navbarecom>
       <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/Tablet' element={<Tablet></Tablet>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
       </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
