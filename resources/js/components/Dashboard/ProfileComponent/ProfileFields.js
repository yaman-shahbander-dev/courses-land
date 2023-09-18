import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from 'sweetalert';

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const UpdateInfo = (username, picture) => {
    if (username.length === 0) swal("Oh Sorry!", "username is required!", "error");
    else if (username.length <= 3) swal("Oh Sorry!", "username is too short!", "error");
    else {
        const data = new FormData();

        data.append('username', username);
        data.append('picture', picture);
        data.append('userID', userID);


        axios.post('http://127.0.0.1:8000/api/updateProfile', data).then((res) => {
            if (res.data.success) swal("Well done!", 'Updated Successfully', "success")
        });
    }
}

const ProfileFields = () => {
    const [username, setUsername] = useState('');
    const [picture, setPicture] = useState('');

    useEffect(() => {
        // searchCategory
        axios.get(`http://127.0.0.1:8000/api/userProfile`, {
            params: {
                userID: userID
            }
        }).then((res) => {
            setUsername(res.data.username);
        })
    }, []);

    return (
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Update Profile Page</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    {/* <!-- CKEditor --> */}
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2> <strong>Update Profile</strong></h2>
                                </div>
                                <div className="body">
                                    <label htmlFor="Name">Username</label>
                                    <div className="form-group">
                                        <input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder=" Type your Tag name" style={{ color: 'Black' }} />
                                    </div>
                                    {/* End of field */}

                                    <div className="card">
                                        <div className="header">
                                            <h2>Upload profile image</h2>
                                        </div>
                                        <div className="body">
                                            <div className="dropify-wrapper">
                                                <div className="dropify-message">
                                                    <span className="file-icon"></span>
                                                    <p>Drag and drop a file here or click</p>
                                                    <p className="dropify-error">Ooops, something wrong appended.</p>
                                                </div>
                                                <div className="dropify-loader" style={{ display: 'none' }}></div>
                                                <div className="dropify-errors-container">
                                                    <ul></ul></div>
                                                <input type="file" className="dropify" onChange={(e) => setPicture(e.target.files[0])} />
                                                <button type="button" className="dropify-clear">Remove</button>
                                                <div className="dropify-preview" style={{ display: 'none' }}>
                                                    <span className="dropify-render"></span>
                                                    <div className="dropify-infos">
                                                        <div className="dropify-infos-inner">
                                                            <p className="dropify-filename">
                                                                <span className="file-icon"></span>
                                                                <span className="dropify-filename-inner">4a94268541d7a0ed95a8be5138e8a288.jpg</span></p>
                                                            <p className="dropify-infos-message">Drag and drop or click to replace</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End of field */}


                                </div>
                                <button onClick={() => UpdateInfo(username, picture)} type="button" className="btn btn-raised btn-primary btn-round waves-effect" style={{ width: '100px', marginLeft: '20px', marginBottom: '20px' }}>Save</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- #END# CKEditor --> */}
                </div>
            </div>
        </section>
    )
}

export default ProfileFields;
