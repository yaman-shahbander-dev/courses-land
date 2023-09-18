import React, { Component } from 'react';
import Navbar from '../ReusableComponents/Navbar';
import Landing from './StatelessComponents/Landing';
import CourseDetails from './StatefulComponents/CourseDetails/CourseDetails';
import LatestCourses from './StatefulComponents/LatestCourses';
import Footer from '../ReusableComponents/Footer';
import PreloadScreen from '../../PreloadScreen/PreloadScreen';

class SingleCourse extends Component {
    render() {
        return (
            <div>
                <PreloadScreen duration="300" />
                <Navbar />
                <Landing />
                <CourseDetails />
                {/* <LatestCourses /> */}
                <Footer />
            </div>
        );
    };
}

export default SingleCourse;
