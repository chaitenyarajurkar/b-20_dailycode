import React, { memo } from 'react';

const Childcomponent = (props) => {
    console.log("hello this is child")
    return (
        <div>
            <h6>hello this is child</h6>
            {props.records && props.records.map((item,index)=>{

                return (
                    <ul>
                        <li>{item.name}{""}{item.address}</li>
                    </ul>
                )
            })}
        </div>
    );
};

export default memo(Childcomponent);


// useCallback

//useMemo