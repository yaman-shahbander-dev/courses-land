import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="slider-area">
            <div className="pages-title">
                <div className="single-slider slider-height slider-height-breadcrumb d-flex align-items-center" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="slider-content slider-content-breadcrumb text-center">
                                    <h1 className="white-color f-700">Job Offer's Details</h1>
                                    <nav className="text-center" aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page"> Details</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;