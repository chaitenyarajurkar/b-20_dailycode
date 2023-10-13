import React, { useEffect, useState } from 'react';
// import ChildDashboard from './ChildDashboard';
import axios from 'axios';
const Dashboard = () => {

// https://jsonplaceholder.typicode.com/posts;
const [postData,setPostData] = useState([]);

// useEffect(()=>{
    
//     const getData =async()=>{
//         try {
//             // request    
//             const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
 
//             console.log(response);
//             setPostData(response.data);
 
//         } catch (error) {
//             console.log(error);
 
//         }
//     }

//     getData()


// },[])
   const getDataFroServer=async()=>{

        // axios
        // Axios make XMLHttpRequest call from the browser

        // XMLHttpRequest  HTTP request call web browser to web server

        //HTTP it is an application layer protocol design to transfer informtion between newtwork devices


      //  response 

       try {
           // request    
           const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

           console.log(response);
           setPostData(response.data);

       } catch (error) {
           console.log(error);

       }
    //   alert("ok ") 

   }
    return (
        <div>
            <button className='btn btn-danger' onClick={()=>getDataFroServer()}>Get Data From server</button>
           <h4>Dashboard</h4>
             <ul>
                {postData.map((item,index)=>{
                    return (
                        <li key={index}>{item.title}</li>
                    )
                })}
             </ul>
        </div>
    );
};

export default Dashboard;

// 1)dependent drop down Text

// 2)api sho response in table use search functionality sort ok


