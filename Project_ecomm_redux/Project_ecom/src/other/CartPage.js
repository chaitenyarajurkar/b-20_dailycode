import React, { useContext, useEffect, useState } from 'react';
import { Appcontext } from '../App';

const CartPage = () => {

    const cartNumb = useContext(Appcontext);
    const [total,setTotal] = useState(0);
    useEffect(() => {
        cartNumb.setActiveTb('cartpage');

        console.log(cartNumb.cartDatainfo);
        let  add=0;
        if(cartNumb?.cartDatainfo.length > 0){
            for(let x of cartNumb.cartDatainfo){
                if(x.quantity >0 && x.productPrice){
                    add = add + (x.quantity * x.productPrice)
    
                }
            }
        }

        

        setTotal(add);
    },[])
    return (
        <div className='container'>

            {cartNumb?.cartDatainfo.length > 0 && cartNumb.cartDatainfo.map((item, index) => {
                return (

                    <div className='mt-3'>
                        <div class="card ">
                            <h5 class="card-header">{item.productName}</h5>
                            <div class="card-body d-flex">
                                <div>

                                    <h5 class="card-title">{item.categoryName}</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <p>Quantity : <strong>{item.quantity}</strong></p>
                                    <p>Price : <strong>{item.productPrice}</strong></p>
                                </div>
                                <a href="#" class="btn btn-primary" style={{ alignSelf: "flex-end" }}>Sub total:<strong>{item.quantity * item.productPrice}</strong></a>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div class="card">
                <div class="card-body">
                    Your final total Rupees is  : <strong>{total} rs.</strong> 
                </div>
</div>

        </div>

    );
};

export default CartPage;