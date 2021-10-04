import React, { useContext } from 'react';
import './Contact.css'
import Team from './../Team/Team';
import { companyContext } from './../../App';
const Contact = () => {
    const [team] = useContext(companyContext)
    return (
        <>
            <div className="row container-fluid">
                <div className="col-8">
                    <h1 className="text-light">Contact With Out Hero Team</h1>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        {
                            team.map(team => <Team key={team.id} team={team}></Team>)
                        }
                    </div>
                </div>
                <div className="col-4 text-light mt-5">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit Query</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;