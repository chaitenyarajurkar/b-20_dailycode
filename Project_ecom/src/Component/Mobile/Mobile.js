import React, { useEffect, useState } from 'react';
import { getMobileData } from '../../other/common';

// url get tyep   for mobile    https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=1

//for camera   'https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=2

// for tablet   https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=3

// for laptop     https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=4

// for monitor    https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=5

const Mobile = () => {

    const useInfo = localStorage.getItem("userInfo");
    console.log(useInfo);
    const [mobileData,setMobileData] = useState([]);
    const [qty,setQty] = useState(0);
    useEffect(()=>{
      getMobileData().then((data)=>{
        setMobileData(data);

     });
    },[])

   const increMent=(index)=>{
    // setQty(qty+1);
    console.log(index,mobileData[index]);

    setMobileData(prevState=>{
        let updateMobileData = prevState.map((item,ind)=>{
            if(ind === index){
                let quantity = item.quantity ?  item.quantity +1 : 1;
                return {...item,quantity:quantity}
            }else{
                return {...item};
            }

        })
        return updateMobileData
    })
      
   }

//    let obj = {productName:"motorola"};

//    obj.imageurl = "httlpdfggfg/jpg";
//    obj.decsription = "ddfjdfjdkfjdkfjdk";
//    console.log(obj);
// Obj.quantity = 1
// obj.quantity = obj.quantity +1


const addToCart=(item)=>{
     console.log(item,new Date());
}
    return (
        <div className='container'>
            <div className='row'>
           {mobileData.length > 0 && mobileData.map((item,index)=>{
               return (
                   <div className="card col-4 mx-2" style={{width: "18rem"}}>
                       <img className="card-img-top" src={item.productImageUrl} alt="Card  cap" />
                           <div className="card-body">
                               <h5 className="card-title">{item.productName}</h5>
                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              

                           {useInfo !==null &&<>  <div class="btn-group" role="group" aria-label="Basic example">
                               <button type="button" onClick={() => increMent(index)} class="btn btn-secondary">+</button>
                               <button type="button" class="btn btn-secondary">{item.quantity ? item.quantity : 0}</button>
                               <button type="button" class="btn btn-secondary">-</button>
                           </div>
                               <button disabled={true} className="btn btn-primary" onClick={()=>addToCart(item)}>Add to cart</button>
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

export default Mobile;