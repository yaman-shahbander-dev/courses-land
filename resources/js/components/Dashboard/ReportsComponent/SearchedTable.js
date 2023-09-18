import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { withRouter } from "react-router-dom";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const SearchedTableReport = () => {
    const [reports, setReports] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const value = params.get('value');

    useEffect(() => {
        // searchCategory
        axios.get(`http://127.0.0.1:8000/api/searchReport?value=${value}`).then((res) => setReports(res.data.success))
    }, []);

    const DeleteReport = (ReportID, operation) => {
        axios.get(`http://127.0.0.1:8000/api/reportExists?reportID=${ReportID}&operation=${operation}&value=${value}`)
            .then((res) => {
                if (res.data.success) {
                    setReports(res.data.reports)
                    swal("Well done!", "Report deleted successfully!", "success");
                }
                else if (res.data.error) {
                    swal("Oh Sorry!", "Report doesn\'t exist!", "error");
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
                                                        <th>User</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        reports.map((report) => (
                                                            <tr key={report.id}>
                                                                <td>{report.id}</td>
                                                                <td>{report.problem_title}</td>
                                                                <td>{report.problem_description}</td>
                                                                <td>{report.user_id}</td>
                                                                <td>
                                                                    <button onClick={() => DeleteReport(report.id, 'delete')} className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></button>
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

export default withRouter(SearchedTableReport);
