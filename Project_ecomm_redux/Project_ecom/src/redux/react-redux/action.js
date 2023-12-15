//functiona call

import { CAMERA_DATA, LAPTOP_DATA, MOBILE_DATA } from "./constant";



// 1)mobile k liye
// 2)camera k  liye 
// 3)lptop k  liye


const storeMobileData = (apires)=>(dispatch)=>{
    console.log(apires);

    dispatch({
        type:MOBILE_DATA,
        payload:{data:apires}
    })

}


const storeCameraData = (apires)=>(dispatch)=>{
    console.log(apires);

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



export {storeMobileData,storeCameraData,storeLaptopData}