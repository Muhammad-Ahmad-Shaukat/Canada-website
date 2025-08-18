"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Header.css";

const megaLinks = [
  { label: "Why Alberta", link: "#" },
  { label: "Key Industries", link: "#" },
  { label: "Business Resources", link: "#" },
  { label: "About Invest Alberta", link: "#" },
  { label: "News", link: "#" },
];

export default function Header({ logo }) {
  const logo_ = logo || {
    link: "/",
    altText: "Invest Alberta Home",
    path: "/logo_var-11.png",
  };

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

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

  return (
    <>
      {/* Header */}
      <div
        className={`mainDiv ${showHeader ? "header-show" : "header-hide"} ${
          isAtTop ? "header-top" : "header-scrolled"
        }`}
      >
        <div className="logoDiv">
          <a href={logo_.link}>
            <img
              className="logoImg"
              width={130}
              src={logo_.path}
              alt={logo_.altText}
            />
          </a>
        </div>

        <div className="elementsDiv">
          <div className="flex items-stretch">
            <div className="nav-lists">
              <ul className="secondaryList">
                <li className="secondaryItem">
                  <button className="search-btn">
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
                    <span>Search</span>
                  </button>
                </li>
              </ul>

              <ul className="linkList">
                {megaLinks.map((megaLink, i) => (
                  <li className="linkItem" key={i}>
                    <a className="link" href={megaLink.link}>
                      {megaLink.label.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col content-center">
              <Button className="max-h-9 absolute top-1.5">Contact Us</Button>
            </div>
          </div>
        </div>

        {/* Menu / Cross button */}
        <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
          MENU
        </button>
      </div>

      {/* Fullscreen overlay */}
      <div className={`relative overlay ${menuOpen ? "overlay-open" : ""}`}>
        <div className="overlay-content">
          <div className="flex justify-between">
            <div className="logoDiv">
              <a href={logo_.link}>
                <img
                  className="logoImg"
                  width={130}
                  src={logo_.path}
                  alt={logo_.altText}
                />
              </a>
            </div>
            <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
              ✕
            </button>
          </div>
                
          <ul className="overlay-links">
            <li>
              <a href="#search" className="search-link">
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

        {/* Floating message button */}
        <button className="messageBtn">
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
        </button>

      </div>

    </>
  );
}