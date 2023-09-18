import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import Home from './Home';
import Miscellaenous from './miscellaenous';


const root = ReactDOM.createRoot(document.getElementById('root'));


console.log("idex.js")
root.render(
  <>
 <Home></Home>
 {/* <Miscellaenous></Miscellaenous> */}
 {/* <App></App> */}
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

