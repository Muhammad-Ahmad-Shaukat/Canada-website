import React from "react";
import "./contact.css";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Contact SAUCAN Consulting",
  description:
    "Connect with SAUCAN to access Jazan opportunities and tailored market entry guidance.",
};

const address = {
  street: "Suite 701, 10250 – 101 Street,",
  state: "Edmonton, Alberta,",
  country: "Canada, T5J 3P4"
};

const contactInfo = {
  phoneNo: "+1 (506) 515-9977",
  email: "info@saucan.ca",
  link: "mailto:info@saucan.ca",
};

export default function Contact() {
    const contatcopy = "Whether you are evaluating market entry, exploring a JV, or preparing to bid, SAUCAN can help you navigate Jazan with clarity and confidence."

  return (
    <div>
        <div className="Contact-Hero-Section">
            <ImageHeroSection
                imageSrc = "/contact-us-skyline.avif"
                imageAlt = 'Contact Us Skyline'
                breadcrum = 'Contact Us'
                mainheading = 'Let’s start the conversation'
            />
        </div>
        <div className="contact-page-form-parent">
            <div className="contact-page-container">
                <div className="contact-page-copy">
                    <h2>{contatcopy}</h2>
                </div>
                <div>
                    <div className="contact-page-form-child-1">
                        <h5>SAUCAN CORPORATION</h5>
                        <h6>Our Location</h6>
                        <div className="contact-page-address">
                            <span>{address.street}</span>
                            <br />
                            <span>{address.state}</span>
                            <br />
                            <span>{address.country}</span>
                        </div>
                        <div className="contact-page-contact-info">
                            <span><FaPhone /></span>
                            <a href={`tel:${contactInfo.phoneNo}`}>{contactInfo.phoneNo}</a>
                        </div>
                        <div className="contact-page-contact-info">
                            <span><FaEnvelope /></span>
                            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
