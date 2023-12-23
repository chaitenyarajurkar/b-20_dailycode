
import axios from 'axios';
import { isExpired, decodeToken } from "react-jwt";
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config)=>{
    console.log("axiosInstance.interceptors.request")

    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin");
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    debugger
    console.log(myDecodedToken,isMyTokenExpired)

    // decode the token or check the expiry of the token
    if(!isMyTokenExpired || isAdmin !== null){
       return config;
        
    }else{
        // logout vala logic if token is expire
        localStorage.clear();
        window.location.href = "/Login";


    }
  //you can modifiy the request 
},(error)=>{
    return Promise.reject(error);
})



axiosInstance.interceptors.response.use((response)=>{
    console.log("axiosInstance.interceptors.response")

    //you can modify the response here
    return response;
},(error)=>{
    return Promise.reject(error);
})


export default axiosInstance;
