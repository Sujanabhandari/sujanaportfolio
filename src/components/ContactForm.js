/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'


export default class ContactForm extends Component {
    render() {
        return (
            <footer className="container-fluid text-center text-lg-start text-white bg-dark-color mt-5">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with me on social networks:</span>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/sujanabhandari/" className="me-4 link-secondary-design">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/Sujanabhandari" className="me-4 link-secondary-design">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sujanabhandari/" className="me-4 link-secondary-design">
                            <i className="bi bi-facebook "></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sujanabhandari/" className="me-4 link-secondary-design">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>Sujana Bhandari
                                </h6>
                                <p>
                                Software Engineer | JavaScript Full Stack Developer | React Developer | MERN & PERN Stack
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Apps
                                </h6>
                                <p>
                                    <a href="https://gopokemonfight.netlify.app/" target="_blank" rel="noreferrer" className="text-reset">Pokemon App</a>
                                </p>
                                <p>
                                    <a href="https://homemadefood.netlify.app/" target="_blank" rel="noreferrer" className="text-reset">HomeMade Food</a>
                                </p>
                                <p>
                                    <a target="_blank" rel="noreferrer" href="https://6308b82d2bde1b0a222e3a6f--loquacious-faun-0d6cd3.netlify.app/" className="text-reset">Creative Blog</a>
                                </p>
                                <p>
                                    <a target="_blank" rel="noreferrer" className="text-reset" href="https://employeeregistry.netlify.app/">Employee Registry</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i> Magdeburg, Motztrasse 4, Germany</p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    sujana6589@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3 text-secondary"></i> + 49 1520 71311 43</p>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="https://sujanabhandari.netlify.app/">https://sujanabhandari.netlify.app/</a>
                </div>

            </footer>

        )
    }
}
