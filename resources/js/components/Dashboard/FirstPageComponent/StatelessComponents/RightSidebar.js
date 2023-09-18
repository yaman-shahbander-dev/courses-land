import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignOutFunction = () => {
    localStorage.removeItem('user-info');
}

const RightSidebar = () => {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/sideBarNotifications').then((res) => setNotifications(res.data))
    }, [])

    return (
        <div className="navbar-right">
            <ul className="navbar-nav">

                {/* Start notification icon */}
                <li className="dropdown">
                    <a href="/nowhere" className="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications"></i>
                        <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
                    </a>
                    <ul className="dropdown-menu slideUp2" style={{ height: '500px', overflow: 'scroll' }}>
                        <li className="header">Notifications</li>
                        <li className="body">
                            <ul className="menu list-unstyled">
                                {
                                    notifications.map((notification) => (
                                    <li key={notification.id}>
                                        <a href="/" style={{ pointerEvents: 'none' }}>
                                            <div className="icon-circle bg-grey"><i className="zmdi zmdi-comment-text"></i></div>
                                            <div className="menu-info">
                                                <h4>{notification.notification_title}</h4>
                                                <p>{notification.notification_description}</p>
                                            </div>
                                        </a>
                                    </li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* End notification icon */}


                <li>
                    <Link to="/profile" className="js-right-sidebar" title="Setting">
                        <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
                    </Link>
                </li>

                <li>
                    <Link to="/" onClick={SignOutFunction}>
                        <i className="zmdi zmdi-power"></i>
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default RightSidebar;
