import './App.css';

import Navbarecom from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mobile from './Component/Mobile/Mobile';
import Tablet from './Component/Tablet/Tablet';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import React, { createContext, useState } from 'react';
import Monitor from './Component/Monitor_class/Monitor';
import Camera from './Component/Camera/Camera';
const LazyCart = React.lazy(()=>import('./other/CartPage'));
const LazyProductDetail = React.lazy(()=>import('./other/ProductDetail'));
const LazySignup = React.lazy(()=>import('./Component/Signup/Signup'));
const LazyCartClass = React.lazy(()=>import('./other/CartPageclass'));
const LazyCreateProduct = React.lazy(()=>import('./other/CreateProduct'))
const Appcontext = createContext();
function App() {
  const [currentPath, setCurrentPath] = useState("");
  
 
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

  
  

  return (
    <div className='container-fliud'>
      <Appcontext.Provider  value={{curntPath:currentPath,setActiveTb:setActiveTab}}>
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
     
     </BrowserRouter>
     </Appcontext.Provider>
    </div>
  );
}

export default App;
export {Appcontext};
