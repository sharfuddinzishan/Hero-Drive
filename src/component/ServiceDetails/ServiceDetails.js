import React, { useEffect, useState } from 'react';
import { useServices } from '../../Hooks/useServices';
import './ServiceDetails.css'
import { useParams } from 'react-router';
import { BrowserRouterasRouter, Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceID } = useParams()
    const [services, setServices] = useServices(true);
    const getSingleServiceInfo = services.find(service => service.course_id == serviceID)
    const { course_id: courseID, title, fee, info, description, service_image: courseImage, features } = getSingleServiceInfo || {}
    const { practice_class: practice, theory_class: theory, psychological_consultation_class: consultation } = features || {}

    console.log(getSingleServiceInfo)
    return (
        <>
            <div class="container text-white">
                <h1 class="my-4">{title} <br />
                    <small className="text-info">{info}</small>
                </h1>
                <div class="row">
                    <div class="col-md-4">
                        <img class="img-fluid" src={courseImage} alt="" />
                    </div>
                    <div class="col-md-8">
                        <h3 class="my-3">Course Description</h3>
                        {
                            description?.map(pd => <p className="text-light fw-lighter">{pd}</p>)
                        }
                        <h3 class="my-3">This Course Offer</h3>
                        <ul>
                            <li className="text-info">{practice} Practical Classes</li>
                            <li className="text-info">{theory} Theory Classes</li>
                            <li className="text-info">Special {consultation} Psychological Consultation Classes</li>
                        </ul>
                    </div>
                </div>

                <h3 class="my-4">Related Ongonig Courses</h3>
                <div class="row">
                    {
                        services.slice(0, 4).map(pd => {
                            const detailsPagePath = `/services/${pd.course_id}`
                            return (
                                <div class="col-md-3 col-sm-6 mb-4">
                                    <center>
                                        <div class="card">
                                            <img class="card-img-top opacity-25" src={pd?.service_image} />
                                            <div class="card-img-overlay ">
                                                <h4 class="text-light fw-bold fs-5">{pd?.title}</h4>
                                                <div class="">
                                                    <Link to={detailsPagePath}><button class="btn btn-sm btn-info rounded-pill text-muted fw-bold">Details</button></Link>
                                                    <p class=" text-light fs-5 fw-bolder">Course Fee {pd?.fee}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
};

export default ServiceDetails;