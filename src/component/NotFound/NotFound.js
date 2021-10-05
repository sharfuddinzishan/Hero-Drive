import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center p-5">
            <h1 className="text-warning display-1"><i class='bx bx-flashing bx-bell-minus'></i> 404</h1>
            <p className="text-light fw-bold display-1">The Page You Are Looking, Not Found</p>
            <NavLink
                to="/"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                <i class='bx bx-lg bxs-right-arrow-circle bx-fade-right'></i>
                <button className="btn btn-lg btn-link btn-primary text-light"> HOMEPAGE </button>
                <i class='bx bx-lg bxs-left-arrow-circle bx-fade-left'></i>
            </NavLink>
        </div>
    );
};

export default NotFound;