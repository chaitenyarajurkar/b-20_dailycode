import './App.css';
import Home from './Home';
import Hometwo from './Hometwo';
function App() {

  const headingInfo ="User Info Crud";
  const newHeading = "Operation";
  
  return (
   <div>
    <div>
    <Hometwo head={headingInfo} newHeading={newHeading} ></Hometwo>
    </div>
    <Home></Home>
    
   </div>
  );
}

export default App;
