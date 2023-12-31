import React, { useContext, useEffect, useState } from 'react';
import { Appcontext } from '../../App';
import HOC from '../../other/HOC';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getTabletData } from '../../other/common';

const Tablet = () => {
    const cartNumb = useContext(Appcontext)
    const navigate = useNavigate();
    const useInfo = localStorage.getItem("userInfo");
    useEffect(()=>{
        cartNumb.setActiveTb('Tablet');
        if(cartNumb.globalObj.tabletData.length === 0){
      getTabletData().then((data)=>{
        cartNumb.setGlobalData("tabletData",data)

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
       {cartNumb.globalObj.tabletData.length > 0 && cartNumb.globalObj.tabletData.map((item,index)=>{
           return (
               <div className="card col-4 mx-2" style={{width: "18rem"}}>
                   <img className="card-img-top" src={item.productImageUrl} alt="Card  cap" onClick={()=>openProduct(item)} />
                       <div className="card-body">
                           <h5 className="card-title">{item.productName}</h5>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          

                       {useInfo !==null &&<>  <div class="btn-group" role="group" aria-label="Basic example">
                           <button type="button" onClick={() => cartNumb.incrementGlobalObj("tabletData",index)} class="btn btn-secondary">+</button>
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

export default HOC(Tablet);