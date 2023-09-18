import React, { Component } from 'react';
import ArticleImage from './ArticleDetails/ArticleImage';
import ArticleDate from './ArticleDetails/ArticleDate';
import ArticleTitle from './ArticleDetails/ArticleTitle';
import ArticleDecription from './ArticleDetails/ArticleDescription';
import ArticleTags from './ArticleDetails/ArticleTags';
import ArticleAuthor from './ArticleDetails/ArticleAuthor';
import ArticleComments from './ArticleDetails/ArticleComments';
import ArticleReplyForm from './ArticleDetails/ArticleReplyForm';
import Category from '../../ReusableComponents/Category';
import axios from 'axios';

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

class SingleArticleDetails extends Component {
    state = {
        ArticleDetails: [],
        category: [],
        AuthorImage: '',
        AuthorName: '',
        AuthorDescription: '',
    };

    componentDidMount() {
        window.scrollTo(0, 0);

        const windowsURL = window.location.search;
        const params = new URLSearchParams(windowsURL);
        const title = params.get('title');

        axios.post('http://127.0.0.1:8000/api/watchHistoryStore', {
            userID : userID,
            title : title
        });

        axios.get(`http://127.0.0.1:8000/api/getArticleDetails?title=${title}`)
            .then((res) => {
                const ArticleDetails = {
                    id: res.data.id,
                    imgSrc: res.data.picture,
                    tag: res.data.authorName,
                    authorID: res.data.author_id,
                    ArticleDate: res.data.created_at,
                    ArticleTitle: res.data.title,
                    ArticleDecription: res.data.html_tags,
                    Alltags: ['Business', 'Finance', 'Banking', 'SEO'],
                    Comments: res.data.comments
                }
                this.setState({ ArticleDetails: ArticleDetails });

                axios.get(`http://127.0.0.1:8000/api/getAuthorInformationArticle?authorID=${this.state.ArticleDetails.authorID}`).then((res) => {
                    this.setState({
                        ...this.state,
                        AuthorImage: res.data.picture,
                        AuthorName: res.data.username,
                        AuthorDescription: res.data.description,
                    });
                });

            });

        axios.get('http://127.0.0.1:8000/api/getFiveCategories')
            .then((res) => this.setState({ ...this.state, category: res.data }));


    }


    render() {
        return (
            <div className="course-details-area gray-bg pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="blog-wrapper blog-list blog-details blue-blog mb-50">
                                <ArticleImage ArticleImage={this.state.ArticleDetails.imgSrc} tag={this.state.ArticleDetails.tag} />
                                <div className="blog-content news-content">
                                    <ArticleDate articleDate={this.state.ArticleDetails.ArticleDate} />

                                    <ArticleTitle articleTitle={this.state.ArticleDetails.ArticleTitle} />

                                    <ArticleDecription articleDecription={this.state.ArticleDetails.ArticleDecription} />
                                    <div className="blog-wrapper-footer">
                                        {/* <ArticleTags articleTags={this.state.ArticleDetails.Alltags} /> */}
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <ArticleAuthor
                                                    authorImage={this.state.AuthorImage}
                                                    authorName={this.state.AuthorName}
                                                    authorDescription={this.state.AuthorDescription} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-comments post-comments-padding white-bg mt-70 mb-30">
                                <div className="section-title mb-20">
                                    <h2>Comments</h2>
                                </div>
                                <ArticleComments comments={this.state.ArticleDetails.Comments} />
                                <ArticleReplyForm ArticleID={this.state.ArticleDetails.id} />
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="courses-details-sidebar-area">
                                <Category category={this.state.category} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default SingleArticleDetails;
