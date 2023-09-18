import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import cssClasses from './JobOffers.module.css';

const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null;

class JobOffer extends Component {

    render() {
        return (
            <div>
                {/* events start */}
                <div id="events" className="events-area events-bg-height pt-100 pb-95" style={{ backgroundImage: 'url(Interface/img/courses/courses_bg.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                                <div className="section-title mb-50 text-center">
                                    <div className="section-title-heading mb-20">
                                        <h1 className="white-color">Jobs' Offers</h1>
                                    </div>
                                    <div className="section-title-para">
                                        <p className="white-color">Here are some job offers that you might want to apply to it, we hope you to find the best career that you seek and the best company that suit you the most.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="events-list mb-30">
                            <div className="row">
                                {this.props.JobOffers !== 'empty' ?
                                    <div className="col-xl-6 col-lg-6">

                                        <div className="single-events mb-30" style={{ width: '575px' }}>
                                            <div className="events-wrapper">
                                                <div className="events-inner d-flex">
                                                    <div className="events-thumb">
                                                        {
                                                            user !== null ?
                                                            <Link to={`/OfferDetails?secret=${this.props.JobOffers[0].secret_key}`}><img style={{ height: '276px', width: '200px' }} className={cssClasses.imgSize} src={this.props.JobOffers[0].picture} alt="here" /></Link>
                                                            :
                                                            <Link to={`/register`}><img style={{ height: '276px', width: '200px' }} className={cssClasses.imgSize} src={this.props.JobOffers[0].picture} alt="here" /></Link>
                                                        }
                                                    </div>
                                                    <div className="events-text white-bg">
                                                        <div className="event-text-heading mb-20">
                                                            <div className="events-calendar text-center f-left">
                                                                <span className="date">Date</span>
                                                                <span className="month">{this.props.JobOffers[0].created_at.split(' ')[0]}</span>
                                                            </div>
                                                            <div className="events-text-title clearfix">
                                                                {
                                                                    user !== null ?
                                                                    <Link to={`/OfferDetails?secret=${this.props.JobOffers[0].secret_key}`}>
                                                                        <h4>{this.props.JobOffers[0].title}</h4>
                                                                    </Link>
                                                                    :
                                                                    <Link to={`/register`}>
                                                                        <h4>{this.props.JobOffers[0].title}</h4>
                                                                    </Link>
                                                                }

                                                                <div className="time-area">
                                                                    <span className="ti-time"></span>
                                                                    <span className="published-time">{this.props.JobOffers[0].created_at.split(' ')[0]}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="events-para">
                                                            <p>{this.props.JobOffers[0].description.substring(0, 140)}...</p>
                                                        </div>
                                                        <div className="events-speaker">
                                                            <h2>Agent : <span>{this.props.JobOffers[0].user_id}</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-events mb-30" style={{ width: '575px' }}>
                                            <div className="events-wrapper">
                                                <div className="events-inner d-flex">
                                                    <div className="events-thumb">
                                                        {
                                                            user !== null ?
                                                            <Link to={`/OfferDetails?secret=${this.props.JobOffers[1].secret_key}`}><img style={{ height: '276px', width: '200px' }} className={cssClasses.imgSize} src={this.props.JobOffers[1].picture} alt="here" /></Link>
                                                            :
                                                            <Link to={`/register`}><img style={{ height: '276px', width: '200px' }} className={cssClasses.imgSize} src={this.props.JobOffers[1].picture} alt="here" /></Link>
                                                        }
                                                    </div>
                                                    <div className="events-text white-bg">
                                                        <div className="event-text-heading mb-20">
                                                            <div className="events-calendar text-center f-left">
                                                                <span className="date">Date</span>
                                                                <span className="month">{this.props.JobOffers[1].created_at.split(' ')[0]}</span>
                                                            </div>
                                                            <div className="events-text-title clearfix">
                                                                {
                                                                    user !== null ?
                                                                    <Link to={`/OfferDetails?secret=${this.props.JobOffers[1].secret_key}`}>
                                                                        <h4>{this.props.JobOffers[1].title}</h4>
                                                                    </Link>
                                                                    :
                                                                    <Link to={`/register`}>
                                                                        <h4>{this.props.JobOffers[1].title}</h4>
                                                                    </Link>
                                                                }

                                                                <div className="time-area">
                                                                    <span className="ti-time"></span>
                                                                    <span className="published-time">{this.props.JobOffers[1].created_at.split(' ')[0]}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="events-para">
                                                            <p>{this.props.JobOffers[1].description.substring(0, 140)}...</p>
                                                        </div>
                                                        <div className="events-speaker">
                                                            <h2>Agent : <span>{this.props.JobOffers[1].user_id}</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : ''}

                                {this.props.JobOffers !== 'empty' ?
                                    <div className="col-xl-6 col-lg-6">

                                        <div className="single-events mb-30" style={{ width: '575px' }}>
                                            <div className="events-wrapper">
                                                <div className="events-inner d-flex">
                                                    <div className="events-thumb">
                                                        {
                                                            user !== null ?
                                                            <Link to={`/OfferDetails?secret=${this.props.JobOffers[2].secret_key}`}><img style={{ height: '276px', width: '200px' }} className={cssClasses.imgSize} src={this.props.JobOffers[2].picture} alt="here" /></Link>
                                                            :
                                                            <Link to={`/register`}><img style={{ height: '276px', width: '200px' }} className={cssClasses.imgSize} src={this.props.JobOffers[2].picture} alt="here" /></Link>
                                                        }
                                                    </div>
                                                    <div className="events-text white-bg">
                                                        <div className="event-text-heading mb-20">
                                                            <div className="events-calendar text-center f-left">
                                                                <span className="date">Date</span>
                                                                <span className="month">{this.props.JobOffers[2].created_at.split(' ')[0]}</span>
                                                            </div>
                                                            <div className="events-text-title clearfix">
                                                                {
                                                                    user !== null ?
                                                                    <Link to={`/OfferDetails?secret=${this.props.JobOffers[2].secret_key}`}>
                                                                        <h4>{this.props.JobOffers[2].title}</h4>
                                                                    </Link>
                                                                    :
                                                                    <Link to={`/register`}>
                                                                        <h4>{this.props.JobOffers[2].title}</h4>
                                                                    </Link>
                                                                }
                                                                <div className="time-area">
                                                                    <span className="ti-time"></span>
                                                                    <span className="published-time">{this.props.JobOffers[2].created_at.split(' ')[0]}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="events-para">
                                                            <p>{this.props.JobOffers[2].description.substring(0, 140)}...</p>
                                                        </div>
                                                        <div className="events-speaker">
                                                            <h2>Agent : <span>{this.props.JobOffers[2].user_id}</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="single-events mb-30" style={{ width: '575px' }}>
                                            <div className="events-wrapper">
                                                <div className="events-inner d-flex">
                                                    <div className="events-thumb">
                                                        {
                                                            user !== null ?
                                                            <Link to={`/OfferDetails?secret=${this.props.JobOffers[3].secret_key}`}><img style={{ height: '276px', width: '200px' }} className={cssClasses.imgSize} src={this.props.JobOffers[3].picture} alt="here" /></Link>
                                                            :
                                                            <Link to={`/register`}><img style={{ height: '276px', width: '200px' }} className={cssClasses.imgSize} src={this.props.JobOffers[3].picture} alt="here" /></Link>
                                                        }
                                                    </div>
                                                    <div className="events-text white-bg">
                                                        <div className="event-text-heading mb-20">
                                                            <div className="events-calendar text-center f-left">
                                                                <span className="date">Date</span>
                                                                <span className="month">{this.props.JobOffers[3].created_at.split(' ')[0]}</span>
                                                            </div>
                                                            <div className="events-text-title clearfix">
                                                                {
                                                                    user !== null ?
                                                                    <Link to={`/OfferDetails?secret=${this.props.JobOffers[3].secret_key}`}>
                                                                        <h4>{this.props.JobOffers[3].title}</h4>
                                                                    </Link>
                                                                    :
                                                                    <Link to={`/register`}>
                                                                        <h4>{this.props.JobOffers[3].title}</h4>
                                                                    </Link>
                                                                }
                                                                <div className="time-area">
                                                                    <span className="ti-time"></span>
                                                                    <span className="published-time">{this.props.JobOffers[3].created_at.split(' ')[0]}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="events-para">
                                                            <p>{this.props.JobOffers[3].description.substring(0, 140)}...</p>
                                                        </div>
                                                        <div className="events-speaker">
                                                            <h2>Agent : <span>{this.props.JobOffers[3].user_id}</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : ''}
                            </div>
                        </div>

                        <div className="events-view-btn">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="view-all-events text-center">
                                        <button className="yewello-btn">
                                            <Link to="/AllOffers" className={cssClasses.anchorColor}>view all offers<span>&rarr;</span></Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* events end */}
            </div>
        );
    };
}

export default JobOffer;
