import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="p-5" id="contact-section">
            <div className="col-md-8 mx-auto text-center mb-4">
                <h1 className="text-danger display-4 fw-bold">Get In <span className="text-warning">Touch</span></h1>
                <h5 className="text-light">Training Better Drivers</h5>
                <h6 className="text-light">Because Safe Driving Is No Accident</h6>
            </div>

            <form action="" className="row g-3 justify-content-center">
                <div className="col-md-5">
                    <input type="text" className="form-control form-control-sm" placeholder="Full Name" />
                </div>
                <div className="col-md-5">
                    <input type="text" className="form-control form-control-sm" placeholder="Enter E-mail" />
                </div>
                <div className="col-md-10">
                    <input type="text" className="form-control form-control-sm" placeholder="Enter Subject" />
                </div>
                <div className="col-md-10">
                    <textarea name="" cols="20" rows="2" className="form-control form-control-sm" placeholder="Enter Message"></textarea>
                </div>
                <div className="col-md-10">
                    <button className="btn btn-sm btn-primary d-block mx-auto">Contact</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;