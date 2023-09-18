import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { Link, withRouter } from "react-router-dom";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const SearchedTableOffer = (props) => {
    const [offers, setOffers] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // searchOffer
        axios.get(`http://127.0.0.1:8000/api/searchjobOffer?value=${value}`, {
            params: {
                UserTypeID: usertypeID,
                UserID: userID
            }
        }).then((res) => setOffers(res.data.success))
    }, []);

    const DeleteJobsOffers = (JobOfferID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/AuthorRequestExists?jobOfferID=${JobOfferID}&operation=${operation}&usertypeID=${usertypeID}&userID=${userID}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setOffers(res.data.jobs)
                    swal("Well done!", "Job offer deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Job offer doesn\'t exist!", "error");
                }
            })
    }

    const Approve = (approveID, approveFor) => {
        axios.get(`http://127.0.0.1:8000/api/approveData?approveID=${approveID}&approveFor=${approveFor}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setJobsOffers(res.data.jobs)
                    swal("Well done!", "approved successfully!", "success");
                }
            })
    }

    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <section className="content">
                <div className="body_scroll">
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
                                                        offers.map((offer) => (
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
        </div>
    )
}

export default withRouter(SearchedTableOffer);
