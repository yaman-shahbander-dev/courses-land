import React from 'react';
import LeftSidebar from '../../FirstPageComponent/StatelessComponents/LeftSidebar';
import RightSidebar from '../../FirstPageComponent/StatelessComponents/RightSidebar';
import FieldsOfArticle from './FieldsOfArticle';

const CreateArticle = () => {
    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <FieldsOfArticle />
        </div>
    )
}

export default CreateArticle;