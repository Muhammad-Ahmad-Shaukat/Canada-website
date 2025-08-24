'use client';

import React, { useState } from "react";
import "./contact.css";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaInfoCircle } from "react-icons/fa";
import Button from "../Components/Button/Button";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const address = {
  street: "700 2 St SW,",
  state: "Edmonton, Calgary,",
  country: "Canada, T2P 2W2",
};

const contactInfo = {
  phoneNo: "+1 (506) 515-9977",
  email: "info@saucan.ca",
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } }
};

const formAnimation = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    inqueryType: "Inquiry Type",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.companyName.trim() ||
      !formData.email.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.message.trim() ||
      formData.inqueryType === "Inquiry Type"
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      console.log("Sending form data:", formData);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // ✅ this parses the response properly

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          inqueryType: "Inquiry Type",
          message: ""
        });
        console.log("Server response:", data);
      } else {
        console.error("Error response from server:", data);
        toast.error(`Failed to submit: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };


  return (
    <div className="contact-page-wrapper">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--toast-bg, #fff)",
            color: "var(--toast-text, #111)",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            padding: "16px 20px",
            maxWidth: "400px",
          },
          success: {
            style: {
              background: "#ECFDF5",
              color: "#065F46",
              fontWeight: "500",
            },
            iconTheme: {
              primary: "#10B981",
              secondary: "#ECFDF5",
            },
          },
          error: {
            style: {
              background: "#FEF2F2",
              color: "#991B1B",
              fontWeight: "500",
            },
            iconTheme: {
              primary: "#EF4444",
              secondary: "#FEF2F2",
            },
          },
          warning: {
            style: {
              background: "#FFFBEB",
              color: "#92400E",
              fontWeight: "500",
            },
            iconTheme: {
              primary: "#F59E0B",
              secondary: "#FFFBEB",
            },
          },
          info: {
            style: {
              background: "#EFF6FF",
              color: "#1E3A8A",
              fontWeight: "500",
            },
            iconTheme: {
              primary: "#3B82F6",
              secondary: "#EFF6FF",
            },
          },
        }}
      />




      {/* Hero Section */}
      <div className="contact-hero-section">
        <ImageHeroSection
          imageSrc="/contact-us-skyline.avif"
          imageAlt="Contact Us Skyline"
          breadcrum="Contact Us"
          mainheading="Connect With SAUCAN"
        />
      </div>

      {/* Contact Section */}
      <div className="contact-content-section">
        <div className="contact-container">
          {/* Left Side */}
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

            {/* Additional Info Panel */}
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
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company/Organization *"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number *"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <select
                  name="inqueryType"
                  value={formData.inqueryType}
                  onChange={handleInputChange}
                  className={formData.inqueryType === "Inquiry Type" ? "placeholder" : ""}
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
              ></textarea>

              <div className="submit-button">
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
