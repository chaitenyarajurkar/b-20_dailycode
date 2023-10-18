import React, { memo } from 'react';

const Childcomponent = () => {
    console.log("hello this is child")
    return (
        <div>
            <h6>hello this is child</h6>
        </div>
    );
};

export default memo(Childcomponent);