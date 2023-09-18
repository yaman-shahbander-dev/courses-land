import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import LeftSidebar from "../../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../../FirstPageComponent/StatelessComponents/RightSidebar";

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const SearchedTableFavoriteVideos = () => {
    const [favoriteVideos, setFavoriteVideos] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // search favorite
        axios.get('http://127.0.0.1:8000/api/searchFavoriteCourseOrVideo', {
            params: {
                userID: userID,
                value: value,
                keyword: 'video'
            }
        }).then((res) => setFavoriteVideos(res.data));
    }, []);

    const DeleteFavorite = (videoId, userId) => {
        axios.post('http://127.0.0.1:8000/api/removeVideoFromFavorite', {
            videoID: videoId,
            userID: userId,
            value: value
        }).then((res) => {
            setFavoriteVideos(res.data.favorites)
            swal(res.data.title, res.data.success, res.data.state)
        });
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
                                                        <th>Video Description</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        favoriteVideos.map((video) => (
                                                            <tr key={video.id}>
                                                                <td><Link to={`/playVideo?video=${video.secret_key}`}>
                                                                    {video.description.substring(0, 200)}...
                                                                </Link></td>
                                                                <td>
                                                                    <button onClick={() => DeleteFavorite(video.id, userID)} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
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

export default SearchedTableFavoriteVideos;
