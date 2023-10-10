import React, { useState } from 'react';

const Videoplayer = () => {

    const [urlinfo,setUrlinfo] = useState([
        {url:"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",type:"deer"},
        {url:"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",type:"snail"},
        {url:"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",type:"cat"},
        {url:"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",type:"spider"}
    ])

    const [ind,setInd] = useState(0);
    const onCHangeHandler=(index)=>{
       console.log(index);
       setInd(index)
    }

    return (
        <div className='text-center'>
            {urlinfo.map((item,index)=>{
                return (
                    <>
                    <input type='checkbox' checked={index ===ind ? true : false}  onChange={()=>onCHangeHandler(index)}></input>
                    {item.type}
                    </>
                )
            })}
            

            
        </div>
    );
};

export default Videoplayer;