import React from 'react';

const Text = (props) => {
    return (
        <>
            <input type={props.type} className="form-control" id="exampleInputEmail1" 
              value={props.value}  onChange={(e)=>props.onChange(props.fieldname,e.target.value)}
              placeholder={props.placeholder}></input>
        </>
    );
};

export default Text;