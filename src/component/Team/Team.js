import React from 'react';
import './Team.css'

const Team = (props) => {
    const { name, year_of_experience: experience, role, skills, picture, contact, } = props.team || {}
    const { thumbImage: thumbPic } = picture || {}
    const { mobile, email, socialLink: { facebook, twitter, linkedin } } = contact || {}
    return (
        <>
            <div className="col col-md-6 col-lg-4">
                <div className="card team-member card-effect h-100">
                    <div className="team_member_info">
                        <img src={thumbPic} alt={name || "No Profile Picture Available"} className="img-fluid" />
                        <h5 className="mb-0 mt-4">{name}</h5>
                        <p>{role}</p>
                        <strong>{experience} Years of Experience</strong> <br />
                        <small>Mobile: {mobile[0] || "N/A"}</small> <br />
                        <small>Email: {email[0] || "N/A"}</small> <br />
                        {/* Show Skills of each team member  */}
                        <small className="info d-block fw-bold lh-1">Skills:
                            {skills?.map((pd, index) =>
                                <span key={index} className="text-capitalize skill-text bg-info d-inline-block m-1 p-1 rounded-3">{pd}</span>)}
                        </small>
                    </div>
                    <div className="social-icons">
                        {
                            facebook && <a href={facebook}><i className='bx bxl-facebook'></i></a>
                        }
                        {
                            twitter && <a href={twitter}><i className='bx bxl-twitter'></i></a>
                        }
                        {
                            linkedin && <a href={linkedin}><i className='bx bxl-linkedin'></i></a>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;