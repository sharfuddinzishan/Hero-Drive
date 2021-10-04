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
            <div className="container text-white">
                <h1 className="my-4">{title} <br />
                    <small className="text-info">{info}</small>
                </h1>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src={courseImage} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h3 className="my-3">Course Description</h3>
                        {
                            description?.map(pd => <p className="text-light fw-lighter">{pd}</p>)
                        }
                        <h3 className="my-3">This Course Offer</h3>
                        <ul>
                            <li className="text-info">{practice} Practical Classes</li>
                            <li className="text-info">{theory} Theory Classes</li>
                            <li className="text-info">Special {consultation} Psychological Consultation Classes</li>
                        </ul>
                    </div>
                </div>

                <h3 className="my-4">Related Ongonig Courses</h3>
                <div className="row">
                    {
                        services.slice(0, 4).map(pd => {
                            const detailsPagePath = `/services/${pd.course_id}`
                            return (
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <center>
                                        <div className="card">
                                            <img className="card-img-top opacity-25" src={pd?.service_image} />
                                            <div className="card-img-overlay ">
                                                <h4 className="text-light fw-bold fs-5">{pd?.title}</h4>
                                                <div className="">
                                                    <Link to={detailsPagePath}><button className="btn btn-sm btn-info rounded-pill text-muted fw-bold">Details</button></Link>
                                                    <p className=" text-light fs-5 fw-bolder">Course Fee {pd?.fee}</p>
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