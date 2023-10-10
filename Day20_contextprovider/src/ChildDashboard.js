import React from 'react';
import GrandChildDashoard from './GrandChildDashoard';

const ChildDashboard = (props) => {

    return (
        <div>
            <h1>This is child Dashborad</h1>

            <GrandChildDashoard info={props.info}></GrandChildDashoard>
            
        </div>
    );
};

export default ChildDashboard;