import axios from 'axios';
import React, { Component } from 'react';
import ArticleDesign from '../../ReusableComponents/ArticleDesign';

class Articles extends Component {

    state = {
        articlesArray: [],
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/mainPageArticles')
        .then((res) => {
            let i;
            for (i = 0; i < res.data.length; i++) {
                res.data[i].category = res.data[i]['author_id'];
                res.data[i].uploadDate = res.data[i]['created_at'];
                res.data[i].articleTitle = res.data[i]['title'];
                res.data[i].articleDescription = res.data[i]['description'];
                res.data[i].imgSrc = res.data[i]['picture'];
                delete res.data[i].author_id;
                delete res.data[i].created_at;
                delete res.data[i].title;
                delete res.data[i].description;
                delete res.data[i].picture;
            }
            this.setState({ articlesArray: res.data });
        });
    }

    render() {
        return (
            <div>
                {/* Latest Articles start */}
                <div id="blog" className="latest_news-area gray-bg pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-md-8 offset-md-2">
                                <div className="section-title mb-50 text-center">
                                    <div className="section-title-heading mb-20">
                                        <h1 className="primary-color">Latest Articles</h1>
                                    </div>
                                    <div className="section-title-para">
                                        <p className="gray-color">Here are some recently added articles that you might want to read it and know new informations, we hope you will find it helpful to your learning journey and we hope you to enjoy reading it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.articlesArray.map(article => (
                                <ArticleDesign key={article.id} ArticleImage={article.imgSrc}
                                                category={article.category}
                                                ArticleDate={article.uploadDate}
                                                ArticleTitle={article.articleTitle}
                                                 />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Latest Articles end */}
            </div>
        );
    };
}

export default Articles;
