import React from 'react';
import ChildDashboard from './ChildDashboard';

const Dashboard = () => {
    const info = "this data paased to grand child"
    return (
        <div>
            <h1>This id Dashboard</h1>
            <ChildDashboard info={info}  ></ChildDashboard>

        </div>
    );
};

export default Dashboard;