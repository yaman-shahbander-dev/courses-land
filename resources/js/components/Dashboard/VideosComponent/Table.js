import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;
const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const Table = () => {
    const [videos, setVideos] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getVideos', {
            params: {
                usertypeID: usertypeID,
                userID: userID
            }
        }).then((res) => setVideos(res.data))
    }, []);

    const DeleteVideo = (VideoID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/VideoExists?videoID=${VideoID}&operation=${operation}&usertypeID=${usertypeID}&userID=${userID}`)
            .then((res) => {
                if (res.data.success) {
                    setVideos(res.data.videos)
                    swal("Well done!", "Video deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Video doesn\'t exist!", "error");
                }
            })
    }

    const Approve = (approveID, approveFor) => {
        axios.get(`http://127.0.0.1:8000/api/approveData?approveID=${approveID}&approveFor=${approveFor}`)
            .then((res) => {
                if (res.data.success) {
                    setVideos(res.data.videos)
                    swal("Well done!", "approved successfully!", "success");
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

                                <Link to={`searchVideo?value=${searchValue}`} className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></Link>
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
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Course</th>
                                                    <th>Video</th>
                                                    <th>Author</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    videos.map((video) => (
                                                        <tr key={video.id}>
                                                            <td>{video.id}</td>
                                                            <td>{video.title}</td>
                                                            <td>{video.description}</td>
                                                            <td>{video.course_id}</td>
                                                            <td>
                                                                <video width="200" height="120" controls>
                                                                    <source src={video.video} />
                                                                </video>
                                                            </td>
                                                            <td>{video.author}</td>
                                                            <td>
                                                                {
                                                                    usertypeID == 3 ? video.approved == 0 ? <button onClick={() => Approve(video.id, 'video')} className="btn btn-success btn-sm"><i className="">Approve</i></button>
                                                                    : null : null
                                                                }

                                                                <Link to={`/editVideo?VideoID=${video.id}`} className="btn btn-primary btn-sm" >
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </Link>

                                                                <button onClick={() => DeleteVideo(video.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
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
