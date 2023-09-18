import React from "react";

const Search = props => {
    return (
        <div className="widget mb-40 white-bg">
            <div className="sidebar-form">
                <form action="#">
                    <input placeholder="Search course" type="text" />
                    <button type ="submit">
                        <i className ="ti-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Search;