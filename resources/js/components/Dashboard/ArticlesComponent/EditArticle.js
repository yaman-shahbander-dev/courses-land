import axios from "axios";
import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";
import { Link } from "react-router-dom";


const UpdateInfo = (articleID, title, description, picture) => {
    const data = new FormData();

    data.append('articleID', articleID);
    data.append('title', title);
    data.append('description', description);
    data.append('picture', picture);

    axios.post('http://127.0.0.1:8000/api/UpdateArticleInforamtion', data).then((res) => {
        if (res.data.error) {
            swal("Oh Sorry!", "Article doesn\'t exist!", "error");
        } else {
            swal("Well done!", "Article updated successfully!", "success");
        }
    });
}

const EditArticle = () => {

    const [articleID, setArticleID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const ArticleID = params.get('articleID');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/ArticleExists?ArticleID=${ArticleID}&operation=${'edit'}`).then((res) => {
            setArticleID(res.data.success.id)
            setTitle(res.data.success.title)
            setDescription(res.data.success.description)
            setPicture(res.data.success.picture)
        });
    }, []);


    return (
        <div>
            <LeftSidebar />
            <RightSidebar />

            {/* edit User form start */}
            <section className="content">
                <div className="body_scroll">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <Link to="/articles"><button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        {/* <!-- Vertical Layout --> */}
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Edit Article</strong> {title}</h2>
                                    </div>
                                    <div className="body">
                                        <form>
                                            <label htmlFor="Title">Title</label>
                                            <div className="form-group">
                                                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Enter your Tag name" style={{ color: 'Black' }} />
                                            </div>

                                            <label htmlFor="Description">Description</label>
                                            <div className="form-group">
                                                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Enter your Tag name" style={{ color: 'Black' }} />
                                            </div>

                                            <div className="card">
                                                <div className="header">
                                                    <h2>Upload image</h2>
                                                </div>
                                                <div className="body">
                                                    <div className="dropify-wrapper">
                                                        <div className="dropify-message">
                                                            <span className="file-icon"></span>
                                                            <p>Drag and drop a file here or click</p>
                                                            <p className="dropify-error">Ooops, something wrong appended.</p>
                                                        </div>
                                                        <div className="dropify-loader" style={{ display: 'none' }}></div>
                                                        <div className="dropify-errors-container">
                                                            <ul></ul></div>
                                                        <input type="file" className="dropify" onChange={(e) => setPicture(e.target.files[0])} />
                                                        <button type="button" className="dropify-clear">Remove</button>
                                                        <div className="dropify-preview" style={{ display: 'none' }}>
                                                            <span className="dropify-render"></span>
                                                            <div className="dropify-infos">
                                                                <div className="dropify-infos-inner">
                                                                    <p className="dropify-filename">
                                                                        <span className="file-icon"></span>
                                                                        <span className="dropify-filename-inner">4a94268541d7a0ed95a8be5138e8a288.jpg</span></p>
                                                                    <p className="dropify-infos-message">Drag and drop or click to replace</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button onClick={() => UpdateInfo(articleID, title, description, picture)} type="button" className="btn btn-raised btn-primary btn-round waves-effect">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* edit offer form end */}
        </div>
    );
}


export default EditArticle;
