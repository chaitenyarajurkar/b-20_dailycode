import React, { Component } from 'react';
import { Appcontext } from '../App';

class CartPageclass extends Component {
    render() {
        return (
            <div>
            <Appcontext.Consumer>
                {
                    (value)=>{
                        
                        return(
                            <div>
                            {value.cartDatainfo.length > 0 && value.cartDatainfo.map((item, index) => {
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
                                                    <button onClick={()=>value.showAlertcall()}>click to show alert</button>
                                                </div>
                                                <a href="#" class="btn btn-primary" style={{ alignSelf: "flex-end" }}>Sub total:<strong>{item.quantity * item.productPrice}</strong></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        )
                    }
                }

            </Appcontext.Consumer>


            </div>
        );
    }
}

export default CartPageclass;