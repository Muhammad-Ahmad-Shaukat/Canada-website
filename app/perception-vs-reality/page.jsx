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
  "This is a forward looking market that wants world class partners. Canadian expertise is a strong fit.";

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
      ease: "easeOut",
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -5, 0],
    opacity: [1, 0.95, 1],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function PreceptiopnVsReality() {
  return (
    <>
      <Head>
        <title>Saudi Arabia for Canadian investors — perception vs reality</title>
        <meta
          name="description"
          content="A clear view of the market conditions Canadian leadership teams need to know."
        />
      </Head>

      <motion.div
        className="Page-Container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} {...floatingAnimation}>
          <ImageHeroSection
            imageSrc="/contact-us-skyline.avif"
            imageAlt="Contact Us Skyline"
            breadcrum="Perception Vs Reality"
            mainheading="Saudi Arabia beyond the headlines"
          />
        </motion.div>

        <motion.div className="Content-Container" variants={containerVariants}>
          <motion.div
            className="bodyContainer"
            variants={itemVariants}
            {...floatingAnimation}
          >
            <p>{body}</p>
          </motion.div>

          <motion.div
            className="keyTakeaway"
            variants={itemVariants}
            {...floatingAnimation}
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