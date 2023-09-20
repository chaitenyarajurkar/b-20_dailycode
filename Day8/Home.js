import React, { useState } from 'react';

const Home = () => {

      const [info,setInfo] = useState({name:"",address:"",age:""});
      const [allInfo,setAllInfo] = useState([])
      const [flag,setFlag] = useState(true);
    
const commonHandlerObj = (event,fieldname)=>{
  setInfo(prevState=>({...prevState,[fieldname]:event.target.value}));
  console.log(info.name)

}

const onSubmitForm=(event)=>{
  
  event.preventDefault();
  console.log("name",info);
  setAllInfo(prevState=>[info,...prevState]);
  setInfo({name:"",address:"",age:""})
 
}


const onEdit=(item,index)=>{
  console.log("edit call",item,allInfo,index,allInfo[index]);
  // setInfo(allInfo[index]);
  setFlag(false);
  setInfo(item)
}

const onDelete = (position) =>{
  // console.log("delete call",position);
  setAllInfo(prevState=>{
          const filteredData = prevState.filter((item,index)=>{
                        if(index !== position){
                          return item
                        }
          })
          return filteredData;
  })



}

// const rawData = ["car","bike","truck","cycle","plane","bike"];

//        let filteredData = rawData.filter((item,index)=>{
//                         if(item !== "bike"){
//                           return item
//                         }
//        })
        

// console.log(filteredData);

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
         {flag &&  <button type="submit" className="btn btn-primary mt-3">Submit</button>}
         {!flag && <button type="button" className="btn btn-primary mt-3" >Save</button> } 
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
    { allInfo.map((item,index)=>{
        return (
<tr>
      
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.age}</td>
      <td><button className='btn btn-secondary' onClick={()=>onEdit(item,index)}>Edit</button></td>
      <td><button className='btn btn-danger' onClick={()=>onDelete(index)}>Delete</button></td>
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


