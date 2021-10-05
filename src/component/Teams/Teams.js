import React, { useContext } from 'react';
import { companyContext } from '../../App';
import Team from './../Team/Team';

const Teams = () => {
    const [teams] = useContext(companyContext)
    return (
        <section id="team" className="p-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h1 className="text-danger display-4 fw-bold">Meet Our <span className="text-warning">Team Members</span></h1>
                    <h5 className="text-light">Best Driving Teachers</h5>
                </div>
                <div className="row text-center g-4">
                    {
                        teams?.map(team => <Team key={team.id} team={team}></Team>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Teams;