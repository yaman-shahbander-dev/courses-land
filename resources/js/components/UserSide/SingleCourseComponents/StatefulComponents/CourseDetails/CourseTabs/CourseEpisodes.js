import React, { useState } from "react";
import { Link } from 'react-router-dom';

const CourseEpisodes = (props) => {
    return (
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <p>Course Videos</p>
            <div className="curiculum-lecture-details">
                <div className="single-curiculum-lecture table-responsive mt-10">
                    <table className="table">
                        <tbody>
                            {props.CourseEpisodes.map((Episode, index) => (
                                <tr key={index}>
                                    <td>
                                        <span className="ti-book"></span>
                                        <Link to={`playVideo?video=${Episode.secret_key}`}>{Episode.title}</Link>
                                    </td>
                                    <td>
                                        <span className="ti-timer"></span>
                                        <Link to={`playVideo?video=${Episode.secret_key}`}>{Episode.description.substring(0, 63)}...</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default CourseEpisodes;

