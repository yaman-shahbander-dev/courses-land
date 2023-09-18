import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div>
                {/* slider-start */}
                <div className="slider-area pos-relative">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center justify-content-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-9 col-md-12">
                                        <div className="slider-content slider-content-2">
                                            <h1 className="white-color f-700" data-animation="fadeInUp" data-delay=".2s"><span>Enroll Yourself In</span><br />Courses Land</h1>

                                            <p data-animation="fadeInUp" data-delay=".4s">Enjoy easy and fast learning curve with the help of our authors who put a lot of effort to help<br /> you start your own career path.</p>

                                            {localStorage.getItem('user-info') ? '' :
                                                <button className="theme-btn" data-animation="fadeInUp" data-delay=".6s" style={{background:'blue'}}>
                                                    <span className="btn-text">
                                                        <Link to="/register" style={{ color: '#fff' }}>Sign Up</Link>
                                                    </span>
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* slider-end */}
            </div>
        );
    };
}

export default Landing;
