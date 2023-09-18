import React from "react";
import { Link } from 'react-router-dom';
import cssClasses from './Articles.module.css';

const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null;

const ArticleDesign = (props) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="blog-wrapper mb-30">
                <div className="blog-thumb mb-25" style={{ height: '300px' }}>
                    {
                        user !== null ?
                        <Link to={`/article?title=${props.ArticleTitle}`}>
                            <img src={props.ArticleImage} alt="here" height="100%" />
                        </Link>
                        :
                        <Link to={`/register`}>
                            <img src={props.ArticleImage} alt="here" height="100%" />
                        </Link>
                    }

                    <span className="blog-category">{props.category}</span>
                </div>
                <div className="blog-content">
                    <div className="blog-meta">
                        <span>{props.ArticleDate}</span>
                    </div>
                    {
                        user !== null ?
                        <h5><Link to={`/article?title=${props.ArticleTitle}`}>{props.ArticleTitle.length > 30 ? props.ArticleTitle.substring(0, 30) + '...' : props.ArticleTitle}</Link></h5>
                        :
                        <h5><Link to={`/register`}>{props.ArticleTitle.length > 30 ? props.ArticleTitle.substring(0, 30) + '...' : props.ArticleTitle}</Link></h5>
                    }
                    <div className="read-more-btn">
                        {
                            user !== null ?
                            <button><Link to={`/article?title=${props.ArticleTitle}`} className={cssClasses.anchorColor}>Read more</Link></button>
                            :
                            <button><Link to={`/register`} className={cssClasses.anchorColor}>Read more</Link></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleDesign;
