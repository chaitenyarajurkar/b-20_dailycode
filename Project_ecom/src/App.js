import './App.css';

import Navbarecom from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mobile from './Component/Mobile/Mobile';
import Tablet from './Component/Tablet/Tablet';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Dashboard from './Component/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import axios from 'axios';

const Appcontext = createContext();
function App() {
  const [cartNumber,setCartNumber] = useState(0);

  const getCartNumber = async () => {
    try {
      const res = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=30');
      console.log(res.data.data)
      const cartArray = res.data.data
      setCartNumber(cartArray.length);
    } catch (error) {
    }
  }
  return (
    <div className='container-fliud'>
      <Appcontext.Provider  value={{cartNum:cartNumber,getCartNum:getCartNumber}}>
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
     </Appcontext.Provider>
    </div>
  );
}

export default App;
export {Appcontext};