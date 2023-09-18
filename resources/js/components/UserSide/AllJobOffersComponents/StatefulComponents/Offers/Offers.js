import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OfferImage from './OfferImage';
import OfferDate from './OfferDate';
import OfferTitle from './OfferTitle';
import OfferDescription from './OfferDescription';
import OfferPublisher from './OfferPublisher';

const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null;

class Offers extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="events-area gray-bg pt-100 pb-70">
                <div className="container">
                    <div className="events-list">
                        {this.props.title !== '' ?
                            <h1>{this.props.title}</h1>
                            : null}
                        <div className="row">
                            {this.props.offers !== 'empty' ?
                                this.props.offers.map(offer => (
                                    <div className="col-xl-6 offset-xl-0 col-lg-6 offset-lg-0 col-md-10 offset-md-1" key={offer.id}>
                                        <div className="single-events mb-30">
                                            <div className="events-wrapper events-wrapper-padding">
                                                <div className="events-inner d-flex">
                                                    <div className="events-thumb">
                                                        {
                                                            user !== null ?
                                                            <Link to={`/OfferDetails?secret=${offer.secret_key}`}>
                                                                <OfferImage offerImage={offer.picture} />
                                                            </Link>
                                                            :
                                                            <Link to={`/register`}>
                                                                <OfferImage offerImage={offer.picture} />
                                                            </Link>
                                                        }

                                                    </div>
                                                    <div className="events-text white-bg">
                                                        <div className="event-text-heading mb-20">
                                                            <div className="events-calendar text-center f-left">
                                                                <span className="date">25</span>
                                                                <OfferDate offerDate={offer.created_at.split(' ')[0]} />
                                                            </div>
                                                            <div className="events-text-title clearfix">
                                                                {
                                                                    user !== null ?
                                                                    <Link to={`/OfferDetails?secret=${offer.secret_key}`}>
                                                                        <OfferTitle offerTitle={offer.title} />
                                                                    </Link>
                                                                    :
                                                                    <Link to={`/register`}>
                                                                        <OfferTitle offerTitle={offer.title} />
                                                                    </Link>
                                                                }

                                                                <div className="time-area">
                                                                    <span className="ti-time"></span>
                                                                    <span className="published-time">
                                                                        <OfferDate offerDate={offer.created_at.split(' ')[0]} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="events-para">
                                                            <OfferDescription description={offer.description.substring(0, 159)} />
                                                        </div>
                                                        <div className="events-speaker">
                                                            <h2>Speaker : <OfferPublisher offerPublisher={offer.user_id} /></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : ''}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offers;
