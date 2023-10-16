import React, { useState } from 'react';

const Accordian = () => {

    const [flag, setFlag] = useState(false);
    const [accordianData, setAccordianData] = useState([
        { title: " Accordion Item #1", body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",flag:false },
        { title: "Accordion Item #2", body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",flag:false },
        { title: " Accordion Item #3", body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",flag:false }
    ])

    const switchAccordian=(index)=>{
        setAccordianData(prevState=>{
            const updateedValue = prevState.map((item,ind)=>{
                if(index === ind){
                    return {...item,flag:!item.flag}
                }else{
                    return {...item,flag:false};
                }
            })
            return updateedValue;
        })

    }



    return (
        <div>
            <div className="accordion" id="accordionExample">

                {accordianData.map((item,index)=>{
                    return(

                        <div className="accordion-item mt-3">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" onClick={() => switchAccordian(index)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           {item.title}
                        </button>
                    </h2>
                    <div id="collapseOne" className={item.flag ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           {item.body}
                        </div>
                    </div>
                </div>

                    )
                })}
                

            </div>
        </div>
    );
};

export default Accordian;