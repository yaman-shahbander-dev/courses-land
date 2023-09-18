import React, { useState, useEffect } from "react";
import css from './CourseTitle.module.css';
import axios from "axios";
import swal from "sweetalert";



const CourseTitle = (props) => {
    const classeschecked = ['fa', 'fa-star', css.starSize, css.checkedStarFilled, css.cursorPointer];
    const classesUnchecked = ['fa', 'fa-star', css.starSize, css.cursorPointer];
    const [Favorite, setFavorite] = useState(0);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/checkCourseFavoriteExistence', {
            params: {
                courseID: props.courseID,
                userID: props.userID
            }
        }).then((res) => setFavorite(res.data));
    }, []);

    const addToFavorite = (courseID, userID) => {
        axios.post('http://127.0.0.1:8000/api/addToFavorite', {
            courseID: courseID,
            userID: userID
        }).then((res) => {
            swal(res.data.title, res.data.success, res.data.state)
            axios.get('http://127.0.0.1:8000/api/checkCourseFavoriteExistence', {
                params: {
                    courseID: courseID,
                    userID: userID
                }
            }).then((res) => setFavorite(res.data))
        });
    }

    const removeFromFavorite = (courseID, userID) => {
        axios.post('http://127.0.0.1:8000/api/removeFromFavorite', {
            courseID: courseID,
            userID: userID
        }).then((res) => {
            swal(res.data.title, res.data.success, res.data.state)
            axios.get('http://127.0.0.1:8000/api/checkCourseFavoriteExistence', {
                params: {
                    courseID: courseID,
                    userID: userID
                }
            }).then((res) => setFavorite(res.data))
        });
    }

    return (
        <div className="course-details-title mb-20">
            <h1 className={css.customizeCourseTitle}>{props.courseTitle}</h1>
            {Favorite === 1 ?
                <span className={classeschecked.join(' ')}
                onClick={() => removeFromFavorite(props.courseID, props.userID)}
                ></span>
                :
                <span className={classesUnchecked.join(' ')}
                    onClick={() => addToFavorite(props.courseID, props.userID)}
                ></span>
            }
        </div>
    );
}

export default CourseTitle;
