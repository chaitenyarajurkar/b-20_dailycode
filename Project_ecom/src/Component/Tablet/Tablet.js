import React, { useContext, useEffect } from 'react';
import { Appcontext } from '../../App';

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

export default Tablet;