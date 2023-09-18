import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const ShowCommentData = () => {

    const [commentArticles, setCommentArticles] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getUserCommentArticle', {
            params: {
                userId: userID,
                userType: usertypeID,
            }
        }).then((res) => setCommentArticles(res.data));
    }, []);

    const DeleteComment = (commentId) => {
        axios.get('http://127.0.0.1:8000/api/removeCommentArticle', {
            params: {
                commentID: commentId
            },
        }).then((res) => {
            setCommentArticles(res.data.comments)
            swal(res.data.title, res.data.success, res.data.state)
        });
    }

    const Approve = (approveID, approveFor) => {
        axios.get(`http://127.0.0.1:8000/api/approveData?approveID=${approveID}&approveFor=${approveFor}`)
            .then((res) => {
                if (res.data.success) {
                    setCommentArticles(res.data.comments)
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

                                <Link to={`searchCommentArticle?value=${searchValue}`} className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></Link>
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

    )
}

export default ShowCommentData;
