import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;
const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const UpdateInfo = (title, description, image, author, category) => {
    const data = new FormData();

    if (usertypeID === 2)
        author = userID;

    if (title.length === 0) swal("Oh Sorry!", "Course title is required!", "error");
    else if (description.length === 0) swal("Oh Sorry!", "Course description is required!", "error");
    else if (image === "") swal("Oh Sorry!", "Course image is required!", "error")
    else if (author === "") swal("Oh Sorry!", "Course author is required!", "error")
    else if (category === "") swal("Oh Sorry!", "Course category is required!", "error")
    else {
        data.append('title', title);
        data.append('description', description);
        data.append('image', image);
        data.append('author', author);
        data.append('category', category);

        axios.post('http://127.0.0.1:8000/api/createCourse', data).then((res) => {
            if (res.data.success) swal("Well done!", res.data.success, "success")
        });
    }
}

const FieldsOfCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getAuthors').then((res) => setAuthors(res.data));
        axios.get('http://127.0.0.1:8000/api/getCategories').then((res) => setCategories(res.data));
    }, []);


    return (
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Create Course Page</li>
                            </ul>
                            <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                             <Link to="/courses"><button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button></Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    {/* <!-- CKEditor --> */}
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2> <strong>Create Course</strong></h2>
                                </div>
                                <div className="body">

                                    <label htmlFor="Title">Title</label>
                                    <div className="form-group">
                                        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder=" Type your Course title" style={{ color: 'Black' }} />
                                    </div>
                                    {/* End of field */}
                                    <div className="form-group">
                                        <label htmlFor="Description">Description</label>
                                        <textarea style={{ resize: 'none' }} id="description"
                                            placeholder=" Type your Course description" className="form-control" rows="5" onChange={(e) => setDescription(e.target.value)}></textarea>
                                    </div>
                                    {/* End of field */}

                                    <div className="card">
                                        <div className="header">
                                            <h2>Upload course image</h2>
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
                                                <input type="file" className="dropify" onChange={(e) => setImage(e.target.files[0])} />
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
                                    {/* End of field */}
                                    {usertypeID === 3 ?
                                        <div>
                                            <label htmlFor="email_address">Select Author</label>
                                            <select name="authors" id="authors" className="form-control" onChange={(e) => setAuthor(e.target.value)}>
                                                <option>Select</option>
                                                {
                                                    authors.map((author) => (
                                                        <option key={author.id} value={author.id}>{author.username}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    :null}
                                    {/* End of field */}

                                    <label htmlFor="email_address">Select Category</label>
                                    <select name="category" id="category" className="form-control" onChange={(e) => setCategory(e.target.value)}>
                                        <option>Select</option>
                                        {
                                            categories.map((category) => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))
                                        }
                                    </select>
                                    {/* End of field */}

                                </div>
                                <button onClick={() => UpdateInfo(title, description, image, author, category)} type="button" className="btn btn-raised btn-primary btn-round waves-effect" style={{ width: '100px', marginLeft: '20px', marginBottom: '20px' }}>Save</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- #END# CKEditor --> */}
                </div>
            </div>
        </section>
    )
}

export default FieldsOfCourse;
