import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";


const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const ShowFavoriteData = () => {

    const [favoriteCourses, setFavoriteCourses] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getUserFavoriteCourses', {
            params: {
                userID: userID
            }
        }).then((res) => setFavoriteCourses(res.data));
    }, []);

    const DeleteFavorite = (courseId, userId) => {
        axios.post('http://127.0.0.1:8000/api/removeFromFavorite', {
            courseID: courseId,
            userID: userId,
        }).then((res) => {
            console.log(res.data.favorites)
            setFavoriteCourses(res.data.favorites)
            swal(res.data.title, res.data.success, res.data.state)
        });
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

                                <Link to={`searchFavoriteCourse?value=${searchValue}`} className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></Link>
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
                                                    <th>Course Description</th>
                                                    <th>Added</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    favoriteCourses.map((course) => (
                                                        <tr key={course.id}>
                                                            <td><Link to={`/courseDetails?secret=${course.secret_key}`}>
                                                                {course.course_description.substring(0, 200)}...
                                                            </Link></td>
                                                            <td>{course.created_at}</td>
                                                            <td>
                                                                <button onClick={() => DeleteFavorite(course.id, userID)} className="btn btn-success btn-sm"><i className="zmdi zmdi-delete"></i></button>
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

export default ShowFavoriteData;
