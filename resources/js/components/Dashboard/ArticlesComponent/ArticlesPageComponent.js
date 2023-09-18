import React from 'react';
import LeftSidebar from '../FirstPageComponent/StatelessComponents/LeftSidebar';
import RightSidebar from '../FirstPageComponent/StatelessComponents/RightSidebar';
import Table from './Table';

const ArticlesPageComponent = () => {
    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <Table />
        </div>
    )
}

export default ArticlesPageComponent;