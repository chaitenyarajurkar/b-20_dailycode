import React, { Fragment } from 'react';

const Footer =()=>{
    const title = "";
    const show = false;
    // variable decalre

    //methods or functiona declaration
    const showData =()=>{
        console.log("helo world")
    }

    showData();

    // html return
    return (
        <>
            <div>
                <h1>{title}</h1>
            </div>
            <ul>
                <li>
                    first
                </li>
                <li>
                    Second
                </li>
                <li>
                    Third
                </li>
            </ul>

            <input type="text" id="fname" name="fname"></input>


              {/* true/false    &&             true */}
            {show && <h3>This will display when show is true</h3> }  
             {!show  && <h3>{title}fdfdfddfdfdf</h3>}  
        </>
    )


}

export default Footer;


// 1)how function create 
// 2)function structure

// 3)JSX rules  1)every component should have parent tag  2)every tag should have closing tag 
                    //  3)if we dont have to use div tag insteda of that we can use react Fragment
                    
//react fragment  <></>


// 3)Conditional Rendering

// true  &&     false      > false

// true  &&     true       > true

// false  &&     true      > false