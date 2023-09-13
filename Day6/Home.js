import React, { useState } from 'react';

const Home = () => {

      const [info,setInfo] = useState({name:"",address:"",age:""});
      const [allInfo,setAllInfo] = useState([]);

      // let obj = {name:"code first",address:"pune",age:"25"};

      // obj.name = "code firs academy";
      // obj[name] = "code firs academy";

      // let v = "age";
      // obj[v] = "code firs academy";

  // obj = {...obj,age:"mumbai"}



const commonHandlerObj = (event,fieldname)=>{
  setInfo(prevState=>({...prevState,[fieldname]:event.target.value}));
}

const onSubmitForm=(event)=>{
  event.preventDefault();
  console.log("name",info);

  setAllInfo(prevState=>[info,...prevState])
console.log(allInfo);
 
}

    return (
      <div className='container'>
        
    <div className='row col-md-4 offset-md-4 mt-5'>
          <h2 className='text-center'> Person Detail</h2>
   
        <form onSubmit={(e)=>onSubmitForm(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" value={info.name} onChange={(e)=>commonHandlerObj(e,"name")} className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input type="text" value={info.address} onChange={(e)=>commonHandlerObj(e,"address")} className="form-control  mt-2" id="exampleInputPassword1" placeholder="address" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Age</label>
            <input type="number" value={info.age} onChange={(e)=>commonHandlerObj(e,"age")} className="form-control  mt-2" id="exampleInputPassword1" placeholder="age" />
          </div>
          {/* <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div> */}
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
        </div>
          
        </div>
    );
};

export default Home;


