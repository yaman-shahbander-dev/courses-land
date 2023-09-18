import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";

const Table = () => {
    const [notifications, setNotifications] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getAllNotifications').then((res) => setNotifications(res.data))
    }, []);

    const DeleteNotification = (NotificationID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/NotificationExists?notificationID=${NotificationID}&operation=${operation}`)
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
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                            <label htmlFor="email_address">Search</label>
                            <div className="form-group">

                                <input type="text" id="email_address1search" className="form-control" placeholder="Type here to search" style={{ backgroundColor: 'white', padding: '10px', color: 'black' }}
                                    onChange={(e) => setSearchValue(e.target.value)} />

                                <Link to={`searchNotification?value=${searchValue}`} className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

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

    )
}

export default withRouter(Table);
