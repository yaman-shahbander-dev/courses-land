import React from "react";

const CourseOverview = (props) => {
    return (

        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="course-details-overview-top">
                <p className="course-details-overview-para">{props.courseDescription}</p>
            </div>
            <div className="course-details-overview-bottom d-flex justify-content-between mt-25">
                <div className="course-overview-info-left">
                    <div className="course-overview-info-advisor mt-10">
                        <span className="gray-color">Author : <span className="primary-color">{props.author}</span></span>
                    </div>
                </div>
                <div className="course-overview-info-right">
                    <div className="course-overview-info-category mt-10">
                        {/* <span className="gray-color">Category : {props.category}</span> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CourseOverview;
