import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const SearchedTableCategory = () => {
    const [categories, setCategories] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // searchCategory
        axios.get(`http://127.0.0.1:8000/api/searchCategory?value=${value}`).then((res) => setCategories(res.data.success))
    }, []);

    const DeleteCategory = (CategoryID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/CategoryExists?categoryID=${CategoryID}&operation=${operation}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setCategories(res.data.categories)
                    swal("Well done!", "Category deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Category doesn\'t exist!", "error");
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
                                                        <th>No. courses</th>
                                                        <th>Created</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        categories.map((category) => (
                                                            <tr key={category.id}>
                                                                <td>{category.id}</td>
                                                                <td>{category.name}</td>
                                                                <td>{category.numberOfCourses}</td>
                                                                <td>{category.created_at}</td>
                                                                <td>
                                                                    <Link to={`/editCategory?CategoryID=${category.id}`} className="btn btn-primary btn-sm" >
                                                                        <i className="zmdi zmdi-edit"></i>
                                                                    </Link>

                                                                    <button onClick={() => DeleteCategory(category.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
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

export default withRouter(SearchedTableCategory);
