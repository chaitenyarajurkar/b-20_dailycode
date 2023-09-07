import React, { useState } from 'react';

// hooks  => useState

const Home = () => {
                //  setState
    const [name,setName] = useState("code First");


    const changeName=()=>{
        debugger;
        // name = "Pune";
        setName("pune");
        
        console.log(name);
    }
    
    return (
        <div>
            <h4>{name}</h4>
            <button onClick={()=>changeName()}>change Name </button>
            <h1>Hello this is Header</h1>
        </div>
    );
};

export default Home;
