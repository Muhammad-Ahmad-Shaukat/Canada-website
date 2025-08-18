"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head"; 
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import Button from "../Components/Button/Button";
import { FaGlobeAmericas, FaHandshake, FaChessKnight } from "react-icons/fa";
import "./about.css";

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

const beliefItem = {
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

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About SAUCAN - Bridging Canada and Jazan</title>
        <meta
          name="description"
          content="SAUCAN connects Canadian capability with Saudi opportunity through sector knowledge, cultural fluency, and trusted networks."
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
            imageAlt="Canada and Saudi Arabia connection"
            breadcrum="About Us"
            mainheading="A bridge between Canada and Jazan"
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
              Founded by Canadian professionals who have lived and worked in Jazan, SAUCAN understands how to align Canadian capability with Saudi opportunity. We combine sector knowledge, cultural fluency, and trusted networks to help companies move from interest to implementation.
            </motion.p>
          </motion.div>

          <motion.div 
            className="beliefs-section"
            variants={containerVariants}
          >
            <motion.h3 
              className="beliefs-heading"
              variants={itemVariants}
            >
              What we believe:
            </motion.h3>
            
            <motion.div 
              className="beliefs-grid"
              variants={containerVariants}
            >
              <motion.div 
                className="belief-card"
                variants={beliefItem}
                whileHover="hover"
              >
                <div className="belief-icon">
                  <FaGlobeAmericas />
                </div>
                <h4>Diversification matters for Canadian growth</h4>
                <p>Expanding into new markets like Saudi Arabia creates resilience and opportunities for Canadian businesses.</p>
                <div className="glow-effect"></div>
              </motion.div>
              
              <motion.div 
                className="belief-card"
                variants={beliefItem}
                whileHover="hover"
              >
                <div className="belief-icon">
                  <FaChessKnight />
                </div>
                <h4>Execution certainty matters for investors</h4>
                <p>We provide the local knowledge and connections to turn plans into operational success.</p>
                <div className="glow-effect"></div>
              </motion.div>
              
              <motion.div 
                className="belief-card"
                variants={beliefItem}
                whileHover="hover"
              >
                <div className="belief-icon">
                  <FaHandshake />
                </div>
                <h4>Partnerships built on respect and transparency outlast cycles</h4>
                <p>Our approach creates enduring relationships that deliver value through market changes.</p>
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
              text="See how we work"
              link="/services"
              hoverColor = "#D4AF37"
              textColor = "#fff"
              hoverTextColor = "#004D2E"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}