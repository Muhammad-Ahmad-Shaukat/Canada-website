import React from "react";
import PropTypes from "prop-types";
import "./Button.module.css";

export default function Button({
  text = "Click Me",
  link = "#",
  onClick,
  backgroundColor = "#004D2E",
  hoverColor = "#2E2E2E",
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

  const commonProps = {
    className: "button",
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
      <img src="/arrow.svg" alt="" className="button-arrow" />
    </a>
  ) : (
    <button type={type} {...commonProps}>
      <span className="button-text">{text}</span>
      <img src="/arrow.svg" alt="" className="button-arrow" />
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  ariaLabel: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
