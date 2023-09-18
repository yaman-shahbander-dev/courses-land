import React, { useState, useEffect } from "react";
import axios from "axios";
import Offers from '../../AllJobOffersComponents/StatefulComponents/Offers/Offers';

const Jobs = (props) => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getSearchedJobsData', {
            params: {
                value : props.value
            }
        }).then((res) => setOffers(res.data));
    }, []);

    return (
        <div>
            <Offers offers={offers.length !== 0 ? offers : 'empty'} title="Jobs Offers" />
        </div>
    )
};

export default Jobs;
