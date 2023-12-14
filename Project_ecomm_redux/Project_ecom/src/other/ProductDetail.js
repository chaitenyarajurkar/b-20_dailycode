import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {

    const detail = useLocation();
    const [productDetail,setProductDetil] = useState({});

    console.log(detail)

    useEffect(()=>{
        if(detail.state !==null){
            setProductDetil(detail.state)
        }else{

            console.log(detail.search)
            // api call krna hai product by id
            // setProductDetil(response)
        }

    },[])
    return (
        <div>

            <p>Helo this is product detal</p>
            
        </div>
    );
};

export default ProductDetail;