import React from "react";

const ArticleTags = props => {
    // Array.isArray(props.articleTags) false if undefined
    return (
        <div className="news-wrapper-tags">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="new-post-tag">
                        <span>Tags: </span>
                        {
                            Array.isArray(props.articleTags) === true ?
                                props.articleTags.map((tag, index) => (
                                    <span key={index}>{tag}, </span>
                                ))
                                : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleTags;