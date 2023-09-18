import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const Table = () => {

    const [articles, setArticles] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getArticlesDashboard', {
            params: {
                UserTypeID: usertypeID,
                UserID: userID
            }
        }).then((res) => setArticles(res.data));
    }, []);

    const DeleteArticle = (ArticleID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/ArticleExists?ArticleID=${ArticleID}&operation=${operation}&usertypeID=${usertypeID}&userID=${userID}`)
            .then((res) => {
                if (res.data.success) {
                    setArticles(res.data.articles)
                    swal("Well done!", "Article deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Article doesn\'t exist!", "error");
                }
            })
    }

    const Approve = (approveID, approveFor) => {
        axios.get(`http://127.0.0.1:8000/api/approveData?approveID=${approveID}&approveFor=${approveFor}`)
            .then((res) => {
                if (res.data.success) {
                    setArticles(res.data.articles)
                    swal("Well done!", "approved successfully!", "success");
                }
            })
    }

    return (
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                            <label htmlFor="email_address">Search</label>
                            <div className="form-group">

                                <input type="text" id="email_address1search" className="form-control" placeholder="Type here to search" style={{ backgroundColor: 'white', padding: '10px', color: 'black' }}
                                    onChange={(e) => setSearchValue(e.target.value)} />

                                <Link to={`searchArticle?value=${searchValue}`} className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    {/* Basic Table */}
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="body">
                                    <div className="table-responsive">
                                        <table className="table table-striped m-b-0">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Author</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    articles.map((article) => (
                                                        <tr key={article.id}>
                                                            <td>{article.id}</td>
                                                            <td>{article.title}</td>
                                                            <td>{article.description}</td>
                                                            <td>{article.user_id}</td>
                                                            <td>

                                                                {
                                                                    usertypeID == 3 ? article.approved == 0 ? <button onClick={() => Approve(article.id, 'article')} className="btn btn-success btn-sm"><i className="">Approve</i></button>
                                                                    : null : null
                                                                }

                                                                {usertypeID === 2 ?
                                                                    <Link to={`/editArticle?articleID=${article.id}`} className="btn btn-primary btn-sm" >
                                                                        <i className="zmdi zmdi-edit"></i>
                                                                    </Link>
                                                                    : null}

                                                                    <Link to={`/buildArticle?id=${article.id}&state=${article.builder_state}`} className="btn btn-success btn-sm">
                                                                        <i className="zmdi zmdi-view-subtitles"></i>
                                                                    </Link>

                                                                <button onClick={() => DeleteArticle(article.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default withRouter(Table);
