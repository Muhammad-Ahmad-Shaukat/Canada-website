"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Zap, Leaf, Mountain, Globe } from "lucide-react";
import Button from "../Components/Button/Button";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";

// Icon mapping for each sector
const sectorIcons = {
  "Infrastructure and urban development": Building2,
  "Energy transition": Zap,
  "Agritech and food security": Leaf,
  "Mining and minerals": Mountain,
  "Tourism economy": Globe,
};

const SectorCard = ({ sector, capability, examples, index }) => {
  const IconComponent = sectorIcons[sector];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a1e3b] to-[#D4AF37]"></div>

      <div className="p-7">
        <div className="flex items-start justify-between mb-5">
          <div className="p-3 rounded-xl bg-[#0a1e3b]/10 text-[#0a1e3b]">
            {IconComponent && <IconComponent className="w-6 h-6" />}
          </div>
          <span className="text-xs font-semibold text-[#0a1e3b] bg-[#0a1e3b]/10 px-3 py-1 rounded-full">
            {index + 1}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#0a1e3b] mb-4 group-hover:text-[#004D2E] transition-colors duration-300">
          {sector}
        </h3>

        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
            Canadian Capability
          </p>
          <p className="text-gray-800 leading-relaxed">{capability}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
            Example Plays
          </p>
          <p className="text-gray-800 leading-relaxed">{examples}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-[#0a1e3b] font-medium">
            <span className="animate-pulse w-2 h-2 bg-[#004D2E] rounded-full mr-2"></span>
            Opportunities available
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Sectors() {
  const sectorsData = [
    {
      sector: "Infrastructure and urban development",
      capability: "Project management, engineering, smart systems",
      examples: "Port upgrades, industrial utilities, smart sites",
    },
    {
      sector: "Energy transition",
      capability: "Clean tech, storage, hydrogen, grid integration",
      examples: "Solar and wind balance of plant, storage, EMS",
    },
    {
      sector: "Agritech and food security",
      capability: "Controlled environment agriculture, irrigation, cold chain",
      examples: "Greenhouses, processing lines, cold logistics",
    },
    {
      sector: "Mining and minerals",
      capability: "Exploration, safety, process optimization",
      examples: "Mineral handling, processing and HSE systems",
    },
    {
      sector: "Tourism economy",
      capability: "Destination planning, hospitality operations, training",
      examples: "Resort design, operator agreements, workforce academies",
    },
  ];

  return (
    <div className="sectors-page">

      <div className="sectors-hero-section">
        <ImageHeroSection
          imageSrc="/contact-us-skyline.avif"
          imageAlt="Canadian industries landscape"
          breadcrum="Sectors"
          mainheading="Industries Primed for Canadian Capability"
         
        />
      </div>

      <section id="sectors" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#0a1e3b]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >


            <h1 className="text-4xl md:text-5xl font-bold text-[#0a1e3b] mb-6 leading-tight">
              Industries Primed for <span className="text-[#004D2E]">Canadian Capability</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Discover sectors where Canadian expertise meets global opportunities for growth, innovation, and mutual prosperity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sectorsData.map((sector, index) => (
              <SectorCard
                key={index}
                sector={sector.sector}
                capability={sector.capability}
                examples={sector.examples}
                index={index}
              />
            ))}

            {/* Additional info card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#0a1e3b] to-[#004D2E] rounded-2xl p-8 text-white flex flex-col justify-center"

              style={{ background: "linear-gradient(135deg, #0a1e3b 0%, #003366 100%)" }}
            >
              <h3 className="text-2xl font-bold mb-4">Why Canadian Expertise?</h3>
              <p className="mb-6 opacity-90">
                Canadian companies bring world-class innovation, sustainable practices, and proven experience to global challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                  <span>Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                  <span>Sustainable and ethical practices</span>
                </li>
                
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                  <span>Proven track record globally</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#0a1e3b] mb-4">Ready to Explore Opportunities?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access current asks, tenders, and partnership opportunities in these sectors.
              </p>
            </div>

            <Button
              text="See current asks and tenders"
              link="/resources"
              backgroundColor="#0a1e3b"
              hoverColor="#004D2E"
              textColor="#fff"
              hoverTextColor="#D4AF37"
              borderColor="#0a1e3b"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              icon={<ArrowRight className="ml-2 w-5 h-5" />}
            />

            <p className="text-sm text-gray-500 mt-6">
              Or <a href="/contact" className="text-[#004D2E] font-medium hover:underline">contact us</a> for more information
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}