/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'


export default class ContactForm extends Component {
    render() {
        return (

            <div className='p-3 bg-dark mt-3' id="contact">
                <div className="container text-white p-2">
                    <div className="row">
                        <div className='col'>
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        required="required"
                                        data-validation-required-message="Please enter your name."
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        required="required"
                                        data-validation-required-message="Please enter your email address."
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        className="form-control"
                                        id="phone"
                                        type="tel"
                                        placeholder="Phone Number"
                                        required="required"
                                        data-validation-required-message="Please enter your phone number."
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        placeholder="Message"
                                        required="required"
                                        data-validation-required-message="Please enter a message."
                                    ></textarea>
                                </div>
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="button button-rouded">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className='col'>

                            <div className="title-box-2 pt-4 pt-md-0">
                                <h5 className="title-left">
                                    Get in Touch
                                </h5>
                            </div>
                            <div className="more-info">
                                <p className="lead">
                                    You can contact me under this address.
                                </p>
                                <ul className='list-icons p-3'>
                                    <li><i class="bi bi-geo-alt"></i>Motztrasse 4, 39108</li>
                                    <li><i class="bi bi-phone"></i> +49 15207131143</li>
                                    <li><span className="bi bi-envelope"></span> sujana6589@gmail.com</li>
                                </ul>

                            </div>
                            <div className="socials">
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/sujanabhandari/"><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/sujanabhandari/"><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                                    <li><a href="https://github.com/Sujanabhandari"><span className="ico-circle"><i class="bi bi-github"></i></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/sujanabhandari/"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
