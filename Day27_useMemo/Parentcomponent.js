import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Childcomponent from './Childcomponent';

const Parentcomponent = () => {
    //  console.log("parent")
    const [formData, setFromData] = useState({
        name: "",
        address: ""
    })

    const [records, setRecords] = useState([]);
    const onChangeHandler = (e, fieldname) => {
        setFromData(prev => ({ ...prev, [fieldname]: e.target.value }));
    }

    const subMitHandler = (e) => {
        e.preventDefault();
        setRecords(prev => [...prev, formData]);
    }

    const rawFunction =useCallback(()=>{
        console.log("dfd")
    },[])

    // useEffect(()=>{

    // },[])


    const info = "hello world";

    console.log(info);

    const list  = ()=>{
         let data = "code first"
        return data
    }

  const listiplay =()=>{

    return (
        <ul>

            <li>
                Code First
            </li>
            <li>
                Code Academy
            </li>
            <li>
                Code Institute
            </li>
        </ul>
    )
  }

const displayFormData =useMemo(()=>{
    return(
        <div>
        <p>{formData.name}</p>
        <p>{formData.address}</p>
        </div>
    )
},[records])





    return (
        <div>
            <form onSubmit={(e) => subMitHandler(e)} >
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" value={formData.name} onChange={(e) => onChangeHandler(e, "name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Address</label>
                    <input type="text" value={formData.address} onChange={(e) => onChangeHandler(e, "address")}  className="form-control" id="exampleInputPassword1" placeholder="enter address" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <Childcomponent  rawFunction={rawFunction}></Childcomponent>
          {list()}

          {listiplay()}

          {displayFormData}
        </div>
    );
};

export default Parentcomponent;



// memo 
// useCallback   


// useMemo    