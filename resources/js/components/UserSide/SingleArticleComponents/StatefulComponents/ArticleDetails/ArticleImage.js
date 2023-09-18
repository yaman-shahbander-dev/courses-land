import React from "react";

const ArticleImage = (props) => {
    return (
        <div className="blog-thumb mb-35">
            <img src={props.ArticleImage} alt="here" />
            <span className ="blog-text-offer">{props.tag}</span>
        </div>
    );
}

export default ArticleImage;
