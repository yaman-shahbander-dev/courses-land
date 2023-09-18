import React, { useState, useEffect } from 'react';
import BoxDesign from '../../AllCourses/StatelessComponents/BoxDesign';
import axios from 'axios';

const Courses = (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getSearchedCourseData', {
            params: {
                value: props.value
            }
        }).then(res => {
            setCourses(res.data)
        })
    }, []);

    return (
        <div className="courses-area courses-bg-height gray-bg pt-100 pb-70">
            <div className="container">
                <div className="courses-list">
                    <h1>Courses</h1>
                    <div className="row">
                        {courses.map(course => (
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
    )
}

export default Courses;
