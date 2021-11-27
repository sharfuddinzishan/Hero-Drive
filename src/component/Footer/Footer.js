import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid p-5">
                <div className="row gy-4">
                    <div className="col-md-4">
                        {/* <img className="logo" src="img/logo.svg" alt="" /> */}
                        <h1 className="text-white fw-bold">Safely Driving</h1>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-light fw-bold">Menu</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/teams">Our Team</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-light fw-bold">Contact</h5>
                        <ul className="list-unstyled contact-list">
                            <li>Address: USA, LOS ANGELES,901 East E Street, Wilmington, CA 90744</li>
                            <li>Email: margueritemckay@Safely-driving.com</li>
                            <li>Phone: (025) 805-0116</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-3">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6">
                            <small className="text-light">&copy; 2021 copyright all right reserved</small>
                        </div>
                        <div className="col col-md-6">
                            <div className="social-icons">
                                <a href="https://www.facebook.com/Safelydriving/" rel="noopener noreferrer" target="_blank"><i className='bx bx-flashing bxl-facebook'></i></a>
                                <a href="https://www.twitter.com/Safelydriving/" rel="noopener noreferrer" target="_blank"><i className='bx bx-flashing bxl-twitter'></i></a>
                                <a href="https://www.linkedin.com/Safelydriving/" rel="noopener noreferrer" target="_blank"><i className='bx bx-flashing bxl-linkedin'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;