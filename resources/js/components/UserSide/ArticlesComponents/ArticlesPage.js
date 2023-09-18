import React, { Component } from 'react';
import Navbar from '../ReusableComponents/Navbar';
import Landing from '../ReusableComponents/Landing';
import ArticleDesign from '../ReusableComponents/ArticleDesign';
import Footer from '../ReusableComponents/Footer';
import PreloadScreen from '../../PreloadScreen/PreloadScreen';
import axios from 'axios';

class ArticlesPage extends Component {

    state = {
        Articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/getAllArticles')
            .then((res) => this.setState({ Articles: res.data }))
    }

    render() {
        return (
            <div>
                <PreloadScreen duration="700" />
                <Navbar />
                <Landing landingText="Articles" />
                <div className="blog-grid-area gray-bg pt-100 pb-70">
                    <div className="container">
                        <div className="blog-grid-list">
                            <div className="row">
                                {this.state.Articles.map(article => (
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
                <Footer />
            </div>
        );
    };
}

export default ArticlesPage;
