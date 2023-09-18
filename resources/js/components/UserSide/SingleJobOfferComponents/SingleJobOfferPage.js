import React, { Component } from 'react';
import Navbar from '../ReusableComponents/Navbar';
import Landing from './StatelessComponents/Landing';
import OfferDetails from './StatefulComponents/OfferDetails/OfferDetails';
import PreloadScreen from '../../PreloadScreen/PreloadScreen';

class SingleJobOfferPage extends Component {
    render() {
        return (
            <div>
                <PreloadScreen duration="300" />
                <Navbar />
                <Landing />
                <OfferDetails />
            </div>
        );
    };
}

export default SingleJobOfferPage;