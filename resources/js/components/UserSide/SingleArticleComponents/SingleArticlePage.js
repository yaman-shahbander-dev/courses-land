import React, { Component } from 'react';
import Navbar from '../ReusableComponents/Navbar';
import Landing from '../ReusableComponents/Landing';
import SingleArticleDetails from './StatefulComponents/SingleArticleDetails';
import Footer from '../ReusableComponents/Footer';

class SingleArticlePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing landingText="Reading Article" />
                <SingleArticleDetails />
                <Footer />
            </div>
        );
    }
}

export default SingleArticlePage;