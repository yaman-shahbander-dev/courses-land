import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";

const Table = () => {
    const [authorsRequests, setAuthorsRequests] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getAuthorsRequests').then((res) => setAuthorsRequests(res.data))
    }, []);

    const DeleteRequest = (RequestID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/BecomeAuthorRequestExists?authorRequestID=${RequestID}&operation=${operation}`)
            .then((res) => {
                if (res.data.success) {
                    setAuthorsRequests(res.data.requests)
                    swal("Well done!", "Author request deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Author request doesn\'t exist!", "error");
                }
            })
    }

    const ApproveRequest = (RequestID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/BecomeAuthorRequestExists?authorRequestID=${RequestID}&operation=${operation}`)
            .then((res) => {
                if (res.data.success) {
                    setAuthorsRequests(res.data.requests)
                    swal("Well done!", "Author request approved successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Author request doesn\'t exist!", "error");
                }
            })
    }

    return (
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
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Created</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    authorsRequests.map((authorsRequest) => (
                                                        <tr key={authorsRequest.id}>
                                                            <td>{authorsRequest.id}</td>
                                                            <td>{authorsRequest.user_id}</td>
                                                            <td>{authorsRequest.description}</td>
                                                            <td>{authorsRequest.created_at.split(' ')[0]}</td>
                                                            <td>
                                                                <button onClick={() => ApproveRequest(authorsRequest.id, 'approve')} className="btn btn-success btn-sm"><i className="">Approve</i></button>

                                                                <button onClick={() => DeleteRequest(authorsRequest.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
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
