import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Statistics = () => {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/mainPageStatistics')
            .then((res) => setStatistics(res.data))
    }, []);

    return (
        <div>
            {/* counter start */}
            <div className="counter-area">
                <div className="container pt-90 pb-65">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="couter-wrapper mb-30 text-center">
                                <img src="Interface/img/counter/counter_icon1.png" alt="here" />
                                <span className ="counter">{statistics.users}</span>
                                <h3>Students</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="couter-wrapper mb-30 text-center">
                                <img src="Interface/img/counter/counter_icon2.png" alt="here" />
                                <span className ="counter">{statistics.courses}</span>
                                <h3>Courses</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="couter-wrapper mb-30 text-center">
                                <img src="Interface/img/counter/counter_icon4.png" alt="here" />
                                <span className ="counter">{statistics.agents}</span>
                                <h3>Agents</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="couter-wrapper mb-30 text-center">
                                <img src="Interface/img/counter/counter_icon4.png" alt="here" />
                                <span className ="counter">{statistics.authors}</span>
                                <h3>Authors</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* counter end */}
        </div>
    );
}

export default Statistics;
