import React from 'react';

const Select = (props) => {
    return (
        <>
            <select value={props.value} 
                className={props.handleError ?  " form-select form-control is-invalid" :" form-select form-control"} 
                id={props.fieldname} onChange={(e)=>props.onChangeHandler(props.fieldname,e.target.value)}>
                <option selected>Open this select menu</option>
                {props.options.map((item,index)=>{
                    return (
                        <option value={item}>{item}</option>
                    )
                })}
            </select>
            {props.handleError &&  <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>}
        </>
    );
};

export default Select;