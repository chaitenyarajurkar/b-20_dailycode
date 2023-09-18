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


    // let obj = {name:"code",address:"pune",age:24};
    // console.log(obj)
    // let convertTonum = JSON.stringify(obj);
    // console.log(convertTonum);

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

 
// let arrr = ["pune","mumbai","delhi"];
// for(let x=0;x <=arrr.length;x++){
  //  arrr[x]
// }

// for(let x of arrr){
//   debugger
//      console.log(x)
// }
// let objnew = {name:"chait",address:"pune",age:23}
// debugger
// console.log(objnew["age"])
// for(let x in objnew){
//   debugger
//     console.log(objnew[x])
// }

  // let c = {name:"code first",age:24};
  // let a  = JSON.parse(JSON.stringify(c));
  // a.name = "code academy"
  // console.log(a);
  // console.log(c);

const onEdit=(item,index)=>{
  console.log("edit call",item)
}

const onDelete = (item,index) =>{
  console.log("delete call",item)
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

        <div>
             

          {/* <ul>
            { allInfo.map((item,index)=>{
                    return(
                      <li>{item}</li>
                    )
            })}

            
             
             </ul> */}
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
      <td><button className='btn btn-danger' onClick={()=>onDelete(item,index)}>Delete</button></td>
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


