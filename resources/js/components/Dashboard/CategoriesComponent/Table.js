import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";

const Table = () => {
    const [categories, setCategories] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getCategories').then((res) => setCategories(res.data))
    }, []);

    const DeleteCategory = (CategoryID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/CategoryExists?categoryID=${CategoryID}&operation=${operation}`)
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
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                            <label htmlFor="email_address">Search</label>
                            <div className="form-group">

                                <input type="text" id="email_address1search" className="form-control" placeholder="Type here to search" style={{ backgroundColor: 'white', padding: '10px', color: 'black' }}
                                onChange={(e) => setSearchValue(e.target.value)} />

                                <Link to={`searchCategory?value=${searchValue}`} className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></Link>
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

    )
}

export default withRouter(Table);
