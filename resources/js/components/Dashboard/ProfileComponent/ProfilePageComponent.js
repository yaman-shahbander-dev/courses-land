import React, { useEffect, useState } from 'react';
import LeftSidebar from '../FirstPageComponent/StatelessComponents/LeftSidebar';
import RightSidebar from '../FirstPageComponent/StatelessComponents/RightSidebar';
import ProfileFields from './ProfileFields';
import BecomeRequest from './BecomeRequest';
import axios from 'axios';

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;
const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const ProfilePageComponent = () => {
    const [show, setShow] = useState(0);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/hasAlreadyRequested`, {
            params: {
                userID: userID
            }
        }).then((res) => setShow(res.data));
    }, []);

    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <ProfileFields />
            {console.log(show)}
            {show === 0 && usertypeID === 1 ?
                <BecomeRequest />
            :null}
        </div>
    )
}

export default ProfilePageComponent;
