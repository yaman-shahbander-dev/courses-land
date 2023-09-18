import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null;

class Footer extends Component {
    render() {
        return (
            <div>
                {/* footer start */}
                <footer id="Contact">
                    <div className="footer-area primary-bg pt-150">
                        <div className="container">
                            <div className="footer-top pb-35">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="footer-widget mb-30">
                                            <div className="footer-heading">
                                                <h1>Quick Links</h1>
                                            </div>
                                            <div className="footer-menu clearfix">
                                                <ul>
                                                    <li><Link to="/allCourses">Courses</Link></li>
                                                    <li><Link to="/allArticles">Articles</Link></li>
                                                    <li><Link to="/AllOffers">Job Offers</Link></li>
                                                    {
                                                        user !== null ?
                                                        <li><Link to="/contactUs">Contact Us</Link></li>
                                                        : null
                                                    }
                                                    {
                                                        user !== null ?
                                                        <li><Link to="/aiChat">AI Assistant</Link></li>
                                                        : null
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="footer-widget mb-30">
                                            <div className="footer-heading">
                                                <h1>Contact Us</h1>
                                            </div>
                                            <div className="footer-contact-list">
                                                <div className="single-footer-contact-info">
                                                    <span className="ti-headphone "></span>
                                                    <span className="footer-contact-list-text">+963 996 222 469</span>
                                                </div>
                                                <div className="single-footer-contact-info">
                                                    <span className="ti-email "></span>
                                                    <span className="footer-contact-list-text">yaman.job.work@gmail.com</span>
                                                </div>
                                                <div className="single-footer-contact-info">
                                                    <span className="ti-location-pin"></span>
                                                    <span className="footer-contact-list-text">The main street, 1th Floor, Aleppo</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom pt-25 pb-25"></div>
                        </div>
                    </div>
                </footer>
                {/* footer end */}
            </div>
        );
    };
}

export default Footer;
