"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "./Footer1.css";

const footerDescription = [
  {
    description:
      "Invest Alberta acknowledges that we operate on the traditional territories of the First Nations, Métis, and Inuit peoples of Treaty 6, Treaty 7, and Treaty 8. We recognize the importance of Indigenous history, culture, and values in Alberta and Canada, and extend our utmost respect towards them in our work and conduct."
  }
];

const footerMenu = [
  { label: "Subscribe", link: "/subscribe" },
  { label: "Terms of Use", link: "/terms-of-use" },
  { label: "Disclaimer", link: "/disclaimer" },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Disclosures", link: "/disclosures" },
  { label: "FOIP", link: "/foip" }
];

const socialLinks = [
  { label: "Twitter", link: "https://www.twitter.com", icon: <FaTwitter /> },
  { label: "YouTube", link: "https://www.youtube.com", icon: <FaYoutube /> },
  { label: "LinkedIn", link: "https://www.linkedin.com", icon: <FaLinkedinIn /> }
];

const address = {
  heading: "Invest Alberta Corporation",
  street: "Suite 701, 10250 – 101 Street,",
  state: "Edmonton, Alberta,",
  country: "Canada, T5J 3P4"
};

const contactInfo = { label: "Email us", value: "contact@xyz.com", link: "mailto:contact@xyz.com" };

const footerHeroText = {
  heading: "You want to make things happen.",
  paragraph: "Alberta makes it easy."
};

const logo = {
  link: "/",
  altText: "Invest Alberta Home",
  logoLink: "/logo.png"
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Footer1({
  footerDescriptions = footerDescription,
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
      className="footerContainer1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footerItemContainer1">
        {/* Hero Text */}
        <motion.section
          className="footerItem11 footerHeroText1"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <h2>{footerHeroTexta.heading}</h2>
          <p>{footerHeroTexta.paragraph}</p>
        </motion.section>

        {/* Address & Description */}
        <motion.section
          className="footerItem21 FooterDescriptionArea1"
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

          <div className="FooterContactButton1">
            <div className="contactInfo1">
              <a href={contactInfoa.link} aria-label={`Email Us at ${contactInfoa.label}`}>
                Email Us
                <span className="arrow-circle1">
                  <img src="/arrow.svg" alt="Arrow Icon" />
                </span>
              </a>
            </div>
          </div>
          <div className="FooterDescription1">
            {footerDescriptions.map((desc, idx) => (
              <motion.p key={idx} variants={fadeUp} transition={{ delay: 0.6 + idx * 0.2 }}>
                {desc.description}
              </motion.p>
            ))}
          </div>
        </motion.section>

        {/* Footer Menu */}
        <motion.nav
          className="footerItem31 FooterMenuArea1"
          aria-label="Footer navigation"
          variants={fadeUp}
          transition={{ delay: 0.8 }}
        >
          <div className="footerMenu1">
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

          {/* Social Links */}
          <ul className="socialLinks1" aria-label="Follow us on social media">
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
          className="footerItem41 footerLogoArea1"
          variants={fadeUp}
          transition={{ delay: 1.0 }}
        >
          <div className="logo-wrapper1">
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
