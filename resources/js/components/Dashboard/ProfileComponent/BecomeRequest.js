import React, { useState, useEffect } from "react";

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const sendRequest = (description, becomeRequest) => {
    if (description.length === 0) swal("Oh Sorry!", "Description is required!", "error");
    else if (description.length <= 20) swal("Oh Sorry!", "Description is too short! Should be at least 20 characters", "error");
    else {
        const data = new FormData();
        data.append('description', description);
        data.append('becomeRequest', becomeRequest);
        data.append('userID', userID);

        axios.post('http://127.0.0.1:8000/api/becomeAuthorAgentRequest', data).then((res) => {
            swal(res.data.status, res.data.message, res.data.result)
        });
    }
}

const BecomeRequest = () => {

    const [description, setDescription] = useState('');
    const [becomeRequest, setBecomeRequest] = useState(0);

    return (
        <section className="content">
            <div className="body_scroll">
                <div className="container-fluid">
                    {/* <!-- CKEditor --> */}
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Become Author/Agent Request</strong></h2>
                                </div>
                                <div className="body">
                                    <label htmlFor="Name">Description</label>
                                    <div className="form-group">
                                        <input type="text" id="name" onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder=" Type why you want to become author/agent" style={{ color: 'Black' }} />
                                    </div>
                                    {/* End of field */}

                                    <label htmlFor="type">Type</label>
                                    <div className="form-group">
                                        <div className="radio inlineblock m-r-20">
                                            <input type="radio" name="type" id="Author" className="with-gap" value="1"
                                            onChange={() => setBecomeRequest(1)} />
                                            <label htmlFor="Author">Author</label>
                                        </div>
                                        <div className="radio inlineblock">
                                            <input type="radio" name="type" id="Agent" className="with-gap" value="2"
                                            onChange={() => setBecomeRequest(2)} />
                                            <label htmlFor="Agent">Agent</label>
                                        </div>
                                    </div>

                                </div>
                                <button onClick={() => sendRequest(description, becomeRequest)} type="button" className="btn btn-raised btn-primary btn-round waves-effect" style={{ width: '100px', marginLeft: '20px', marginBottom: '20px' }}>Save</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- #END# CKEditor --> */}
                </div>
            </div>
        </section>
    );
}

export default BecomeRequest;
