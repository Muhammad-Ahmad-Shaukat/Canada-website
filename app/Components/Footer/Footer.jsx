import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import './Footer.css'

const footerDiscription = [
    {discription: "Invest Alberta acknowledges that we operate on the traditional territories of the First Nations, Métis, and Inuit peoples of Treaty 6, Treaty 7, and Treaty 8. We recognize the importance of Indigenous history, culture, and values in Alberta and Canada, and extend our utmost respect towards them in our work and conduct."}
]

const footerMenu = [
  { label: "Subscribe", link: "/subscribe" },
  { label: "Terms of Use", link: "/terms-of-use" },
  { label: "Disclaimer", link: "/disclaimer" },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Disclosures", link: "/disclosures" },
  { label: "FOIP", link: "/foip" },
];

const socialLinks = [
    { label: "Facebook", link: "https://www.facebook.com"},
    { label: "Instagram", link: "https://www.instagram.com"},
    { label: "Twitter", link: "https://www.twitter.com"},
    { label: "Youtube", link: "https://www.youtube.com"},
    { label: "LinkedIn", link: "https://www.linkedin.com"},
]

const address = [
    { label: "haeading", address: "Suite 701, 10250 – 101 Street Edmonton, Alberta Canada T5J 3P4" },
]

const contactInfo = [
    { lable: "email", value: "contact@xyz.com"}
]

const fotterHeroText = [
    { label: "heading", text: "You want to make things happen."},
    { label: "paragraph", text: "Alberta makes it easy."}
]

const logo = [
    { label: "logo", link: "/"},
    { label: "altText", text: "Alberta"},
    { label: "logoLink", link: "/"}
]

export default function Footer(
    {footerDiscriptions = footerDiscription,
     footerMenus = footerMenu, 
     socialLink = socialLinks, 
     addresses = address, 
     contactInfoa = contactInfo, 
     fotterHeroTexta = fotterHeroText, 
     logoa = logo
    }) {
        return(
            <footer>
                <div className="footerContainer">
                    <div className="footerItemContainer">
                        <div className="footerItem1">
                            <div className="footerHeroText">
                                <h2></h2>
                                <h3></h3>
                            </div>
                        </div>
                        <div className="footerItem2">
                            <div className="FooterDiscriptionArea">
                                <h6></h6>
                                <p></p>
                                <Button/>
                                <p></p>
                            </div>
                        </div>
                        <div className="footerItem3">
                            <div className="FooterMenuArea">
                                <nav>
                                    <ul></ul>
                                </nav>
                                <div>
                                    <a href=""></a>
                                </div>
                            </div>
                        </div>
                        <div className="footerItem4">
                            <div className="footerLogoArea">
                                <img src="" alt="" />
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
}