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
import Accordian from './Accordian';
import Carousel from './Carousel';
import CrudwithLs from './Crud/CrudwithLs';


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
    <p>{process.env.REACT_APP_TITLE}</p>
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
      <Route path='/accordian' element={<Accordian></Accordian>}></Route>
      <Route path='/caurosel' element={<Carousel></Carousel>}></Route>
      <Route path='/crud' element={<CrudwithLs></CrudwithLs>}></Route>
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