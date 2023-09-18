import React from "react";
import { Link } from 'react-router-dom';

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const toggleUL = (e) => {
    let element = document.getElementById(e);
    element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none'
}


const LeftSidebar = (props) => {
    return (
        <aside id="leftsidebar" className="sidebar">
            <div className="navbar-brand">
                <button className="btn-menu ls-toggle-btn" type="button"><i className="zmdi zmdi-menu"></i></button>
                <Link to="/">
                    <img src="Dashboard/images/logo.png" style={{ width: '171px', height: '30px' }} alt="Courses Land" /></Link>
                    {/* <span className="m-l-10">Courses Land</span> */}
            </div>
            <div className="menu" style={{ height: '100%', overflow: 'scroll' }}>
                <ul className="list">
                    <li className="active open"><Link to="panelControl"><i className="zmdi zmdi-home"></i><span>Dashboard</span></Link></li>
                    {usertypeID === 3 ?
                        <li onClick={() => toggleUL('users')}>
                            <a className="menu-toggle"><i className="zmdi zmdi-accounts-alt zmdi-hc-fw"></i><span>Users</span></a>
                            <ul id="users" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/users">Users</Link></li>
                            </ul>
                        </li>
                    :null}

                    {usertypeID === 3 || usertypeID === 2 ?
                        <li onClick={() => toggleUL('courses')}>
                            <a className="menu-toggle"><i className="zmdi zmdi-case-play zmdi-hc-fw"></i><span>Courses</span></a>
                            <ul id="courses" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/courses">Courses</Link></li>
                                <li><Link to="/createCourse">Create Course</Link></li>
                            </ul>
                        </li>
                    :null}

                    {usertypeID === 3 || usertypeID === 2 ?
                        <li onClick={() => toggleUL('videos')}> <a className="menu-toggle"><i className="zmdi zmdi-case-play zmdi-hc-fw"></i><span>Videos</span></a>
                            <ul id="videos" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/videos">Videos</Link></li>
                                <li><Link to="/uploadVideo">Upload Video</Link></li>
                            </ul>
                        </li>
                    :null}

                    {usertypeID === 3 ?
                        <li onClick={() => toggleUL('categories')}> <a className="menu-toggle"><i className="zmdi zmdi-layers zmdi-hc-fw"></i><span>Categories</span></a>
                            <ul id="categories" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/categories">Categories</Link></li>
                                <li><Link to="/createCategory">Create Category</Link></li>
                            </ul>
                        </li>
                    :null}

                    {/* {usertypeID === 3 ?
                        <li onClick={() => toggleUL('tags')}><a className="menu-toggle"><i className="zmdi zmdi-shopping-cart"></i><span>Tags</span></a>
                            <ul id="tags" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/tags">Tags</Link></li>
                                <li><Link to="/createTag">Create Tag</Link></li>
                            </ul>
                        </li>
                    :null} */}

                    {usertypeID === 3 ?
                        <li onClick={() => toggleUL('reports')}><a className="menu-toggle"><i className="zmdi zmdi-swap-alt"></i><span>Reports</span></a>
                            <ul id="reports" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/reports">Reports</Link></li>
                            </ul>
                        </li>
                    :null}

                    {usertypeID === 3 ?
                        <li onClick={() => toggleUL('notifications')}><a className="menu-toggle"><i className="zmdi zmdi-notifications-active zmdi-hc-fw"></i><span>Notifications</span></a>
                            <ul id="notifications" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/notifications">Notifications</Link></li>
                                <li><Link to="/createNotification">Create Notification</Link></li>
                            </ul>
                        </li>
                    :null}

                    {usertypeID === 3 || usertypeID === 4 ?
                        <li onClick={() => toggleUL('jobs')} ><a className="menu-toggle"><i className="zmdi zmdi-local-offer zmdi-hc-fw"></i><span>Job Offers</span></a>
                            <ul id="jobs" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/jobsOffers">Job Offers</Link></li>
                                {usertypeID === 4 ?
                                    <li><Link to="/createOffer">Create Job Offer</Link></li>
                                    : null}
                            </ul>
                        </li>
                    :null}

                    {usertypeID === 3 || usertypeID === 2 ?
                        <li onClick={() => toggleUL('articles')}><a className="menu-toggle"><i className="zmdi zmdi-format-color-text zmdi-hc-fw"></i><span>Articles</span></a>
                            <ul id="articles" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/articles">Articles</Link></li>
                                {usertypeID === 2 ?
                                    <li><Link to="/createArticle">Create Article</Link></li>
                                    : null}
                            </ul>
                        </li>
                    :null}

                    {usertypeID === 3 ?
                        <li onClick={() => toggleUL('requests')}><a className="menu-toggle"><i className="zmdi zmdi-reader zmdi-hc-fw"></i><span>Authors Requests</span></a>
                            <ul id="requests" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/requests">Requests</Link></li>
                            </ul>
                        </li>
                    :null}

                    {usertypeID === 3 ?
                        <li onClick={() => toggleUL('Agentsrequests')}><a className="menu-toggle"><i className="zmdi zmdi-reader zmdi-hc-fw"></i><span>Agents Requests</span></a>
                            <ul id="Agentsrequests" className="ml-menu" style={{ display: 'none' }}>
                                <li><Link to="/Agentsrequests">Requests</Link></li>
                            </ul>
                        </li>
                    :null}

                    <li onClick={() => toggleUL('histories')}><a className="menu-toggle"><i className="zmdi zmdi-view-carousel zmdi-hc-fw"></i><span>Histories</span></a>
                        <ul id="histories" className="ml-menu" style={{ display: 'none' }}>
                            <li><Link to="/historyCourse?keyword=course">Courses</Link></li>
                            <li><Link to="/historyVideo?keyword=video">Videos</Link></li>
                            <li><Link to="/historyArticle?keyword=article">Articles</Link></li>
                            <li><Link to="/historyJob?keyword=job">Jobs</Link></li>
                        </ul>
                    </li>

                    <li onClick={() => toggleUL('favorites')}><a className="menu-toggle"><i className="zmdi zmdi-favorite zmdi-hc-fw"></i><span>Favorites</span></a>
                        <ul id="favorites" className="ml-menu" style={{ display: 'none' }}>
                            <li><Link to="/favoriteCourse">Courses</Link></li>
                            <li><Link to="/favoriteVideo">Videos</Link></li>
                        </ul>
                    </li>

                    <li onClick={() => toggleUL('comments')}><a className="menu-toggle"><i className="zmdi zmdi-comment-alt-text zmdi-hc-fw"></i><span>Comments</span></a>
                        <ul id="comments" className="ml-menu" style={{ display: 'none' }}>
                            <li><Link to="/commentVideos">Videos</Link></li>
                            <li><Link to="/commentArticles">Articles</Link></li>
                        </ul>
                    </li>

                    {usertypeID === 3 ?
                        <li onClick={() => toggleUL('telescope')}><a className="menu-toggle"><i className="zmdi zmdi-view-week zmdi-hc-fw"></i><span>Monitor</span></a>
                            <ul id="telescope" className="ml-menu" style={{ display: 'none' }}>
                                <li><a href="/telescope">Monitor</a></li>
                            </ul>
                        </li>
                    :null}
                </ul>



                {usertypeID === 3 ?
                    <li>
                        ssssssssssss
                        ssssssssssss
                        ssssssssssss
                        ssssssssssss
                    </li>
                :null}

            </div>
        </aside>
    );
}

export default LeftSidebar;
