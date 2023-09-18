import React from "react";

const ArticleDecription = props => {
    return (
        <p style={{ padding: 0, margin: 0 }} dangerouslySetInnerHTML={{ __html: props.articleDecription }}></p>
    );
}

export default ArticleDecription;
