import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const sendComment = (comment, VideoID, videoSecret) => {
    if (comment.length === 0) {
        location.reload(`http://127.0.0.1:8000/playVideo?video=${videoSecret}`);
        swal({
            title: "Something went wrong",
            text: 'Comment can\'t be empty',
            icon: "warning",
            dangerMode: true,
        });
    } else if (comment.length >= 1 && comment.length <= 6) {
        location.reload(`http://127.0.0.1:8000/playVideo?video=${videoSecret}`);
        swal({
            title: "Something went wrong",
            text: 'Comment can\'t be less than seven letters',
            icon: "warning",
            dangerMode: true,
        });
    } if (comment.length >= 7) {
        axios.post('http://127.0.0.1:8000/api/makeVideoComment', {
            videoID: VideoID,
            userID: userID,
            comment: comment
        }).then(() => {
            location.reload(`http://127.0.0.1:8000/playVideo?video=${videoSecret}`);
            swal("Great!", "Comment added successfully!", "success");
        });
    }
}

const VideoReplyForm = (props) => {
    const [comment, setComment] = useState('');

    return (
        <div className="post-comments-form">
            <div className="section-title mb-30">
                <h2>Leave a Reply</h2>
            </div>
            <form action="#">
                <div className="row">
                    <div className="col-xl-12">
                        <textarea name="comments" id="comments"
                            cols="30" rows="10" placeholder="Your Comments"
                            onChange={(e) => setComment(e.target.value)} ></textarea>
                        <button className="btn blue-bg" onClick={() => sendComment(comment, props.VideoID, props.videoSecret)}
                            style={{
                                background: 'orange',
                                color: 'white'
                            }}>send reply</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default VideoReplyForm;
