import React from 'react';

const About = () => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-4">
                    <img src="https://i.im.ge/2021/10/05/TJ7E2y.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-md-8 text-light">
                    <h1 className="text-danger display-4 fw-bold">Our Journey <span className="text-warning">Start in 2018</span></h1>
                    <p>
                        To ensure safe roads for the dwellers, the authority has become extremely strict
                        regarding the traffic laws. Thus to drive on the roads, there is not any escape
                        than to know and oblige the rules. Apart from the law fact, safe driving should
                        also be performed by us for our own sake. To have safe roads, we actually have
                        to drive safely. Practical driving training is a must to attain driving skills.
                        Most of the times, people choose to practice driving from relatives
                        or friends except going to proper driving schools. But to drive safe you must get
                        enrolled into our Safely Driving institute.
                    </p>
                    <h1> Facilities we offer: All the Exclusive Qualities You Want to Know</h1>
                    <p> Though the List of driving school in Dhaka is quite long yet we have something
                        new to offer you. We provide some magnificent facilities that you have never seen before.
                    </p>

                    <b>What we offer:</b>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item ">We offer hostel facilities during your learning period.</li>
                        <li className="list-group-item">Our classrooms are well equipped, large and can accommodate
                            a smart number of candidates.
                        </li>
                        <li className="list-group-item">We ensure driving instructors who are expert and give you
                            solutions to your every query.
                        </li>
                        <li className="list-group-item">We offer job facilities in our own institute.</li>
                        <li className="list-group-item">You will receive a cordial and friendly learning atmosphere.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default About;