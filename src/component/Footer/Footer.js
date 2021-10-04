import React, { useContext } from 'react';
import './Footer.css'
import { companyContext } from './../../App';

const Footer = () => {
    const [team, company] = useContext(companyContext)
    console.log(company)
    return (
        <div className="bg-dark text-center text-light p-5 mt-5">
            <h1>Our Journey Start in {company.year_of}</h1>
            <h4>Address: {company?.contact?.location_text}</h4>
            <h4>Mobile: {company?.contact?.mobile[0]}</h4>
        </div>
    );
};

export default Footer;