import React from "react";
import { Link } from 'react-router-dom';

const Category = props => {
    return (
        <div style={props.catStyle ? props.catStyle : { padding:'23px 15px 23px 23px' }} className="widget mb-40 widget-padding white-bg">
            <h4 className="widget-title">Category</h4>
            <div className="widget-link">
                <ul className="sidebar-link">
                    {props.category.map(cat => (
                        <li key={cat.id}>
                            <Link to={`/categoryCourses?category=${cat.id}`}>{ cat.name }</Link>
                            <span>{ cat.count }</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Category
