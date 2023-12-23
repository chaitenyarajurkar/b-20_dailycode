import React, { useContext, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getData } from '../../other/common';
import { Link } from 'react-router-dom';
import { Appcontext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { showCartData } from '../../redux/react-redux/action';
const Navbarecom = () => {
 const cartNumb = useContext(Appcontext);
 const reducersData = useSelector(state=>state.reducers);
 const dispatch = useDispatch();
  const [navData, setNavData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);

 


  useEffect(() => {
    
    const userInfo = localStorage.getItem("userInfo");
    const isadmin = localStorage.getItem("isAdmin");
    if (userInfo !== null || isAdmin) {
      setIsLogin(true);
    }

    if(isadmin){
      setIsAdmin(true);
    }

    cartNumb.setActiveTb();
    dispatch(showCartData());
   

    getData().then((data) => {
      // data   47 data

      setNavData(data);

    });
  }, [])

  const setActiveTAB = (path) => {
    const ls = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(ls);
    if (userInfo !== null) {
    cartNumb.setActiveTb(path)
    }
  }



  const logout = () => {
    localStorage.clear();
    window.location.href = "/"

  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand ><a href='/'>Ecommerce</a></Navbar.Brand>
        <Nav className="me-auto">
          {navData?.slice(0, 5).map((item, index) => {
            return (
              <Nav.Link as={Link} to={`${item.categoryName}?id=${index+1}`} onClick={() => setActiveTAB(item.categoryName)} style={cartNumb.curntPath.indexOf(item.categoryName) > -1 ? { color: "red" } : {}}>{item.categoryName}</Nav.Link>
            )

          })}


          <Nav.Link as={Link} to="/cartpage" onClick={() => setActiveTAB("cartpage")}  style={cartNumb.curntPath.indexOf("cartpage") > -1 ? { color: "red" } : {}}>Cart<sup>{reducersData.cartData?.length}</sup></Nav.Link>
          <Nav.Link as={Link} to="/cartnew" onClick={() => setActiveTAB("cartnew")}>CartNew</Nav.Link>

         {isAdmin && <Nav.Link as={Link} to="/creatProduct" onClick={() => setActiveTAB("creatProduct")}  style={cartNumb.curntPath.indexOf("creatProduct") > -1 ? { color: "red" } : {}}>Create Product</Nav.Link>}
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