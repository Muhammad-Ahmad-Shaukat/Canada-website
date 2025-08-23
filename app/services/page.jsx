"use client";

import React from "react";
import { motion } from "framer-motion";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import Button from "../Components/Button/Button";
import "./services.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -8, 0],
    opacity: [1, 0.98, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function OurServices() {
  const services = [
    {
      title: "Market intelligence and briefings",
      description: "Sector scans, regulatory notes, opportunity maps"
    },
    {
      title: "Partner development",
      description: "Curated introductions to Saudi companies and agencies"
    },
    {
      title: "Transaction support",
      description: "JV design, local entity setup, incentives guidance"
    },
    {
      title: "Bid and delivery enablement",
      description: "Proposal support, compliance, onboarding"
    },
    {
      title: "On the ground support",
      description: "Site visits, meetings, follow up, cultural navigation"
    },
  ];

  return (
    <motion.div
      className="Page-Container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div variants={itemVariants} {...floatingAnimation}>
        <ImageHeroSection
          imageSrc="/contact-us-skyline.avif"
          imageAlt="Saudi Arabia business services"
          breadcrum="Our Services"
          mainheading="From market entry to long term growth"
        />
      </motion.div>

      <motion.div 
        className="Services-Container" 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="services-intro" variants={itemVariants}>
          <h2>Comprehensive support for your Saudi market journey</h2>
          <p>We provide end-to-end assistance to help Canadian businesses navigate the Saudi market, from initial exploration to sustainable growth and expansion.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-number">0{index + 1}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          variants={itemVariants}
        >
          <Button
            text="Request a tailored market briefing"
            link="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}