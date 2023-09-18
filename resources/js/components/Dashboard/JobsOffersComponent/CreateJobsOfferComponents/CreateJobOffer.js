import React from 'react';
import LeftSidebar from '../../FirstPageComponent/StatelessComponents/LeftSidebar';
import RightSidebar from '../../FirstPageComponent/StatelessComponents/RightSidebar';
import FieldsOfOffer from './FieldsOfOffer';

const CreateJobOffer = () => {
    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <FieldsOfOffer />
        </div>
    );
}

export default CreateJobOffer;