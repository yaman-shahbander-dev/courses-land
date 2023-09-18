
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const userID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).id : null;

const ShowHistoryData = () => {

    const [data, setData] = useState([]);

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const keyword = params.get('keyword');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getWatchHistory', {
            params: {
                userID: userID,
                keyword: keyword
            }
        }).then((res) => setData(res.data));
    }, []);

    return (
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
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Seen</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((datum, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <Link to={`/article?title=${datum.title}`}>
                                                                    {datum.title}
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <Link to={`/article?title=${datum.title}`}>
                                                                    {datum.description.substring(1, 165)}...
                                                                </Link>
                                                            </td>
                                                            <td>{datum.created_at}</td>
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

export default ShowHistoryData;
