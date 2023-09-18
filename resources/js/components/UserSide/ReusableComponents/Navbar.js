import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const usertypeID = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).type_id : null;

const changeColorHover = (e) => {
    e.target.style.color = '#fdc800';
}

const changeColorLeave = (e) => {
    e.target.style.color = 'white';
}

const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null;

const Navbar = () => {
    const isUnder974px = useMediaQuery({ query: '(min-width: 974px)' });

    const [searchValue, setSearchValue] = useState('');

    const style = {
        width: '200px',
        color: 'black',
        background: '#f9f9f9',
        textIndent: '10px',
        position: 'relative',
        bottom: '10px',
    }

    return (
        // header-start
        <header id="home">
            <div className="header-area">

                {/* header-top */}
                {/* for smaller screens */}
                {!isUnder974px &&
                    <div className="header-top primary-bg" style={{ width: '100%', position: 'fixed', zIndex: '9999' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                    <div className="header-contact-info d-flex">
                                        <div className="header-contact header-contact-phone">
                                            <span className="ti-home"></span>
                                            <Link to="/">
                                                <span onMouseOver={changeColorHover} onMouseLeave={changeColorLeave} style={{ color: 'white' }}>Home</span>
                                            </Link>
                                        </div>
                                        {localStorage.getItem('user-info') ?
                                            <div className="header-contact header-contact-email">
                                                <span className="ti-dashboard"></span>
                                                {
                                                    usertypeID === 2 || usertypeID === 3
                                                    || usertypeID === 4 ?
                                                    <Link to="/login">
                                                        <span onMouseOver={changeColorHover} onMouseLeave={changeColorLeave} style={{ color: 'white' }}>Dashboard</span>
                                                    </Link>
                                                    :<Link to="/panelControl">
                                                        <span onMouseOver={changeColorHover} onMouseLeave={changeColorLeave} style={{ color: 'white' }}>Dashboard</span>
                                                    </Link>
                                                }
                                            </div>
                                        :null}
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="header-social-icon-list">
                                        <ul>
                                            <li>
                                                <Link to="/allCourses">
                                                    <span onMouseOver={changeColorHover} onMouseLeave={changeColorLeave} style={{ color: 'white' }}>Courses</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/AllOffers">
                                                    <span onMouseOver={changeColorHover} onMouseLeave={changeColorLeave} style={{ color: 'white' }}>Jobs</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/allArticles">
                                                    <span onMouseOver={changeColorHover} onMouseLeave={changeColorLeave} style={{ color: 'white' }}>Articles</span>
                                                </Link>
                                            </li>


                                            <li className="toggle-search-icon">
                                                <input placeholder="Search" type="text" style={style} onChange={(e) => setSearchValue(e.target.value)} />
                                                <Link to={`/searchPage?searchValue=${searchValue}`} style={{ bottom: '-3px', right: '60px', top: '2px' }}><span className="ti-search"></span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {/* /end header-top */}

                {/* header-bottom */}
                {isUnder974px && <div className="header-bottom-area header-sticky" style={{ transition: '.6s' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="logo">
                                    <a href="/">
                                        <img src="Interface/img/logo/logo.png" alt="here" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-6 col-6">
                                <div className="header-bottom-icon f-right">
                                    <ul>
                                        <li className="toggle-search-icon">
                                            <input placeholder="Search" type="text" style={style} onChange={(e) => setSearchValue(e.target.value)} />
                                            <Link to={`/searchPage?searchValue=${searchValue}`} style={{ bottom: '5px', right: '60px' }}><span className="ti-search"></span></Link>
                                        </li>
                                        {localStorage.getItem('user-info') ?
                                            <li className="shopping-cart">
                                                {
                                                    usertypeID === 2 || usertypeID === 3
                                                    || usertypeID === 4 ?
                                                    <Link to="/login" style={{ bottom: '10px' }}>
                                                        <span>Dashboard</span>
                                                    </Link>
                                                    :<Link to="/panelControl" style={{ bottom: '10px' }}>
                                                        <span>Dashboard</span>
                                                    </Link>
                                                }
                                            </li>
                                        :null}

                                    </ul>
                                </div>
                                <div className="main-menu f-right">
                                    <nav id="mobile-menu" style={{ display: 'block' }}>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            {
                                                user !== null ?
                                                <li>
                                                    <a href="#about">PAGES</a>
                                                    <ul className="submenu">
                                                        <li><a href="http://127.0.0.1:8001/chatify">Chats</a></li>
                                                        <li><Link to="/aiChat">AI Assistant</Link></li>
                                                    </ul>
                                                </li>
                                                : null
                                            }

                                            <li><Link to="/AllOffers">Jobs</Link></li>
                                            <li><Link to="/allCourses">Courses</Link></li>
                                            <li><Link to="/allArticles">Articles</Link></li>
                                            {
                                                user !== null ?
                                                <li><Link to="/contactUs">CONTACT</Link></li>
                                                : null
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>}
                {/* /end header-bottom */}
            </div>
        </header>
    );
}

export default Navbar;
