import React from "react";

const VideoComments = props => {
    return (
        <div className="latest-comments">
            <ul>
                {
                    Array.isArray(props.comments) === true ?
                        props.comments.map((comment, index) => (
                            <li key={index}>
                                <div className="comments-box main-comments d-flex">
                                    <div className="comments-avatar">
                                        <img src={comment.user_picture} alt="here" style={{
                                        width: '110px',
                                        height: '90px'
                                     }} />
                                    </div>
                                    <div className="comments-text">
                                        <div className="avatar-name">
                                            <h5>{comment.user_id}</h5>
                                        </div>
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                        : ''
                }
            </ul>
        </div>
    );
}

export default VideoComments;
