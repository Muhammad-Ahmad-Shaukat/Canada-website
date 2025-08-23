"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Components/HomepageCard/Card';
import FlightMap from './Components/Map/FlightMap'; // Import the new component

export default function Home() {
  // State to manage the video loading status
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const playerRef = useRef(null);
  const heroRef = useRef(null);

  // Function to handle the smooth scroll down
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactUsLink = "/contact";

  const industries = [
    {
      title: "Technology",
      image: "/technology.webp",
    },
    {
      title: "Agriculture",
      image: "/agriculture.webp",
    },
    {
      title: "Aviation & Logistics",
      image: "/aviation.webp",
    },
    {
      title: "Energy & Clean Tech",
      image: "/energy.webp",
    },
    {
      title: "Petrochemicals",
      image: "/petrochemicals.webp",
    },
    {
      title: "Financial Services",
      image: "/finance.webp",
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={heroRef}
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

        {/* dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

        {/* text container */}
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

        {/* scroll button */}
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

        {/* contact button */}
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

      <div className="w-full text-center my-6 px-6">
        <div className="border-t-5 border-[#0f3b52]"></div>
          <p className="bounded-jazan-txt text-[#0f3b52] font-bold text-2xl py-3 text-left leading-[1.2]">
            Jazan, Saudia Arabia is a great place to expand or relocate your business in MENA region.
          </p>
        <div className="border-t-5 border-[#0f3b52]"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto p-6">
        {industries.map((industry, index) => (
          <Card key={index} image={industry.image} title={industry.title} />
        ))}
      </div>

      <section className="w-full mt-12 p-6 md:p-8 lg:p-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#0f3b52]">
            Connecting Canada to Jazan
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            A direct link between Canada and Jazan, Saudi Arabia’s fastest growing region.
          </p>
        </div>

        {/* Map */}
        <FlightMap /> {/* Add the new component here */}
      </section>

      <section className="w-full bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Subheadline */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-[#0f3b52] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Jazan: Canada’s Next Growth Opportunity
          </motion.h2>

          <motion.p
            className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Canadian firms have long focused on the U.S., Europe, and Asia — but the most dynamic
            growth is now happening in Jazan. Backed by government projects, this region is
            advancing with speed and certainty under Saudi Vision 2030.
          </motion.p>

          {/* Intro */}
          <motion.p
            className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Jazan delivers certainty across industries from energy and logistics to tourism,
            agriculture, and renewables. Global players from Europe, Asia, and the U.S. are already
            investing — the question for Canada is not <em>if</em> Jazan should be on the map,
            but <em>how quickly</em>.
          </motion.p>

          {/* Quick Proof Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-10">
            {[
              "Scale and speed under Vision 2030",
              "Red Sea logistics hub to Africa, Europe & Asia",
              "Competitive incentives for foreign investors",
              "International firms already winning contracts",
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md rounded-xl p-4 cursor-pointer transition-shadow hover:shadow-lg"
              >
                <p className="text-[#0f3b52] font-semibold">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/opportunities"
              className="px-6 py-3 bg-[#0f3b52] text-white rounded-lg font-semibold hover:bg-[#124660] transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover the opportunities
            </motion.a>
            <motion.a
              href="/contact"
              className="px-6 py-3 border border-[#0f3b52] text-[#0f3b52] rounded-lg font-semibold hover:bg-[#0f3b52] hover:text-white transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a consultation
            </motion.a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={handleBackToTop}
            className="fixed bottom-[10] right-[10] bg-[#196a35] text-white p-3 rounded-full shadow-lg cursor-pointer z-50 hover:scale-[1.2] transition-transform"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.3 }}
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

    </>
  );
}