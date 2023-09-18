import React from "react";

const ArticleDate = (props) => {
    return (
        <div className="blog-meta news-meta">
            <span>{props.articleDate}</span>
        </div>
    );
}

export default ArticleDate;