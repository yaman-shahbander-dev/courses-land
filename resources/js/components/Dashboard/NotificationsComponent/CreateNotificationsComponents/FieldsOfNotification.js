import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdateInfo = (title, description) => {
    if (title.length === 0) swal("Oh Sorry!", "Notification title is required!", "error");
    if (description.length === 0) swal("Oh Sorry!", "Notification description is required!", "error");

    else {
        axios.post('http://127.0.0.1:8000/api/createNotification', { title: title, description: description }).then((res) => {
            if (res.data.success) swal("Well done!", res.data.success, "success")
        });
    }
}

const FieldsOfNotification = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Create Notification Page</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <Link to="/notifications"><button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button></Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    {/* <!-- CKEditor --> */}
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2> <strong>Create Notification</strong></h2>
                                </div>
                                <div className="body">

                                    <label htmlFor="Name">Title</label>
                                    <div className="form-group">
                                        <input type="text" id="name" onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder=" Type your notification title" style={{ color: 'Black' }} />
                                    </div>
                                    {/* End of field */}

                                    <div className="form-group">
                                        <label htmlFor="Description">Description</label>
                                        <textarea style={{ resize: 'none' }} id="description"
                                            placeholder=" Type your notification description" className="form-control" rows="5" onChange={(e) => setDescription(e.target.value)}></textarea>
                                    </div>

                                </div>
                                <button onClick={() => UpdateInfo(title, description)} type="button" className="btn btn-raised btn-primary btn-round waves-effect" style={{ width: '100px', marginLeft: '20px', marginBottom: '20px' }}>Save</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- #END# CKEditor --> */}
                </div>
            </div>
        </section>
    )
}

export default FieldsOfNotification;
