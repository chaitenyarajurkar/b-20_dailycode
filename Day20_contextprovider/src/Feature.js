import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import CompA from './CompA';

import CompZ from './CompZ';
import { Appcontext } from './App';

const Feature = () => {
    const param = useParams();
    const appcontextData = useContext(Appcontext);
    console.log(appcontextData);

    console.log(param)
    const msg="hello world";
    const msg2="fdfdf";
    const msg3="vdfdfd"
    return (
        <div>

            <CompA msg={msg} msg2={msg2} msg3={msg3} ></CompA>
            

            {/* <CompZ msg={msg}></CompZ/> */}

            This is feture component {param.game} {param.mode}
            <br></br>
            <Link to="/featurenew" state={{data:"His this data is coming from feature"}}  > Go to Feature new </Link>
           <br></br>
            <Link to="/home" state={{obj:"this lis obj",info:"hello thi is inof"}}  > Go to Home </Link>
        </div>
    );
};

export default Feature;