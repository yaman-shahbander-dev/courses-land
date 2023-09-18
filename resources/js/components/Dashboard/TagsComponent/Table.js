import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";

const Table = (props) => {
    const [tags, setTags] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/dashboardGetTags').then((res) => setTags(res.data))
    }, []);

    const DeleteTag = (TagID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/TagExists?tagID=${TagID}&operation=${operation}`)
            .then((res) => {
                if (res.data.success) {
                    swal("Well done!", "Tag deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Tag doesn\'t exist!", "error");
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

                                <Link to={`searchTag?value=${searchValue}`} className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></Link>
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
                                                    <th>Name</th>
                                                    <th>Created</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tags.map((tag) => (
                                                        <tr key={tag.id}>
                                                            <td>{tag.id}</td>
                                                            <td>{tag.name}</td>
                                                            <td>{tag.created_at}</td>
                                                            <td>
                                                                <Link to={`/editTag?TagID=${tag.id}`} className="btn btn-primary btn-sm" >
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </Link>

                                                                <button onClick={() => DeleteTag(tag.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
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