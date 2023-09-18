import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
    render() {
        return (
            <div>
                {/* about start */}
                <div id="about" className="about-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7">
                                <div className="about-title-section mb-30">
                                    <h1>Welcome To Our Courses Land</h1>
                                    <p>courses land is a website where you find professional courses in all programming languages, you can discover and write your opinion in the comments section bellow each video, with advanced search engine it will be easy to find what you seek, it is also provides vary services as allowing employers who use the site to post job offers, we provide a realtime chat, and you can also use an assistant bot to help you determine the learning map.</p>

                                    {localStorage.getItem('user-info') ? '' :
                                        <button className="theme-btn blue-bg-border mt-20">
                                            <span className="btn-text">
                                                <Link to="/register" style={{ color: '#fff' }}>Sign Up</Link>
                                            </span>
                                        </button>
                                    }
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="about-right-img mb-30">
                                    <img src="Interface/img/about/about-right.png" alt="here" />
                                </div>
                            </div>
                        </div>
                        <div className="row pt-65">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="feature-wrapper mb-30">
                                    <div className="feature-title-heading">
                                        <h3>Courses</h3>
                                        <span>01</span>
                                    </div>
                                    <div className="feature-text">
                                        <p>You will be able to watch and learn all the courses for any programming languages, we have a large set of courses, also you can use the advanced settings on the search field to filter the results so you can find what you want.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="feature-wrapper mb-30">
                                    <div className="feature-title-heading">
                                        <h3>Jobs</h3>
                                        <span>02</span>
                                    </div>
                                    <div className="feature-text">
                                        <p>Welcome to the place where you will start your career you can discover a lot of chances and jobs that suit you and suit your experience, and you can search among a lot of available jobs offers that was made by many companies employers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="feature-wrapper mb-30">
                                    <div className="feature-title-heading">
                                        <h3>Education & Fun</h3>
                                        <span>03</span>
                                    </div>
                                    <div className="feature-text">
                                        <p>If you are looking for ways to increase your experience and learn new things and discover and test yourself, here is the right place for you to do that, we provide thoughtful questions to determine you abilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about end */}
            </div>
        );
    };
}

export default Intro;
