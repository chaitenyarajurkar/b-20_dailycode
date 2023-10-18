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

const getDatausgingQueryParameter=async()=>{
     
        const resp = await  axios.get('https://jsonplaceholder.typicode.com/comments',{params:{postId:2}})
        console.log(resp)


}

const postApi=async()=>{

    try {



          let body ={
            
            "body":"web  coaching "
          }


        const resp = await axios.patch('https://jsonplaceholder.typicode.com/posts/1',body)

        console.log(resp);
    } catch (error) {
        
    }

}

const fetchrun=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

// const resp = await axios.delete('https://jsonplaceholder.typicode.com/posts/1')

    return (
        <div>
            <button className='btn btn-danger' onClick={()=>getDataFroServer()}>Get Data From server</button>
              
            <button className='ml-2 btn btn-danger' onClick={()=>getDatausgingQueryParameter()}>Get Data From server query path parameter</button>

            <button className='ml-2 btn btn-primary' onClick={()=>postApi()}>Post api </button>
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


// get

// post 

// put  =>     to update any values 

// patch   => koi ek ro ki value

// delete




// when we api hit the api
 
// 1)request 

// 2)reponse



// 1)Request   

// a) query string path 

// b). query path parameter


// c) request body



