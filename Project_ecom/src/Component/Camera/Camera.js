import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../../App';
import { getCameraData } from '../../other/common';
import axios from 'axios';

const Camera = () => {
    const cartNumb = useContext(Appcontext)
    const navigate = useNavigate();
    const useInfo = localStorage.getItem("userInfo");
    
    useEffect(()=>{
        cartNumb.setActiveTb('Camera');
        if(cartNumb.globalObj.cameraData.length === 0){
      getCameraData().then((data)=>{
        cartNumb.setGlobalData("cameraData",data)

     });
    }
    },[])

   
const addToCart= async(item)=>{
     console.log(item,new Date());

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

        console.log(">>>add to cart",response);

        cartNumb.getCartNum();




    } catch (error) {
        console.log(error)
    }
}

const openProduct=(product)=>{

    navigate(`/productDetail?id=${product.productId}`,{state:product});
}
    return (
        <div className='container'>
        <div className='row'>
       {cartNumb.globalObj.cameraData.length > 0 && cartNumb.globalObj.cameraData.map((item,index)=>{
           return (
               <div className="card col-4 mx-2" style={{width: "18rem"}}>
                   <img className="card-img-top" src={item.productImageUrl} alt="Card  cap" onClick={()=>openProduct(item)} />
                       <div className="card-body">
                           <h5 className="card-title">{item.productName}</h5>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          

                       {useInfo !==null &&<>  <div class="btn-group" role="group" aria-label="Basic example">
                           <button type="button" onClick={() => cartNumb.incrementGlobalObj("cameraData",index)} class="btn btn-secondary">+</button>
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