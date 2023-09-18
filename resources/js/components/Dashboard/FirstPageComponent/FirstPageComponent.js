import React from 'react';
import LeftSidebar from './StatelessComponents/LeftSidebar';
import RightSidebar from './StatelessComponents/RightSidebar';
import MainContent from './StatefulComponents/MainContent';

const FirstPageComponent = () => {

    const userInfo = JSON.parse(localStorage.getItem('user-info'));

    return (
        <div className='theme-blush'>
            <RightSidebar userInfo={userInfo} />
            <LeftSidebar  userInfo={userInfo} />
            <MainContent  userInfo={userInfo} />
        </div>
    );
}

export default FirstPageComponent;
