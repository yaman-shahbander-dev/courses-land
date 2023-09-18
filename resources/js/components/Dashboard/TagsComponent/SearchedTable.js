import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const SearchedTableTag = () => {
    const [tags, setTags] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // searchCategory
        axios.get(`http://127.0.0.1:8000/api/searchTag?value=${value}`).then((res) => setTags(res.data.success))
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
        </div>
    )
}

export default withRouter(SearchedTableTag);