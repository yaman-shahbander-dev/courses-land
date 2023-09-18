import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;
const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const SearchedTableCourse = (props) => {
    const [courses, setCourses] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/searchCourse?value=${value}`, {
            params: {
                usertypeID: usertypeID,
                userID: userID
            }
        }).then((res) => setCourses(res.data.success))
    }, []);

    const DeleteCourse = (CourseID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/CourseExists?courseID=${CourseID}&operation=${operation}&userID=${userID}&usertypeID=${usertypeID}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setCourses(res.data.courses);
                    swal("Well done!", "Course deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Course doesn\'t exist!", "error");
                }
            })
    }

    const Approve = (approveID, approveFor) => {
        axios.get(`http://127.0.0.1:8000/api/approveData?approveID=${approveID}&approveFor=${approveFor}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setCourses(res.data.courses);
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
                                                        <th>Category</th>
                                                        <th>Created</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        courses.map((course) => (
                                                            <tr key={course.id}>
                                                                <td>{course.id}</td>
                                                                <td>{course.title}</td>
                                                                <td>{course.description}</td>
                                                                <td>{course.user_id}</td>
                                                                <td>{course.category}</td>
                                                                <td>{course.created_at}</td>
                                                                <td>
                                                                    {
                                                                        usertypeID == 3 ? course.approved == 0 ? <button onClick={() => Approve(course.id, 'course')} className="btn btn-success btn-sm"><i className="">Approve</i></button>
                                                                        : null : null
                                                                    }

                                                                    <Link to={`/editCourse?CourseID=${course.id}`} className="btn btn-primary btn-sm" >
                                                                        <i className="zmdi zmdi-edit"></i>
                                                                    </Link>

                                                                    <button onClick={() => DeleteCourse(course.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
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

export default withRouter(SearchedTableCourse);
