"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import Button from "../Components/Button/Button";
import { FaGlobeAmericas, FaBuilding, FaIndustry, FaHandshake } from "react-icons/fa";
import "./success-stories.css";

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

const storyItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: { duration: 0.3 }
  }
};

export default function SuccessStories() {
  return (
    <>
      <Head>
        <title>International success stories in Saudi Arabia</title>
        <meta
          name="description"
          content="Evidence that the market executes. Lessons Canadian firms can apply in Jazan."
        />
      </Head>

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
            imageAlt="Successful projects in Saudi Arabia"
            breadcrum="Success Stories"
            mainheading="How global players are succeeding in Saudi Arabia"
          />
        </motion.div>

        <motion.div 
          className="Content-Container" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="bodyContainer"
            variants={itemVariants}
          >
            <motion.p 
              className="intro-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Evidence that the market executes. Here are recent examples of international companies finding success in Saudi Arabia, with lessons Canadian firms can apply in Jazan.
            </motion.p>
          </motion.div>

          <motion.div 
            className="stories-section"
            variants={containerVariants}
          >
            <motion.h3 
              className="section-heading"
              variants={itemVariants}
            >
              Recent Success Stories
            </motion.h3>
            
            <motion.div 
              className="stories-grid"
              variants={containerVariants}
            >
              <motion.div 
                className="story-card"
                variants={storyItem}
                whileHover="hover"
              >
                <div className="story-icon">
                  <FaIndustry />
                </div>
                <h4>European Energy Company Expands Downstream Services</h4>
                <p>A leading European energy firm recently signed agreements to expand its downstream services in Saudi Arabia, including petrochemical production and renewable energy integration.</p>
                <a href="https://www.spa.gov.sa/" target="_blank" rel="noopener noreferrer" className="source-link">
                  Source: Saudi Press Agency
                </a>
                <div className="glow-effect"></div>
              </motion.div>
              
              <motion.div 
                className="story-card"
                variants={storyItem}
                whileHover="hover"
              >
                <div className="story-icon">
                  <FaBuilding />
                </div>
                <h4>Asian Manufacturer Commissions Logistics Hub</h4>
                <p>An Asian industrial manufacturer has commissioned a new logistics hub in Jazan Economic City, creating regional distribution capabilities for their products.</p>
                <a href="https://www.rcjy.gov.sa/en-US/JCPDI" target="_blank" rel="noopener noreferrer" className="source-link">
                  Source: RCJY News
                </a>
                <div className="glow-effect"></div>
              </motion.div>
              
              <motion.div 
                className="story-card"
                variants={storyItem}
                whileHover="hover"
              >
                <div className="story-icon">
                  <FaHandshake />
                </div>
                <h4>U.S. Engineering Firm Signs Operations Agreement</h4>
                <p>A major U.S. engineering company has entered into a long-term operations agreement to provide specialized services to Saudi industrial projects.</p>
                <a href="https://www.misa.gov.sa/en/" target="_blank" rel="noopener noreferrer" className="source-link">
                  Source: Ministry of Investment
                </a>
                <div className="glow-effect"></div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="cta-section"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Button
              text="Ask for a template business case for your sector"
              link="/contact"
              backgroundColor="#0a1e3b" // Blue primary color
              hoverColor="#D4AF37" // Gold secondary color
              textColor="#fff"
              hoverTextColor="#004D2E" // Dark green for contrast
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}