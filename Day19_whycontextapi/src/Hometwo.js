import React from 'react';



const Hometwo = (props) => {
  
    return (
        <div className='text-center'>
            <h1> {props.head} {props.newHeading} </h1>
            <button className='btn btn-primary' onClick={()=>props.changeHeading("India")} >change heading</button>
        </div>
    );
};

export default Hometwo;