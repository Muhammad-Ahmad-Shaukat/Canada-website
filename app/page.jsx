"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Components/HomepageCard/Card';
import FlightMap from './Components/Map/FlightMap';
import Head from 'next/head';

export default function Home() {
  // State to manage the video loading status
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const playerRef = useRef(null);
  const heroRef = useRef(null);
  const videoObserverRef = useRef(null);

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

  // Load YouTube API script only when video is in view
  useEffect(() => {
    if (!videoVisible) return;

    if (window.YT) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = createPlayer;
      document.body.appendChild(tag);
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.log("Error destroying player:", e);
        }
      }
    };
  }, [videoVisible]);

  // Set up intersection observer for video lazy loading
  useEffect(() => {
    const videoElement = document.getElementById('bg-video-placeholder');
    
    if (videoElement) {
      videoObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVideoVisible(true);
            videoObserverRef.current.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '200px' }
      );
      
      videoObserverRef.current.observe(videoElement);
    }

    return () => {
      if (videoObserverRef.current) {
        videoObserverRef.current.disconnect();
      }
    };
  }, []);

  const createPlayer = () => {
    if (!document.getElementById('bg-video')) return;
    
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
        start: 6,
      },
      events: {
        onReady: (event) => {
          setIsLoaded(true);
          event.target.seekTo(6);
          event.target.playVideo();
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.seekTo(6);
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
      <Head>
        <title>SAUCAN | Connecting Canadian Businesses to Jazan, Saudi Arabia</title>
        <meta 
          name="description" 
          content="SAUCAN bridges Canadian businesses with Jazan, Saudi Arabia's fastest growing investment hub. Explore opportunities in energy, logistics, agriculture and more." 
        />
        <meta 
          name="keywords" 
          content="Canada Saudi business, Jazan investment, Saudi Vision 2030, international business expansion" 
        />
        <meta property="og:title" content="SAUCAN | Canada-Jazan Business Bridge" />
        <meta 
          property="og:description" 
          content="Connecting Canadian businesses with Jazan, Saudi Arabia's fastest growing investment hub." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Head>

      <div
        ref={heroRef}
        className="hero-section w-full h-screen relative flex items-center justify-center bg-cover bg-center"
      >
        {/* Video placeholder for initial load */}
        <div id="bg-video-placeholder" className="absolute inset-0 bg-blue-900 z-0"></div>
        
        {/* Video container - only rendered when in view */}
        {videoVisible && (
          <div
            className={`video-background-container absolute top-0 left-0 w-full h-full overflow-hidden z-0 ${
              isLoaded ? "bg-transparent" : "bg-blue-900"
            }`}
          >
            <div className="video-iframe-wrapper">
              <div
                id="bg-video"
                className="video-iframe"
                aria-label="Background video showing connections between Canada and Saudi Arabia"
              ></div>
            </div>
          </div>
        )}

        {/* dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

        {/* text container */}
        <motion.div
          className="text-container relative flex flex-col text-left w-full z-20 p-6 md:p-12 lg:p-24"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="big-bold-text text-green-500 text-5xl sm:text-6xl md:text-7xl font-extrabold m-0 p-0 leading-none relative top-7">Big. Bold.</h1>
          <p className="jazan-text text-white text-8xl sm:text-9xl md:text-[15rem] font-extralight m-0 mb-4 md:mb-8 p-0 leading-none">Jazan.</p>
          <p className="description-text text-white text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl m-0 p-0 leading-none">
            Canada's next big business and investment opportunity is in Jazan, Saudi Arabia's fastest growing investment hub
          </p>
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
            aria-hidden="true"
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
            aria-hidden="true"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </motion.a>
      </div>

      <main>
        <section className="w-full text-center my-6 px-6">
          <div className="border-t-5 border-[#0f3b52]"></div>
            <p className="bounded-jazan-txt text-[#0f3b52] font-bold text-xl md:text-2xl py-3 text-left leading-[1.2]">
              Jazan offers more than opportunity. It offers certainty. With strategic oversight, projects across energy, petrochemicals, logistics, tourism, agriculture, manufacturing, and renewables are advancing on clear timelines. Global players from Europe, Asia, and the United States are already active. The question for Canada is not if Jazan should be on the map, but how quickly to enter.
            </p>
          <div className="border-t-5 border-[#0f3b52]"></div>
        </section>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto p-6">
          {industries.map((industry, index) => (
            <Card key={index} image={industry.image} title={industry.title} />
          ))}
        </section>

        <section className="w-full mt-12 p-6 md:p-8 lg:p-12" aria-labelledby="map-heading">
          <div className="text-center mb-6">
            <h2 id="map-heading" className="text-2xl font-bold text-[#0f3b52]">
              Connecting Canada to Jazan
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              A direct link between Canada and Jazan, Saudi Arabia's fastest growing region.
            </p>
          </div>

          {/* Map */}
          <FlightMap />
        </section>

        <section className="w-full bg-gray-50 py-12 px-6" aria-labelledby="opportunities-heading">
          <div className="max-w-6xl mx-auto text-center">
            {/* Subheadline */}
            <motion.h2
              id="opportunities-heading"
              className="text-2xl sm:text-3xl font-bold text-[#0f3b52] mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Jazan: Canada's Next Growth Opportunity
            </motion.h2>

            <motion.p
              className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
            >
              Jazan delivers certainty across industries from energy and logistics to tourism,
              agriculture, and renewables. Global players from Europe, Asia, and the U.S. are already
              investing — the question for Canada is not <em>if</em> Jazan should be on the map,
              but <em>how quickly</em>.
            </motion.p>

            {/* Quick Proof Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
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
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-md rounded-xl p-4 cursor-pointer transition-shadow hover:shadow-lg"
                  tabIndex={0}
                >
                  <p className="text-[#0f3b52] font-semibold">{text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/opportunities"
                className="px-6 py-3 bg-[#0f3b52] text-white rounded-lg font-semibold hover:bg-[#124660] transition cursor-pointer text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Discover opportunities in Jazan"
              >
                Discover the opportunities
              </motion.a>
              <motion.a
                href="/contact"
                className="px-6 py-3 border border-[#0f3b52] text-[#0f3b52] rounded-lg font-semibold hover:bg-[#0f3b52] hover:text-white transition cursor-pointer text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Request a consultation about Jazan opportunities"
              >
                Request a consultation
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 bg-[#196a35] text-white p-3 rounded-full shadow-lg cursor-pointer z-50 hover:scale-[1.2] transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#196a35]"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.3 }}
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}