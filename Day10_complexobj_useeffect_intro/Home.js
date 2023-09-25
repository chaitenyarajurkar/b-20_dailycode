import React, { useEffect, useState } from 'react';

const Home = () => {
  //useState is a hook

  //useEffect

  const [formData,setFormData] = useState({name:"",address:"",age:""});
  const [allInfo,setAllInfo] = useState([]);
  const [postion,setPosition] = useState("");
  const [showFlag,setShowFlag] = useState(false);
  const [obj ,setObj] = useState({
    name:"Pranav",
    address:{
      permanentAddrs:"India",
      tempAddress:"",
      cords:["090.43434"]
    },
    age:"24",
    mobile:"4343334"
  })

  useEffect(()=>{
    //server call apicall
    console.log("useEffect call")
    // setFormData(prevState=>({...prevState,name:"code first"}));
  },[])

  useEffect(()=>{
    //server call apicall
    console.log("useEffect call")
    // setFormData(prevState=>({...prevState,name:"code first"}));
  },[formData])


  const upDateAddress=()=>{
    //to update permanentAddrs
    setObj(prev=>({
      ...prev,address:{...prev.address,permanentAddrs:"Autralia"}
    }))

    //to update tempAddress
    setObj(prev=>({
      ...prev,address:{...prev.address,tempAddress:"Banglore"}
    }))

    //to update array cords
    setObj(prev=>({
      ...prev,
      address:{...prev.address,cords:[...prev.address.cords,"594004.454"]}
    }))

  }


  const onChangeHandler=(event,fieldname)=>{
        console.log(event.target.value,">>",fieldname);
        setFormData(prevState=>({...prevState,[fieldname]:event.target.value}));
  }
     
   const onSubmitHandler =(e)=>{
    console.log("submit call");
    e.preventDefault();
    setAllInfo(prevState=>[...prevState,formData]);
    setFormData({name:"",address:"",age:""});
   }
const onDelete=(index)=>{
  setAllInfo(prevState=>{
           const filteredData = prevState.filter((item,ind)=>{
                       if(ind !== index){
                               return item;
                       }
           })
           return filteredData;
  })
}
const onEdit=(formDatafromtable,position)=>{
  setFormData(formDatafromtable);
  setPosition(position);
  setShowFlag(true);

  // setFormData(prevState=>({...prevState,name:formDatafromtable.name,address:formDatafromtable.address}))

}
const upSaveHandler=()=>{
  console.log(allInfo , postion);
  setAllInfo(prevState=>{
    const result = prevState.map((item,index)=>{
             if(index === postion){
              return formData
             }
             else{
              return item
             }
             
    })
    return result;
  })
  setFormData({name:"",address:"",age:""});
  setShowFlag(false)

}
    return (
      <div className='container'>
        <div>
             <h1>{obj.address.permanentAddrs}</h1>
             <button onClick={()=>upDateAddress()}>Update permanentAddrs</button>
        </div>
        
    <div className='row col-md-4 offset-md-4 mt-5'>
          <h2 className='text-center'> Person Detail</h2>
   
        <form onSubmit={(e)=>onSubmitHandler(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" value={formData.name}  onChange={(e)=>onChangeHandler(e,"name")}  className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input type="text"  value={formData.address} onChange={(e)=>onChangeHandler(e,"address")}  className="form-control  mt-2" id="exampleInputPassword1" placeholder="address" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Age</label>
            <input type="number"  value={formData.age} onChange={(e)=>onChangeHandler(e,"age")}   className="form-control  mt-2" id="exampleInputPassword1" placeholder="age" />
          </div>
       
          {!showFlag && <button type='submit' className='btn btn-primary mt-3'>Submit</button> } 
          {showFlag && <button type='button' onClick={()=>upSaveHandler()} className='btn btn-primary mt-3'>Save</button> } 
        </form>
        </div>

        <div>
             
        </div>
          
<div>
<table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Age</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {allInfo.map((item,index)=>{
        return(
          <tr>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.age}</td>
          <td><button type='button' className='btn btn-danger' onClick={()=>onEdit(item,index)}>Edit</button></td>
          <td><button type='button' className='btn btn-secondary' onClick={()=>onDelete(index)}>Delete</button></td>
        </tr>
        )
    })}
    
  
   
  </tbody>
</table>
</div>
        </div>
    );
};

export default Home;


