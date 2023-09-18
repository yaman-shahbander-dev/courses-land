import React from 'react';
import LeftSidebar from '../../FirstPageComponent/StatelessComponents/LeftSidebar';
import RightSidebar from '../../FirstPageComponent/StatelessComponents/RightSidebar';
import FieldsOfNotification from './FieldsOfNotification';

const CreateNotification = () => {
    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <FieldsOfNotification />
        </div>
    );
}

export default CreateNotification;