import React, { useCallback, useEffect, useState } from 'react';
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
        console.log("is it call")
    },[])

    // useEffect(()=>{

    // },[])
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

            <Childcomponent records={records} rawFunction={rawFunction}></Childcomponent>

        </div>
    );
};

export default Parentcomponent;

