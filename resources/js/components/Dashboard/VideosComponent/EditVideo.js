import axios from "axios";
import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";
import { Link } from "react-router-dom";

const UpdateInfo = (videoID, title, description) => {
    axios.put('http://127.0.0.1:8000/api/UpdateVideoInforamtion', {
        videoID: videoID,
        title: title,
        description: description
    }).then((res) => {
        if (res.data.error) {
            swal("Oh Sorry!", "Video doesn\'t exist!", "error");
        } else {
            swal("Well done!", "Video updated successfully!", "success");
        }
    });
}

const EditVideo = () => {

    const [videoID, setVideoID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const VideoID = params.get('VideoID');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/VideoExists?videoID=${VideoID}&operation=${'edit'}`).then((res) => {
            setVideoID(res.data.success.id)
            setTitle(res.data.success.title)
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
                                <Link to="/videos"><button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        {/* <!-- Vertical Layout --> */}
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Edit Video</strong> {title}</h2>
                                    </div>
                                    <div className="body">
                                        <form>
                                            <label htmlFor="Title">Title</label>
                                            <div className="form-group">
                                                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Enter your Tag name" style={{ color: 'Black' }} />
                                            </div>

                                            <label htmlFor="Description">Description</label>
                                            <div className="form-group">
                                                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Enter your Tag name" style={{ color: 'Black' }} />
                                            </div>

                                            <button onClick={() => UpdateInfo(videoID, title, description)} type="button" className="btn btn-raised btn-primary btn-round waves-effect">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* edit Course form end */}
        </div>
    );
}


export default EditVideo;
