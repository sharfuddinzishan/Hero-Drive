import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './../Service/Service';
import { useServices } from '../../Hooks/useServices';

const Services = (props) => {
    const [services, setServices] = useServices(false);
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="text-danger display-4 fw-bold">Our <span className="text-warning">Services</span>
                </h1>
                <p className="text-white">Educational Program For Learning Drivers</p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-3">
                {
                    props.type === 'home_page'
                        ? services.slice(0, 3).map(service => <Service key={service.course_id} service={service}></Service>)
                        : services.map(service => <Service key={service.course_id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;