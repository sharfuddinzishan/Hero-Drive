import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="container text-center">
            <h1 className="text-warning display-1">404</h1>
            <p>The Page You Are Looking, Not Found</p>
            <NavLink
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                <span className="nav-link" >Home</span>
            </NavLink>
        </div>
    );
};

export default NotFound;