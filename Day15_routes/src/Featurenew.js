import React from 'react';
import { useLocation } from 'react-router-dom';

const Featurenew = () => {
    const {state} = useLocation();
    debugger;
    console.log(state);

    return (
        <div className='text-center pt-5' >
            Feture new
            <h1>{state.data}</h1>
        </div>
    );
};

export default Featurenew;