import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LatestCourses extends Component {
    state = {
        Courses: []
    };

    componentDidMount() {
        const FetchedCourses = [
            {
                id: 1,
                imgSrc: "Interface/img/courses/coursesthumb_home3_01.jpg",
                courseTitle: 'How To Improve Your Design (UX/UI, Mobile Apps, UI Design) With Bootstrap Grid System',
                courseDescription: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the grex plorer of the truth, the master-builder.',
                category: 'PHP',
            },
            {
                id: 2,
                imgSrc: "Interface/img/courses/coursesthumb_home3_01.jpg",
                courseTitle: 'How To Improve Your Design (UX/UI, Mobile Apps, UI Design) With Bootstrap Grid System',
                courseDescription: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the grex plorer of the truth, the master-builder.',
                category: 'PHP',
            },
            {
                id: 3,
                imgSrc: "Interface/img/courses/coursesthumb_home3_01.jpg",
                courseTitle: 'How To Improve Your Design (UX/UI, Mobile Apps, UI Design) With Bootstrap Grid System',
                courseDescription: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the grex plorer of the truth, the master-builder.',
                category: 'PHP',
            },
        ];

        this.setState({
            Courses: FetchedCourses
        });
    }

    render() {
        return (
            <div className="courses-area courses-bg-height gray-bg pt-60 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="section-title mb-50 text-center">
                                <div className="section-title-heading mb-20">
                                    <h1 className="primary-color">Our Latest Courses</h1>
                                </div>
                                <div className="section-title-para">
                                    <p>Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="courses-list">
                        <div className="row">
                            {this.state.Courses.map(course => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={course.id}>
                                    <div className="courses-wrapper courses-wrapper-3 mb-30" 
                                    style={{height: '700px'}}>
                                        <div className="courses-thumb">
                                            <Link to="/courseDetails"><img src={course.imgSrc} alt="here" /></Link>
                                        </div>
                                        <div className="courses-content courses-content-3 clearfix">
                                            <div className="courses-heading mt-25 d-flex">
                                                <div className="course-title-3">
                                                    <h1><Link to="/courseDetails">{course.courseTitle}</Link></h1>
                                                </div>
                                                <div className="courses-pricing-3">
                                                    <span>{course.category}</span>
                                                </div>
                                            </div>
                                            <div className="courses-para mt-15">
                                                <p>{course.courseDescription.substring(0, 241)}</p>
                                            </div>
                                            <div className="courses-wrapper-bottom clearfix mt-35">
                                                <div className="courses-button">
                                                    <Link to="/courseDetails">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}

export default LatestCourses;