import React from "react";

const CourseAuthor = (props) => {
    return (
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div className="course-details-adivisor-info mt-30">
                <div className="course-details-adivisor-wrapper">
                    <div className="course-details-adivisor-inner d-flex">
                        <div className="adivisor-thumb">
                            <img src={props.authorImage} alt="Author" />
                        </div>
                        <div className="adivisor-text white-bg">
                            <div className="adivisor-text-heading d-flex mb-10">
                                <div className="adivisor-text-title">
                                    <h4>{props.author}</h4>
                                </div>
                            </div>
                            <div className="adivisor-para">
                                <p>{props.authorDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseAuthor;