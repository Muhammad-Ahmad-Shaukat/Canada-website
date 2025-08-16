"use client"

import React from "react";
import { motion } from "framer-motion";
import "./ImageHeroSection.css";

export default function ImageHeroSection({
  imageSrc,
  imageAlt = "",
  breadcrum,
  mainheading,
}) {
  return (
    <header className="ImageHeroSection-Container" role="banner">
      <div className="ImageHeroSection">
        <div className="ImageHeroSection-Image-Container">
          
          <motion.img
            src={imageSrc}
            alt={imageAlt || "Hero section background"}
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <span className="imageherospan" aria-hidden="true"></span>

          <div className="ImageHeroSection-Text">
            <div className="ImageHeroSectionTextContainer">
              <motion.div
                className="ImageHeroSectionTextParent"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                {breadcrum && (
                  <nav className="Breadcrum" aria-label="Breadcrumb">
                    <ol>
                      <li>
                        <a href="/">{breadcrum}</a>
                      </li>
                    </ol>
                  </nav>
                )}

                {mainheading && (
                  <div className="MainHeading">
                    <h1>{mainheading}</h1>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
