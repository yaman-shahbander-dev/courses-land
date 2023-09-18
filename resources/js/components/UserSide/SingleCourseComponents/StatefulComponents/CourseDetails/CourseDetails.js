import React, { Component } from 'react';
import axios from 'axios';
import CourseImage from './CourseImage';
import CourseTitle from './CourseTitle';
import CourseTabs from './CourseTabs/CourseTabs';
import Search from '../../../ReusableComponents/Search';
import Category from '../../../ReusableComponents/Category';
import OtherCourses from '../OtherCourses';

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

class CourseDetails extends Component {

    state = {
        courseID: '',
        imgSrc: '',
        courseTitle: '',
        CourseDetails: {
            courseDescription: '',
            author: '',
            category: '',
            CourseEpisodes: [],
        },
        category: [],
        otherCourses: [],
    };

    componentDidMount() {

        window.scrollTo(0, 0);

        const windowUrl = window.location.search;
        const params = new URLSearchParams(windowUrl);
        const secret = params.get('secret');

        axios.post('http://127.0.0.1:8000/api/watchHistoryStore', {
            userID: userID,
            secret: secret
        });

        axios.get(`http://127.0.0.1:8000/api/getCourseDetails?secret=${secret}`)
            .then((response) => {
                this.setState({
                    courseID: response.data.id,
                    imgSrc: response.data.picture,
                    courseTitle: response.data.title,
                    CourseDetails: {
                        courseDescription: response.data.description,
                        author: response.data.authorName,
                        authorDescription: response.data.authorDescription,
                        authorImage: response.data.authorPicture,
                        CourseEpisodes: response.data.videos,
                        category: 'Design, UX/UI, Web, Print',
                    }
                });
            });

        axios.get('http://127.0.0.1:8000/api/getFiveCategories')
            .then((res) => this.setState({ ...this.state, category: res.data }))

        axios.get(`http://127.0.0.1:8000/api/getWidgetCourses`,
            { params: { secret: secret } }).then((res) =>
                this.setState({
                    otherCourses: res.data,
                }));
    };



    render() {
        return (
            <div className="course-details-area gray-bg pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="single-course-details-area mb-30">
                                <CourseImage imgSrc={this.state.imgSrc} />
                                <div className="single-course-details white-bg">
                                    {this.state.courseTitle && this.state.courseID && userID ?
                                        <CourseTitle
                                        courseTitle={this.state.courseTitle}
                                        courseID={this.state.courseID}
                                        userID={userID} />
                                        : null}
                                    <div className="course-details-tabs">
                                        <CourseTabs courseDetails={this.state.CourseDetails} />
                                    </div> {/* End of div course-details-tabs */}
                                </div> {/* End of div single-course-details white-bg */}
                            </div> {/* End of div single-course-details-area mb-30 */}
                        </div> {/* End of div col-xl-8 col-lg-8 */}

                        <div className="col-xl-4 col-lg-4">
                            <div className="courses-details-sidebar-area">
                                {/* <Search /> */}
                                <Category category={this.state.category} />
                                <OtherCourses otherCourses={this.state.otherCourses} />
                            </div> {/* End of div courses-details-sidebar-area */}
                        </div> {/* End of div col-xl-4 col-lg-4 */}
                    </div> {/* End of div row */}
                </div> {/* End of div container */}
            </div>
        );
    };
}

export default CourseDetails;
