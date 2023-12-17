import React, { useContext, useEffect } from 'react';
import { getMobileData, incrementQtyLogic } from '../../other/common';
import axios from 'axios';
import { Appcontext } from '../../App';
import HOC from '../../other/HOC';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showCartData, storeMobileData } from '../../redux/react-redux/action';

const Mobile = () => {
    //useSelector hook to acces redux initailState
    const reducerData = useSelector(state=>state.reducers);
   
    const dispatch = useDispatch();

    const cartNumb = useContext(Appcontext)
    const navigate = useNavigate();
    const useInfo = localStorage.getItem("userInfo");
    useEffect(()=>{
        cartNumb.setActiveTb('Mobile')
      if(reducerData.mobileData.length === 0){
          getMobileData().then((data)=>{  //api call
            dispatch(storeMobileData(data))  //redux vala logic

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
            dispatch(showCartData())
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
    const mobileData = incrementQtyLogic(reducerData.mobileData,index);  
    dispatch(storeMobileData(mobileData));
}
    return (
        <div className='container'>
            <div className='row'>
           {reducerData.mobileData.length > 0 && reducerData.mobileData.map((item,index)=>{
               return (
                   <div className="card col-4 mx-2" style={{width: "18rem"}}>
                       <img className="card-img-top" src={item.productImageUrl} alt="Card  cap" onClick={()=>openProduct(item)} />
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

export default HOC(Mobile);