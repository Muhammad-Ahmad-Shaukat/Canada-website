import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./Button.css";

export default function Button({
  text = "Click Me",
  link = "#",
  onClick,
  backgroundColor = "#000",
  hoverColor = "#333",
  textColor = "#fff",
  hoverTextColor = "#fff",
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

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  const spanMotionProps = {
    initial: { y: 0 },
    whileHover: { y: -2 },
    transition: { duration: 0.2 },
  };

  const imgMotionProps = {
    initial: { x: 0 },
    whileHover: { x: 6 },
    transition: { duration: 0.3 },
  };

  return isLink ? (
    <motion.a
      href={link}
      target={target}
      rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
      role="button"
      {...commonProps}
      {...motionProps}
    >
      <motion.span className="button-text" {...spanMotionProps}>
        {text}
      </motion.span>
      <motion.img
        src="/buttonarrow.svg"
        alt=""
        className="button-arrow"
        {...imgMotionProps}
      />
    </motion.a>
  ) : (
    <motion.button
      type={type}
      {...commonProps}
      {...motionProps}
    >
      <motion.span className="button-text" {...spanMotionProps}>
        {text}
      </motion.span>
      <motion.img
        src="/buttonarrow.svg"
        alt=""
        className="button-arrow"
        {...imgMotionProps}
      />
    </motion.button>
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
