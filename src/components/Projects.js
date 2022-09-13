/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="container text-center mt-3" id="projects">
                <h1>My Recent Work</h1>
                <p>Here are a few past design projects I've worked on. Want to see more? Email me.</p>
                <div className="row mt-5">
                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <img src="pokemonfight.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Pokemon Fight </h4>
                                <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to access and display Pokemon data.</p>
                                <p className="card-text"></p>
                                <a target="_blank" href="https://github.com/Sujanabhandari/pokemon_react_client" className="btn button-color" >GitHub Repo</a>
                                <a target="_blank" href="https://gopokemonfight.netlify.app/" className="btn button-color m-2">Visit Website</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <img src="cms.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Creative Blog</h4>
                                <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to display blogs.</p>
                                <p className="card-text"></p>
                                <a target="_blank" href="https://github.com/Sujanabhandari/base_react_project" className="btn button-color" >GitHub Repo</a>
                                <a  target="_blank" href="https://6308b82d2bde1b0a222e3a6f--loquacious-faun-0d6cd3.netlify.app/" className="btn button-color m-2">Visit Website</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="card">
                            <img src="pokemonfight.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Pokemon Fight </h4>
                                <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to access and display Pokemon data.</p>
                                <p className="card-text"></p>
                                <a href="#" className="btn button-color">GitHub Repo</a>
                                <a href="#" className="btn button-color m-2">Visit Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
