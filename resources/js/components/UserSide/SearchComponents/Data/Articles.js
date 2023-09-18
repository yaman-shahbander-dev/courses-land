import React, { useState, useEffect } from "react";
import axios from 'axios';
import ArticleDesign from "../../ReusableComponents/ArticleDesign";

const Articles = (props) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getSearchedArticlesData', {
            params : {
                value : props.value
            }
        }).then((res) => setArticles(res.data))
    }, [])

    return (
        <div className="blog-grid-area gray-bg pt-100 pb-70">
            <div className="container">
                <div className="blog-grid-list">
                    <h1>Articles</h1>
                    <div className="row">
                        {articles.map(article => (
                            <ArticleDesign key={article.id} ArticleImage={article.picture}
                                category={article.author_id}
                                ArticleDate={article.created_at}
                                ArticleTitle={article.title}
                                ArticleDesc={article.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles;
