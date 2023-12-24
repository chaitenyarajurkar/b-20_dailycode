import React, { memo } from 'react';

const Childcomponent = (props) => {
    console.log("hello this is child",props.formData)
    return (
        <div>
            <h6>hello this is child</h6>
        </div>
    );
};

export default memo(Childcomponent);