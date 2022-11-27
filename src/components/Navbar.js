/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="container-fluid navbar navbar-expand-lg nav-color">
                <div className="container">
                    <a className="navbar-brand font-design" href="#">Sujana Bhandari</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end gap-5" id="navbarSupportedContent">
                        <div className="">
                            <a className="nav-link font-design" href="#aboutme">About</a>
                        </div>
                        <div className="">
                            <a className="nav-link font-design" href="#experience">Experience</a>
                        </div>
                        <div className="">
                            <a className="nav-link font-design" href="#projects">Projects</a>
                        </div>
                        <div className="">
                            <a className="nav-link font-design" href="#contact">Contact</a>
                        </div>
                        <div className="">
                            <a className="nav-link font-design" href="#aboutme">Skills</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
