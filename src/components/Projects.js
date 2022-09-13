/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="container text-center mt-3">
                <h1>Projects</h1>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src="pokemonfight.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Pokemon Fight </h4>
                                <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to access and display Pokemon data.</p>
                                <p className="card-text"></p>
                                <a href="#" className="btn btn-primary">Check Website</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src="cms.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Creative Blog</h4>
                                <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to display blogs.</p>
                                <p className="card-text"></p>
                                <a href="#" className="btn btn-primary">Check Website</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src="pokemonfight.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Pokemon Fight </h4>
                                <p className="card-title">WBS Coding School project to create a Node Express API server, and a React App to access and display Pokemon data.</p>
                                <p className="card-text"></p>
                                <a href="#" className="btn btn-primary">Check Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
