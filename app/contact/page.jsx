'use client';

import React, { useState } from "react";
import "./contact.css";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Button from "../Components/Button/Button";
import { motion } from "framer-motion";

const address = {
  street: "Suite 701, 10250 – 101 Street,",
  state: "Edmonton, Alberta,",
  country: "Canada, T5J 3P4",
};

const contactInfo = {
  phoneNo: "+1 (506) 515-9977",
  email: "info@saucan.ca",
};

// Animation variants for the location card
const locationItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "Inquiry Type",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-page-wrapper">
      {/* Hero Section */}
      <div className="Contact-Hero-Section">
        <ImageHeroSection
          imageSrc="/contact-us-skyline.avif"
          imageAlt="Contact Us Skyline"
          breadcrum="Contact Us"
          mainheading="Let's start the conversation"
        />
      </div>

      {/* Contact Section */}
      <div className="contact-page-form-parent">
        <div className="contact-page-container">
          {/* LEFT SIDE - Updated Location Card */}
          <motion.div 
            className="story-card location-card"
            variants={locationItem}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="story-icon">
              <span className="icon">
                <FaMapMarkerAlt color="#004D2E" />
                </span>
            </div>
            <div className="address-section">
              <h4>SAUCAN CORPORATION</h4>
              <h5>Our Location</h5>
              <div className="contact-page-address">
                <div>{address.street}</div>
                <div>{address.state}</div>
                <div>{address.country}</div>
              </div>
            </div>

            <div className="info-section">
              <div className="contact-page-contact-info">
                <a className="phone-section" href={`tel:${contactInfo.phoneNo}`}>
                  {contactInfo.phoneNo}
                </a>
              </div>

              <div className="contact-page-contact-info">
                <a className="mail-section" href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
           
            <div className="glow-effect"></div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form animate-slide-in-right">
            <div className="form-header">
              <h5>Request More Information</h5>
              <div className="form-icon">
                <FaPaperPlane />
              </div>
            </div>
            
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-row">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name *" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="text" 
                  name="company"
                  placeholder="Company/Organization *" 
                  value={formData.company}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-row">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Work Email *" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number *" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-row">
                <select 
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                >
                  <option>Inquiry Type</option>
                  <option>Investment</option>
                  <option>Contracting</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
            
              <textarea 
                name="message"
                placeholder="Message *" 
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              
              <Button
                text="Submit"
                type="submit"
                backgroundColor="#0a1e3b"
                hoverColor="#004D2E"
                textColor="#fff"
                hoverTextColor="#D4AF37"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
             
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}