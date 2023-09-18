import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null;

const Courses = (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getCourses')
             .then((response) => setCourses(response.data));
    }, []);

    const isUnder753px = useMediaQuery({ query: '(min-width: 753px)' });

    let NumberCoursesToShow = 2;

    isUnder753px !== true ? NumberCoursesToShow = 1 : NumberCoursesToShow = 2;

    return (
        <div>
            {/* courses start */}
            <div id="courses" className="courses-area courses-bg-height pt-100 pb-70" style={{ backgroundImage: 'url(Interface/img/courses/courses_bg.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="section-title mb-50 text-center">
                                <div className="section-title-heading mb-20">
                                    <h1 className="white-color">Our Latest Courses</h1>
                                </div>
                                <div className="section-title-para">
                                    <p className="white-color">Here are some recently added courses that you might want to watch it and learn it, we hope you will find it helpful to your learning journey and we hope you to enjoy the learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="courses-list">
                        <div className="row courses-active">
                            <Carousel itemsToShow={NumberCoursesToShow} pagination={true} itemsToScroll={1} enableAutoPlay={true} autoPlaySpeed={5000}>
                                {courses.map(course => (
                                    <div className="col-xl-12" key={course.id}>
                                        <div className="courses-wrapper course-radius-none mb-30">
                                            <div className="courses-thumb">
                                                {
                                                    user !== null ?
                                                    <Link  to={`/courseDetails?secret=${course.secret_key}`}>
                                                        <img src={course.picture} style={{height: '290px'}} alt="here" />
                                                    </Link>
                                                    :
                                                    <Link  to={`/register`}>
                                                        <img src={course.picture} style={{height: '290px'}} alt="here" />
                                                    </Link>
                                                }
                                            </div>
                                            <div className="courses-author">
                                                <img style={{ width: '150px' }} src={course.author_image} alt="here" />
                                            </div>
                                            <div className="course-main-content clearfix">
                                                <div className="courses-content">
                                                    <div className="courses-category-name">
                                                        <span>
                                                            <a href="/">{course.category}</a>
                                                        </span>

                                                    </div>
                                                    <div className="courses-heading">
                                                        {
                                                            user !== null ?
                                                            <h1><Link to={`/courseDetails?secret=${course.secret_key}`}>{course.title.length > 20 ? course.title.substring(0, 20) + '...' : course.title}</Link></h1>
                                                            :
                                                            <h1><Link to={`/register`}>{course.title.length > 20 ? course.title.substring(0, 20) + '...' : course.title}</Link></h1>
                                                        }
                                                    </div>
                                                    <div className="courses-para">
                                                        <p>{course.description.substring(0, 119)}...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            {/* courses end */}
        </div>
    )
}

export default Courses;
