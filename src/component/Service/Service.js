import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { course_id: courseID, title, info, service_image: courseImage, features } = props.service || {}
    const { practice_class: practice, theory_class: theory, psychological_consultation_class: consultation } = features || {}
    const detailsPagePath = `/services/${courseID}`
    return (
        <div class="col service-container">
            <div class="card h-100">
                <img src={courseImage} className="card-img-top p-2" alt="No Image Available" />
                <div class="card-body">
                    <h5 class="card-title text-center">{title}</h5>
                    <p class="card-text text-light">{info}</p>
                </div>
                <ul class="list-group list-group-flush list-group-numbered">
                    <li class="list-group-item ps-3 py-0"><small>Practical Class: {practice}</small></li>
                    <li class="list-group-item ps-3 py-0"><small>Theory Class: {theory}</small></li>
                    <li class="list-group-item ps-3 py-0"><small>Psychological Class: {consultation}</small></li>
                    <li class="list-group-item ps-3 py-0"><small>Total Class: {practice + theory + consultation}</small></li>
                </ul>
                <div class="card-footer text-center">
                    <Link exact to={detailsPagePath}><button class="btn btn-sm btn-primary">Details</button></Link>
                    <Link exact to="/enrollment"><button class="btn btn-sm btn-primary">Enroll</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;