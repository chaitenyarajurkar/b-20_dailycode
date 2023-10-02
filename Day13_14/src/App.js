import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Feature from './Feature';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Notavailable from './Notavailable';
function App() {
 
  return (
   <div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/home' element={<Home></Home>} ></Route>
      <Route path='/pricing' element={<Pricing></Pricing>} ></Route>
      <Route path='/feature' element={<Feature></Feature>} ></Route>
      <Route path='*' element={<Notavailable></Notavailable>}>  </Route>
    </Routes>
    </BrowserRouter>
    
   </div>
  );
}

export default App;

// routing    BroserRoutes , Routes ,Route

// call