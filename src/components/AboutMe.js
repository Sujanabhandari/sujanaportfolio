import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src="sujanaprofile.JPG" className="img-fluid rounded b-shadow-a" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                    <p><span className="title-s">Name: </span> <span>Sujana Bhandari</span></p>
                                                    <p><span className="title-s">Profile: </span> <span>Software Engineer</span></p>
                                                    <p><span className="title-s">Email: </span> <span>sujana6589@gmail</span></p>
                                                    <p><span className="title-s">Phone: </span> <span>(+49) 15207131143</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Technical Skils</p>
                                            <span>React.js</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Node.js</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="75" style={{ width: '75%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>MongoDB</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="80" style={{ width: '80%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Express.js</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="80" style={{ width: '80%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>JAVASCRIPT</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="90" style={{ width: '90%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Docker</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="50" style={{ width: '50%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>JAVASCRIPT</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="90" style={{ width: '90%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Material UI</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="40" style={{ width: '40%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>GIT</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="90" style={{ width: '90%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>PostgreSQL</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="90" style={{ width: '90%' }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    About me
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                I adore journeys. And so far,
                                                my career has likewise been a great long trip.
                                                I started as a Store Manager and I'm now a Full Stack Web developer. I once coordinated inventory management and customer communication. At another time, I was setting up an ERP system for companies.
                                            </p>
                                            <p className="lead">
                                                As a Store Manager,
                                                I discovered that most businesses in Nepal don’t use management software tools.
                                                This caused the working process to slow down. I did some research on enterprise resource planning tools. Then I discovered Odoo and started working as an OdooERP developer. After working some time in Odoo backend, I realized I need frontend expertise as well to implement the ideas that I had.
                                            </p>
                                            <p className="lead">
                                                I gained a fresh perspective on life after relocating to Germany. I enrolled in the WBS Coding School Bootcamp.
                                                I gained experience in React.js, HTML, CSS, Git, Docker, and Node.js.
                                            </p>
                                            <p className="lead">
                                                Even though I had many adventures in my career, a few core principles always stayed with me: excellent work, a little fun, and a few original ideas along the way.
                                                By creating a step-by-step plan and adopting a never-stop-learning attitude, I accomplish my goals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
