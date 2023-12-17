// data store 

import { CAMERA_DATA, CART_DATA, LAPTOP_DATA, MOBILE_DATA } from "./constant";

// obj ={
//     mobil:"",
//     camera:""
// }

const initialState = {

    mobileData: [],
    cameraData: [],
    tabletData: [],
    laptopData: [],
    monitorData: [],
    cartData:[],



}

// function will be create here
// switch case logic
//according to the switch cases data will be stored




// action={
//     type:"keys",
//     payload:"cameeradata/mobiledata/laptopdata/etc..."
// }

export default function applicationReducer(state=initialState,action){

    switch (action.type){
         case MOBILE_DATA:
             return{
                ...state,
                mobileData : action.payload.data
             }
         case CAMERA_DATA:
            return{
                ...state,
                cameraData:action.payload.data
            }
        case LAPTOP_DATA:
            return{
                ...state,
                laptopData:action.payload.data
            }
        case CART_DATA:
            return{
                ...state,
                cartData:action.payload.data
            }
        default:
            return{
                ...state
            }
    }



}
