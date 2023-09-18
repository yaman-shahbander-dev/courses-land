import React, { Component } from "react";
import Navbar from "../ReusableComponents/Navbar";
import Landing from "../ReusableComponents/Landing";
import BoxDesign from "./StatelessComponents/BoxDesign";
import Footer from '../ReusableComponents/Footer';
import PreloadScreen from "../../PreloadScreen/PreloadScreen";
import axios from 'axios';

class Courses extends Component {

    state = {
        courses: [],
        url: '/api/coursesPage',
    }

    fetchCourses = () => {
        axios.get('http://127.0.0.1:8000' + this.state.url)
            .then(res => {
                this.setState({
                    courses: res.data,
                });
            })
    }

    componentDidMount() {
        this.fetchCourses()
    }

    render() {
        return (
            <div>
                <PreloadScreen duration="700" />
                <Navbar />
                <Landing landingText="Our Courses" />
                <div className="courses-area courses-bg-height gray-bg pt-100 pb-70">
                    <div className="container">
                        <div className="courses-list">
                            <div className="row">
                                {this.state.courses.map(course => (
                                    <BoxDesign key={course.id} imgSrc={course.picture}
                                        authorImage={course.author_image}
                                        category={course.category}
                                        courseTitle={course.title}
                                        courseDescription={course.description.substring(0, 90)}
                                        secret_key={course.secret_key} />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Courses;
