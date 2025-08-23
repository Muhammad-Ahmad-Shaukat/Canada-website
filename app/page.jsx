"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const contactUsLink = "/contact";

  return (
    <div
      className="hero-section w-full h-screen relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/city.jpg')",
      }}
    >
      <motion.div
        className="text-container relative flex flex-col text-left w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="big-bold-text text-green-600 text-7xl font-extrabold m-0 p-0 leading-none relative top-7">Big. Bold.</p>
        <p className="jazan-text text-white text-[15rem] font-extralight m-0 mb-8 p-0 leading-none">Jazan.</p>
        <p className="description-text text-white text-4xl font-bold max-w-3xl m-0 p-0 leading-none">Canada’s next big business and investment opportunity is in Jazan, Saudi Arabia’s fastest growing investment hub</p>
      </motion.div>

      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-2 left-1/2 cursor-pointer transform -translate-x-1/2 text-white flex flex-col items-center focus:outline-none"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-16 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        <span className='text-sm'>SCROLL</span>
      </motion.button>

      <motion.a
        className="messageBtn_"
        href={contactUsLink}
        aria-label="Contact us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="message-icon_"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </motion.a>
    </div>
  );
}