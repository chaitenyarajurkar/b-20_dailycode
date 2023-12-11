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
// import ProductDetail from './other/ProductDetail';
// import CartPageclass from './other/CartPageclass';
const LazyCart = React.lazy(()=>import('./other/CartPage'));
const LazyProductDetail = React.lazy(()=>import('./other/ProductDetail'));
const LazySignup = React.lazy(()=>import('./Component/Signup/Signup'));
const LazyCartClass = React.lazy(()=>import('./other/CartPageclass'));
const LazyCreateProduct = React.lazy(()=>import('./other/CreateProduct'))
const Appcontext = createContext();
function App() {
  const [cartData,setCartData] = useState([]);
  const [currentPath, setCurrentPath] = useState("");
  const [mobileData,setMobileData] = useState([]);
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

  const setDataInMobile =(mobdata)=>{
    setMobileData(mobdata)
  }

  const increMent=(index)=>{
    // setQty(qty+1);
    // console.log(index,mobileData[index]);

    setMobileData(prevState=>{
        let updateMobileData = prevState.map((item,ind)=>{
            if(ind === index){
                let quantity = item.quantity ?  item.quantity +1 : 1;
                return {...item,quantity:quantity}
            }else{
                return {...item};
            }

        })
        return updateMobileData
    })
      
   }
  return (
    <div className='container-fliud'>
      <Appcontext.Provider  value={{increMentMobile:increMent,mobileDataInfo:mobileData,setDataMobile:setDataInMobile,cartDatainfo:cartData,getCartNum:getCartNumber,curntPath:currentPath,setActiveTb:setActiveTab,showAlertcall:showAlert}}>
     <BrowserRouter>
       <Navbarecom></Navbarecom>
       <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/Monitor' element={<Monitor favcol='blue'></Monitor>}></Route>
        <Route path='/Tablet' element={<Tablet></Tablet>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<React.Suspense><LazySignup /></React.Suspense>}></Route>
        <Route path='/cartpage' element={<React.Suspense><LazyCart /></React.Suspense>}></Route>
        <Route path='/creatProduct' element={<React.Suspense><LazyCreateProduct /></React.Suspense>}></Route>
        <Route path='/productDetail' element={<React.Suspense><LazyProductDetail /></React.Suspense>}></Route>
        <Route path='/cartnew' element={<React.Suspense><LazyCartClass /></React.Suspense>}></Route>
       </Routes>
     
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