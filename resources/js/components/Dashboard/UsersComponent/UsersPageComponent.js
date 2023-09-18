import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSidebar from "../FirstPageComponent/StatelessComponents/RightSidebar";
import Table from "./Table";

const UsersPage = () => {

    return (
        <div>
            <LeftSidebar />
            <RightSidebar />
            <Table/> { /* This table is to list all users of DB*/ }
        </div>
    )
};

export default UsersPage;