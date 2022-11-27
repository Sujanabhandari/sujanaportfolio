/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div className="text-start pt-5" id="experience">
                <div className='row'>
                    <div className='col'>
                        <h1>Education & Experiences</h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-sm-12">
                        <div className="card p-4 h-100">
                            <div className="icon-top text-center"><span><i class="bi bi-laptop"></i></span></div>
                            <h4>FULL-STACK
                                WEB & APP DEVELOPMENT BOOTCAMP</h4>
                            <p>July 2022 - October 2022</p>
                            <div className="card-body">
                                <h5>Professional Full-Time Training </h5>
                                <p></p>
                                <ul className='list-icons p-3'>
                                    <li>JavaScript Full-Stack Training (PERN and MERN Stack)</li>
                                    <li>Developed 5 web applications with React.js,
                                        Node.js, Express.js, and MongoDB on time and
                                        integrated external APIs to reduce project time by
                                        10%.</li>
                                    <li>Implemented CI/CD pipeline to deploy 5 projects on
                                        Netlify, Render, and Heroku to reduce deployment
                                        time by 40%.</li>
                                    <li>Used SCRUM, UML diagrams, Jira, and Figma for
                                        project planning, management, UX/UI design, and
                                        wireframing to reduce team conflicts by 40%.</li>
                                    <li>Led 3 different teams to complete 5 projects with
                                        90% success rate.</li>
                                    <li>Backend:
                                        NodeJS/ExpressJS,Overview APIs (REST, GraphQL), Databases: PostgreSQL, MySQL, MongoDB  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="card p-4 h-100">
                            {/* <img src="pokemonfight.png" className="card-img-top" alt="..." /> */}
                            <div className="icon-top text-center"><span><i class="bi bi-person-workspace"></i></span></div>
                            <h4>Software Developer</h4>
                            <p>March 2022 - July 2020</p>
                            <div className="card-body">
                                <h5>Freelancer </h5>
                                {/* <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to access and display Pokemon data.</p>
                        <p className="card-text"></p> */}
                                <p></p>
                                <ul className='list-icons p-3'>
                                    <li>Created estate management module and
                                        integrated with sales and invoicing apps in Odoo to
                                        reduce project costs by 90%.</li>
                                    <li>React project
                                        - Learned and developed a basic project to implement blockchain idea</li>
                                    <li>Configured docker environments for developing
                                        Odoo modules and React apps.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-5">

                    <div className="col-lg-6 col-sm-12">
                        <div className="card p-4 h-100">
                            {/* <img src="pokemonfight.png" className="card-img-top" alt="..." /> */}
                            <div className="icon-top text-center"><span><i class="bi bi-laptop"></i></span></div>
                            <h4>Bachelor in Software Engineering</h4>
                            <p>Sep 2015 - Sep 2029</p>
                            <div className="card-body">
                                <h5>Education</h5>
                                {/* <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to access and display Pokemon data.</p>
                        <p className="card-text"></p> */}
                                <ul className='list-icons p-3'>
                                    <li>Software Testing And Quality Assurance</li>
                                    <li>Enterprise Application And Development</li>
                                    <li>Network Security</li>
                                    <li>Web Technology</li>
                                    <li>Data Structure And Algorithms</li>
                                    <li>Object Oriented Programming</li>
                                    {/* <li>Project Management</li> */}
                                </ul>
                            </div>
                        </div>

                    </div>



                    <div className="col-lg-6 col-sm-12">
                        <div className="card p-4 h-100">
                            <div className="icon-top text-center"><span><i class="bi bi-person-workspace"></i></span></div>
                            <h4>Software Developer Intern</h4>
                            <p>November 2022 - April 2021</p>
                            <div className="card-body">
                                <h5>Internship</h5>
                                <ul className='list-icons p-3'>
                                    <li>Involved in design, development, functional testing,
                                        unit testing, and deployment of 6 Odoo modules in 2
                                        customer projects.</li>
                                    <li>Odoo Module development and customization</li>
                                    <li>Involved in design, development, functional testing,
                                        unit testing, and deployment of 6 Odoo modules in 2
                                        customer projects.</li>
                                    <li>Report creation</li>
                                    <li>Use Docker, Git</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
