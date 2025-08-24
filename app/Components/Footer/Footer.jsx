"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const footerMenu = [
  { label: "Why Jazan", link: "/why-jazan" },
  { label: "Our Services", link: "/our-services" },
  { label: "Opportunities", link: "/opportunities" },
  { label: "For Canadian Businesses", link: "/canadian-business" },
  { label: "Preception vs Reality", link: "/perception-vs-reality" },
  { label: "Contact Us", link: "/contact" },
];

const socialLinks = [
  { label: "Twitter", link: "https://www.twitter.com", icon: <FaTwitter /> },
  { label: "YouTube", link: "https://www.youtube.com", icon: <FaYoutube /> },
  { label: "LinkedIn", link: "https://www.linkedin.com", icon: <FaLinkedinIn /> }
];

const address = {
  heading: "SAUCAN Investment",
  street: "700 2 St SW,",
  state: "Edmonton, Calgary,",
  country: "Canada, T2P 2W2",
};

const contactInfo = { label: "Email us", value: "info@saucan.ca", link: "mailto:info@saucan.ca" };

const footerHeroText = {
  heading: "You want to make things happen.",
  paragraph: "SAUCAN makes it easy."
};

const logo = {
  link: "/",
  altText: "SAUCAN INVESTMENT",
  logoLink: "/logo-var11-dark.png"
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Footer({
  footerMenus = footerMenu,
  socialLink = socialLinks,
  addresses = address,
  contactInfoa = contactInfo,
  footerHeroTexta = footerHeroText,
  logoa = logo
}) {
  return (
    <motion.footer
      role="contentinfo"
      className="footerContainer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footerItemContainer">
        <motion.section
          className="footerItem1 footerHeroText"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <h2>{footerHeroTexta.heading}</h2>
          <p>{footerHeroTexta.paragraph}</p>
        </motion.section>

        <motion.section
          className="footerItem2 FooterDescriptionArea"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          <h6>{addresses.heading}</h6>
          <address>
            <p>
              <span>
                {addresses.street}
                <br />
                {addresses.state}
                <br />
                {addresses.country}
              </span>
            </p>
          </address>

          <div className="FooterContactButton">
            <div className="contactInfo">
              <a href={contactInfoa.link} aria-label={`Email Us at ${contactInfoa.label}`}>
                Email Us
                <span className="arrow-circle">
                  <img src="/arrow.svg" alt="Arrow Icon" />
                </span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer Menu */}
        <motion.nav
          className="footerItem3 FooterMenuArea"
          aria-label="Footer navigation"
          variants={fadeUp}
          transition={{ delay: 0.8 }}
        >
          <div className="footerMenu">
            <ul>
              {footerMenus.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={item.link}>{item.label}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <ul className="socialLinks" aria-label="Follow us on social media">
            {socialLink.map((social, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Logo */}
        <motion.div
          className="footerItem4 footerLogoArea"
          variants={fadeUp}
          transition={{ delay: 1.0 }}
        >
          <div className="logo-wrapper">
            <a href={logoa.link} aria-label="Go to homepage">
              <motion.img
                src={logoa.logoLink}
                alt={logoa.altText}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </a>
            <p>2025 © All Rights Reserved</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
