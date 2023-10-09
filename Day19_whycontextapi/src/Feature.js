import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Feature = () => {
    const param = useParams();

    console.log(param)
    return (
        <div>
            This is feture component {param.game} {param.mode}
            <br></br>
            <Link to="/featurenew" state={{data:"His this data is coming from feature"}}  > Go to Feature new </Link>
           <br></br>
            <Link to="/home" state={{obj:"this lis obj",info:"hello thi is inof"}}  > Go to Home </Link>
        </div>
    );
};

export default Feature;