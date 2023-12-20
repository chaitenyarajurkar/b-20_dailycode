//functiona call

import axios from "axios";
import { CAMERA_DATA, CART_DATA, LAPTOP_DATA, MOBILE_DATA } from "./constant";



// 1)mobile k liye
// 2)camera k  liye 
// 3)lptop k  liye


const storeMobileData = (mobiledata)=>(dispatch)=>{

    dispatch({
        type:MOBILE_DATA,
        payload:{data:mobiledata}
    })

}


const storeCameraData = (apires)=>(dispatch)=>{

    dispatch({
        type:CAMERA_DATA,
        payload:{data:apires}
    })
    

}

const storeLaptopData = (apires)=>(dispatch)=>{
    console.log(apires);

    dispatch({
        type:LAPTOP_DATA,
        payload:{data:apires}
    })

}


const incrementCameraData = (index,cameraData)=>(dispatch)=>{
    console.log(index,cameraData);//yaha pr camera data ayega with index

    // modified the camera data here
    const camera = cameraData;
    camera[index].quantity = camera[index].quantity ?  camera[index].quantity +1 : 1;
    console.log(camera);

    //updated camera data sending to reducer obj
    dispatch({
        type:CAMERA_DATA,
        payload:{data:camera}
    })
    

}

const showCartData=()=>async(dispatch)=>{

    try {
        const ls = localStorage.getItem('userInfo');
        const userinfo = JSON.parse(ls);
        const res = await axios.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=${userinfo.custId}`);
        console.log(res.data.data)
        
        dispatch({
            type:CART_DATA,
            payload:{data:res.data.data}
        })

      } catch (error) {
        console.log(error)
      }



}

export {storeMobileData,storeCameraData,storeLaptopData,incrementCameraData,showCartData}