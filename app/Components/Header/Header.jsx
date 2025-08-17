"use client";

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

    return (
        <div className="mainDiv">
            <div className="logoDiv">
                <a href={logo_.link}>
                    <img width={55} src={logo_.path} alt={logo_.altText} />
                </a>
            </div>
            <div className="elementsDiv">
                <ul className="linkList">
                    {megaLinks.map((megaLink, _)=>{
                        return(
                            <li className="linkItem" key={_}>
                                <a className="link" href={megaLink.link}>{megaLink.label.toUpperCase()}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}