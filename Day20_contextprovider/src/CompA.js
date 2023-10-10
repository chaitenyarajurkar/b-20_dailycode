import React from 'react';
import CompB from './CompB';

const CompA = (props) => {
    const ainf="dsdssdsds"
    return (
        <div>
            <CompB msg = {props.msg} ainf={ainf}></CompB>
        </div>
    );
};

export default CompA;