import React from "react";
import LeftSidebar from "../../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSideBar from "../../FirstPageComponent/StatelessComponents/RightSidebar";
import ShowFavoriteData from "./ShowFavoriteData";

const FavoriteCourses = () => {
    return (
        <div>
            <LeftSidebar />
            <RightSideBar />
            <ShowFavoriteData />
        </div>
    )
}

export default FavoriteCourses;
