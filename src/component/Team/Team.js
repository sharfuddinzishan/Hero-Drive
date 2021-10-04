import React from 'react';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFax, faPhone } from '@fortawesome/free-solid-svg-icons'
const Team = (props) => {
    const { name, year_of_experience: experience, role, skills, picture, contact, } = props.team || {}
    const { fullImage: fullPic, thumbImage: thumbPic } = picture || {}
    const { mobile, email, socialLink } = contact || {}
    return (
        <>
            <div className="card">
                <img src={thumbPic} className="card-img-top p-2 img-fluid" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <span className="text-info">{role}</span>
                    <small className="ms-2 text-white">Experience {experience} years</small>
                </div>
                <ul className="list-group list-group-flush">
                    {mobile?.map(pd => <li className="list-group-item"><FontAwesomeIcon className="me-1 text-info" icon={faPhone} />{pd}</li>)}
                    {email?.map(pd => <li className="list-group-item"><FontAwesomeIcon className="me-1 text-info" icon={faFax} />{pd}</li>)}
                    <li className="list-group-item">{socialLink?.facebook}</li>
                    <li className="list-group-item">{socialLink?.twitter}</li>
                </ul>
            </div>
        </>
    );
};

export default Team;