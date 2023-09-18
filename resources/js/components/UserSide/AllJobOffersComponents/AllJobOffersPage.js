import React, { Component } from 'react';
import Navbar from '../ReusableComponents/Navbar';
import Landing from '../ReusableComponents/Landing';
import AllOffersWithPagination from './StatefulComponents/AllOffersWithPagination';
import Footer from '../ReusableComponents/Footer';
import PreloadScreen from '../../PreloadScreen/PreloadScreen';

class AllJobOffersPage extends Component {
    render() {
        return (
            <div>
                <PreloadScreen duration="700" />
                <Navbar />
                <Landing landingText="Jobs' Offers" />
                <AllOffersWithPagination />
                <Footer />
            </div>
        );
    };
}

export default AllJobOffersPage;