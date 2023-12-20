import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config)=>{
    console.log("axiosInstance.interceptors.request")
  //you can modifiy the request 
    return config;
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
