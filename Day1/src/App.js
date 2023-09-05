import logo from './logo.svg';
import './App.css';




function App() {
  const bodyData = {name:"Hello React",address:"Pune"};


  return (
   <div>
    <h1>{bodyData.name}</h1>
    <h2>{bodyData.address}</h2>
   </div>
  );
}

export default App;
