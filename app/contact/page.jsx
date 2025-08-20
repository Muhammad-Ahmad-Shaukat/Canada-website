'use client';

import React, { useState } from "react";
import "./contact.css";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaInfoCircle } from "react-icons/fa";
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

// Animation variants
const cardAnimation = {
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
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const formAnimation = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
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
      <div className="contact-hero-section">
        <ImageHeroSection
          imageSrc="/contact-us-skyline.avif"
          imageAlt="Contact Us Skyline"
          breadcrum="Contact Us"
          mainheading="Let's start the conversation"
        />
      </div>

      {/* Contact Section */}
      <div className="contact-content-section">
        <div className="contact-container">
          {/* Left Side - Contact Info and Additional Panel */}
          <div className="contact-info-side">
            <motion.div 
              className="contact-info-card"
              variants={cardAnimation}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="card-icon">
                <span className="icon-wrapper">
                  <FaMapMarkerAlt color="#004D2E" />
                </span>
              </div>
              
              <div className="card-content">
                <h3>SAUCAN CORPORATION</h3>
                <h4>Our Location</h4>
                
                <div className="address-info">
                  <p>{address.street}</p>
                  <p>{address.state}</p>
                  <p>{address.country}</p>
                </div>

                <div className="contact-details">
                  <a href={`tel:${contactInfo.phoneNo}`} className="contact-link">
                    <FaPhone className="contact-icon" />
                    {contactInfo.phoneNo}
                  </a>
                  
                  <a href={`mailto:${contactInfo.email}`} className="contact-link">
                    <FaEnvelope className="contact-icon" />
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Additional Info Panel - Now outside the blue card */}
            <motion.div 
              className="info-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="panel-header">
                <FaInfoCircle className="panel-icon" />
                <h4>How We Can Help</h4>
              </div>
              <p>Whether you are evaluating market entry, exploring a JV, or preparing to bid, SAUCAN can help you navigate Jazan with clarity and confidence.</p>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="contact-form"
            variants={formAnimation}
            initial="hidden"
            animate="visible"
          >
            <div className="form-header">
              <h3>Request More Information</h3>
              <div className="form-icon">
                <FaPaperPlane />
              </div>
            </div>
            
            <form className="form-fields" onSubmit={handleSubmit}>
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
                  className={formData.inquiryType === "Inquiry Type" ? "placeholder" : ""}
                >
                  <option value="Inquiry Type">Inquiry Type</option>
                  <option value="Investment">Investment</option>
                  <option value="Contracting">Contracting</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
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
              
           <div   className="submit-button">
               <Button
                text="Submit"
                type="submit"
                backgroundColor="#0a1e3b"
                hoverColor="#004D2E"
                textColor="#fff"
                hoverTextColor="#D4AF37"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
             
              />
           </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}