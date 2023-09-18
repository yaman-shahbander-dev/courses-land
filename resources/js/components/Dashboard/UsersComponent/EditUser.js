import axios from "axios";
import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";
import { Link } from "react-router-dom";

const UpdateInfo = (userID, userName, email, verified, type, description) => {
    axios.put('http://127.0.0.1:8000/api/UpdateUserInforamtion', {
        userID: userID,
        userName: userName,
        email: email,
        verified: verified,
        type: type,
        description: description,
    }).then((res) => {
        if (res.data.error) {
            swal("Oh Sorry!", "User doesn\'t exist!", "error");
        } else {
            swal("Well done!", "User updated successfully!", "success");
        }
    });
}

const EditUser = (props) => {

    const [userID, setUserID] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(0);
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const UserID = params.get('UserID');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/UserExists?userID=${UserID}&operation=${'edit'}`).then((res) => {
            setUserID(res.data.success.id)
            setUserName(res.data.success.username)
            setEmail(res.data.success.email)
            setVerified(res.data.success.verified)
            setType(res.data.success.type_id)
            setDescription(res.data.success.description)
        });
    }, []);



    return (
        <div>
            <LeftSidebar />
            <RightSidebar />

            {/* edit User form start */}
            <section className="content">
                <div className="body_scroll">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <Link to="/users"><button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        {/* <!-- Vertical Layout --> */}
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Edit User</strong> {userName}</h2>
                                    </div>
                                    <div className="body">
                                        <form>
                                            <label htmlFor="email_address">Email Address</label>
                                            <div className="form-group">
                                                <input type="email" id="email_address" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email address" style={{ color: 'Black' }} />
                                            </div>

                                            <label htmlFor="Username">Username</label>
                                            <div className="form-group">
                                                <input type="text" id="Username" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" placeholder="Enter your Username" style={{ color: 'Black' }} />
                                            </div>

                                            <label htmlFor="email_address">Type</label>
                                            <select name="type" id="type" className="form-control" value={type} onChange={(e) => setType(e.target.value)}>
                                                <option value="1">User</option>
                                                <option value="2">Author</option>
                                                <option value="3">Admin</option>
                                                <option value="4">Agent</option>
                                            </select>

                                            <label htmlFor="Description">Description</label>
                                            <div className="form-group">
                                                <input type="text" id="Description" value={description === null ? 'No description provided' : description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Enter your Description" style={{ color: 'Black' }} />
                                            </div>

                                            <button onClick={() => UpdateInfo(userID, userName, email, verified, type, description)} type="button" className="btn btn-raised btn-primary btn-round waves-effect">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* edit User form end */}
        </div>
    );
}


export default EditUser;
