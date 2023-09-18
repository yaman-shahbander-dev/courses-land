import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UpdateInfo = (name) => {
    if (name.length === 0) swal("Oh Sorry!", "Category name is required!", "error");
    else {
        axios.post('http://127.0.0.1:8000/api/createCategory', { name: name }).then((res) => {
            if (res.data.success) swal("Well done!", res.data.success, "success")
            else if (res.data.error) swal("Oh Sorry!", "Category already exists!", "error");
        });
    }
}

const FieldsOfCategory = () => {
    const [name, setName] = useState('');

    return (
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Create Category Page</li>
                            </ul>
                            <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <Link to="/categories"><button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button></Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    {/* <!-- CKEditor --> */}
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2> <strong>Create Category</strong></h2>
                                </div>
                                <div className="body">

                                    <label htmlFor="Name">Name</label>
                                    <div className="form-group">
                                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} className="form-control" placeholder=" Type your Category name" style={{ color: 'Black' }} />
                                    </div>
                                    {/* End of field */}

                                </div>
                                <button onClick={() => UpdateInfo(name)} type="button" className="btn btn-raised btn-primary btn-round waves-effect" style={{ width: '100px', marginLeft: '20px', marginBottom: '20px' }}>Save</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- #END# CKEditor --> */}
                </div>
            </div>
        </section>
    )
}

export default FieldsOfCategory;
