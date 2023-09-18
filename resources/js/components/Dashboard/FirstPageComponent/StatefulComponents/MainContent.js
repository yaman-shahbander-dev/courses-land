import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const MainContent = (props) => {
    const [statistics, setStatistics] = useState([]);
    const [activeUsers, setActiveUsers] = useState(0);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Statistics').then((res) => setStatistics(res.data))
        setInterval(() => {
            axios.get('http://127.0.0.1:8000/api/getActiveUsers').then((res) => setActiveUsers(res.data))
        }, 10000)
    }, []);

    return (
        <section className="content">
            <div className="">
                <div className="block-header">
                    <div className="row">

                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <Link to='/'>
                                <button className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    {usertypeID === 3 ?
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card widget_2 big_icon">
                                    <div className="body">
                                        <h2>{statistics.users} <small className="info">Users</small></h2>
                                        <div className="progress">
                                            <div className="progress-bar l-amber" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card widget_2 big_icon">
                                    <div className="body">
                                        <h2>{statistics.courses} <small className="info">Courses</small></h2>
                                        <div className="progress">
                                            <div className="progress-bar l-blue" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card widget_2 big_icon">
                                    <div className="body">
                                        <h2>{statistics.videos} <small className="info">Videos</small></h2>
                                        <div className="progress">
                                            <div className="progress-bar l-purple" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card widget_2 big_icon">
                                    <div className="body">
                                        <h2>{statistics.categories} <small className="info">Categories</small></h2>
                                        <div className="progress">
                                            <div className="progress-bar l-amber" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card widget_2 big_icon">
                                    <div className="body">
                                        <h2>{statistics.articles} <small className="info">Articles</small></h2>
                                        <div className="progress">
                                            <div className="progress-bar l-purple" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card widget_2 big_icon">
                                    <div className="body">
                                        <h2>{statistics.offers} <small className="info">Offers</small></h2>
                                        <div className="progress">
                                            <div className="progress-bar l-green" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card widget_2 big_icon">
                                    <div className="body">
                                        <h2>{activeUsers}<small className="info">actives</small></h2>
                                        <div className="progress">
                                            <div className="progress-bar l-green" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: '89%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    :null}
                    <div className="row clearfix">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="card mcard_4">
                                <div className="body">
                                    <ul className="header-dropdown list-unstyled">
                                        <li className="dropdown">
                                            <a href="/nowhere" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-menu"></i> </a>
                                            {/* <ul className="dropdown-menu slideUp">
                                                <li><a href="/nowhere">Edit</a></li>
                                                <li><a href="/nowhere">Delete</a></li>
                                                <li><a href="/nowhere">Report</a></li>
                                            </ul> */}
                                        </li>
                                    </ul>
                                    <div className="img">
                                        <img src={'http://127.0.0.1:8000/images/Avatar/' + props.userInfo.picture} className="rounded-circle" alt="profile-image" />
                                    </div>
                                    <div className="user">
                                        <h5 className="mt-3 mb-1">{props.userInfo.username}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainContent;
