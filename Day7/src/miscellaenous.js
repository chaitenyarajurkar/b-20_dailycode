import React from 'react';

const Miscellaenous = () => {

   var arraData = ["bmw","tata","maruti","mahindra"];


// for(let x of arraData){

// }


//    map 
      let result = arraData.map((x,index)=>{
             
                 if(x ==="maruti"){
                    return "maruti suzuki"
                 }else{
                    return x
                 }
        
      })
      console.log(result);

    return (
        <div>
            
        </div>
    );
};

export default Miscellaenous;