import React from "react";
import LeftSidebar from "../../FirstPageComponent/StatelessComponents/LeftSidebar";
import RightSideBar from "../../FirstPageComponent/StatelessComponents/RightSidebar";
import ShowCommentData from "./ShowCommentData";

const CommentArticles = () => {
    return (
        <div>
            <LeftSidebar />
            <RightSideBar />
            <ShowCommentData />
        </div>
    )
}

export default CommentArticles;
