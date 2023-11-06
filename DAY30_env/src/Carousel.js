/*global chrome*/
import React, { useState,useEffect } from 'react';
const Carousel = () => {

    const [showimg, setShowimg] = useState(0);

    const [imgurl,setImgurl] = useState("https://m.media-amazon.com/images/I/51bfhhUKhTL.__AC_SX300_SY300_QL70_FMwebp_.jpg")

    const increMent =()=>{
        // setShowimg(showimg+1);
        setShowimg(prev=>prev === 2 ? 0 : prev +1);
    }
    const sendTokenToChromeExtension = ({ extensionId, jwt}) => {
        chrome.runtime.sendMessage(extensionId, { jwt }, response => {
          if (!response.success) {
            console.log('error sending message', response);
            return response;
          }
          console.log('Sucesss ::: ', response.message)
        });
      }
      
    useEffect(() => {
        sendTokenToChromeExtension({ extensionId: 'joeibnoddmkbggaacjmfnefdmpdgpkmb', jwt: 'xxxxx.yyyyy.zzzzz'})
      }, [])

    return (
        <div>

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className={showimg === 0 ?"carousel-item active":"carousel-item"}>
                        <img className="d-block w-100 " style={{ height: 400, width: 400, objectFit: "contain" }} src={imgurl} alt="First slide" />
                    </div>
                    <div className={showimg === 1 ?"carousel-item active":"carousel-item"}>
                        <img className="d-block w-100" style={{ height: 400, width: 400, objectFit: "contain" }} src="https://m.media-amazon.com/images/I/718+xprSIBL._AC_UY327_FMwebp_QL65_.jpg" alt="Second slide" />
                    </div>
                    <div className={showimg === 2 ?"carousel-item active":"carousel-item"}>
                        <img className="d-block w-100" style={{ height: 400, width: 400, objectFit: "contain" }} src="https://m.media-amazon.com/images/I/719oBAdAl7L._AC_UY327_FMwebp_QL65_.jpg" alt="Third slide" />
                    </div>
                </div>
                <p className="carousel-control-prev"  role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </p>
                <p className="carousel-control-next"  role="button" data-slide="next" onClick={()=>increMent()}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </p>
            </div>

        </div>
    );
};

export default Carousel;