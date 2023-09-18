import React from "react";
import LeftSideBar from '../../FirstPageComponent/StatelessComponents/LeftSidebar';
import RightSideBar from '../../FirstPageComponent/StatelessComponents/RightSidebar';
import ShowHistoryData from "./ShowHistoryData";

const HistoryVideo = () => {
    return (
        <div>
            <LeftSideBar />
            <RightSideBar />
            <ShowHistoryData />
        </div>
    );
}

export default HistoryVideo;
