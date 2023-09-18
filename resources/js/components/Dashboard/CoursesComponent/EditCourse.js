import axios from "axios";
import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";
import { Link } from "react-router-dom";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const UpdateInfo = (courseID, title, description, author, category) => {
    axios.put('http://127.0.0.1:8000/api/UpdateCourseInforamtion', {
        courseID: courseID,
        title: title,
        description: description,
        author: author,
        category: category,
    }).then((res) => {
        if (res.data.error) {
            swal("Oh Sorry!", "Course doesn\'t exist!", "error");
        } else {
            swal("Well done!", "Course updated successfully!", "success");
        }
    });
}

const EditCourse = () => {

    const [courseID, setCourseID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const CourseID = params.get('CourseID');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/CourseExists?courseID=${CourseID}&operation=${'edit'}`).then((res) => {
            setCourseID(res.data.success.id)
            setTitle(res.data.success.title)
            setDescription(res.data.success.description)
            setAuthor(res.data.success.user_id.id)
            setCategory(res.data.success.category.id)
            setAuthors(res.data.success.authors)
            setCategories(res.data.success.list_categories)
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
                                <Link to="/courses"><button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        {/* <!-- Vertical Layout --> */}
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Edit Course</strong> {title}</h2>
                                    </div>
                                    <div className="body">
                                        <form>
                                            <label htmlFor="Title">Title</label>
                                            <div className="form-group">
                                                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Enter your Course title" style={{ color: 'Black' }} />
                                            </div>

                                            <label htmlFor="email_address">Description</label>
                                            <div className="form-group">
                                                <input type="email" id="email_address" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Enter your description" style={{ color: 'Black' }} />
                                            </div>

                                            { usertypeID === 3 ?
                                                <div>
                                                    <label htmlFor="email_address">Change Author</label>
                                                    <select name="authors" id="authors" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)}>
                                                        {
                                                            authors.map((author)=> (
                                                                <option key={author.id} value={author.id}>{author.username}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            :null }

                                            <label htmlFor="email_address">Change Category</label>
                                            <select name="category" id="category" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                                                {
                                                    categories.map((category)=> (
                                                        <option key={category.id} value={category.id}>{category.name}</option>
                                                    ))
                                                }
                                            </select>

                                            <button onClick={() => UpdateInfo(courseID, title, description, author, category)} type="button" className="btn btn-raised btn-primary btn-round waves-effect">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* edit Course form end */}
        </div>
    );
}


export default EditCourse;
