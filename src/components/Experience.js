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
                            <h2>FULL-STACK
                                WEB & APP DEVELOPMENT BOOTCAMP</h2>
                            <p>July 2022 - October 2022</p>
                            <div className="card-body">
                                <h4>Professional Full-Time Training </h4>
                                <p></p>
                                <ul className='list-icons p-3'>
                                    <li>JavaScript Full-Stack Training (PERN and MERN Stack)</li>
                                    <li>Worked and developed web applications (front-end, back-end, and full-stack) in a team</li>
                                    <li>Backend:
                                        NodeJS/ExpressJS,Overview APIs (REST, GraphQL), Databases: PostgreSQL, MySQL, MongoDB  </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 col-sm-12">
                        <div className="card p-4 h-100">
                            {/* <img src="pokemonfight.png" className="card-img-top" alt="..." /> */}
                            <div className="icon-top text-center"><span><i class="bi bi-laptop"></i></span></div>
                            <h2>Bachelor in Software Engineering</h2>
                            <p>Sep 2015 - Sep 2029</p>
                            <div className="card-body">
                                <h4>Education</h4>
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
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-sm-12">
                        <div className="card p-4 h-100">
                            {/* <img src="pokemonfight.png" className="card-img-top" alt="..." /> */}
                            <div className="icon-top text-center"><span><i class="bi bi-person-workspace"></i></span></div>
                            <h2>Software Developer</h2>
                            <p>March 2022 - July 2020</p>
                            <div className="card-body">
                                <h4>Freelancer </h4>
                                {/* <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to access and display Pokemon data.</p>
                        <p className="card-text"></p> */}
                                <p></p>
                                <ul className='list-icons p-3'>
                                    <li>Odoo personal project
                                        - Built modules for managing estates</li>
                                    <li>React project
                                        - Learned and developed a basic project to implement blockchain idea</li>
                                    <li>Docker
                                        - Setup docker environment for Odoo and React development</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 col-sm-12">
                        <div className="card p-4 h-100">
                            {/* <img src="pokemonfight.png" className="card-img-top" alt="..." /> */}
                            <div className="icon-top text-center"><span><i class="bi bi-person-workspace"></i></span></div>
                            <h2>Software Developer Intern</h2>
                            <p>November 2022 - April 2021</p>
                            <div className="card-body">
                                <h4>Internship</h4>
                                {/* <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to access and display Pokemon data.</p>
                        <p className="card-text"></p> */}
                                <ul className='list-icons p-3'>
                                    <li>Python, PostgreSQL, JavaScript, HTML5</li>
                                    <li>Odoo Module development and customization</li>
                                    <li>Qweb and Email templating</li>
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
