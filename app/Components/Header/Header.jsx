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
    path: "/logo.png",
  };

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setIsAtTop(currentScroll === 0); // true only when at very top
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`mainDiv ${showHeader ? "header-show" : "header-hide"} ${
        isAtTop ? "header-top" : "header-scrolled"
      }`}
    >
      <div className="logoDiv">
        <a href={logo_.link}>
          <img width={55} src={logo_.path} alt={logo_.altText} />
        </a>
      </div>
      <div className="elementsDiv">
        <div className="flex">
          <ul className="linkList">
            {megaLinks.map((megaLink, _) => {
              return (
                <li className="linkItem" key={_}>
                  <a className="link" href={megaLink.link}>
                    {megaLink.label.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
}