import React, { Component, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const applyFunction = (applyText, agentID, secret) => {
    if (applyText.length === 0) {
        swal({
            title: "Something went wrong",
            text: "Field must be filled",
            icon: "warning",
            dangerMode: true,
        });
    } else if (applyText.length <= 10) {
        swal({
            title: "Something went wrong",
            text: "Field must be greater than 10 characters",
            icon: "warning",
            dangerMode: true,
        });
    } else {
        axios.post('http://127.0.0.1:8000/api/applyToJobOffer', { text : applyText, fromID : userID, toID : agentID }).then((res) => console.log(res.data));
        location.reload(`http://127.0.0.1:8000/OfferDetails?secret=${secret}`);
        swal("Great!", "You have applied successfully!", "success");
    }
}

const ApplyForm = (props) => {
    const [apply, setApply] = useState('');
    return (
        <div className="events-details-form faq-area-form white-bg mb-30">
            <form>
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-12">
                        <div className="events-form-title text-center mb-30">
                            <h2>Apply Now!</h2>
                            {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam </p> */}
                        </div>
                    </div>
                    {/* <div className="col-xl-6 col-lg-6">
                            <input placeholder="Name :" type="text" />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <input placeholder="Email :" type="text" />
                        </div> */}
                    <div className="col-xl-12">
                        <textarea onChange={(e) => setApply(e.target.value)} cols="30" rows="10" placeholder="Apply here..."></textarea>
                    </div>
                    <div className="col-xl-12">
                        <div className="faq-form-btn events-form-btn text-center">
                            <button onClick={() => applyFunction(apply, props.agentID, props.secret)} className="btn">Apply</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ApplyForm;
