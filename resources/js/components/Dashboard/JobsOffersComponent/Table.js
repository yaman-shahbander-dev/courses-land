import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const Table = () => {

    const [jobsOffers, setJobsOffers] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getJobsOffersDashboard', {
            params: {
                UserTypeID: usertypeID,
                UserID: userID
            }
        }).then((res) => setJobsOffers(res.data));
    }, []);

    const DeleteJobsOffers = (JobOfferID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/JobOfferExists?jobOfferID=${JobOfferID}&operation=${operation}&usertypeID=${usertypeID}&userID=${userID}`)
            .then((res) => {
                if (res.data.success) {
                    setJobsOffers(res.data.jobs)
                    swal("Well done!", "Job offer deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Job offer doesn\'t exist!", "error");
                }
            })
    }

    const Approve = (approveID, approveFor) => {
        axios.get(`http://127.0.0.1:8000/api/approveData?approveID=${approveID}&approveFor=${approveFor}`)
            .then((res) => {
                if (res.data.success) {
                    setJobsOffers(res.data.jobs)
                    swal("Well done!", "approved successfully!", "success");
                }
            })
    }

    return (
        <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                            <label htmlFor="email_address">Search</label>
                            <div className="form-group">

                                <input type="text" id="email_address1search" className="form-control" placeholder="Type here to search" style={{ backgroundColor: 'white', padding: '10px', color: 'black' }}
                                    onChange={(e) => setSearchValue(e.target.value)} />

                                <Link to={`searchJobOffer?value=${searchValue}`} className="btn btn-primary btn-icon right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    {/* Basic Table */}
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="body">
                                    <div className="table-responsive">
                                        <table className="table table-striped m-b-0">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Agent</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    jobsOffers.map((offer) => (
                                                        <tr key={offer.id}>
                                                            <td>{offer.id}</td>
                                                            <td>{offer.title}</td>
                                                            <td>{offer.description}</td>
                                                            <td>{offer.user_id}</td>
                                                            <td>
                                                                {
                                                                    usertypeID == 3 ? offer.approved == 0 ? <button onClick={() => Approve(offer.id, 'offer')} className="btn btn-success btn-sm"><i className="">Approve</i></button>
                                                                    : null : null
                                                                }

                                                                {usertypeID === 4 ?
                                                                    <Link to={`/editJobOffer?offerID=${offer.id}`} className="btn btn-primary btn-sm" >
                                                                        <i className="zmdi zmdi-edit"></i>
                                                                    </Link>
                                                                    : null}

                                                                <button onClick={() => DeleteJobsOffers(offer.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default withRouter(Table);
