import React from "react";
import CourseOverview from "./CourseOverview";
import CourseEpisodes from "./CourseEpisodes";
import CourseAuthor from "./CourseAuthor";
import CourseReviews from "./CourseReviews";

const CourseTabs = (props) => {
    return (
        <div>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Videos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Author</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" id="pills-reviews-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</a>
                </li> */}
            </ul>

            <div className="tab-content" id="pills-tabContent">
                <CourseOverview courseDescription={props.courseDetails.courseDescription}
                                author={props.courseDetails.author}
                                category={props.courseDetails.category} />

                <CourseEpisodes CourseEpisodes={props.courseDetails.CourseEpisodes} />

                <CourseAuthor author={props.courseDetails.author}
                              authorDescription={props.courseDetails.authorDescription}
                              authorImage={props.courseDetails.authorImage} />

                <CourseReviews />
            </div> {/* End of div tab-content */}
        </div>
    );
}

export default CourseTabs;
