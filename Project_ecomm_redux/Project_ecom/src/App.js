import './App.css';

import Navbarecom from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mobile from './Component/Mobile/Mobile';
import Tablet from './Component/Tablet/Tablet';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Dashboard from './Component/Dashboard/Dashboard';
import React, { createContext, useState } from 'react';
import axios from 'axios';
import CartPage from './other/CartPage';
// import CreateProduct from './other/CreateProduct';
import Monitor from './Component/Monitor_class/Monitor';
import Camera from './Component/Camera/Camera';
import Footer from './Component/Footer/Footer';



// import ProductDetail from './other/ProductDetail';
// import CartPageclass from './other/CartPageclass';
const LazyCart = React.lazy(()=>import('./other/CartPage'));
const LazyProductDetail = React.lazy(()=>import('./other/ProductDetail'));
const LazySignup = React.lazy(()=>import('./Component/Signup/Signup'));
const LazyCartClass = React.lazy(()=>import('./other/CartPageclass'));
const LazyCreateProduct = React.lazy(()=>import('./other/CreateProduct'))
const Appcontext = createContext();
function App() {
  console.log("App.js")
  const [cartData,setCartData] = useState([]);
  const [currentPath, setCurrentPath] = useState("");
  const [globalObj,setGlobalObj] = useState({
  mobileData:[],
  cameraData:[],
  tabletData:[],
  laptopData:[],
  monitorData:[]

})

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
    
  }

  const showAlert=()=>{
    alert("hello world")
  }

   const setGlobalData =(keyName,data)=>{
    setGlobalObj(prevState=>({...prevState,[keyName]:data}))
  }

 

  const incrementGlobalObj =(keyName,index)=>{
    setGlobalObj(prev=>{
      const upDateVal = [...prev[keyName]];
      upDateVal[index].quantity = upDateVal[index].quantity ?  upDateVal[index].quantity +1 : 1;
      console.log(keyName,upDateVal)
      return {
        ...prev,[keyName]:upDateVal
      }
    })

  }

  return (
    <div className='container-fliud'>
      <Appcontext.Provider  value={{incrementGlobalObj:incrementGlobalObj,globalObj:globalObj,setGlobalData:setGlobalData,cartDatainfo:cartData,getCartNum:getCartNumber,curntPath:currentPath,setActiveTb:setActiveTab,showAlertcall:showAlert}}>
     <BrowserRouter>
       <Navbarecom></Navbarecom>
       <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/Camera' element={<Camera />}></Route>
        <Route path='/Monitor' element={<Monitor favcol='blue'></Monitor>}></Route>
        <Route path='/Tablet' element={<Tablet></Tablet>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<React.Suspense><LazySignup /></React.Suspense>}></Route>
        <Route path='/cartpage' element={<React.Suspense><LazyCart /></React.Suspense>}></Route>
        <Route path='/creatProduct' element={<React.Suspense><LazyCreateProduct /></React.Suspense>}></Route>
        <Route path='/productDetail' element={<React.Suspense><LazyProductDetail /></React.Suspense>}></Route>
        <Route path='/cartnew' element={<React.Suspense><LazyCartClass /></React.Suspense>}></Route>
       </Routes>
        <Footer></Footer>
     </BrowserRouter>
     </Appcontext.Provider>
    </div>
  );
}

export default App;
export {Appcontext};



// const [globalObj,setGlobalObj] = useState({

//   mobileData:[],
//   cameraData:[],
//   tabletData:[],
//   laptopData:[],

// })


// React redux manages the state of the application globally