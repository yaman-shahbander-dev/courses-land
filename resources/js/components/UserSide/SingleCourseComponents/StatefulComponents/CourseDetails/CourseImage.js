import React from "react";

const CourseImage = (props) => {
    return (
        <div className="course-details-thumb">
            <img src={props.imgSrc} alt="Course here" />
        </div>
    );
}

export default CourseImage;