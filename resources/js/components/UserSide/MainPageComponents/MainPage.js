import React, { Component } from 'react';

import Navbar from '../ReusableComponents/Navbar';
import Landing from './StatelessComponents/Landing';
import Intro from './StatelessComponents/Intro';
import Courses from './StatefulComponents/Courses';
import Team from './StatelessComponents/Team';
import JobOffer from './StatefulComponents/JobOffers';
import Statistics from './StatefulComponents/Statistics';
import Articles from './StatefulComponents/Articles';
import Footer from '../ReusableComponents/Footer';

class MainPage extends Component {
    state = {
        JobOffers: [],
    };


    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/getJobsOffers')
             .then((response) => this.setState({JobOffers: response.data}));
    }


    render() {
        return ( 
            <div>
                <Navbar />
                <Landing />
                <Intro />
                <Courses />
                <Team />
                <JobOffer JobOffers={this.state.JobOffers.length !== 0 ? this.state.JobOffers : 'empty'} />
                <Statistics />
                <Articles />
                <Footer />
            </div>
         );
    }
}

export default MainPage;