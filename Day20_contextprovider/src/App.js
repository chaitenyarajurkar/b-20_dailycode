import { createContext, useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Feature from './Feature';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Notavailable from './Notavailable';
import Dashboard from './Dashboard';
import Featurenew from './Featurenew';
import Videoplayer from './Videoplayer';


// createCOntext 
// useContext

const Appcontext = createContext();

function App() {
  const [appData,setAppData] = useState("hello this is from app component");
  const [headingtoz,setHeadingz] = useState("This is for Z component")

const updateZheading=()=>{
  setHeadingz("update heading")

}

const updatewithparam =(inffromz)=>{
  setHeadingz(inffromz)
}
 
  return (
   <div>
    <Appcontext.Provider value={{appinfo:appData,headingtoz:headingtoz,updateZheading:updateZheading,updatewithparam:updatewithparam}}>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>
      <Route path='/home' element={<Home></Home>} ></Route>
      <Route path='/pricing' element={<Pricing></Pricing>} ></Route>
      <Route path='/feature/:game?/:mode' element={<Feature></Feature>} ></Route>
      <Route path='/featurenew' element={<Featurenew></Featurenew>}></Route>
      <Route path='/videoplayer' element={<Videoplayer></Videoplayer>}></Route>
      <Route path='*' element={<Notavailable></Notavailable>}>  </Route>

    </Routes>
    </BrowserRouter>
    </Appcontext.Provider>
    
   </div>
  );
}

export default App;
export {Appcontext};

// routing    BroserRoutes , Routes ,Route

// call