import React from "react";

const CourseReviews = props => {
    return (
        <div className="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
            <div className="course-details-reviews mt-30">
                <div className="cours-reviews-list mb-30">
                    <div className="course-reviews-info d-flex justify-content-between align-items-center">
                        <div className="reviews-author-info d-flex">
                            <div className="reviews-author-thumb">
                                <img src="Interface/img/testimonials/testimonilas_author_thumb1.png" alt="here" />
                            </div>
                            <div className="reviews-author-title">
                                <h1>Nathaniel Bustos</h1>
                                <span>Manager</span>
                            </div>
                        </div>
                        <div className="courses-reviews-author-rating">
                            <ul>
                                <li><span className="ti-star"></span></li>
                                <li><span className="ti-star"></span></li>
                                <li><span className="ti-star"></span></li>
                                <li><span className="ti-star"></span></li>
                                <li><span className="ti-star"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="cours-reviews-list mb-10">
                    <div className="course-reviews-info d-flex justify-content-between align-items-center">
                        <div className="reviews-author-info d-flex">
                            <div className="reviews-author-thumb">
                                <img src="Interface/img/testimonials/testimonilas_author_thumb2.png" alt="here" />
                            </div>
                            <div className="reviews-author-title">
                                <h1>Latanya Kinard</h1>
                                <span>Web Designer</span>
                            </div>
                        </div>
                        <div className="courses-reviews-author-rating">
                            <ul>
                                <li><span className="ti-star"></span></li>
                                <li><span className="ti-star"></span></li>
                                <li><span className="ti-star"></span></li>
                                <li><span className="ti-star"></span></li>
                                <li><span className="ti-star"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseReviews;