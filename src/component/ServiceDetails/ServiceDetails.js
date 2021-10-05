import React from 'react';
import { useServices } from '../../Hooks/useServices';
import './ServiceDetails.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    // get serviceID from url 
    const { serviceID } = useParams();
    // get services info from json 
    // send true as parameter as when route change after click on Details Button, then have to update url of json 
    const [services] = useServices(true);
    const getSingleServiceInfo = services?.find(service => service.course_id === Number(serviceID))
    const { title, fee, info, description, service_image: courseImage, features } = getSingleServiceInfo || {}
    const { practice_class: practice, theory_class: theory, psychological_consultation_class: consultation } = features || {}

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
                        <h4 className="text-light fw-lighter">Course Fee: {fee}</h4>
                        <h3 className="my-3">Course Description</h3>
                        {
                            description?.map((pd, index) => <p key={index} className="text-light fw-lighter">{pd}</p>)
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
                        services?.slice(0, 4).map(pd => {
                            const detailsPagePath = `/services/${pd?.course_id}`
                            return (
                                // Course ID set as key 
                                <div className="col-md-3 col-sm-6 mb-4" key={pd?.course_id}>
                                    <center>
                                        <div className="card">
                                            <img className="card-img-top opacity-25" src={pd?.service_image} alt={pd?.title} />
                                            <div className="card-img-overlay ">
                                                <h4 className="text-light fw-bold fs-5">{pd?.title}</h4>
                                                <div className="">
                                                    <Link to={detailsPagePath}><button className="btn btn-sm btn-primary rounded-pill text-light fw-bold">Details</button></Link>
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