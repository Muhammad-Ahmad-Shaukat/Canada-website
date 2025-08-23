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
        <title>About SAUCAN | Bridging Canada and Jazan Business Opportunities</title>
        <meta 
          name="description" 
          content="SAUCAN connects Canadian businesses with opportunities in Jazan, Saudi Arabia. Founded by Canadian professionals with experience in Jazan." 
        />
        <meta 
          name="keywords" 
          content="Canada Saudi business, Jazan investment, international business expansion, Saudi Arabia Canada trade" 
        />
        <meta property="og:title" content="About SAUCAN | Canada-Jazan Business Bridge" />
        <meta 
          property="og:description" 
          content="Connecting Canadian capability with Saudi opportunity through cultural fluency and trusted networks." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      <motion.main
        className="Page-Container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <motion.div variants={itemVariants} {...floatingAnimation}>
          <ImageHeroSection
            imageSrc="/contact-us-skyline.avif"
            imageAlt="Illustration showing business connection between Canada and Saudi Arabia with skyline imagery"
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
            <motion.h2 className="visually-hidden">Our Mission</motion.h2>
            <motion.p 
              className="intro-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Founded by Canadian professionals who have lived and worked in Jazan, SAUCAN understands how to align Canadian capability with Saudi opportunity. We combine sector knowledge, cultural fluency, and trusted networks to help companies move from interest to implementation.
            </motion.p>
          </motion.div>

          <motion.section 
            className="beliefs-section"
            variants={containerVariants}
            aria-labelledby="beliefs-heading"
          >
            <motion.h3 
              id="beliefs-heading"
              className="beliefs-heading"
              variants={itemVariants}
            >
              What we believe:
            </motion.h3>
            
            <motion.div 
              className="beliefs-grid"
              variants={containerVariants}
              role="list"
            >
              <motion.div 
                className="belief-card"
                variants={beliefItem}
                whileHover="hover"
                role="listitem"
                tabIndex={0}
              >
                <div className="belief-icon" aria-hidden="true">
                  <FaGlobeAmericas />
                </div>
                <h4>Diversification matters for Canadian growth</h4>
                <p>Expanding into new markets like Saudi Arabia creates resilience and opportunities for Canadian businesses.</p>
                <div className="glow-effect" aria-hidden="true"></div>
              </motion.div>
              
              <motion.div 
                className="belief-card"
                variants={beliefItem}
                whileHover="hover"
                role="listitem"
                tabIndex={0}
              >
                <div className="belief-icon" aria-hidden="true">
                  <FaChessKnight />
                </div>
                <h4>Execution certainty matters for investors</h4>
                <p>We provide the local knowledge and connections to turn plans into operational success.</p>
                <div className="glow-effect" aria-hidden="true"></div>
              </motion.div>
              
              <motion.div 
                className="belief-card"
                variants={beliefItem}
                whileHover="hover"
                role="listitem"
                tabIndex={0}
              >
                <div className="belief-icon" aria-hidden="true">
                  <FaHandshake />
                </div>
                <h4>Partnerships built on respect and transparency outlast cycles</h4>
                <p>Our approach creates enduring relationships that deliver value through market changes.</p>
                <div className="glow-effect" aria-hidden="true"></div>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            className="cta-section"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            aria-labelledby="cta-heading"
          >
            <h3 id="cta-heading" className="visually-hidden">Next Steps</h3>
            <Button
              text="See how we work"
              link="/services"
              hoverColor = "#D4AF37"
              textColor = "#fff"
              hoverTextColor = "#004D2E"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              ariaLabel="Learn more about our services"
            />
          </motion.section>
        </motion.div>
      </motion.main>
    </>
  );
}