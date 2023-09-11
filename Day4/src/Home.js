import React, { useState } from 'react';

// hooks  => useState

const Home = () => {
                //  setState
    const [name,setName] = useState("code First");
    const [flag,setFlag] = useState(false);
    const [count,setCount] = useState(0);
    const [obj,setObj] = useState({name:"codefirst",address:"pune",age:25});
    const [listArray,setListArray] = useState([]);

    
    // let obj = {name:"codefirst",address:"pune",age:25};

    // console.log(obj);
    // debugger;
    // obj = {...obj,address:"mumbai"};
    // console.log(obj)

    const changeName=(value)=>{
        debugger;
        // name = "Pune";
        setName("pune");
        
        console.log(name);
    }

  // const hidehone=()=>{

  //   setFlag(!flag)
  // }

  
  const upDateObjname =() =>{
    setObj(prevState=>({...prevState,name:"Code First Academy"}));
  }
 const upDateObjaddress =() =>{
    setObj(prevState=>({...prevState,address:"mumbai"}));
  }
 const upDateObjage =() =>{
   setObj(prevState=>({...prevState,age:30}));
  }
    


  // let arrya = [];
   
  // arrya = [...arrya,"car"];

  // console.log(arrya);
  
  const addVlues=()=>{
    setListArray(prevState=>[...prevState,"car"]);
  }
    return (
        <div className='container'>
        


            <h4>{name}</h4>
            <button className='btn btn-primary m-3' onClick={()=>changeName("Helloworld")}>change Name </button>
             {/* true &&    true */}
           {flag && <h1>Hello this is Header</h1>}
           <br />
            <button className='btn btn-primary m-3' onClick={()=>setFlag(!flag)}>Click to { flag ? "hide" :"show"} </button>
            

            
            <button className='btn btn-primary m-3'  onClick={()=>setCount(count+1)}>Counter Increment{count}</button>

            <div className='row'>
                <div className='col-4'>{obj.name}
                <button className='btn btn-primary m-3'  onClick={()=>upDateObjname()}>Update Name</button>
                </div>
                <div className='col-4'>{obj.address}
                <button className='btn btn-primary m-3'  onClick={()=>upDateObjaddress()}>Update Address</button>
                </div>
                <div className='col-4'>{obj.age}
                <button className='btn btn-primary m-3'  onClick={()=>upDateObjage()}>Udate age</button>
                </div>
            </div>

            <div>
            <button className='btn btn-primary m-3'  onClick={()=>addVlues()}>addVlues</button>
            {listArray}
            </div>
        </div>
    );
};

export default Home;


