import React, { useContext, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getData } from '../../other/common';
import { Link } from 'react-router-dom';
import { Appcontext } from '../../App';
const Navbarecom = () => {
 const cartNumb = useContext(Appcontext)
 console.log(cartNumb);
  const [navData, setNavData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

 


  useEffect(() => {
    
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo !== null) {
      setIsLogin(true);
    }
    cartNumb.setActiveTb();
    cartNumb.getCartNum();
   

    getData().then((data) => {
      // data   47 data

      setNavData(data);

    });
  }, [])

  const setActiveTAB = (path) => {
    debugger
    cartNumb.setActiveTb(path)

  }



  const logout = () => {
    localStorage.clear();

    // window.location.reload();
    // setIsLogin(false);
    // window.location.href = "/Login"
    window.location.href = "/"

  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand ><a href='/'>Ecommerce</a></Navbar.Brand>
        <Nav className="me-auto">
          {navData.slice(0, 5).map((item, index) => {
            return (
              <Nav.Link as={Link} to={item.categoryName} onClick={() => setActiveTAB(item.categoryName)} style={cartNumb.curntPath.indexOf(item.categoryName) > -1 ? { color: "red" } : {}}>{item.categoryName}</Nav.Link>
            )

          })}

          <Nav.Link as={Link} to="/cartpage" onClick={() => setActiveTAB("cartpage")}  style={cartNumb.curntPath.indexOf("cartpage") > -1 ? { color: "red" } : {}}>Cart<sup>{cartNumb.cartDatainfo?.length}</sup></Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {!isLogin && <>

            <Nav.Link as={Link} to="/Login" onClick={() => setActiveTAB("Login")}>Login</Nav.Link>
            <Nav.Link as={Link} to="/Signup" onClick={() => setActiveTAB("Signup")}>Sign up</Nav.Link>

          </>
          }

          {isLogin && <p onClick={() => logout()} style={{ color: "white" }}> Logout</p>}
        </Nav>

      </Navbar>

    </div>
  );
};

export default Navbarecom;