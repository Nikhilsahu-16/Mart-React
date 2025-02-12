import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import './ContactUs.css'; // Make sure to create a separate CSS file for styles.

function ContactUs()
{
    return (
        <>
            <section id="contact-us" className="container-fluid my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h1 className="display-4 mb-4 text-primary">Get In Touch</h1>
                        <p className="lead text-muted">
                            We would love to hear from you! If you have any feedback, questions, or suggestions, feel free to reach out.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container my-5">
                <div className="row">
                    {/* Left Column - Contact Form */}
                    <div className="col-md-3">
                        <div className="card shadow-lg h-100">
                            <div className="card-body d-flex flex-column">
                                <h4 className="card-title text-center mb-4 text-success">Send Us a Message</h4>
                                <form className="flex-grow-1">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" >Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            className="form-control"
                                            rows="5"
                                            placeholder="Share your message here"
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Social Media and Map */}
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-body text-center">
                                <h4 className="card-title mb-4 text-warning">Follow Us on Social Media</h4>
                                <p className="lead text-muted">Stay updated with our latest offerings, promotions, and news!</p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                                        <FaFacebook size={30} className="social-icon" />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                                        <FaInstagram size={30} className="social-icon" />
                                    </a>
                                    <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer" className="mx-3">
                                        <FaWhatsapp size={30} className="social-icon" />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                                        <FaTwitter size={30} className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Column */}
                    <div className="col-md-3">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.312459651393!2d90.37024711478168!3d23.74682498458663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6b25a8eacb1%3A0x49d5939a086c71b4!2sDhaka%20City%20Corporation!5e0!3m2!1sen!2sbd!4v1620422812595!5m2!1sen!2sbd"
                                width="100%"
                                height="300"
                                style={{ border: 0, borderRadius: "12px" }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white py-4 text-center">
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default ContactUs;
