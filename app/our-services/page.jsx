"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Handshake, FileText, MapPin, Users } from "lucide-react";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import Button from "../Components/Button/Button";
import "./services.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -8, 0],
    opacity: [1, 0.98, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function OurServices() {
  const services = [
    {
      title: "Market intelligence and briefings",
      description: "Sector scans, regulatory notes, opportunity maps",
      icon: BarChart3
    },
    {
      title: "Partner development",
      description: "Curated introductions to Saudi companies and agencies",
      icon: Handshake
    },
    {
      title: "Transaction support",
      description: "JV design, local entity setup, incentives guidance",
      icon: FileText
    },
    {
      title: "Bid and delivery enablement",
      description: "Proposal support, compliance, onboarding",
      icon: Users
    },
    {
      title: "On the ground support",
      description: "Site visits, meetings, follow up, cultural navigation",
      icon: MapPin
    },
  ];

  return (
    <motion.div
      className="Page-Container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div variants={itemVariants} {...floatingAnimation}>
        <ImageHeroSection
          imageSrc="/contact-us-skyline.avif"
          imageAlt="Saudi Arabia business services"
          breadcrum="Our Services"
          mainheading="From market entry to long term growth"
          overlayOpacity={0.75}
        />
      </motion.div>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#0a1e3b]/5 rounded-full -translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#004D2E]/5 rounded-full translate-x-1/2 blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="services-intro text-center max-w-4xl mx-auto mb-16"
            variants={itemVariants}
          >


            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e3b] mb-6">
              Comprehensive support for your <span className="text-[#004D2E]">Saudi market journey</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide end-to-end assistance to help Canadian businesses navigate the Saudi market,
              from initial exploration to sustainable growth and expansion.
            </p>
          </motion.div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="service-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group h-full"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#0a1e3b]/5 rounded-bl-full"></div>
                  <div className="card-number absolute top-4 right-4 text-6xl font-bold text-[#0a1e3b]/10">0{index + 1}</div>

                  <div className="flex justify-start mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#0a1e3b]/10 to-[#004D2E]/10 text-[#0a1e3b] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#0a1e3b] mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="services-cta text-center bg-gradient-to-r from-[#0a1e3b] to-[#003366] rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Decorative glow circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to explore Saudi opportunities?
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                Speak with our experts about your specific needs and how we can support your market entry strategy.
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  text="Request a tailored market briefing"
                  link="/contact"
                  backgroundColor="#fff"
                  hoverColor="#D4AF37"
                  textColor="#0a1e3b"
                  hoverTextColor="#0a1e3b"
                  borderColor="#fff"
                  icon={<ArrowRight className="ml-2 w-5 h-5" />}
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}