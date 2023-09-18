import React from "react";

const Landing = (props) => {
    return (
        <div className="slider-area">
            <div className="pages-title">
                <div className="single-slider slider-height slider-height-breadcrumb d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="slider-content slider-content-breadcrumb text-center">
                                    <h1 className="white-color f-700">{props.landingText}</h1>
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