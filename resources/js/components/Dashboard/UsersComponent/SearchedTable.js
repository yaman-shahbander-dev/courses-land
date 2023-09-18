import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const SearchedTable = (props) => {
    const [users, setUsers] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // searchUser
        axios.get(`http://127.0.0.1:8000/api/searchUser?value=${value}`).then((res) => setUsers(res.data.success))
    }, []);

    const DeleteUser = (UserID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/UserExists?userID=${UserID}&operation=${operation}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setUsers(res.data.users);
                    swal("Well done!", "User deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "User doesn\'t exist!", "error");
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
                                                        <th>Username</th>
                                                        <th>Email</th>
                                                        <th>Verified</th>
                                                        <th>Type</th>
                                                        <th>Created at</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        users.map((user) => (
                                                            <tr key={user.id}>
                                                                <td>{user.id}</td>
                                                                <td>{user.username}</td>
                                                                <td>{user.email}</td>
                                                                <td>{user.verified === 1 ? 'Yes' : 'No'}</td>
                                                                <td>{user.type_id}</td>
                                                                <td>{user.created_at}</td>
                                                                <td>
                                                                    <Link to={`/editUser?UserID=${user.id}`} className="btn btn-primary btn-sm" >
                                                                        <i className="zmdi zmdi-edit"></i>
                                                                    </Link>

                                                                    <button onClick={() => DeleteUser(user.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
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

export default withRouter(SearchedTable);
