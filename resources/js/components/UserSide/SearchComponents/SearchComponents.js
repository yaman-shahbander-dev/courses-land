import React from 'react';
import Landing from '../ReusableComponents/Landing';
import swal from "sweetalert";
import Courses from './Data/Courses';
import Jobs from './Data/Jobs';
import Articles from './Data/Articles';
import Categories from './Data/Categories';

const SearchPageComponent = () => {
    const windowsURL = window.location.search;

    const params = new URLSearchParams(windowsURL);

    const searchValue = params.get('searchValue');
    return (
        <div>
            <Landing landingText="Search Results" />
            {
                searchValue !== '' ?
                    <div>
                        <Courses value={searchValue} />
                        <Jobs value={searchValue} />
                        <Articles value={searchValue} />
                        <Categories value={searchValue} />
                    </div>
                    :
                    swal({
                        title: "Something went wrong",
                        text: "Value should not be empty",
                        icon: "warning",
                        dangerMode: true,
                    })
            }
        </div>
    )
}

export default SearchPageComponent;
