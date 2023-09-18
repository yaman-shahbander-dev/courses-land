import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const SearchedTableNotification = () => {
    const [notifications, setNotifications] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // search Notification
        axios.get(`http://127.0.0.1:8000/api/searchNotification?value=${value}`).then((res) => setNotifications(res.data.success))
    }, []);

    const DeleteNotification = (NotificationID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/NotificationExists?notificationID=${NotificationID}&operation=${operation}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setNotifications(res.data.notifications)
                    swal("Well done!", "Notification deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Notification doesn\'t exist!", "error");
                }
            })
    }

    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <section className="content">
                <div className="body_scroll">
                    <div className="container-fluid">
                        {/* Basic Table */}
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-striped m-b-0">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Title</th>
                                                        <th>Description</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        notifications.map((notification) => (
                                                            <tr key={notification.id}>
                                                                <td>{notification.id}</td>
                                                                <td>{notification.notification_title}</td>
                                                                <td>{notification.notification_description}</td>
                                                                <td>
                                                                    <button onClick={() => DeleteNotification(notification.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default withRouter(SearchedTableNotification);
