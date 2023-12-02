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
import CartPage from './other/CartPage';
import CreateProduct from './other/CreateProduct';
import Monitor from './Component/Monitor_class/Monitor';
import ProductDetail from './other/ProductDetail';

const Appcontext = createContext();
function App() {
  const [cartData,setCartData] = useState([]);
  const [currentPath, setCurrentPath] = useState("")
  const getCartNumber = async () => {
    try {
      const ls = localStorage.getItem('userInfo');
      const userinfo = JSON.parse(ls);
      const res = await axios.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=${userinfo.custId}`);
      console.log(res.data.data)
      const cartArray = res.data.data
      setCartData(cartArray);
    } catch (error) {
    }
  }
  const setActiveTab=(pathNamefromNavbar)=>{
    const urlString = window.location.href;
    const url = new URL(urlString);
    console.log(url.pathname);
    if(pathNamefromNavbar){
      setCurrentPath(pathNamefromNavbar);

    }else{
      setCurrentPath(url.pathname);
    }
    debugger
  }
  return (
    <div className='container-fliud'>
      <Appcontext.Provider  value={{cartDatainfo:cartData,getCartNum:getCartNumber,curntPath:currentPath,setActiveTb:setActiveTab}}>
     <BrowserRouter>
       <Navbarecom></Navbarecom>
       <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/Monitor' element={<Monitor favcol='blue'></Monitor>}></Route>
        <Route path='/Tablet' element={<Tablet></Tablet>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/cartpage' element={<CartPage></CartPage>}></Route>
        <Route path='/creatProduct' element={<CreateProduct></CreateProduct>}></Route>
        <Route path='/productDetail' element={<ProductDetail></ProductDetail>}></Route>
       </Routes>
     
     </BrowserRouter>
     </Appcontext.Provider>
    </div>
  );
}

export default App;
export {Appcontext};