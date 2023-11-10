import React, { useEffect, useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { getData } from '../../other/common';

import {Link} from 'react-router-dom';
const Navbarecom = () => {

  const [navData, setNavData] = useState([]);

  const [currentPath,setCurrentPath] = useState("")


  useEffect(() => {
      const urlString = window.location.href;
  const url = new URL(urlString);
 console.log(url.pathname); 
 setCurrentPath(url.pathname);

       getData().then((data)=>{
          // data   47 data
          
         setNavData(data);

       });
  }, [])

const setActiveTAB=(path)=>{
  setCurrentPath(path)
  
}

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Ecom</Navbar.Brand>
        <Nav className="me-auto">
          {navData.slice(0,5).map((item, index) => {
              return (
                <Nav.Link as={Link} to={item.categoryName} onClick={()=>setActiveTAB(item.categoryName)}  style={currentPath.indexOf(item.categoryName) > -1 ? {color:"red"} : {}}>{item.categoryName}</Nav.Link>
              )
            
          })}
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/login" onClick={()=>setActiveTAB("Login")}>Login</Nav.Link>
          <Nav.Link as={Link} to="/login" onClick={()=>setActiveTAB("Signup")}>Sign up</Nav.Link>
        </Nav>

      </Navbar>

    </div>
  );
};

export default Navbarecom;