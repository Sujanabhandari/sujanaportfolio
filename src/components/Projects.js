/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>This is the list of projects I have worked on. Visit website and github repo and give some feebacks.</p>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="./employee.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/Sujanabhandari/employee_management_frontend" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                                            <i className="bi bi-git"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://employeeregistry.netlify.app/login" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="./food.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/Sujanabhandari/homefood_frontend" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2">
                                            <i className="bi bi-git"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://homemadefood.netlify.app/" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="./pokemon.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/Sujanabhandari/pokemon_react_client" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2">
                                            <i className="bi bi-git"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://gopokemonfight.netlify.app/" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="./cmsblog.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/Sujanabhandari/base_react_project/tree/main/src" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2">
                                            <i className="bi bi-git"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://blogcreative.netlify.app/" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="./blog.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/Sujanabhandari/hacker_news_react" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3">
                                            <i className="bi bi-git"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/Sujanabhandari/hacker_news_react" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="./homemade.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1">
                                            <i className="bi bi-git"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                                    </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>
        )
    }
}
