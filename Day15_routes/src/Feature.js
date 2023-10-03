import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div>
            This is feture component 
            <br></br>
            <Link to="/featurenew" state={{data:"His this data is coming from feature"}}  > Go to Feature new </Link>
           <br></br>
            <Link to="/home" state={{obj:"this lis obj",info:"hello thi is inof"}}  > Go to Home </Link>
        </div>
    );
};

export default Feature;