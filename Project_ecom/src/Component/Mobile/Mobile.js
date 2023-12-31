import React, { useContext, useEffect, useState } from 'react';
import { getMobileData } from '../../other/common';
import axios from 'axios';
import { Appcontext } from '../../App';
import HOC from '../../other/HOC';
import { useNavigate } from 'react-router-dom';

// url get tyep   for mobile    https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=1

//for camera   'https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=2

// for tablet   https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=3

// for laptop     https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=4

// for monitor    https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=5

const Mobile = () => {
    const cartNumb = useContext(Appcontext)
    const navigate = useNavigate();
    const useInfo = localStorage.getItem("userInfo");
    useEffect(()=>{
        cartNumb.setActiveTb('Mobile')
      if(cartNumb.globalObj.mobileData.length === 0){
          getMobileData().then((data)=>{
            cartNumb.setGlobalData("mobileData",data)
         });
      }
    },[])

const addToCart= async(item)=>{
     console.log(item,new Date());

    //  https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart'  type: post

    // {
    //     "CartId": 0,  not mandtory
    //     "CustId": 0,    ls
    //     "ProductId": 0, product itm
    //     "Quantity": 0, product itm 
    //     "AddedDate": "2023-11-20T15:02:00.603Z"
    //   }

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
           {cartNumb.globalObj.mobileData.length > 0 && cartNumb.globalObj.mobileData.map((item,index)=>{
               return (
                   <div className="card col-4 mx-2" style={{width: "18rem"}}>
                       <img className="card-img-top" src={item.productImageUrl} alt="Card  cap" onClick={()=>openProduct(item)} />
                           <div className="card-body">
                               <h5 className="card-title">{item.productName}</h5>
                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              

                           {useInfo !==null &&<>  <div class="btn-group" role="group" aria-label="Basic example">
                               <button type="button" onClick={() => cartNumb.incrementGlobalObj("mobileData",index)} class="btn btn-secondary">+</button>
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

export default HOC(Mobile);