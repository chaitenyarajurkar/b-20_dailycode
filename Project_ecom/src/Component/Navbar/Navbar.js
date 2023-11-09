import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { getData } from '../../other/common';


const Navbarecom = () => {

  const [navData, setNavData] = useState([])

  useEffect(() => {
       getData().then((data)=>{
          // data   47 data
          
         setNavData(data);

       });
  }, [])
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Ecom</Navbar.Brand>
        <Nav className="me-auto">
          {navData.slice(0,5).map((item, index) => {
              return (
                <Nav.Link href={item.categoryName}>{item.categoryName}</Nav.Link>
              )
            
          })}
        </Nav>
        <Nav className="ml-auto">
          {/* <FontAwesomeIcon icon={faUser} style={{color:'white'}} ></FontAwesomeIcon> */}
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#home">Sign up</Nav.Link>
        </Nav>

      </Navbar>

    </div>
  );
};

export default Navbarecom;