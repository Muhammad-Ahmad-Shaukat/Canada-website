import React from "react";
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

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
  logoLink: "/logo.svg"
};

export default function Footer({
  footerDescriptions = footerDescription,
  footerMenus = footerMenu,
  socialLink = socialLinks,
  addresses = address,
  contactInfoa = contactInfo,
  footerHeroTexta = footerHeroText,
  logoa = logo
}) {
  return (
    <footer role="contentinfo" className="footerContainer">
      <div className="footerItemContainer">
        <section className="footerItem1 footerHeroText">
          <h2>{footerHeroTexta.heading}</h2>
          <p>{footerHeroTexta.paragraph}</p>
        </section>

        <section className="footerItem2 FooterDescriptionArea">
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
          <p className="FooterContactButton">
            <a href={contactInfoa.link} aria-label={`Email Us at ${contactInfoa.label}`}>
              Email Us
              <span className="arrow-circle">
                <img src="/arrow.svg" alt="Arrow Icon" />
              </span>
            </a>
          </p>
          <div className="FooterDescription">
            {footerDescriptions.map((desc, idx) => (
              <p key={idx}>{desc.description}</p>
            ))}
          </div>
        </section>

        <nav className="footerItem3 FooterMenuArea" aria-label="Footer navigation">
          <div className="footerMenu">
            <ul>
              {footerMenus.map((item, idx) => (
                <li key={idx}>
                  <a href={item.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="socialLinks" aria-label="Follow us on social media">
            {socialLink.map((social, idx) => (
              <li key={idx}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footerItem4 footerLogoArea">
          <div className="logo-wrapper">
            <a href={logoa.link} aria-label="Go to homepage">
              <img src={logoa.logoLink} alt={logoa.altText} />
            </a>
            <p>2025 © All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}