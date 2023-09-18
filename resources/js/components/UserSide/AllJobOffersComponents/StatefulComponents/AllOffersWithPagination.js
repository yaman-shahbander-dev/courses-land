import React, { Component } from 'react';
import Offers from './Offers/Offers';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllOffers extends Component {

    state = {
        Offers: [],
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/jobsPageOffers')
            .then((res) => {
                this.setState({ Offers: res.data });
            });
    }

    render() {
        return (
            <div>
                <Offers offers={this.state.Offers.length !== 0 ? this.state.Offers : 'empty'} />
            </div>
        );
    }
}

export default AllOffers;
