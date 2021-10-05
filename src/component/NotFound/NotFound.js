import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="container text-center p-5">
            <h1 className="text-warning display-1">404</h1>
            <p className="text-light fw-bold display-1">The Page You Are Looking, Not Found</p>
            <NavLink
                to="/"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                <button className="btn btn-lg btn-link btn-primary text-light"> HOMEPAGE </button>
            </NavLink>
        </div>
    );
};

export default NotFound;