import React from "react";
import { Link } from 'react-router-dom';

const OtherCourses = props => {
    return (
        <div className="widget mb-40 widget-padding white-bg">
            <h4 className="widget-title">Recent Course</h4>
            <div className="sidebar-rc-post">
                <ul>
                    {props.otherCourses.map(course => (
                        <li key={course.id}>
                            <div className="sidebar-rc-post-main-area d-flex mb-20">
                                <div className="rc-post-thumb" style={{ width: '120px' }}>
                                    <a href={`/courseDetails?secret=${course.secret_key}`}>
                                        <img src={course.picture} alt="here" style={{ width: '100px' }} />
                                    </a>
                                </div>
                                <div className="rc-post-content">
                                    <h4>
                                        <a href={`/courseDetails?secret=${course.secret_key}`}>
                                            {course.description.substring(0, 100)}
                                        </a>
                                    </h4>
                                    <div className="widget-advisors-name">
                                        <span>Author : <span className="f-500">{course.user_id}</span></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OtherCourses;
