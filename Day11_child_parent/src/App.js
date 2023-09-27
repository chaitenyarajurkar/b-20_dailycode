import { useState } from 'react';
import './App.css';
import Home from './Home';
import Hometwo from './Hometwo';
function App() {
  const [headingInfo,setHeadinInfo] = useState("User Info Crud");
  const newHeading = "Operation";
  
  const changeHeading=(fromchild)=>{
    console.log("fdfd")
    setHeadinInfo(fromchild)

  }
  return (
   <div>
    {/* <p>{headingInfo}</p>
    <button onClick={()=>changeHeading()}>change Heading</button> */}
    <div>
    <Hometwo head={headingInfo} newHeading={newHeading} changeHeading={changeHeading}></Hometwo>
    </div>
    <Home></Home>
    
   </div>
  );
}

export default App;
