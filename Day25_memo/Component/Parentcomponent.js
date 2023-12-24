import React, { memo, useState } from 'react';
import Childcomponent from './Childcomponent';

const Parentcomponent = () => {

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

            <Childcomponent formData={formData} ></Childcomponent>

        </div>
    );
};

export default Parentcomponent;

