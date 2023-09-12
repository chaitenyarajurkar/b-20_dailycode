import React, { useState } from 'react';

// hooks  => useState

const Home = () => {
      //           //  setState
      // name
      // address
      // age
      const [name,setName]= useState("");
      const [address,setAddress] = useState("");
      const [age,setAge] = useState("");
      
      // const onChangeHandlername=(event)=>{
      //      console.log(event.target.value)
               
      //   setName(event.target.value)
      // }

      // const onChangeHandleraddress=(event)=>{
      //   setAddress(event.target.value)
      // }
   
      //  const onChangeHandlerage = (event) =>{
      //   setAge(event.target.value)
      //  }

      const commonHandler =(event,fieldname)=>{
        console.log(event.target.value,fieldname)
        debugger
        if(fieldname === "name"){
         debugger
          setName(event.target.value)
        }
        else if (fieldname === "address"){
          debugger
          setAddress(event.target.value)
        }
        else if(fieldname === "age"){
          debugger
          setAge(event.target.value)
        }
      }

const onSubmitForm=(event)=>{
  event.preventDefault();
  console.log("name",name);
  console.log("address",address)
  console.log("age",age)

}

    return (
      <div className='container'>
        
    <div className='row col-md-4 offset-md-4 mt-5'>
          <h2 className='text-center'> Person Detail</h2>
   
        <form onSubmit={(e)=>onSubmitForm(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" onChange={(e)=>commonHandler(e,"name")} className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input type="text" onChange={(e)=>commonHandler(e,"address")} className="form-control  mt-2" id="exampleInputPassword1" placeholder="address" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Age</label>
            <input type="number" onChange={(e)=>commonHandler(e,"age")} className="form-control  mt-2" id="exampleInputPassword1" placeholder="age" />
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


