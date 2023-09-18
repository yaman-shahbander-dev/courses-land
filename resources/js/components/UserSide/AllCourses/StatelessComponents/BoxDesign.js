import React from "react";
import { Link } from 'react-router-dom';

const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null;

const BoxDesign = (props) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="courses-wrapper course-radius-none mb-30">
                <div className="courses-thumb">
                    {
                        user !== null ?
                        <Link to={`/courseDetails?secret=${props.secret_key}`}>
                            <img src={props.imgSrc} style={{height: '232px'}} alt="here" />
                        </Link>
                        :
                        <Link to={`/register`}>
                            <img src={props.imgSrc} style={{height: '232px'}} alt="here" />
                        </Link>
                    }

                </div>
                <div className="courses-author">
                    <img style={{ width: '100px' }}  src={props.authorImage} alt="here" />
                </div>
                <div className="course-main-content clearfix">
                    <div className="courses-content">
                        <div className="courses-category-name">
                            <span>
                                <a href="/">{props.category}</a>
                            </span>
                        </div>
                        <div className="courses-heading">
                            {
                                user !== null ?
                                <h1><Link to={`/courseDetails?secret=${props.secret_key}`}>
                                    {props.courseTitle.length > 20 ? props.courseTitle.substring(0, 20) + '...' : props.courseTitle}
                                </Link></h1>
                                :
                                <h1><Link to={`/register`}>
                                    {props.courseTitle.length > 20 ? props.courseTitle.substring(0, 20) + '...' : props.courseTitle}
                                </Link></h1>
                            }
                        </div>
                        <div className="courses-para">
                            <p>{props.courseDescription}...</p>
                        </div>
                    </div>
                </div>
                <div className="courses-wrapper-bottom clearfix">
                    <div className="courses-button f-right">
                        {
                            user !== null ?
                            <Link to={`/courseDetails?secret=${props.secret_key}`}>View Details</Link>
                            :
                            <Link to={`/register`}>View Details</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxDesign;
