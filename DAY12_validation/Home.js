import React, { useEffect, useState } from 'react';

const Home = () => {
  //useState is a hook

  //useEffect

  //India , Australia , America , New Zeland

  const [formData, setFormData] = useState({ name: "", address: "", age: "" ,country:"" });
  const [allInfo, setAllInfo] = useState([]);
  const [postion, setPosition] = useState("");
  const [showFlag, setShowFlag] = useState(false);
  const [error,setError] =useState([]);

  const onChangeHandler = (event, fieldname) => {
    console.log(event.target.value, ">>", fieldname);
    setFormData(prevState => ({ ...prevState, [fieldname]: event.target.value }));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit call",formData);
    debugger;
   let errorArray = []
  for(let x in formData){
     if( formData[x] === ""){
      errorArray.push(x)
     }
  }

  if(errorArray.length > 0){
    setError(errorArray);
    
  }else{
    
    setAllInfo(prevState => [...prevState, formData]);
    setFormData({ name: "", address: "", age: "" });
    setError([]);
  }



   
  }
  const onDelete = (index) => {
    setAllInfo(prevState => {
      const filteredData = prevState.filter((item, ind) => {
        if (ind !== index) {
          return item;
        }
      })
      return filteredData;
    })
  }
  const onEdit = (formDatafromtable, position) => {
    setFormData(formDatafromtable);
    setPosition(position);
    setShowFlag(true);
  }
  const upSaveHandler = () => {
    console.log(allInfo, postion);
    setAllInfo(prevState => {
      const result = prevState.map((item, index) => {
        if (index === postion) {
          return formData
        }
        else {
          return item
        }

      })
      return result;
    })
    setFormData({ name: "", address: "", age: "" });
    setShowFlag(false);

  }

const showError=(keyname)=>{
 return error.indexOf(keyname) > -1? true : false;  
     
}

  // let ele = <h1> Hello World </h1>;

  // const directShow=()=>{

  //   return <h1> Hello World </h1>
  // }
  return (
    <div className='container'>
      <div className='row  mt-5'>
        <div className='col-4'>
          <h2 className='text-center'> Person Detail </h2>
          {/* {ele}
          {directShow()} */}

          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" value={formData.name} onChange={(e) => onChangeHandler(e, "name")} className={showError("name") ? "form-control is-invalid mt-2" : "form-control mt-2"} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
              {showError("name") && <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid city.
              </div>}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Address</label>
              <input type="text" value={formData.address} onChange={(e) => onChangeHandler(e, "address")} className={showError("address") ? "form-control is-invalid mt-2" : "form-control mt-2"} id="exampleInputEmail1"  placeholder="address" />
              {showError("address") && <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid city.
              </div>}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Age</label>
              <input type="number" value={formData.age} onChange={(e) => onChangeHandler(e, "age")} className={showError("age") ? "form-control is-invalid mt-2" : "form-control mt-2"} id="exampleInputPassword1" placeholder="age" />
              {showError("age") && <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid city.
              </div>}
            </div>

            <div className='form-group'>
            <label htmlFor="exampleInputPassword1">Country</label>
              <select className={showError("country") ? "form-control is-invalid mt-2" : "form-control mt-2"} aria-label="Default select example" value={formData.country} onChange={(e) => onChangeHandler(e, "country")}>
                <option selected>Open this select menu</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="America">America</option>
                <option value="New Zeland">New Zeland</option>
              </select>
              {showError("ffdf") && <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid city.
              </div>}
            </div>

            {!showFlag && <button type='submit' className='btn btn-primary mt-3'>Submit</button>}
            {showFlag && <button type='button' onClick={() => upSaveHandler()} className='btn btn-primary mt-3'>Save</button>}
          </form>
        </div>

        


          <div className='col-7'>
            <table className="table">
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
                {allInfo.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.age}</td>
                      <td><button type='button' className='btn btn-danger' onClick={() => onEdit(item, index)}>Edit</button></td>
                      <td><button type='button' className='btn btn-secondary' onClick={() => onDelete(index)}>Delete</button></td>
                    </tr>
                  )
                })}



              </tbody>
            </table>
          </div>
        
      </div>
    </div>

  );
};

export default Home;


