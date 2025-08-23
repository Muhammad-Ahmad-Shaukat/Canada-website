"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  // State to manage the video loading status
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef(null);

  // Function to handle the smooth scroll down
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const contactUsLink = "/contact";

  // Load YouTube API script
  useEffect(() => {
    if (window.YT) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = createPlayer;
      document.body.appendChild(tag);
    }
  }, []);

  const createPlayer = () => {
    playerRef.current = new window.YT.Player("bg-video", {
      videoId: "8VAlL0o9nv8",
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        start: 6,   // always begin at 5s
      },
      events: {
        onReady: (event) => {
          setIsLoaded(true);
          event.target.seekTo(6);  // force jump to 6s at first load
          event.target.playVideo();
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.seekTo(6);  // restart at 6s instead of 0
            event.target.playVideo();
          }
        }
      }
    });
  };

  return (
    <>
      <div
        className="hero-section w-full h-screen relative flex items-center justify-center bg-cover bg-center"
      >
        <div
          className={`video-background-container absolute top-0 left-0 w-full h-full overflow-hidden z-0 ${
            isLoaded ? "bg-transparent" : "bg-blue-900"
          }`}
        >
          <div className="video-iframe-wrapper">
            <div
              id="bg-video"
              className="video-iframe"
            ></div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

        <motion.div
          className="text-container relative flex flex-col text-left w-full z-20 p-24"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="big-bold-text text-green-500 text-7xl font-extrabold m-0 p-0 leading-none relative top-7">Big. Bold.</p>
          <p className="jazan-text text-white text-[15rem] font-extralight m-0 mb-8 p-0 leading-none">Jazan.</p>
          <p className="description-text text-white text-4xl font-bold max-w-3xl m-0 p-0 leading-none">Canada’s next big business and investment opportunity is in Jazan, Saudi Arabia’s fastest growing investment hub</p>
        </motion.div>

        <motion.button
          onClick={handleScrollDown}
          className="scrollBtn left-1/2 cursor-pointer transform -translate-x-1/2 text-white flex flex-col items-center focus:outline-none z-20"
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
          className="messageBtn_ z-20"
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
    </>
  );
}