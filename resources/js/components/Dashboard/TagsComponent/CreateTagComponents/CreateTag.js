import React from 'react';
import LeftSidebar from '../../FirstPageComponent/StatelessComponents/LeftSidebar';
import RightSidebar from '../../FirstPageComponent/StatelessComponents/RightSidebar';
import FieldsOfTag from './FieldsOfTag';

const CreateTag = () => {
    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <FieldsOfTag />
        </div>
    );
}

export default CreateTag;