import React, { Component, useState, useEffect } from "react";
import { ReactVideo } from "reactjs-media";
import Navbar from '../UserSide/ReusableComponents/Navbar';
import VideoComments from "./VideoComments";
import VideoReplyForm from "./VideoReplyForm";
import css from './Media.module.css';
import axios from "axios";

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const MediaComponent = () => {

    const [videoID, setvideoID] = useState('');
    const [videoSecret, setVideoSecret] = useState('');
    const [videoTitle, setvideoTitle] = useState('');
    const [videoDescription, setvideoDescription] = useState('');
    const [videoURL, setvideoURL] = useState('');
    const [Favorite, setFavorite] = useState(0);
    const [checkFavoriteThen, setCheckFavoriteThen] = useState(0);
    const [comments, setComments] = useState([]);

    const classeschecked = ['fa', 'fa-star', css.starSize, css.checkedStarFilled, css.cursorPointer];
    const classesUnchecked = ['fa', 'fa-star', css.starSize, css.cursorPointer];

    useEffect(() => {
        const windowUrl = window.location.search;

        const params = new URLSearchParams(windowUrl);

        const secret_key = params.get('video');

        axios.post('http://127.0.0.1:8000/api/watchHistoryStore', {
            userID: userID,
            videoSecret: secret_key
        });

        axios.get(`http://127.0.0.1:8000/api/getvideo?video=${secret_key}`)
            .then((res) => {
                setvideoID(res.data.id);
                setVideoSecret(res.data.secret_key);
                setvideoTitle(res.data.title);
                setvideoDescription(res.data.description);
                setvideoURL(res.data.video);
                setComments(res.data.comments);
                axios.get('http://127.0.0.1:8000/api/checkvideoFavoriteExistence', {
                    params: {
                        userID: userID,
                        videoID: res.data.id
                    }
                }).then((res) => {
                    setFavorite(res.data);
                    console.log(res.data);
                    setCheckFavoriteThen(1);
                });
            });

    }, []);

    const addToFavorite = (videoID, userID) => {
        axios.post('http://127.0.0.1:8000/api/addVideoToFavorite', {
            videoID: videoID,
            userID: userID
        }).then((res) => {
            swal(res.data.title, res.data.success, res.data.state)
            axios.get('http://127.0.0.1:8000/api/checkvideoFavoriteExistence', {
                    params: {
                        userID: userID,
                        videoID: videoID
                    }
                }).then((res) => {
                    setFavorite(res.data);
                    console.log(res.data);
                    setCheckFavoriteThen(1);
                });
        });
    }

    const removeFromFavorite = (videoID, userID) => {
        axios.post('http://127.0.0.1:8000/api/removeVideoFromFavorite', {
            videoID: videoID,
            userID: userID
        }).then((res) => {
            swal(res.data.title, res.data.success, res.data.state)
            axios.get('http://127.0.0.1:8000/api/checkvideoFavoriteExistence', {
                    params: {
                        userID: userID,
                        videoID: videoID
                    }
                }).then((res) => {
                    setFavorite(res.data);
                    console.log(res.data);
                    setCheckFavoriteThen(1);
                });
        });
    }

    return (
        <div style={{ minHeight: '600px' }}>
            {checkFavoriteThen === 1 ?
                <div>
                    <Navbar />
                    {videoURL ?
                        <ReactVideo src={videoURL} poster='http://127.0.0.1:8000/images/poster.jpg' primaryColor="red" autoPlay />
                        : ''}
                    <div className="course-details-area gray-bg pt-10 pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8">
                                    <div className="blog-wrapper blog-list blog-details blue-blog mb-50">
                                        <div className="blog-content news-content">
                                            <h5 className={css.customizeVideoTitle}>{videoTitle}</h5>
                                            {
                                                Favorite === 1 ?
                                                    <span className={classeschecked.join(' ')}
                                                        onClick={() => removeFromFavorite(videoID, userID)}
                                                    ></span>
                                                    :
                                                    <span className={classesUnchecked.join(' ')}
                                                        onClick={() => addToFavorite(videoID, userID)}
                                                    ></span>

                                            }
                                            <p>{videoDescription}</p>
                                        </div>
                                    </div>

                                    {comments ?
                                        <div>
                                            <div className="post-comments post-comments-padding white-bg mt-70 mb-30">
                                                <div className="section-title mb-20">
                                                    <h2>Comments</h2>
                                                </div>
                                                <VideoComments comments={comments} />
                                                <VideoReplyForm VideoID={videoID} videoSecret={videoSecret} />
                                            </div>
                                        </div>
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div >
    );
}

export default MediaComponent;
