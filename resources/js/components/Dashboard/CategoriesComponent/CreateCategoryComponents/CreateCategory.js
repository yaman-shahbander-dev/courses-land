import React from 'react';
import LeftSidebar from '../../FirstPageComponent/StatelessComponents/LeftSidebar';
import RightSidebar from '../../FirstPageComponent/StatelessComponents/RightSidebar';
import FieldsOfCategory from './FieldsOfCategory';

const CreateCategory = () => {
    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <FieldsOfCategory />
        </div>
    )
};

export default CreateCategory;