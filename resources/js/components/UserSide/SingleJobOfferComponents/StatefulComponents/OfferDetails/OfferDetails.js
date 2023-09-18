import { Component } from 'react';
import React from 'react-router-dom';
import OfferImage from './OfferImage';
import OfferTitle from './OfferTitle';
import OfferDate from './OfferDate';
import OfferDescription from './OfferDescription';
import ApplyForm from './ApplyForm';
import Category from '../../../ReusableComponents/Category';
import Footer from '../../../ReusableComponents/Footer';
import axios from 'axios';

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

class OfferDetails extends Component {

    state = {
        OfferDetails: [],
        category: [],
    }

    componentDidMount() {

        window.scrollTo(0, 0);

        const windowsURL = window.location.search;
        const params = new URLSearchParams(windowsURL);
        const secret = params.get('secret');

        axios.post('http://127.0.0.1:8000/api/watchHistoryStore', {
            userID : userID,
            secretJob : secret
        });

        axios.get(`http://127.0.0.1:8000/api/getJobOfferDetails?secret=${secret}`)
        .then((response) => this.setState({
            OfferDetails: {
                id: response.data.id,
                imgSrc: response.data.picture,
                offerTitle: response.data.title,
                offerDescription: response.data.description,
                offerDate: response.data.created_at,
                Agent: response.data.username, // name of the agent
                AgentID: response.data.user_id, // name of the agent
            }
        }));

        axios.get('http://127.0.0.1:8000/api/getFiveCategories')
            .then((res) => this.setState({ ...this.state, category: res.data }))

    }

    render() {
        return (
            <div>
                <div className="event-details-area gray-bg pt-100 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="single-event-details-area white-bg mb-40">
                                    <OfferImage imgSrc={this.state.OfferDetails.imgSrc} />
                                    <div className="single-event-details event-details-padding white-bg">
                                        <div className="events-text-title clearfix mb-20">
                                            <OfferTitle offerTitle={this.state.OfferDetails.offerTitle} />

                                            <div className="time-area">
                                                <span className="ti-time"></span>
                                                <OfferDate offerDate={this.state.OfferDetails.offerDate} />
                                            </div>

                                        </div>
                                        <OfferDescription offerDescription={this.state.OfferDetails.offerDescription} />
                                    </div>
                                </div>
                                <ApplyForm agentID={this.state.OfferDetails.AgentID} secret={new URLSearchParams(window.location.search).get('secret')} />
                            </div>

                            <div className="col-xl-4 col-lg-4">
                                <div className="courses-details-sidebar-area">
                                    <Category category={this.state.category} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default OfferDetails;
