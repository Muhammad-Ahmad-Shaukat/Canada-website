'use client';

import React from "react";
import "./contact.css";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Button from "../Components/Button/Button";



const address = {
    street: "Suite 701, 10250 – 101 Street,",
    state: "Edmonton, Alberta,",
    country: "Canada, T5J 3P4",
};

const contactInfo = {
    phoneNo: "+1 (506) 515-9977",
    email: "info@saucan.ca",
};

export default function Contact() {
    const contactCopy =
        "Whether you are evaluating market entry, exploring a JV, or preparing to bid, SAUCAN can help you navigate Jazan with clarity and confidence.";

    return (
        <div>
            {/* Hero Section */}
            <div className="Contact-Hero-Section">
                <ImageHeroSection
                    imageSrc="/contact-us-skyline.avif"
                    imageAlt="Contact Us Skyline"
                    breadcrum="Contact Us"
                    mainheading="Let’s start the conversation"
                />
            </div>

            {/* Contact Section */}
            <div className="contact-page-form-parent">
                <div className="contact-page-container grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* LEFT SIDE */}
                    <div className="contact-page-form-child-1">
                        <div className="address-section">
                            <h5>SAUCAN CORPORATION</h5>

                            <h6>Our Location</h6>
                            <div className="contact-page-address">
                                <span>{address.street}</span>
                                <br />
                                <span>{address.state}</span>
                                <br />
                                <span>{address.country}</span>
                            </div>
                        </div>

                        <div className="contact-page-contact-info">
                            <span>
                                <FaPhone color="#0a1e3b" />
                            </span>
                            <a href={`tel:${contactInfo.phoneNo}`}>{contactInfo.phoneNo}</a>
                        </div>

                        <div className="contact-page-contact-info">
                            <span>
                                <FaEnvelope color="#0a1e3b" />
                            </span>
                            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="contact-form">
                        <h5>Request More Information</h5>
                        <form className="form-grid">
                            <div className="form-row">
                                <input type="text" placeholder="Name *" required />
                                <input type="text" placeholder="Company/Organization *" required />
                            </div>
                            <div className="form-row">
                                <input type="email" placeholder="Work Email *" required />
                                <input type="tel" placeholder="Phone Number *" required />
                            </div>
                            <div className="form-row">
                                <select>
                                    <option>Inquiry Type</option>
                                    <option>Invenstment</option>
                                    <option>Contracting</option>
                                    <option>PartnerShip</option>
                                    <option>Other</option>
                                </select>
                            </div>
                         
                            <textarea placeholder="Message *" rows="4"></textarea>
                            <Button
                                text="Submit"
                                link="/contact"
                                backgroundColor="#0a1e3b" // Blue primary color
                                hoverColor="#004D2E" // Gold secondary color
                                textColor="#fff"
                                hoverTextColor="#D4AF37" // Dark green for contrast
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Form submitted successfully!");
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
