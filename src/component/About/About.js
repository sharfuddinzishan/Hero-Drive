import React, { useContext } from 'react';
import './About.css'
import Team from './../Team/Team';
import { companyContext } from './../../App';
const About = (props) => {
    const [team, company] = useContext(companyContext)
    return (
        <div className="container mt-5">
            {
                props.type !== "team_page" ? (<div className="bg-dark text-center text-light p-5 mt-5">
                    <h1>Our Journey Start in {company.year_of}</h1>
                    <h4>Address: {company?.contact?.location_text}</h4>
                    <h4>Mobile: {company?.contact?.mobile[0]}</h4>
                </div>) : ''
            }
            <div className="text-center">
                <h1 className="text-danger display-4 fw-bold">Our <span className="text-warning">Team</span></h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-3">
                {
                    team.map(team => <Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default About;