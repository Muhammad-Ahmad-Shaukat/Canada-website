"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Header.css";

const megaLinks = [
  { label: "Home", link: "/"},
  { label: "Why Jazan", link: "/why-jazan" },
  { label: "Our Services", link: "/our-services" },
  { label: "Resources", link: "/resources" },
  { label: "Sectors", link: "/sectors" },
  { label: "Success Stories", link: "/success-stories" },
  { label: "About Us", link: "/about-us" },
];

const searchLink = "#";

const contactUsLink = "/contact";

export default function Header({ logo }) {
  const logo_ = logo || {
    link: "/",
    altText: "Invest Alberta Home",
    path_white: "/logo_var-11.png",
    path_dark: "/logo-var11-dark.png",
  };

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setIsAtTop(currentScroll === 0);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerClassName = `mainDiv ${showHeader ? "header-show" : "header-hide"} ${
    isAtTop ? "header-top" : "header-scrolled"
  }`;
  
  const menuBtnClasses = `menuBtn border-2 ${
    hasScrolled && isAtTop
      ? "border-white text-white"
      : "border-[#0a1e3b] text-[#0a1e3b]"
  }`;

  return (
    <div className="headerContainer">
      <div className={headerClassName}>
        <div className="logoDiv">
          <a href={logo_.link}>
            <img
              className="logoImg"
              width={130}
              src={isAtTop ? logo_.path_dark : logo_.path_white}
              alt={logo_.altText}
            />
          </a>
        </div>

        <div className="elementsDiv">
          <div className="flex items-stretch">
            <div className="nav-lists">
              <ul className="secondaryList">
                <li className="secondaryItem">
                  <a className={`search-btn ${isAtTop ? 'search-white' : ''}`} href={searchLink}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="search-icon"
                    >
                      <circle cx="6.5" cy="6.5" r="5.5" />
                      <line x1="11" y1="11" x2="14" y2="14" />
                    </svg>
                    <span className="">Search</span>
                  </a>
                </li>
              </ul>

              <ul className="linkList">
                {megaLinks.map((megaLink, i) => (
                  <li className="linkItem" key={i}>
                    <a className={`link ${isAtTop ? "text-white" : "text-[#0a1e3b]"}`} href={megaLink.link}>
                      {megaLink.label.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col content-center">
              <a href={contactUsLink}>
                <Button className="max-h-9 absolute top-1.5" text="Contact Us" onClick={() => {}} />
              </a>
            </div>
          </div>
        </div>

        <button className={`menuBtn border-2 ${hasScrolled && isAtTop ? "border-white text-white" : "border-[#0a1e3b] text-[#0a1e3b]"}`} onClick={() => setMenuOpen(!menuOpen)}>
          MENU
        </button>
      </div>

      <div className={`relative overlay ${menuOpen ? "overlay-open" : ""}`}>
        <div className="overlay-content">
          <div className="flex justify-between">
            <div className="logoDiv">
              <a href={logo_.link}>
                <img
                  className="logoImg"
                  width={130}
                  src={logo_.path_white}
                  alt={logo_.altText}
                />
              </a>
            </div>
            <button className="menuBtn border-2 border-[#0a1e3b]" onClick={() => setMenuOpen(!menuOpen)}>
              ✕
            </button>
          </div>

          <ul className="overlay-links">
            <li>
              <a href={searchLink} className="search-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="search-icon"
                >
                  <circle cx="6.5" cy="6.5" r="5.5" />
                  <line x1="11" y1="11" x2="14" y2="14" />
                </svg>
                <span className="text-sm">SEARCH</span>
              </a>
            </li>

            {megaLinks.map((megaLink, i) => (
              <li key={i}>
                <a href={megaLink.link}>{megaLink.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <a className="messageBtn" href={contactUsLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="message-icon"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}