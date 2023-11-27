import React, { useContext, useEffect } from 'react';
import { Appcontext } from '../../App';
import HOC from '../../other/HOC';

const Tablet = () => {

    const context = useContext(Appcontext);

    useEffect(()=>{
        context.setActiveTb('Tablet')
    },[])
    return (
        <div>
            Tablet Page
        </div>
    );
};

export default HOC(Tablet);