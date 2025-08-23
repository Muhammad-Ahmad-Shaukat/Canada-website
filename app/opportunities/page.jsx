'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Anchor, Globe, Utensils, Building2, Lightbulb } from "lucide-react";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import Button from "../Components/Button/Button";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Opportunities() {
  return (
    <>
      {/* Hero Section */}
      <ImageHeroSection
        imageSrc="/contact-us-skyline.avif"
        imageAlt="Opportunities in Jazan"
        breadcrum="Opportunities"
        mainheading="From Concept to Contract in Jazan"
        subheading="Explore priority areas where Canadian expertise aligns with Jazan’s development vision."
      />

      {/* Opportunities Section */}
      <section id="opportunities" className="bg-white text-[#0a1e3b] py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              From Concept to Contract in Jazan
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-600">
              Below are priority areas where Canadian capabilities align with current and planned activity. Each sector includes typical entry paths and example needs.
            </p>
          </motion.div>

          {/* Sector Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Energy and Petrochemicals */}
            <motion.div variants={fadeIn} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                  <Factory className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Energy and Petrochemicals</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Opportunity:</strong> downstream processing, utilities, safety and environmental systems, specialty services
              </p>
              <p className="text-gray-600">
                <strong>Entry paths:</strong> EPC and EPCM supply chains, O&M contracts, technology licensing, JV with local partners
              </p>
            </motion.div>

            {/* Logistics and Transport */}
            <motion.div variants={fadeIn} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                  <Anchor className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Logistics and Transport</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Opportunity:</strong> port and terminal systems, cold chain, bonded warehousing, automation and optimization, customs tech
              </p>
              <p className="text-gray-600">
                <strong>Entry paths:</strong> design build contracts, concessions and operations, technology integration
              </p>
            </motion.div>

            {/* Tourism and Hospitality */}
            <motion.div variants={fadeIn} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Tourism and Hospitality</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Opportunity:</strong> coastal resorts, eco and adventure tourism, cultural assets, workforce development
              </p>
              <p className="text-gray-600">
                <strong>Entry paths:</strong> JV with Saudi developers, design and PM, operator agreements, training and certification programs
              </p>
            </motion.div>

            {/* Agriculture and Food Processing */}
            <motion.div variants={fadeIn} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                  <Utensils className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Agriculture and Food Processing</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Opportunity:</strong> controlled environment agriculture, irrigation and water tech, seafood processing, packaging and logistics
              </p>
              <p className="text-gray-600">
                <strong>Entry paths:</strong> JV with producers, facility design and equipment supply, export oriented processing
              </p>
            </motion.div>

            {/* Advanced Manufacturing */}
            <motion.div variants={fadeIn} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                  <Building2 className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Advanced Manufacturing & Industrial Services</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Opportunity:</strong> precision fabrication, components, industrial maintenance, digital manufacturing
              </p>
              <p className="text-gray-600">
                <strong>Entry paths:</strong> greenfield facilities in industrial zones, JV with local firms, supplier certification to anchor plants
              </p>
            </motion.div>

            {/* Renewables and Clean Tech */}
            <motion.div variants={fadeIn} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                  <Lightbulb className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Renewables and Clean Technology</h3>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Opportunity:</strong> solar and wind projects, grid integration, energy storage, waste to energy, environmental monitoring
              </p>
              <p className="text-gray-600">
                <strong>Entry paths:</strong> project development partnerships, technology provision, EPC roles
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Request a Sector Brief Tailored to Your Company</h3>
            <Button
              text="Request Brief"
              link="/contact"
              backgroundColor="#0a1e3b"
              hoverColor="#004D2E"
              textColor="#fff"
              hoverTextColor="#D4AF37"
              borderColor="#0a1e3b"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              icon={<ArrowRight className="ml-2 w-5 h-5" />}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}