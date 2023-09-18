import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import LeftSidebar from "../../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../../FirstPageComponent/StatelessComponents/RightSidebar";

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const SearchedTableCommentArticles = () => {
    const [commentArticles, setCommentArticles] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // search favorite
        axios.get('http://127.0.0.1:8000/api/searchCommentArticles', {
            params : {
                usertypeID: usertypeID,
                userID : userID,
                value : value,
            }
        }).then((res) => setCommentArticles(res.data));
    }, []);

    const DeleteComment = (commentId) => {
        axios.get('http://127.0.0.1:8000/api/removeCommentArticle', {
            params: {
                commentID: commentId,
                value: value
            },
        }).then((res) => {
            setCommentArticles(res.data.comments)
            swal(res.data.title, res.data.success, res.data.state)
        });
    }

    const Approve = (approveID, approveFor) => {
        axios.get(`http://127.0.0.1:8000/api/approveData?approveID=${approveID}&approveFor=${approveFor}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setCommentArticles(res.data.comments)
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
                                                    <th>Comment</th>
                                                    <th>Article</th>
                                                    <th>user</th>
                                                    {
                                                        usertypeID === 3 ? <th>Actions</th>
                                                        : null
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    commentArticles.map((comment) => (
                                                        <tr key={comment.id}>
                                                            <td>{comment.comment}</td>
                                                            <td>{comment.article_id}</td>
                                                            <td>{comment.user_id}</td>
                                                            <td>
                                                            {
                                                                usertypeID == 3 ? comment.approved == 0 ? <button onClick={() => Approve(comment.id, 'articleComment')} className="btn btn-success btn-sm"><i className="">Approve</i></button>
                                                                : null : null
                                                            }

                                                            {
                                                                usertypeID === 3 ?
                                                                    <button onClick={() => DeleteComment(comment.id)} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
                                                                : null
                                                            }
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

export default SearchedTableCommentArticles;
