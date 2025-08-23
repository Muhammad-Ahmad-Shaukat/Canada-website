"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head"; 
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import Button from "../Components/Button/Button";
import "./precentionvsreality.css";

const body =
  "Many Canadian firms have not looked closely at Saudi Arabia. On the ground, the picture is a modernizing economy investing in infrastructure, technology, and sustainability, and integrating with global trade. International firms from Europe, Asia, and the United States have already secured contracts and launched ventures across priority sectors. Canada risks falling behind if it does not engage.";
const keytakeaway =
  "Saudi Arabia is not only open for business - it is actively inviting world-class partners. Canadian companies risk falling behind if they don’t act now.";

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

export default function PreceptiopnVsReality() {
  return (
    <>

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
            imageAlt="Contact Us Skyline"
            breadcrum="Perception Vs Reality"
            mainheading="Saudi Arabia beyond the headlines"
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
            {...floatingAnimation}
          >
            <motion.h2 
              className="mainheading"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Canada's Next Frontier: Saudi Arabia
            </motion.h2>
            <p>{body}</p>
          </motion.div>

          <motion.div
            className="keyTakeaway"
            variants={itemVariants}
            {...floatingAnimation}
            whileHover={{ scale: 1.01 }}
          >
            <h4>Key takeaway</h4>
            <p>{keytakeaway}</p>
          </motion.div>

          <motion.div
            style={{ textAlign: "center" }}
            variants={itemVariants}
            {...floatingAnimation}
          >
            <Button
              text="See how Canada's capabilities align with current demand"
              link="/sectors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}