/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg nav-color text-white mb-3">
                <div className="container text-white p-3 ">
                    <a className="navbar-brand text-white" href="#">Sujana</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#skils">Skills</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
