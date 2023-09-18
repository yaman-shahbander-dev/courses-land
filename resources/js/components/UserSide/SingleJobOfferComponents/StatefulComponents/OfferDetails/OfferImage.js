import React from "react";

const OfferImage = (props) => {
    return (
        <div className="event-details-thumb mb-35">
            <img src={props.imgSrc} alt="here" />
        </div>
    )
}

export default OfferImage;