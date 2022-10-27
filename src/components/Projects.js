/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="text-center pt-5" id="projects">
                <div className='row'>
                    <div className='col'>
                        <h1>My Recent Work</h1>
                        <p>Here are a few past design projects I've worked on. Want to see more? Email me.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <img src="homemade.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>HomeMade Food </h4>
                                <p className="card-title">WBS Coding School FInal project to order Home made food. As a user you can create food offer and also order Food.</p>
                                <p className="card-text"></p>
                                <a className="btn button-color"
                                    href="https://github.com/Sujanabhandari/homefood_frontend">GitHub Repo</a>
                                <a className="btn button-color m-2"
                                    href="https://homemadefood.netlify.app/">Visit Website</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card h-100">
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

                    <div className="col-lg-4">
                        <div className="card h-100">
                            <img src="cms.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Creative Blog</h4>
                                <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to display blogs.</p>
                                <p className="card-text"></p>
                                <a target="_blank"
                                    href="https://github.com/Sujanabhandari/base_react_project" className="btn button-color">GitHub Repo</a>
                                <a target="_blank"
                                    href="https://blogcreative.netlify.app/" className="btn button-color m-2">Visit Website</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
