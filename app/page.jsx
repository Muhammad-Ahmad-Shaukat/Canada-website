"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Components/HomepageCard/Card';
import FlightMap from './Components/Map/FlightMap';
import Head from 'next/head';

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  // Function to handle the smooth scroll down
  const handleScrollDown = () => {
    const nextSection = document.getElementById('main-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactUsLink = "/contact";

  const industries = [
    {
      title: "Technology",
      image: "/technology.webp",
      alt: "Technology sector opportunities in Jazan, Saudi Arabia"
    },
    {
      title: "Agriculture",
      image: "/agriculture.webp",
      alt: "Agricultural investment opportunities in Jazan region"
    },
    {
      title: "Aviation & Logistics",
      image: "/aviation.webp",
      alt: "Aviation and logistics infrastructure in Jazan"
    },
    {
      title: "Energy & Clean Tech",
      image: "/energy.webp",
      alt: "Renewable energy and clean technology projects in Jazan"
    },
    {
      title: "Petrochemicals",
      image: "/petrochemicals.webp",
      alt: "Petrochemical industry development in Jazan Economic City"
    },
    {
      title: "Financial Services",
      image: "/finance.webp",
      alt: "Financial services and fintech opportunities in Saudi Arabia"
    },
  ];

  // Video loading effect
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlayThrough = () => {
        video.play().then(() => {
          video.currentTime = 6;
          setIsVideoLoaded(true);
        }).catch(() => {
          // Silent fail for autoplay restrictions
          setIsVideoLoaded(true); // Still show video element even if autoplay fails
        });
      };

      const handleEnded = () => {
        video.currentTime = 6;
        video.play().catch(() => {
          // Silent fail for autoplay restrictions
        });
      };

      const handleError = () => {
        console.log('Video failed to load, keeping fallback image');
      };

      video.addEventListener('canplaythrough', handleCanPlayThrough, { once: true });
      video.addEventListener('ended', handleEnded);
      video.addEventListener('error', handleError);

      // Preload the video
      video.load();

      return () => {
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Back to top button visibility
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

  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <>
      <Head>
        <title>SAUCAN | Connecting Canadian Businesses to Jazan, Saudi Arabia</title>
        <meta 
          name="description" 
          content="SAUCAN bridges Canadian businesses with Jazan, Saudi Arabia's fastest growing investment hub. Explore opportunities in energy, logistics, agriculture and more under Vision 2030." 
        />
        <meta 
          name="keywords" 
          content="Canada Saudi business, Jazan investment, Saudi Vision 2030, international business expansion, Jazan Economic City, Canada Saudi trade" 
        />
        <meta property="og:title" content="SAUCAN | Canada-Jazan Business Bridge" />
        <meta 
          property="og:description" 
          content="Connecting Canadian businesses with Jazan, Saudi Arabia's fastest growing investment hub under Vision 2030." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SAUCAN | Canada-Jazan Business Bridge" />
        <meta name="twitter:description" content="Connecting Canadian businesses with Jazan, Saudi Arabia's fastest growing investment hub." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <link rel="canonical" href="https://saucan.ca/" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0f3b52" />
        <link rel="preload" href="/homepagefallbackimage.avif" as="image" />
        <link rel="preload" href="/homepagevideo.webm" as="video" type="video/webm" />
        <link rel="dns-prefetch" href="//yourdomain.com" />
        <link rel="preconnect" href="//yourdomain.com" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SAUCAN",
              "description": "Connecting Canadian businesses with Jazan, Saudi Arabia's fastest growing investment hub",
              "url": "https://saucan.ca",
              "logo": "https://saucan.ca/logo.png",
              "areaServed": ["Canada", "Saudi Arabia"],
              "serviceType": "International Business Consulting"
            })
          }}
        />
      </Head>

      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:z-[100]"
      >
        Skip to main content
      </a>

      <div
        ref={heroRef}
        className="hero-section w-full h-screen relative flex items-center justify-center bg-cover bg-center"
        role="banner"
        style={{ backgroundColor: '#0f3b52' }}
      >
        {/* Fallback image - always visible, fades out when video loads */}
        <div 
          className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: 'url(/homepagefallbackimage.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden="true"
        />
        
        {/* Video background - fades in when loaded */}
        <div
          className={`absolute inset-0 z-5 overflow-hidden transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            aria-hidden="true"
          >
            <source src="/homepagevideo.webm" type="video/webm" />
            <track kind="descriptions" srcLang="en" label="Video shows business connections between Canada and Saudi Arabia" />
          </video>
        </div>

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-20" aria-hidden="true"></div>

        {/* Content container */}
        <motion.div
          className="text-container relative flex flex-col text-left w-full z-30 p-6 md:p-12 lg:p-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="big-bold-text text-green-500 text-5xl sm:text-6xl md:text-7xl font-extrabold m-0 p-0 leading-none relative top-7">
            Invest. Grow.
          </h1>
          <p className="jazan-text text-white text-8xl sm:text-9xl md:text-[15rem] font-extralight m-0 mb-4 md:mb-8 p-0 leading-none">
            Jazan.
          </p>
          <p className="description-text text-white text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl m-0 p-0 leading-none">
            Are You a Canadian Business or Investor Seeking Growth and Expansion?
          </p>
        </motion.div>

        {/* Scroll down button */}
        <motion.button
          onClick={handleScrollDown}
          onKeyDown={(e) => handleKeyDown(e, handleScrollDown)}
          className="scrollBtn absolute bottom-8 left-1/2 cursor-pointer transform -translate-x-1/2 text-white flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent z-30 hover:text-green-400 transition-colors"
          aria-label="Scroll down to main content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
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
          <span className='text-sm font-medium'>SCROLL</span>
        </motion.button>

        {/* Contact button */}
        <motion.a
          className="messageBtn_ z-30 p-3 text-white hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
          href={contactUsLink}
          aria-label="Contact us for business opportunities in Jazan"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
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
          <span className="sr-only">Send us a message</span>
        </motion.a>
      </div>

      <main id="main-content" role="main">
        <section className="w-full text-center my-6 px-6" aria-labelledby="intro-section">
          <div className="border-t-4 border-[#0f3b52]" aria-hidden="true"></div>
          <p 
            id="intro-section"
            className="bounded-jazan-txt text-[#0f3b52] font-bold text-xl md:text-2xl py-3 text-left leading-[1.2]"
          >
            Jazan offers more than opportunity. It offers certainty. With strategic oversight, projects across energy, petrochemicals, logistics, tourism, agriculture, manufacturing, and renewables are advancing on clear timelines. Global players from Europe, Asia, and the United States are already active. The question for Canada is not if Jazan should be on the map, but how quickly to enter.
          </p>
          <div className="border-t-4 border-[#0f3b52]" aria-hidden="true"></div>
        </section>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto p-6" aria-labelledby="industries-heading">
          <h2 id="industries-heading" className="sr-only">Investment Industries in Jazan</h2>
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              image={industry.image} 
              title={industry.title}
              alt={industry.alt}
            />
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

          <FlightMap />
        </section>

        <section className="w-full bg-gray-50 py-12 px-6" aria-labelledby="opportunities-heading">
          <div className="max-w-6xl mx-auto text-center">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10" role="list" aria-label="Key benefits of investing in Jazan">
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
                  className="bg-white shadow-md rounded-xl p-4 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f3b52] focus:ring-offset-2"
                  tabIndex={0}
                  role="listitem"
                  aria-label={`Key benefit: ${text}`}
                >
                  <p className="text-[#0f3b52] font-semibold">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Call to action buttons">
              <motion.a
                href="/opportunities"
                className="px-6 py-3 bg-[#0f3b52] text-white rounded-lg font-semibold hover:bg-[#124660] transition cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-[#0f3b52] focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Discover investment opportunities in Jazan"
              >
                Discover the opportunities
              </motion.a>
              <motion.a
                href="/contact"
                className="px-6 py-3 border border-[#0f3b52] text-[#0f3b52] rounded-lg font-semibold hover:bg-[#0f3b52] hover:text-white transition cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-[#0f3b52] focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Request a consultation about Jazan business opportunities"
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
            onKeyDown={(e) => handleKeyDown(e, handleBackToTop)}
            className="fixed bottom-6 right-6 bg-[#196a35] text-white p-3 rounded-full shadow-lg cursor-pointer z-50 hover:scale-[1.2] transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#196a35]"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.3 }}
            aria-label="Return to top of page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="sr-only">Back to top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}