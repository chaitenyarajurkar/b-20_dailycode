import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../../App';
import { commonAPi, getParamspair, incrementQtyLogic } from '../../other/common';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { storeCameraData ,showCartData} from '../../redux/react-redux/action';
import style from  './camera.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
const Camera = () => {
    const reducerData = useSelector(state=>state.reducers);
    const dispatchedMethod = useDispatch();
    const cartNumb = useContext(Appcontext)
    const navigate = useNavigate();
    const useInfo = localStorage.getItem("userInfo");
    
    useEffect(()=>{
        cartNumb.setActiveTb('Camera');
        const paramspair = getParamspair(); //getting search parameters from common.js function 
        if(reducerData.cameraData.length === 0){  
            commonAPi(paramspair.id).then((data)=>{  //api ka data
        dispatchedMethod(storeCameraData(data)); // react redux logic
     });
    }
    },[])


    
   
const addToCart= async(item)=>{
    try {
        const useinfo_ls = localStorage.getItem("userInfo");
        const getCustId = JSON.parse(useinfo_ls);
    
        let obj = {
            "CustId":getCustId.custId,
            "ProductId": item.productId, 
            "Quantity": item.quantity,
            "AddedDate": new Date()
        }
        
        const response = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart",obj);
        if(response.data.result){
            //calling api from action.js 
            dispatchedMethod(showCartData())

        }
        else{
            alert(response.data.data.message)
        }

    } catch (error) {
        console.log(error)
    }
}

const openProduct=(product)=>{

    navigate(`/productDetail?id=${product.productId}`,{state:product});
}

const incrementLogic=(index)=>{

    const camera = incrementQtyLogic(reducerData.cameraData,index)  
    dispatchedMethod(storeCameraData(camera));
}
const openUpdateCart=(product)=>{
    navigate(`/updateProduct?id=${product.productId}`,{state:product});
}
const deletProduct=async(product)=>{
    const res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductById",{params:{id:product.productId}});
    console.log(res);
    commonAPi(2).then((data)=>{  //api call
        dispatchedMethod(storeCameraData(data));

     });

}
    return (
        <div className={`container ${style.backgroundChange}`}>
        <div className='row'>
       {reducerData.cameraData.length > 0 && reducerData.cameraData.map((item,index)=>{
           return (
               <div className="card col-4 mx-auto mt-2 mb-2 " style={{width: "18rem"}}>
               <FontAwesomeIcon className="left mr-3" onClick={()=>openUpdateCart(item)} style={{cursor:"pointer",color:"grey"}} icon={faEdit} />
                    <FontAwesomeIcon className="right" onClick={()=>deletProduct(item)} icon={faTrash}  style={{cursor:"pointer",color:"grey"}} />
                     
                   <img className="card-img-top pt-3" src={item.productImageUrl} height={'50%'} alt="Card  cap" onClick={()=>openProduct(item)} />
                       <div className="card-body">
                           <h5 className="card-title">{item.productName}</h5>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          

                       {useInfo !==null &&<>  <div class="btn-group" role="group" aria-label="Basic example">
                           <button type="button" onClick={() => incrementLogic(index)} class="btn btn-secondary">+</button>
                           <button type="button" class="btn btn-secondary">{item.quantity ? item.quantity : 0}</button>
                           <button type="button" class="btn btn-secondary">-</button>
                       </div>
                           <button className="btn btn-primary" onClick={()=>addToCart(item)}>Add to cart</button>
                       </>
                       }
                       </div>
               </div>
           )
       })}
       </div>
    </div>
    );
};

export default Camera;




