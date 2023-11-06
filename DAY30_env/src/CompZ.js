import React, { useContext } from 'react';
import { Appcontext } from './App';

const CompZ = () => {

    const hedingRecive = useContext(Appcontext);
    console.log(hedingRecive);
    
    return (
        <div>
            <h4>{hedingRecive.headingtoz}</h4>
            <button className='btn btn-primary' onClick={()=>hedingRecive.updateZheading()}>update app varaible from z</button>

            <br></br>
            <button className='btn btn-primary' onClick={()=>hedingRecive.updatewithparam("PASSED FRMO PARAM")}>
                   update app varaible from z with param</button>
        </div>
    );
};

export default CompZ;