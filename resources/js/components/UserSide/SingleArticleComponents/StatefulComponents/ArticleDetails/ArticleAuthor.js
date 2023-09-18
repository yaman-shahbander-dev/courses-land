import React from "react";

const ArticleAuthor = props => {
    return (
        <div className="author-comments-box d-flex">
            <div className="author-comments-avatar">
                <img src={props.authorImage} alt="here" style={{ width: '256px', height: '256px' }} />
            </div>
            <div className="author-comments-text">
                <div className="author-comments-title">
                    <h5>{props.authorName}</h5>
                    <span>Author</span>
                </div>
                <p>{props.authorDescription}</p>
            </div>
        </div>
    );
}

export default ArticleAuthor;
