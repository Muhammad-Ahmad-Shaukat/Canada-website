import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default function Button({
  text = "Click Me",
  link = "#",
  onClick,
  className = "",
  backgroundColor = "#0a1e3b",
  hoverColor = "#004D2E",
  textColor = "#fff",
  hoverTextColor = "#D4AF37",
  borderColor,
  hoverBorderColor,
  ariaLabel,
  target,
  rel,
  type = "button",
}) {
  const styleVars = {
    "--bg-color": backgroundColor,
    "--hover-color": hoverColor,
    "--text-color": textColor,
    "--hover-text-color": hoverTextColor,
    "--border-color": borderColor || "none",
    "--hover-border-color": hoverBorderColor || borderColor || "none",
  };

  const isLink = Boolean(link && link !== "#");

  const ArrowIcon = (
    <svg
      className="button-arrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <polyline points="15 6 21 12 15 18" />
    </svg>
  );

  const commonProps = {
    className: `button ${className}`, // merge your CSS + tailwind
    style: styleVars,
    "aria-label": ariaLabel || text,
    onClick,
  };

  return isLink ? (
    <a
      href={link}
      target={target}
      rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
      role="button"
      {...commonProps}
    >
      <span className="button-text">{text}</span>
      {ArrowIcon}
    </a>
  ) : (
    <button type={type} {...commonProps}>
      <span className="button-text">{text}</span>
      {ArrowIcon}
    </button>
  );
}