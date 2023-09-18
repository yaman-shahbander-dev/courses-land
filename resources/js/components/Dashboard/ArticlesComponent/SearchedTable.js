import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const SearchedTableArticle = (props) => {
    const [articles, setArticles] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // searchArticle
        axios.get(`http://127.0.0.1:8000/api/searchArticle?value=${value}`, {
            params: {
                UserTypeID: usertypeID,
                UserID: userID
            }
        }).then((res) => setArticles(res.data.success))
    }, []);

    const DeleteArticle = (ArticleID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/ArticleExists?ArticleID=${ArticleID}&operation=${operation}&usertypeID=${usertypeID}&userID=${userID}&value=${value}`)
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
        axios.get(`http://127.0.0.1:8000/api/approveData?approveID=${approveID}&approveFor=${approveFor}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setArticles(res.data.articles)
                    swal("Well done!", "approved successfully!", "success");
                }
            })
    }

    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <section className="content">
                <div className="body_scroll">
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
        </div>
    )
}

export default withRouter(SearchedTableArticle);
