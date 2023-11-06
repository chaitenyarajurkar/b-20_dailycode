import React from 'react';
import CompZ from './CompZ';

const CompB = (props) => {
    return (
        <div>
            <CompZ msg={props.msg}></CompZ>
        </div>
    );
};

export default CompB;