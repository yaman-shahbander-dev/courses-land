import axios from "axios";
import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";

const UpdateInfo = (TagID, name) => {
    axios.put('http://127.0.0.1:8000/api/UpdateTagInforamtion', {
        tagID: TagID,
        name: name,
    }).then((res) => {
        if (res.data.error) {
            swal("Oh Sorry!", "Tag doesn\'t exist!", "error");
        } else {
            swal("Well done!", "Tag updated successfully!", "success");
        }
    });
}

const EditTag = () => {

    const [tagID, setTagID] = useState('');
    const [name, setName] = useState('');

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const TagID = params.get('TagID');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/TagExists?tagID=${TagID}&operation=${'edit'}`).then((res) => {
            setTagID(res.data.success.id)
            setName(res.data.success.name)
        });
    }, []);


    return (
        <div>
            <LeftSidebar />
            <RightSidebar />

            {/* edit User form start */}
            <section className="content">
                <div className="body_scroll">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        {/* <!-- Vertical Layout --> */}
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Edit tag</strong> {name}</h2>
                                    </div>
                                    <div className="body">
                                        <form>
                                            <label htmlFor="Name">Name</label>
                                            <div className="form-group">
                                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your Tag name" style={{ color: 'Black' }} />
                                            </div>

                                            <button onClick={() => UpdateInfo(tagID, name)} type="button" className="btn btn-raised btn-primary btn-round waves-effect">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* edit Course form end */}
        </div>
    );
}


export default EditTag;